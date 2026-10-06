import { test } from "node:test";
import assert from "node:assert/strict";
import { loadAll } from "./04-load-all.ts";

const fakeLoad = (id: string) =>
  new Promise<string>((resolve, reject) =>
    setTimeout(() => (id.startsWith("bad") ? reject(new Error(`Cannot load ${id}`)) : resolve(`user-${id}`)), 30),
  );

test("all succeed", async () => {
  assert.deepEqual(await loadAll(["1", "2"], fakeLoad), {
    succeeded: ["user-1", "user-2"],
    failed: [],
  });
});

test("partial failure keeps the successes", async () => {
  assert.deepEqual(await loadAll(["1", "bad-2", "3", "bad-4"], fakeLoad), {
    succeeded: ["user-1", "user-3"],
    failed: [
      { id: "bad-2", error: "Cannot load bad-2" },
      { id: "bad-4", error: "Cannot load bad-4" },
    ],
  });
});

test("non-Error rejections are turned into strings", async () => {
  const load = (id: string) => Promise.reject(`nope ${id}`);
  assert.deepEqual(await loadAll(["x"], load), {
    succeeded: [],
    failed: [{ id: "x", error: "nope x" }],
  });
});

test("loads in parallel, not one after another", async () => {
  const start = Date.now();
  await loadAll(["1", "2", "3", "4", "5"], fakeLoad);
  assert.ok(Date.now() - start < 120, "5 x 30ms loads should take ~30ms in parallel, not 150ms");
});

test("empty input", async () => {
  assert.deepEqual(await loadAll([], fakeLoad), { succeeded: [], failed: [] });
});

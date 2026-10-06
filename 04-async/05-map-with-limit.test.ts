import { test } from "node:test";
import assert from "node:assert/strict";
import { mapWithLimit } from "./05-map-with-limit.ts";

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/** An async "double" that records how many calls are running at once. */
function tracked() {
  const stats = { running: 0, maxRunning: 0, calls: 0 };
  const fn = async (n: number) => {
    stats.calls++;
    stats.running++;
    stats.maxRunning = Math.max(stats.maxRunning, stats.running);
    await sleep(10 + (n % 3) * 5); // varying durations so results finish out of order
    stats.running--;
    return n * 2;
  };
  return { fn, stats };
}

test("returns results in input order", async () => {
  const { fn } = tracked();
  assert.deepEqual(await mapWithLimit([1, 2, 3, 4, 5, 6, 7], 3, fn), [2, 4, 6, 8, 10, 12, 14]);
});

test("never exceeds the limit", async () => {
  const { fn, stats } = tracked();
  await mapWithLimit(Array.from({ length: 20 }, (_, i) => i), 4, fn);
  assert.equal(stats.maxRunning, 4);
  assert.equal(stats.calls, 20);
});

test("actually runs in parallel up to the limit", async () => {
  const start = Date.now();
  await mapWithLimit([1, 2, 3, 4], 4, async () => sleep(40));
  assert.ok(Date.now() - start < 120, "4 x 40ms tasks with limit 4 should take ~40ms");
});

test("limit larger than the number of items", async () => {
  const { fn, stats } = tracked();
  assert.deepEqual(await mapWithLimit([1, 2], 10, fn), [2, 4]);
  assert.equal(stats.maxRunning, 2);
});

test("rejects if any call rejects", async () => {
  const fn = async (n: number) => {
    await sleep(5);
    if (n === 3) throw new Error("bad item");
    return n;
  };
  await assert.rejects(mapWithLimit([1, 2, 3, 4], 2, fn), { message: "bad item" });
});

test("empty input", async () => {
  const { fn } = tracked();
  assert.deepEqual(await mapWithLimit([], 3, fn), []);
});

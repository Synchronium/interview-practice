import { test } from "node:test";
import assert from "node:assert/strict";
import { sleep } from "./01-sleep.ts";

test("returns a promise", () => {
  const p = sleep(0);
  assert.ok(p instanceof Promise);
  return p;
});

test("waits roughly the requested time", async () => {
  const start = Date.now();
  await sleep(50);
  const elapsed = Date.now() - start;
  assert.ok(elapsed >= 45, `only waited ${elapsed}ms`);
  assert.ok(elapsed < 500, `waited way too long: ${elapsed}ms`);
});

test("resolves with undefined", async () => {
  assert.equal(await sleep(1), undefined);
});

test("runs in parallel when not awaited one by one", async () => {
  const start = Date.now();
  await Promise.all([sleep(50), sleep(50), sleep(50)]);
  assert.ok(Date.now() - start < 140, "three 50ms sleeps in parallel should take ~50ms, not 150ms");
});

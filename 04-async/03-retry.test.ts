import { test } from "node:test";
import assert from "node:assert/strict";
import { retry } from "./03-retry.ts";

/** Returns a function that fails `failures` times, then succeeds. Counts its calls. */
function flaky(failures: number) {
  const fn = async () => {
    fn.calls++;
    if (fn.calls <= failures) throw new Error(`fail #${fn.calls}`);
    return "success";
  };
  fn.calls = 0;
  return fn;
}

test("succeeds first time without retrying", async () => {
  const fn = flaky(0);
  assert.equal(await retry(fn, { retries: 3, baseDelayMs: 1 }), "success");
  assert.equal(fn.calls, 1);
});

test("retries until it succeeds", async () => {
  const fn = flaky(2);
  assert.equal(await retry(fn, { retries: 3, baseDelayMs: 1 }), "success");
  assert.equal(fn.calls, 3);
});

test("gives up after retries + 1 calls, rejecting with the last error", async () => {
  const fn = flaky(10);
  await assert.rejects(retry(fn, { retries: 2, baseDelayMs: 1 }), { message: "fail #3" });
  assert.equal(fn.calls, 3);
});

test("retries: 0 means a single attempt", async () => {
  const fn = flaky(10);
  await assert.rejects(retry(fn, { retries: 0, baseDelayMs: 1 }));
  assert.equal(fn.calls, 1);
});

test("waits with exponential backoff between attempts", async () => {
  const fn = flaky(10);
  const start = Date.now();
  await retry(fn, { retries: 3, baseDelayMs: 20 }).catch(() => {});
  const elapsed = Date.now() - start;
  // 20 + 40 + 80 = 140ms of waiting; no wait after the final failure
  assert.ok(elapsed >= 130, `only waited ${elapsed}ms; expected ~140ms`);
  assert.ok(elapsed < 300, `waited ${elapsed}ms; are you sleeping after the last attempt?`);
});

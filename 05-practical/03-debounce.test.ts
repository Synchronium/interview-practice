import { test } from "node:test";
import assert from "node:assert/strict";
import { debounce } from "./03-debounce.ts";

// These tests use Node's fake timers: t.mock.timers.tick(ms) moves time forward instantly.

test("does not call fn before the wait has passed", (t) => {
  t.mock.timers.enable({ apis: ["setTimeout"] });
  const calls: string[] = [];
  const d = debounce((s: string) => calls.push(s), 100);
  d("a");
  t.mock.timers.tick(99);
  assert.deepEqual(calls, []);
  t.mock.timers.tick(1);
  assert.deepEqual(calls, ["a"]);
});

test("a burst of calls results in one call with the latest args", (t) => {
  t.mock.timers.enable({ apis: ["setTimeout"] });
  const calls: string[] = [];
  const d = debounce((s: string) => calls.push(s), 100);
  d("h");
  t.mock.timers.tick(50);
  d("he");
  t.mock.timers.tick(50);
  d("hel");
  t.mock.timers.tick(100);
  assert.deepEqual(calls, ["hel"]);
});

test("each call restarts the wait", (t) => {
  t.mock.timers.enable({ apis: ["setTimeout"] });
  let calls = 0;
  const d = debounce(() => calls++, 100);
  d();
  t.mock.timers.tick(80);
  d();
  t.mock.timers.tick(80); // 160ms since the first call, but only 80ms since the last
  assert.equal(calls, 0);
  t.mock.timers.tick(20);
  assert.equal(calls, 1);
});

test("separate bursts produce separate calls", (t) => {
  t.mock.timers.enable({ apis: ["setTimeout"] });
  const calls: number[] = [];
  const d = debounce((n: number) => calls.push(n), 100);
  d(1);
  t.mock.timers.tick(100);
  d(2);
  t.mock.timers.tick(100);
  assert.deepEqual(calls, [1, 2]);
});

test("passes multiple arguments through", (t) => {
  t.mock.timers.enable({ apis: ["setTimeout"] });
  let got: unknown[] = [];
  const d = debounce((a: number, b: string) => (got = [a, b]), 10);
  d(1, "x");
  t.mock.timers.tick(10);
  assert.deepEqual(got, [1, "x"]);
});

test("separate debounced functions do not interfere", (t) => {
  t.mock.timers.enable({ apis: ["setTimeout"] });
  const calls: string[] = [];
  const a = debounce(() => calls.push("a"), 100);
  const b = debounce(() => calls.push("b"), 100);
  a();
  b();
  t.mock.timers.tick(100);
  assert.deepEqual(calls.sort(), ["a", "b"]);
});

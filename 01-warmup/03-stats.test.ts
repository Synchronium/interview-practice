import { test } from "node:test";
import assert from "node:assert/strict";
import { stats } from "./03-stats.ts";

test("basic", () => {
  assert.deepEqual(stats([3, 1, 2]), { sum: 6, min: 1, max: 3, average: 2 });
});

test("negatives", () => {
  assert.deepEqual(stats([-5, 5, 10]), { sum: 10, min: -5, max: 10, average: 10 / 3 });
});

test("single element", () => {
  assert.deepEqual(stats([7]), { sum: 7, min: 7, max: 7, average: 7 });
});

test("empty array returns null", () => {
  assert.equal(stats([]), null);
});

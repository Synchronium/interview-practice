import { test } from "node:test";
import assert from "node:assert/strict";
import { mergeSorted } from "./06-merge-sorted.ts";

test("basic interleave", () => {
  assert.deepEqual(mergeSorted([1, 4, 7], [2, 3, 8, 9]), [1, 2, 3, 4, 7, 8, 9]);
});

test("one side empty", () => {
  assert.deepEqual(mergeSorted([], [1, 2]), [1, 2]);
  assert.deepEqual(mergeSorted([1, 2], []), [1, 2]);
});

test("keeps duplicates", () => {
  assert.deepEqual(mergeSorted([1, 2, 2], [2, 3]), [1, 2, 2, 2, 3]);
});

test("one array entirely before the other", () => {
  assert.deepEqual(mergeSorted([1, 2], [10, 20]), [1, 2, 10, 20]);
});

test("multi-digit numbers sort numerically", () => {
  assert.deepEqual(mergeSorted([2, 10], [9, 100]), [2, 9, 10, 100]);
});

test("does not mutate inputs", () => {
  const a = [1, 3];
  const b = [2];
  mergeSorted(a, b);
  assert.deepEqual(a, [1, 3]);
  assert.deepEqual(b, [2]);
});

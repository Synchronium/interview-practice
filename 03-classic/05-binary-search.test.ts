import { test } from "node:test";
import assert from "node:assert/strict";
import { binarySearch } from "./05-binary-search.ts";

const nums = [1, 3, 5, 7, 9, 11];

test("finds items at the start, middle and end", () => {
  assert.equal(binarySearch(nums, 1), 0);
  assert.equal(binarySearch(nums, 7), 3);
  assert.equal(binarySearch(nums, 11), 5);
});

test("finds every item", () => {
  nums.forEach((n, i) => assert.equal(binarySearch(nums, n), i));
});

test("missing values", () => {
  assert.equal(binarySearch(nums, 4), -1);
  assert.equal(binarySearch(nums, 0), -1);
  assert.equal(binarySearch(nums, 12), -1);
});

test("single element", () => {
  assert.equal(binarySearch([5], 5), 0);
  assert.equal(binarySearch([5], 6), -1);
});

test("empty array", () => {
  assert.equal(binarySearch([], 1), -1);
});

test("large array", () => {
  const big = Array.from({ length: 100_000 }, (_, i) => i * 2);
  assert.equal(binarySearch(big, 123_456), 61_728);
  assert.equal(binarySearch(big, 123_457), -1);
});

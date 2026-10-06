import { test } from "node:test";
import assert from "node:assert/strict";
import { topN } from "./03-top-n.ts";

test("basic", () => {
  assert.deepEqual(topN(["b", "a", "b", "c", "a", "b"], 2), ["b", "a"]);
});

test("ties keep first-seen order", () => {
  assert.deepEqual(topN(["x", "y", "z", "y", "x", "z"], 3), ["x", "y", "z"]);
});

test("works with numbers", () => {
  assert.deepEqual(topN([1, 2, 2, 3, 3, 3], 1), [3]);
});

test("n larger than distinct items", () => {
  assert.deepEqual(topN(["a", "a", "b"], 10), ["a", "b"]);
});

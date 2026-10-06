import { test } from "node:test";
import assert from "node:assert/strict";
import { uniqueBy } from "./04-unique-by.ts";

test("dedupes objects by id, keeping the first", () => {
  const items = [
    { id: 1, v: "a" },
    { id: 2, v: "b" },
    { id: 1, v: "c" },
  ];
  assert.deepEqual(uniqueBy(items, (x) => x.id), [items[0], items[1]]);
});

test("works with primitives and an identity key", () => {
  assert.deepEqual(uniqueBy([3, 1, 3, 2, 1], (x) => x), [3, 1, 2]);
});

test("case-insensitive key", () => {
  assert.deepEqual(uniqueBy(["Ann", "ann", "Bob", "ANN"], (s) => s.toLowerCase()), ["Ann", "Bob"]);
});

test("does not mutate the input", () => {
  const input = [1, 1, 2];
  uniqueBy(input, (x) => x);
  assert.deepEqual(input, [1, 1, 2]);
});

test("empty input", () => {
  assert.deepEqual(uniqueBy([], (x) => x), []);
});

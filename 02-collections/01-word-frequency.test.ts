import { test } from "node:test";
import assert from "node:assert/strict";
import { wordFrequency } from "./01-word-frequency.ts";

test("counts case-insensitively and ignores punctuation", () => {
  assert.deepEqual(
    wordFrequency("The cat. The hat!"),
    new Map([
      ["the", 2],
      ["cat", 1],
      ["hat", 1],
    ]),
  );
});

test("handles extra whitespace", () => {
  assert.deepEqual(wordFrequency("  a   b\n a "), new Map([["a", 2], ["b", 1]]));
});

test("keeps apostrophes", () => {
  assert.equal(wordFrequency("don't stop, don't").get("don't"), 2);
});

test("empty string gives empty map", () => {
  assert.equal(wordFrequency("").size, 0);
});

import { test } from "node:test";
import assert from "node:assert/strict";
import { groupAnagrams } from "./03-group-anagrams.ts";

test("classic example", () => {
  assert.deepEqual(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]), [
    ["eat", "tea", "ate"],
    ["tan", "nat"],
    ["bat"],
  ]);
});

test("no anagrams", () => {
  assert.deepEqual(groupAnagrams(["abc", "def"]), [["abc"], ["def"]]);
});

test("empty input", () => {
  assert.deepEqual(groupAnagrams([]), []);
});

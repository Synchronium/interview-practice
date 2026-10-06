import { test } from "node:test";
import assert from "node:assert/strict";
import { isPalindrome } from "./04-palindrome.ts";

test("classic sentence", () => {
  assert.equal(isPalindrome("A man, a plan, a canal: Panama"), true);
});

test("not a palindrome", () => {
  assert.equal(isPalindrome("race a car"), false);
});

test("digits count", () => {
  assert.equal(isPalindrome("12321"), true);
  assert.equal(isPalindrome("0P"), false);
});

test("only punctuation is a palindrome (nothing left to compare)", () => {
  assert.equal(isPalindrome(".,!"), true);
});

test("empty string", () => {
  assert.equal(isPalindrome(""), true);
});

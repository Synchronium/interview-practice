import { test } from "node:test";
import assert from "node:assert/strict";
import { isValid } from "./02-valid-brackets.ts";

test("valid nesting", () => {
  assert.equal(isValid("({[]})"), true);
  assert.equal(isValid("()[]{}"), true);
});

test("mismatched type", () => {
  assert.equal(isValid("(]"), false);
});

test("wrong order", () => {
  assert.equal(isValid("([)]"), false);
});

test("unclosed opener", () => {
  assert.equal(isValid("(("), false);
});

test("closer with nothing open", () => {
  assert.equal(isValid(")("), false);
});

test("ignores other characters", () => {
  assert.equal(isValid("fn(a[0]) { return x; }"), true);
});

test("empty string is valid", () => {
  assert.equal(isValid(""), true);
});

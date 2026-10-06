import { test } from "node:test";
import assert from "node:assert/strict";
import { capitalizeWords } from "./02-capitalize-words.ts";

test("basic", () => {
  assert.equal(capitalizeWords("hello world"), "Hello World");
});

test("lowercases the rest", () => {
  assert.equal(capitalizeWords("hELLO wORLD"), "Hello World");
});

test("single word", () => {
  assert.equal(capitalizeWords("typescript"), "Typescript");
});

test("empty string", () => {
  assert.equal(capitalizeWords(""), "");
});

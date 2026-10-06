import { test } from "node:test";
import assert from "node:assert/strict";
import { fizzBuzz } from "./01-fizzbuzz.ts";

test("first five", () => {
  assert.deepEqual(fizzBuzz(5), ["1", "2", "Fizz", "4", "Buzz"]);
});

test("fifteen is FizzBuzz", () => {
  assert.equal(fizzBuzz(15)[14], "FizzBuzz");
  assert.equal(fizzBuzz(15).length, 15);
});

test("zero gives empty array", () => {
  assert.deepEqual(fizzBuzz(0), []);
});

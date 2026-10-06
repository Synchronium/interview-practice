import { test } from "node:test";
import assert from "node:assert/strict";
import { describeUser } from "./04-describe-user.ts";

test("all fields", () => {
  assert.equal(
    describeUser({ firstName: "Ada", lastName: "Lovelace", age: 36, address: { city: "London" } }),
    "Ada Lovelace (36) from London",
  );
});

test("name only", () => {
  assert.equal(describeUser({ firstName: "Ada", lastName: "Lovelace" }), "Ada Lovelace");
});

test("address without city", () => {
  assert.equal(describeUser({ firstName: "Ada", lastName: "Lovelace", address: {} }), "Ada Lovelace");
});

test("city but no age", () => {
  assert.equal(
    describeUser({ firstName: "Alan", lastName: "Turing", address: { city: "Manchester" } }),
    "Alan Turing from Manchester",
  );
});

test("age 0 is still shown", () => {
  assert.equal(describeUser({ firstName: "Baby", lastName: "Smith", age: 0 }), "Baby Smith (0)");
});

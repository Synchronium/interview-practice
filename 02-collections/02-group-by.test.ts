import { test } from "node:test";
import assert from "node:assert/strict";
import { groupBy } from "./02-group-by.ts";

test("groups strings by first letter", () => {
  assert.deepEqual(
    groupBy(["apple", "avocado", "banana"], (s) => s[0]),
    { a: ["apple", "avocado"], b: ["banana"] },
  );
});

test("groups objects by a property", () => {
  const people = [
    { name: "Ann", team: "eng" },
    { name: "Bob", team: "sales" },
    { name: "Cat", team: "eng" },
  ];
  assert.deepEqual(groupBy(people, (p) => p.team), {
    eng: [people[0], people[2]],
    sales: [people[1]],
  });
});

test("empty input", () => {
  assert.deepEqual(groupBy([], (x) => String(x)), {});
});

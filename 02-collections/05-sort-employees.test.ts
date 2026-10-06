import { test } from "node:test";
import assert from "node:assert/strict";
import { sortEmployees, type Employee } from "./05-sort-employees.ts";

const employees: Employee[] = [
  { name: "Dee", team: "sales", salary: 50 },
  { name: "Ann", team: "eng", salary: 90 },
  { name: "Cal", team: "eng", salary: 120 },
  { name: "Bea", team: "eng", salary: 90 },
  { name: "Eve", team: "design", salary: 70 },
];

test("sorts by team, then salary desc, then name", () => {
  assert.deepEqual(
    sortEmployees(employees).map((e) => e.name),
    ["Eve", "Cal", "Ann", "Bea", "Dee"],
  );
});

test("does not mutate the input", () => {
  const before = employees.map((e) => e.name);
  sortEmployees(employees);
  assert.deepEqual(employees.map((e) => e.name), before);
});

test("returns a new array", () => {
  assert.notEqual(sortEmployees(employees), employees);
});

test("empty input", () => {
  assert.deepEqual(sortEmployees([]), []);
});

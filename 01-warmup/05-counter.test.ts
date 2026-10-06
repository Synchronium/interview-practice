import { test } from "node:test";
import assert from "node:assert/strict";
import { Counter } from "./05-counter.ts";

test("starts at 0 by default", () => {
  assert.equal(new Counter().value, 0);
});

test("increments and decrements", () => {
  const c = new Counter();
  c.increment();
  c.increment();
  c.decrement();
  assert.equal(c.value, 1);
});

test("unbounded by default", () => {
  const c = new Counter();
  c.decrement();
  assert.equal(c.value, -1);
});

test("clamps at max", () => {
  const c = new Counter({ max: 2 });
  c.increment();
  c.increment();
  c.increment();
  assert.equal(c.value, 2);
});

test("clamps at min", () => {
  const c = new Counter({ start: 1, min: 0 });
  c.decrement();
  c.decrement();
  assert.equal(c.value, 0);
});

test("reset returns to the start value", () => {
  const c = new Counter({ start: 5 });
  c.increment();
  c.reset();
  assert.equal(c.value, 5);
});

test("separate instances do not share state", () => {
  const a = new Counter();
  const b = new Counter();
  a.increment();
  assert.equal(b.value, 0);
});

import { test } from "node:test";
import assert from "node:assert/strict";
import { LRUCache } from "./02-lru-cache.ts";

test("stores and retrieves values", () => {
  const c = new LRUCache<string, number>(2);
  c.set("a", 1);
  assert.equal(c.get("a"), 1);
  assert.equal(c.get("missing"), undefined);
});

test("evicts the least recently set key when full", () => {
  const c = new LRUCache<string, number>(2);
  c.set("a", 1);
  c.set("b", 2);
  c.set("c", 3);
  assert.equal(c.get("a"), undefined);
  assert.equal(c.get("b"), 2);
  assert.equal(c.get("c"), 3);
  assert.equal(c.size, 2);
});

test("get marks a key as recently used", () => {
  const c = new LRUCache<string, number>(2);
  c.set("a", 1);
  c.set("b", 2);
  c.get("a");
  c.set("c", 3);
  assert.equal(c.get("b"), undefined);
  assert.equal(c.get("a"), 1);
});

test("updating an existing key does not evict and marks it recently used", () => {
  const c = new LRUCache<string, number>(2);
  c.set("a", 1);
  c.set("b", 2);
  c.set("a", 10);
  assert.equal(c.size, 2);
  c.set("c", 3);
  assert.equal(c.get("a"), 10);
  assert.equal(c.get("b"), undefined);
});

test("capacity of 1", () => {
  const c = new LRUCache<number, string>(1);
  c.set(1, "one");
  c.set(2, "two");
  assert.equal(c.get(1), undefined);
  assert.equal(c.get(2), "two");
  assert.equal(c.size, 1);
});

test("stores falsy values correctly", () => {
  const c = new LRUCache<string, number>(2);
  c.set("zero", 0);
  c.set("x", 1);
  c.get("zero");
  c.set("y", 2);
  assert.equal(c.get("zero"), 0);
  assert.equal(c.get("x"), undefined);
});

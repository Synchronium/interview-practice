import { test } from "node:test";
import assert from "node:assert/strict";
import { EventEmitter } from "./01-event-emitter.ts";

test("calls listeners with the emitted args", () => {
  const e = new EventEmitter();
  const received: unknown[] = [];
  e.on("message", (text: string, from: string) => received.push([text, from]));
  e.emit("message", "hi", "ann");
  assert.deepEqual(received, [["hi", "ann"]]);
});

test("multiple listeners run in registration order", () => {
  const e = new EventEmitter();
  const order: number[] = [];
  e.on("x", () => order.push(1));
  e.on("x", () => order.push(2));
  e.emit("x");
  assert.deepEqual(order, [1, 2]);
});

test("events are independent", () => {
  const e = new EventEmitter();
  let calls = 0;
  e.on("a", () => calls++);
  e.emit("b");
  assert.equal(calls, 0);
});

test("emitting with no listeners does nothing", () => {
  assert.doesNotThrow(() => new EventEmitter().emit("nothing"));
});

test("on returns an unsubscribe function", () => {
  const e = new EventEmitter();
  let calls = 0;
  const unsubscribe = e.on("x", () => calls++);
  e.emit("x");
  unsubscribe();
  e.emit("x");
  assert.equal(calls, 1);
});

test("off removes only that listener", () => {
  const e = new EventEmitter();
  const calls: string[] = [];
  const a = () => calls.push("a");
  const b = () => calls.push("b");
  e.on("x", a);
  e.on("x", b);
  e.off("x", a);
  e.emit("x");
  assert.deepEqual(calls, ["b"]);
});

test("once fires only once", () => {
  const e = new EventEmitter();
  let calls = 0;
  e.once("ready", () => calls++);
  e.emit("ready");
  e.emit("ready");
  assert.equal(calls, 1);
});

test("once passes args through", () => {
  const e = new EventEmitter();
  let got: unknown;
  e.once("ready", (value: number) => (got = value));
  e.emit("ready", 42);
  assert.equal(got, 42);
});

test("a listener removing itself mid-emit does not skip the next one", () => {
  const e = new EventEmitter();
  const calls: string[] = [];
  const unsubscribeA = e.on("x", () => {
    calls.push("a");
    unsubscribeA();
  });
  e.on("x", () => calls.push("b"));
  e.emit("x");
  assert.deepEqual(calls, ["a", "b"]);
});

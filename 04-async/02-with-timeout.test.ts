import { test } from "node:test";
import assert from "node:assert/strict";
import { withTimeout } from "./02-with-timeout.ts";

const resolveAfter = <T>(ms: number, value: T) =>
  new Promise<T>((resolve) => setTimeout(() => resolve(value), ms));

const rejectAfter = (ms: number, message: string) =>
  new Promise<never>((_, reject) => setTimeout(() => reject(new Error(message)), ms));

test("resolves with the original value when fast enough", async () => {
  assert.equal(await withTimeout(resolveAfter(10, "ok"), 200), "ok");
});

test("rejects with 'Timed out' when too slow", async () => {
  await assert.rejects(withTimeout(resolveAfter(300, "late"), 20), { message: "Timed out" });
});

test("passes through the original rejection", async () => {
  await assert.rejects(withTimeout(rejectAfter(10, "boom"), 200), { message: "boom" });
});

test("does not wait for the slow promise once timed out", async () => {
  const start = Date.now();
  await withTimeout(resolveAfter(300, "late"), 20).catch(() => {});
  assert.ok(Date.now() - start < 200);
});

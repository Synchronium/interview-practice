import { test } from "node:test";
import assert from "node:assert/strict";
import { RateLimiter } from "./04-rate-limiter.ts";

/** A clock we control by hand. */
function fakeClock(start = 0) {
  let time = start;
  return {
    now: () => time,
    set: (t: number) => {
      time = t;
    },
  };
}

test("allows up to the limit, then blocks", () => {
  const clock = fakeClock();
  const rl = new RateLimiter(3, 1000, clock.now);
  assert.equal(rl.allow("ann"), true);
  assert.equal(rl.allow("ann"), true);
  assert.equal(rl.allow("ann"), true);
  assert.equal(rl.allow("ann"), false);
});

test("keys are limited independently", () => {
  const clock = fakeClock();
  const rl = new RateLimiter(1, 1000, clock.now);
  assert.equal(rl.allow("ann"), true);
  assert.equal(rl.allow("bob"), true);
  assert.equal(rl.allow("ann"), false);
});

test("requests expire after the window", () => {
  const clock = fakeClock();
  const rl = new RateLimiter(1, 1000, clock.now);
  assert.equal(rl.allow("ann"), true);
  clock.set(999);
  assert.equal(rl.allow("ann"), false);
  clock.set(1000);
  assert.equal(rl.allow("ann"), true);
});

test("window slides: each request expires on its own schedule", () => {
  const clock = fakeClock();
  const rl = new RateLimiter(2, 1000, clock.now);
  assert.equal(rl.allow("ann"), true); // t=0
  clock.set(500);
  assert.equal(rl.allow("ann"), true); // t=500
  clock.set(999);
  assert.equal(rl.allow("ann"), false); // both still count
  clock.set(1000);
  assert.equal(rl.allow("ann"), true); // t=0 expired, t=500 still counts
  assert.equal(rl.allow("ann"), false);
  clock.set(1500);
  assert.equal(rl.allow("ann"), true); // t=500 expired
});

test("rejected requests are not counted", () => {
  const clock = fakeClock();
  const rl = new RateLimiter(1, 1000, clock.now);
  assert.equal(rl.allow("ann"), true); // t=0
  clock.set(500);
  assert.equal(rl.allow("ann"), false); // rejected, so should NOT extend the block
  clock.set(1000);
  assert.equal(rl.allow("ann"), true);
});

test("defaults to the real clock", () => {
  const rl = new RateLimiter(1, 60_000);
  assert.equal(rl.allow("x"), true);
  assert.equal(rl.allow("x"), false);
});

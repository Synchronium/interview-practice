/**
 * Rate limiter (sliding window)
 *
 * Allow at most `limit` requests per `windowMs`, tracked separately per key
 * (e.g. per user or per IP). `allow(key)` returns true and records the request
 * if it's allowed, or returns false if the key is over its limit.
 *
 * A request made at time t counts against the limit until time t + windowMs
 * (exclusive). Rejected requests are NOT recorded.
 *
 * const limiter = new RateLimiter(2, 1000);   // 2 requests per second
 * limiter.allow("ann");  // true
 * limiter.allow("ann");  // true
 * limiter.allow("ann");  // false (third within the window)
 * limiter.allow("bob");  // true (separate key)
 *
 * Testability: the constructor takes a `now` function, which defaults to
 *   Date.now. Tests pass a fake clock instead of waiting for real time. This
 *   "inject your dependencies" idea is a good one to call out in an interview.
 *
 * One approach: Map<string, number[]> of request timestamps per key. On each
 *   call, drop timestamps that have expired, then compare the count with the limit.
 *
 * Be ready to discuss:
 *   - memory: keys that stop sending requests are never cleaned up. How would you fix that?
 *   - alternatives: fixed window (simpler, but allows bursts at boundaries),
 *     token bucket (smooth, O(1) memory per key)
 *   - multiple servers: the state needs to live somewhere shared, e.g. Redis
 */
export class RateLimiter {
  constructor(limit: number, windowMs: number, now: () => number = Date.now) {
    throw new Error("TODO");
  }

  allow(key: string): boolean {
    throw new Error("TODO");
  }
}

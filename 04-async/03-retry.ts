/**
 * Retry with exponential backoff
 *
 * Call `fn`. If its promise rejects, wait and try again, up to `retries`
 * extra times. The wait doubles after each failure:
 *   attempt 1 fails → wait baseDelayMs
 *   attempt 2 fails → wait baseDelayMs * 2
 *   attempt 3 fails → wait baseDelayMs * 4 ... and so on.
 * Resolve with the first successful result. If every attempt fails, reject
 * with the error from the LAST attempt.
 *
 * retries: 2 means at most 3 calls in total.
 *
 * await retry(() => fetchFlakyThing(), { retries: 3, baseDelayMs: 100 });
 *
 * Syntax to remember: async/await, try/catch inside a loop, `throw`,
 *   2 ** n (exponent). Reuse your sleep from 01-sleep.ts if you like:
 *   import { sleep } from "./01-sleep.ts";
 *
 * Be ready to discuss: why real systems add random "jitter" to the delay
 *   (many clients retrying in lockstep), and which errors should NOT be retried
 *   (e.g. a 400 Bad Request will never succeed).
 *
 * TS hints:
 *   - `fn: () => Promise<T>` is a function taking no args and returning a promise of T.
 *   - In `catch (err)`, err is typed `unknown`. You can store it in a `let lastError: unknown;`
 */
export type RetryOptions = {
  retries: number;
  baseDelayMs: number;
};

export async function retry<T>(fn: () => Promise<T>, options: RetryOptions): Promise<T> {
  throw new Error("TODO");
}

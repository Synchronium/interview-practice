/**
 * Sleep
 *
 * Return a promise that resolves (with no value) after `ms` milliseconds.
 *
 * await sleep(100); // pauses this async function for ~100ms
 *
 * This is the "hello world" of promises, and later exercises in this level use it.
 *
 * Syntax to remember: new Promise((resolve, reject) => { ... }), setTimeout(fn, ms)
 *
 * TS hints:
 *   - `Promise<void>` is a promise that resolves with no useful value.
 *   - When you create one, TS may need telling what it resolves with:
 *     `new Promise<void>((resolve) => ...)`
 */
export function sleep(ms: number): Promise<void> {
  throw new Error("TODO");
}

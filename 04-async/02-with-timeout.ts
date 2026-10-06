/**
 * With timeout
 *
 * Wrap a promise so that it rejects with `new Error("Timed out")` if it
 * hasn't settled within `ms` milliseconds. Otherwise it resolves or rejects
 * exactly like the original.
 *
 * await withTimeout(fetchUser(1), 1000);   // a user, or throws "Timed out"
 *
 * Syntax to remember: Promise.race([...]) settles as soon as the FIRST promise
 *   in the list settles. setTimeout returns an id you can pass to clearTimeout.
 *
 * Bonus: clear the timer when the original promise wins, so a pending timer
 *   doesn't keep the process alive. (try/finally works nicely with await.)
 *
 * TS hints:
 *   - `<T>` again: whatever type the input promise resolves with, so does the output.
 *   - A promise that only ever rejects can be typed `Promise<never>`.
 */
export function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  throw new Error("TODO");
}

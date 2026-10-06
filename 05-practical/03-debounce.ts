/**
 * Debounce
 *
 * Return a wrapped version of `fn` that waits until it has stopped being
 * called for `waitMs` before actually calling `fn`, with the MOST RECENT args.
 * Each new call restarts the wait.
 *
 * const search = debounce((query: string) => fetchResults(query), 300);
 * search("h"); search("he"); search("hel");   // typed quickly
 * // ...300ms of quiet... → fetchResults("hel") is called ONCE
 *
 * Classic uses: search-as-you-type, window resize handlers, autosave.
 *
 * Syntax to remember: closures (the returned function shares a `timer`
 *   variable), setTimeout / clearTimeout, rest params and spread (...args)
 *
 * Be ready to discuss: debounce vs throttle (throttle = at most once per
 *   interval, even while calls keep coming), and "leading edge" debounce.
 *
 * TS hints (the trickiest signature so far):
 *   - `A extends unknown[]` means "A is some array type": the tuple of fn's arguments.
 *   - `(...args: A) => void` means the returned function takes exactly the same arguments as fn.
 *   - Store the timer as `let timer: ReturnType<typeof setTimeout> | undefined;`
 */
export function debounce<A extends unknown[]>(
  fn: (...args: A) => void,
  waitMs: number,
): (...args: A) => void {
  throw new Error("TODO");
}

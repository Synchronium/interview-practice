/**
 * Map with a concurrency limit
 *
 * Like `Promise.all(items.map(fn))`, but never run more than `limit` calls
 * to `fn` at the same time. Results must be in the same order as `items`.
 * If any call rejects, the returned promise rejects.
 *
 * // Resize 1,000 images, but only 4 at a time
 * const thumbs = await mapWithLimit(images, 4, resize);
 *
 * This is a real-world classic: rate-limited APIs, DB connection pools, etc.
 *
 * One approach ("worker pool"):
 *   - Keep a shared `nextIndex` counter.
 *   - Start `limit` async "workers". Each loops: grab nextIndex++, await fn on
 *     that item, store the result at results[index], repeat until none are left.
 *   - await Promise.all(workers), then return results.
 *   (JS is single-threaded, so nextIndex++ is safe: no locks needed.)
 *
 * TS hints:
 *   - Two generics: T for the input items, R for results.
 *   - `const results: R[] = new Array(items.length);`
 */
export async function mapWithLimit<T, R>(
  items: T[],
  limit: number,
  fn: (item: T) => Promise<R>,
): Promise<R[]> {
  throw new Error("TODO");
}

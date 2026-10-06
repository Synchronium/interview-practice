/**
 * Group by
 *
 * Group items into an object keyed by whatever `getKey` returns for each item.
 * Items keep their original order within each group.
 *
 * groupBy(["apple", "avocado", "banana"], (s) => s[0])
 *   → { a: ["apple", "avocado"], b: ["banana"] }
 *
 * Syntax to remember: passing a function as an argument, reduce or for...of,
 *   `(acc[key] ??= []).push(item)` is a neat trick, but an if-check is fine too
 *
 * TS hints (generics!):
 *   - `<T>` makes this work for any item type. If you call it with an array of
 *     strings, T becomes string. If you call it with Users, T becomes User.
 *   - `Record<string, T[]>` is an object whose keys are strings and whose values are arrays of T.
 *   - `const result: Record<string, T[]> = {};` declares an empty one.
 */
export function groupBy<T>(items: T[], getKey: (item: T) => string): Record<string, T[]> {
  throw new Error("TODO");
}

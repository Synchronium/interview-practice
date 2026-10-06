/**
 * Unique by
 *
 * Remove duplicates, where two items count as duplicates if `getKey` returns
 * the same value for both. Keep the first occurrence and preserve order.
 *
 * uniqueBy([{ id: 1, v: "a" }, { id: 2, v: "b" }, { id: 1, v: "c" }], (x) => x.id)
 *   → [{ id: 1, v: "a" }, { id: 2, v: "b" }]
 *
 * Syntax to remember: new Set(), set.has / set.add, filter.
 *   For plain primitives, `[...new Set(arr)]` dedupes in one line. Why doesn't
 *   that work for objects? (Hint: how does === compare two objects?)
 *
 * Be ready to say: why a Set beats `array.includes` here (complexity).
 *
 * TS hint: `unknown` is the safe "could be anything" type. A key can be a
 *   number, a string, or anything else, and we only compare keys, never use them.
 */
export function uniqueBy<T>(items: T[], getKey: (item: T) => unknown): T[] {
  throw new Error("TODO");
}

/**
 * Top N most frequent
 *
 * Return the `n` most frequent items, most frequent first.
 * Ties are broken by whichever item appeared first in the input.
 *
 * topN(["b", "a", "b", "c", "a", "b"], 2) → ["b", "a"]
 *
 * Syntax to remember: Map for counting (Map remembers insertion order!),
 *   [...map.entries()] or Array.from(map) to get [key, count] pairs,
 *   array.sort((x, y) => y[1] - x[1]) to sort descending (sort is stable),
 *   slice(0, n), map(([key]) => key) (destructuring in parameters)
 *
 * TS hint: `[T, number]` is a tuple type: an array of exactly two items, a T then a number.
 */
export function topN<T>(items: T[], n: number): T[] {
  throw new Error("TODO");
}

/**
 * Merge two sorted arrays
 *
 * Given two arrays that are each sorted ascending, return one sorted array
 * containing every element of both (keep duplicates).
 *
 * mergeSorted([1, 4, 7], [2, 3, 8, 9]) → [1, 2, 3, 4, 7, 8, 9]
 *
 * The rule: do it in O(n + m). `[...a, ...b].sort()` passes the tests, but
 *   it's O((n+m) log(n+m)) and misses the point. (Also: plain .sort() with no
 *   comparator sorts numbers as STRINGS, so [10, 9].sort() → [10, 9]!)
 *
 * The idea: one pointer into each array. Repeatedly take the smaller of the two
 *   current elements. When one array runs out, append the rest of the other.
 *
 * This is the "merge" step of merge sort, so expect it as a follow-up.
 */
export function mergeSorted(a: number[], b: number[]): number[] {
  throw new Error("TODO");
}

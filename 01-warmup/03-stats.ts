/**
 * Stats
 *
 * Given an array of numbers, return an object with sum, min, max and average.
 * For an empty array return null.
 *
 * stats([3, 1, 2]) → { sum: 6, min: 1, max: 3, average: 2 }
 * stats([]) → null
 *
 * Syntax to remember: for...of, reduce, Math.min(...nums) (spread),
 *   returning an object literal, shorthand properties ({ sum } === { sum: sum })
 *
 * TS hints:
 *   - `type Stats = {...}` describes the shape of an object.
 *   - `Stats | null` is a union type: "either a Stats or null".
 */
export type Stats = {
  sum: number;
  min: number;
  max: number;
  average: number;
};

export function stats(nums: number[]): Stats | null {
  throw new Error("TODO");
}

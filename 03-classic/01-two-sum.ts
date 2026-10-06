/**
 * Two Sum (the most famous interview question there is)
 *
 * Given an array of numbers and a target, return the indices [i, j] (i < j)
 * of the two numbers that add up to the target. Return null if there are none.
 * You can assume there is at most one valid pair.
 *
 * twoSum([2, 7, 11, 15], 9) → [0, 1]
 * twoSum([3, 2, 4], 6) → [1, 2]
 * twoSum([1, 2], 10) → null
 *
 * First get it working with two nested loops (O(n²)). Then try for O(n):
 *   one pass, storing each number's index in a Map as you go, and checking
 *   whether `target - current` has been seen already.
 *
 * Be ready to say out loud: time and space complexity of each approach.
 *
 * TS hint: `[number, number] | null` means a 2-number tuple, or null.
 */
export function twoSum(nums: number[], target: number): [number, number] | null {
  throw new Error("TODO");
}

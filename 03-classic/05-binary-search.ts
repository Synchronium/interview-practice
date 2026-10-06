/**
 * Binary search
 *
 * Given a sorted (ascending) array of distinct numbers, return the index of
 * `target`, or -1 if it isn't there. Must be O(log n), so no indexOf / includes.
 *
 * binarySearch([1, 3, 5, 7, 9], 7) → 3
 * binarySearch([1, 3, 5, 7, 9], 4) → -1
 *
 * The idea: keep a window [low, high]. Look at the middle element. If it's
 *   too small, the target must be to the right, so move `low` past the middle.
 *   If it's too big, move `high` before the middle. Stop when the window is empty.
 *
 * Syntax to remember: while (low <= high), Math.floor((low + high) / 2)
 *
 * Classic bugs to watch for: `<` vs `<=` in the loop condition, and
 *   `low = mid` instead of `low = mid + 1` (infinite loop!).
 */
export function binarySearch(sorted: number[], target: number): number {
  throw new Error("TODO");
}

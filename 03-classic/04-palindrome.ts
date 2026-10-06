/**
 * Valid palindrome
 *
 * Return true if the string reads the same forwards and backwards, ignoring
 * case and anything that isn't a letter or digit.
 *
 * isPalindrome("A man, a plan, a canal: Panama") → true
 * isPalindrome("race a car") → false
 *
 * Two approaches. Try both if you have time:
 *   1. Clean the string, then compare it with its reverse
 *      (split("").reverse().join("")). Simple, but uses O(n) extra space.
 *   2. Two pointers: `left` starts at 0, `right` at the end, and they move
 *      inwards, skipping non-alphanumeric characters. O(1) extra space.
 *
 * Syntax to remember: while loops, regex test (/[a-z0-9]/i.test(ch)),
 *   str.toLowerCase(), str.replace(/[^a-z0-9]/gi, "")
 */
export function isPalindrome(s: string): boolean {
  throw new Error("TODO");
}

/**
 * Valid brackets
 *
 * Return true if every bracket in the string is correctly closed and nested.
 * Bracket types: () [] {}. Ignore any other characters.
 *
 * isValid("({[]})") → true
 * isValid("(]") → false
 * isValid("([)]") → false
 * isValid("fn(a[0]) { }") → true
 *
 * The classic approach: a stack (a plain array with push/pop).
 *   Push openers; on a closer, pop and check it matches.
 *   What must be true about the stack at the very end?
 *
 * Syntax to remember: for (const ch of str), array.push / array.pop,
 *   a lookup object like `const pairs: Record<string, string> = { ")": "(", ... }`
 */
export function isValid(s: string): boolean {
  throw new Error("TODO");
}

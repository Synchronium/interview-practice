/**
 * Group anagrams
 *
 * Group words that are anagrams of each other (same letters, any order).
 * Groups appear in order of their first word; words keep their input order.
 *
 * groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
 *   → [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
 *
 * Hint: what do all anagrams have in common if you sort their letters?
 *   "eat" → "aet", "tea" → "aet"
 *   word.split("").sort().join("") gives you that key.
 *
 * This reuses ideas from 02-collections (Map + grouping).
 * Be ready to say: the complexity, given that n is the number of words and k is the max word length.
 *
 * TS hint: `string[][]` is an array of arrays of strings.
 */
export function groupAnagrams(words: string[]): string[][] {
  throw new Error("TODO");
}

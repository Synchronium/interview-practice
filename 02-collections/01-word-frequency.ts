/**
 * Word frequency
 *
 * Count how often each word appears. Case-insensitive; ignore punctuation
 * (anything that isn't a letter, digit, apostrophe or whitespace).
 *
 * wordFrequency("The cat. The hat!") → Map { "the" => 2, "cat" => 1, "hat" => 1 }
 *
 * Syntax to remember: new Map(), map.get / map.set / map.has,
 *   str.replace(/[^a-z0-9'\s]/g, ""), str.split(/\s+/), filter out empty strings,
 *   `?? 0` (nullish coalescing: use 0 if the left side is null/undefined)
 *
 * TS hint: `Map<string, number>` is a Map whose keys are strings and values are numbers.
 *   `new Map<string, number>()` creates one.
 */
export function wordFrequency(text: string): Map<string, number> {
  throw new Error("TODO");
}

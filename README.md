# TypeScript Interview Practice

26 short coding exercises, each with tests, for getting back into writing
code by hand. It's aimed at people who haven't coded day-to-day for a while,
such as engineering managers preparing for interviews that include a coding round.

The exercises start with basic syntax recall and build up to the practical
problems that come up in real interviews: async control flow, caches, rate
limiters and messy input parsing.

- **No build step and no framework.** Node runs the `.ts` files directly, and
  tests use Node's built-in test runner.
- **Gentle on TypeScript.** Every exercise lists the syntax you'll need and
  explains any TypeScript features it uses, so you can learn TS as you go.
- **Interview-flavoured.** Many exercises end with a "Be ready to discuss" note:
  the follow-up question an interviewer is likely to ask once your code works.

## Getting started

You need **Node.js 22.18 or later** (Node 24 recommended). Check with `node --version`.

```sh
git clone https://github.com/Synchronium/interview-practice.git
cd interview-practice
npm install        # optional: only installs type definitions for your editor
```

## How to work through an exercise

1. Open an exercise, e.g. [`01-warmup/01-fizzbuzz.ts`](01-warmup/01-fizzbuzz.ts).
   The comment at the top explains the problem, gives examples and lists useful syntax.
2. Replace `throw new Error("TODO")` with your solution.
3. Run its tests. Always run the **`.test.ts`** file:
   ```sh
   node --test 01-warmup/01-fizzbuzz.test.ts
   ```
4. Once they pass, move on. Or better, re-read your code as an interviewer
   would: Is it clear? What's the time and space complexity? What edge cases did
   you handle on purpose?

Other ways to run tests:

```sh
npm run test:1     # one level (test:1 to test:5)
npm test           # everything
```

All tests fail at first. That's expected.

## The exercises

### Level 1: Warm-up (syntax recall)
| # | Exercise | Practises |
|---|---|---|
| 01 | FizzBuzz | loops, `%`, arrays |
| 02 | Capitalize words | string methods, `map` / `join` |
| 03 | Stats | `reduce`, spread, object types, `\| null` unions |
| 04 | Describe user | interfaces, optional fields, destructuring, `?.` |
| 05 | Counter | classes, getters, default parameters |

### Level 2: Collections
| # | Exercise | Practises |
|---|---|---|
| 01 | Word frequency | `Map`, regex, `??` |
| 02 | Group by | generics, `Record`, callbacks |
| 03 | Top N | `Map` entries, sort comparators, tuples |
| 04 | Unique by | `Set`, object identity |
| 05 | Sort employees | multi-key sorting, not mutating inputs |

### Level 3: Classic algorithm problems (say the Big-O out loud)
| # | Exercise | Practises |
|---|---|---|
| 01 | Two sum | brute force, then hash map |
| 02 | Valid brackets | stack |
| 03 | Group anagrams | grouping by a computed key |
| 04 | Palindrome | two pointers |
| 05 | Binary search | O(log n), off-by-one errors |
| 06 | Merge sorted arrays | linear merge |

### Level 4: Async
| # | Exercise | Practises |
|---|---|---|
| 01 | Sleep | creating a `Promise` |
| 02 | With timeout | `Promise.race`, cleanup |
| 03 | Retry with backoff | `async`/`await`, `try`/`catch` in loops |
| 04 | Load all | `Promise.allSettled`, partial failure |
| 05 | Map with limit | concurrency control |

### Level 5: Practical
| # | Exercise | Practises |
|---|---|---|
| 01 | Event emitter | closures, subscriptions, a subtle iteration bug |
| 02 | LRU cache | O(1) design, `Map` ordering |
| 03 | Debounce | timers, closures, advanced generics |
| 04 | Rate limiter | sliding window, injecting a clock for testability |
| 05 | Log summary | parsing messy input, structuring a larger solution |

## Tips

- **Stuck?** Re-read the hints in the exercise comment first. Then try writing the
  simplest version that works, even if it's slow. You can improve it once it passes.
- **Practise talking.** In a real interview, explaining your approach matters
  as much as the code. Try narrating out loud as you work.
- **Use an AI assistant as a coach, not a solver.** Ask it for a hint rather
  than the answer, and once your tests pass, ask it to review your code and show
  an alternative solution.
- **Start an exercise over** with `git checkout -- <file>`.
- **Keep your work separate:** fork the repo, or commit your solutions on your own branch.

## Licence

MIT. See [LICENSE](LICENSE).

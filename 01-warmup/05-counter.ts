/**
 * Counter class
 *
 * Implement a counter that can go up and down, optionally clamped between
 * a min and a max.
 *
 * const c = new Counter({ max: 2 });
 * c.increment(); c.increment(); c.increment();
 * c.value → 2          (clamped at max)
 * c.reset();
 * c.value → 0          (back to the start value, which defaults to 0)
 *
 * Syntax to remember: class, constructor, fields, getters (`get value()`),
 *   default parameters, destructuring with defaults ({ start = 0 } = options),
 *   Infinity / -Infinity as "no limit", Math.min / Math.max for clamping
 *
 * TS hints:
 *   - Declare fields at the top of the class body: `private count: number;`
 *     (or use a real JS private field: `#count: number;` then `this.#count`).
 *   - `options: CounterOptions = {}` is a typed parameter with a default value.
 *   - Methods that return nothing are typed `: void`.
 */
export type CounterOptions = {
  start?: number;
  min?: number;
  max?: number;
};

export class Counter {
  constructor(options: CounterOptions = {}) {
    throw new Error("TODO");
  }

  get value(): number {
    throw new Error("TODO");
  }

  increment(): void {
    throw new Error("TODO");
  }

  decrement(): void {
    throw new Error("TODO");
  }

  reset(): void {
    throw new Error("TODO");
  }
}

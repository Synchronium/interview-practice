/**
 * Describe user
 *
 * Build a one-line description of a user. Some fields are optional.
 *
 *   { firstName: "Ada", lastName: "Lovelace", age: 36, address: { city: "London" } }
 *     → "Ada Lovelace (36) from London"
 *   { firstName: "Ada", lastName: "Lovelace" }
 *     → "Ada Lovelace"
 *   { firstName: "Ada", lastName: "Lovelace", address: {} }
 *     → "Ada Lovelace"
 *
 * Syntax to remember: destructuring (const { firstName, lastName } = user),
 *   template literals (`${a} ${b}`), optional chaining (user.address?.city),
 *   `!== undefined` checks (careful: age 0 is valid!)
 *
 * TS hints:
 *   - `interface` is like `type` for object shapes.
 *   - `age?: number` means the property may be missing (its type is number | undefined).
 */
export interface User {
  firstName: string;
  lastName: string;
  age?: number;
  address?: {
    city?: string;
  };
}

export function describeUser(user: User): string {
  throw new Error("TODO");
}

/**
 * Sort employees (multi-key sorting)
 *
 * Return a NEW array of employees sorted by:
 *   1. team, A→Z
 *   2. then salary, highest first
 *   3. then name, A→Z
 * Do not modify the input array.
 *
 * Syntax to remember:
 *   - array.sort((a, b) => ...) mutates in place! Copy first ([...arr]) or use arr.toSorted(...)
 *   - a comparator returns negative (a first), positive (b first) or 0 (equal)
 *   - numbers: a - b ascending, b - a descending
 *   - strings: a.localeCompare(b)
 *   - chaining tie-breakers: `return byTeam || bySalary || byName;`
 *     (works because 0 is falsy)
 */
export type Employee = {
  name: string;
  team: string;
  salary: number;
};

export function sortEmployees(employees: Employee[]): Employee[] {
  throw new Error("TODO");
}

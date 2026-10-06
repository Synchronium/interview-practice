/**
 * Load all (partial failures)
 *
 * Load every id IN PARALLEL using `load`. Some loads may fail. Don't let one
 * failure lose the rest: return the successes and a list of failures.
 *
 * const { succeeded, failed } = await loadAll(["1", "2", "3"], fetchUser);
 *   succeeded → [user1, user3]                      (same order as ids)
 *   failed    → [{ id: "2", error: "Not found" }]    (error = the Error's message)
 *
 * Syntax to remember:
 *   - Promise.all rejects as soon as ANY promise rejects. Not what we want here.
 *   - Promise.allSettled waits for all of them and gives you an array of
 *     { status: "fulfilled", value } or { status: "rejected", reason }.
 *   - ids.map(load) kicks every load off at once. Awaiting inside a for loop does them one by one.
 *
 * TS hints:
 *   - `reason` is typed `any`/`unknown`. Narrow it before reading .message:
 *     `reason instanceof Error ? reason.message : String(reason)`
 *   - Checking `result.status === "fulfilled"` lets TS know `result.value` exists
 *     ("discriminated union" narrowing; a great term to drop in an interview).
 */
export type LoadAllResult<T> = {
  succeeded: T[];
  failed: { id: string; error: string }[];
};

export async function loadAll<T>(
  ids: string[],
  load: (id: string) => Promise<T>,
): Promise<LoadAllResult<T>> {
  throw new Error("TODO");
}

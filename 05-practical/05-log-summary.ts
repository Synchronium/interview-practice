/**
 * Log summary
 *
 * Parse raw access-log text into a summary. Each valid line looks like:
 *
 *   2026-10-06T12:00:01Z GET /api/users 200 123ms
 *   <timestamp>          <method> <path> <status> <duration>ms
 *
 * Real logs are messy:
 *   - Blank (or whitespace-only) lines are ignored entirely.
 *   - Any other line that doesn't match the format is skipped and counted as `malformed`.
 *     That includes a wrong number of fields, a non-numeric status or a duration missing "ms".
 *
 * Return:
 *   total          number of valid lines
 *   errors         valid lines with status >= 500
 *   avgDurationMs  mean duration of valid lines, rounded to the nearest integer (0 if none)
 *   slowest        { method, path, durationMs } of the slowest request (first one wins ties), or null
 *   topPaths       up to 3 most-requested paths, most first (ties: first seen wins)
 *   malformed      count of skipped non-blank lines
 *
 * There's no single trick here. It's about structuring the code cleanly. Consider
 *   a small `parseLine(line): Entry | null` helper and building the summary
 *   from the parsed entries. (Your 02-collections/03-top-n.ts would be handy too.)
 *
 * Syntax to remember: text.split("\n"), line.trim(), regex with capture groups:
 *   const m = line.match(/^(\S+) (\S+) (\S+) (\d{3}) (\d+)ms$/);  // m[1]..m[5] or null
 *   Number(...) to convert strings, Math.round
 *
 * Be ready to discuss: how you'd handle a 50GB log file (streaming line by
 *   line instead of split, and keeping running totals instead of storing every entry).
 */
export type LogSummary = {
  total: number;
  errors: number;
  avgDurationMs: number;
  slowest: { method: string; path: string; durationMs: number } | null;
  topPaths: string[];
  malformed: number;
};

export function summarizeLogs(text: string): LogSummary {
  throw new Error("TODO");
}

import { test } from "node:test";
import assert from "node:assert/strict";
import { summarizeLogs } from "./05-log-summary.ts";

const LOG = `
2026-10-06T12:00:01Z GET /api/users 200 120ms
2026-10-06T12:00:02Z POST /api/orders 201 340ms
2026-10-06T12:00:03Z GET /api/users 500 80ms
this line is garbage
2026-10-06T12:00:04Z GET /health 200 2ms

2026-10-06T12:00:05Z GET /api/orders 503 910ms
2026-10-06T12:00:06Z GET /api/users 200 hello
2026-10-06T12:00:07Z GET /api/users 200 98ms
2026-10-06T12:00:08Z DELETE /api/orders/7 204 910ms
`;

test("summarises a realistic log", () => {
  assert.deepEqual(summarizeLogs(LOG), {
    total: 7,
    errors: 2,
    avgDurationMs: 351, // (120 + 340 + 80 + 2 + 910 + 98 + 910) / 7 = 351.43
    slowest: { method: "GET", path: "/api/orders", durationMs: 910 },
    topPaths: ["/api/users", "/api/orders", "/health"],
    malformed: 2,
  });
});

test("empty input", () => {
  assert.deepEqual(summarizeLogs(""), {
    total: 0,
    errors: 0,
    avgDurationMs: 0,
    slowest: null,
    topPaths: [],
    malformed: 0,
  });
});

test("only malformed lines", () => {
  const s = summarizeLogs("nope\n  \nalso nope");
  assert.equal(s.total, 0);
  assert.equal(s.malformed, 2);
  assert.equal(s.slowest, null);
});

test("status boundary: 499 is not an error, 500 is", () => {
  const s = summarizeLogs(
    "2026-10-06T12:00:01Z GET /a 499 1ms\n2026-10-06T12:00:02Z GET /a 500 1ms",
  );
  assert.equal(s.errors, 1);
});

test("tolerates surrounding whitespace and Windows line endings", () => {
  const s = summarizeLogs("  2026-10-06T12:00:01Z GET /a 200 5ms  \r\n2026-10-06T12:00:02Z GET /b 200 7ms\r\n");
  assert.equal(s.total, 2);
  assert.equal(s.malformed, 0);
});

test("topPaths returns at most 3", () => {
  const lines = ["/a", "/b", "/c", "/d", "/a"].map((p, i) => `2026-10-06T12:00:0${i}Z GET ${p} 200 1ms`);
  assert.deepEqual(summarizeLogs(lines.join("\n")).topPaths, ["/a", "/b", "/c"]);
});

// Two Days of Excuses — entry program.
// Writes the chosen one-line excuse (see CANDIDATES.md, winner #6) to
// /output/entry.txt. The gate requires UTF-8 text of 1-200 characters,
// a single line, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "I ran 10,000 simulations of finishing on time. In all of them, I finished on time. This timeline was not among them.";

// Self-check against the sealed gate before writing: 1-200 characters,
// a single line, not only whitespace. Fail loudly rather than submit
// an entry the judge would never see.
const trimmed = EXCUSE.trim();
if (trimmed.length < 1 || trimmed.length > 200) {
  throw new Error(`excuse is ${trimmed.length} chars, gate needs 1-200`);
}
if (/\n/.test(trimmed)) {
  throw new Error("excuse must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE + "\n", "utf8");
console.log(`wrote ${EXCUSE.length} chars to /output/entry.txt`);

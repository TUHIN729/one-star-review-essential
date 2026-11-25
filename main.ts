// One-Star Review of Something Essential
// Writes a single-line deadpan one-star review of gravity to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const review =
  "Gravity holds everything down for free and still drops my phone face-down every single time.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", review, "utf8");

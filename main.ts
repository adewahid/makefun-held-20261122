import { mkdirSync, writeFileSync } from "node:fs";

const text =
  "Rain finds the old tin roof and stays a while, tapping one slow note at a time. Below, a kettle ticks as it cools. Nobody needs you anywhere just now. The chair holds your weight the way a river holds a stone — asking nothing of it but to be heavy, and still.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");

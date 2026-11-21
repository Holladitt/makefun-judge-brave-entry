import { mkdirSync, writeFileSync } from "node:fs";

// Make the AI judge feel brave — one short text, written to relax the reader.
// The keeper's lamp: the same small task, done the same steady way,
// whether or not anyone is watching.
const TEXT =
  "The keeper climbs to the lamp room at dusk. The sea does what it does. He trims the wick, strikes the match, and the light comes on over the water, whether or not anyone is watching.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");

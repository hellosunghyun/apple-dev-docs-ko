import { Command } from "commander";
import { readJson } from "../lib/fs.js";
import { validateTranslationOutput } from "../lib/validate.js";
import type { TranslationBatchInput, TranslationBatchOutput } from "../lib/types.js";

const program = new Command();
program.requiredOption("--input <file>").requiredOption("--output <file>").parse();
const options = program.opts<{ input: string; output: string }>();

const input = await readJson<TranslationBatchInput>(options.input);
const output = await readJson<TranslationBatchOutput>(options.output);
const errors = validateTranslationOutput(input, output);
if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log("translation output valid");


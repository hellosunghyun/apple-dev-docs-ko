import { Command } from "commander";
import { validateWithSchema } from "../lib/validate.js";

const program = new Command();
program.argument("<file>").argument("<schema>").parse();
const [file, schema] = program.args;
await validateWithSchema(file, schema);
console.log("json schema valid");


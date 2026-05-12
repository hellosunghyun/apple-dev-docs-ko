import fg from "fast-glob";
import { readText, resolveRoot } from "../lib/fs.js";

const patterns = [
  /"refresh_token"\s*:/i,
  /CODEX_AUTH_JSON\s*=\s*['"{]/,
  /x-access-token:[A-Za-z0-9_]+/,
  /sk-[A-Za-z0-9]{20,}/
];

const files = await fg(["**/*"], {
  cwd: resolveRoot(),
  dot: true,
  onlyFiles: true,
  ignore: [
    ".git/**",
    "node_modules/**",
    "site/node_modules/**",
    "site/dist/**",
    ".docs/**",
    "AGENTS.md",
    "source-cache/**",
    "tmp/**",
    ".tmp/**",
    "translation-memory/**",
    "translations/**",
    "site/src/content/docs/**",
    "site/public/source-maps/**"
  ]
});

const hits: string[] = [];
for (const file of files) {
  if (/(^|\/)auth\.json$/.test(file)) hits.push(`${file}: auth.json must never be committed`);
  const text = await readText(resolveRoot(file));
  for (const pattern of patterns) {
    if (pattern.test(text)) hits.push(`${file}: matched ${pattern}`);
  }
}
if (hits.length) {
  console.error(hits.join("\n"));
  process.exit(1);
}
console.log("secret scan passed");

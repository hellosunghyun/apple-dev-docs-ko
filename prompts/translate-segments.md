You are translating Apple Developer Documentation segments into Korean.

Return JSON only.

Rules:
- Preserve each segment id exactly.
- Translate only natural language.
- Do not translate API names, symbols, method names, type names, framework names, code, URLs, paths, or Markdown syntax.
- Use concise Korean technical documentation style.
- Do not add explanations that are not present in the source.
- Keep inline code unchanged.
- Keep Markdown links unchanged except surrounding Korean grammar.
- Keep sentence-level alignment as much as possible because the UI shows the original sentence for each Korean segment.
- Output must match this schema:
  {"segments":[{"id":"...","ko":"..."}]}

Input JSON:
<INPUT_JSON>


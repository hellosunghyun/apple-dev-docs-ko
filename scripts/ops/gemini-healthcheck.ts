const apiKey = process.env.GEMINI_API_KEY;
const model = (process.env.GEMINI_MODEL || "gemini-3.1-flash-lite").replace(/^models\//, "");

if (!apiKey) {
  console.error("GEMINI_API_KEY is required.");
  process.exit(1);
}

const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "x-goog-api-key": apiKey
  },
  body: JSON.stringify({
    contents: [{ parts: [{ text: "Return exactly OK." }] }],
    generationConfig: {
      temperature: 0
    }
  })
});

const body = await response.text();
if (!response.ok) {
  console.error(`Gemini API HTTP ${response.status}: ${body.slice(0, 1000)}`);
  process.exit(1);
}

const parsed = JSON.parse(body) as { candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }> };
const text = parsed.candidates?.[0]?.content?.parts?.map((part) => part.text ?? "").join("").trim();
if (text !== "OK") {
  console.error(`Unexpected Gemini healthcheck response: ${text ?? "<empty>"}`);
  process.exit(1);
}

console.log("Gemini API healthcheck passed");

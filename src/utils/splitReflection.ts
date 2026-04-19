/** Split prose into two blocks for story layout (matches detail page rhythm). */
export function splitReflection(text: string): { before: string; after: string } {
  const sentences = text
    .split(/(?<=[.!?])\s+/)
    .map((s) => s.trim())
    .filter(Boolean);
  if (sentences.length <= 1) {
    return { before: text, after: "" };
  }
  const mid = Math.ceil(sentences.length / 2);
  return {
    before: sentences.slice(0, mid).join(" "),
    after: sentences.slice(mid).join(" "),
  };
}

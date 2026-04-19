/** Short excerpt for shop cards; avoids mid-word cuts when possible. */
export function excerptPoem(text: string, maxChars = 120): string {
  const t = text.replace(/\s+/g, " ").trim();
  if (t.length <= maxChars) return t;
  const slice = t.slice(0, maxChars);
  const sp = slice.lastIndexOf(" ");
  const cut = sp > Math.min(24, maxChars * 0.35) ? slice.slice(0, sp) : slice;
  return `${cut.trim()}…`;
}

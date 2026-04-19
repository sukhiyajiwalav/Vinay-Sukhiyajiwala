/**
 * Copies book scans into public/images:
 *   Photos/Book/Front Cover Page.png → boond-book-front-cover.png
 *   Photos/Book/Back Cover Page.png  → boond-book-back-cover.png
 *
 * Run: npm run sync-boond-book-cover
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const bookDir = path.join(root, "Photos", "Book");

const PAIRS = [
  ["Front Cover Page.png", "boond-book-front-cover.png"],
  ["Back Cover Page.png", "boond-book-back-cover.png"],
];

fs.mkdirSync(path.join(root, "public", "images"), { recursive: true });

for (const [srcName, destName] of PAIRS) {
  const src = path.join(bookDir, srcName);
  const dest = path.join(root, "public", "images", destName);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`${src} → ${dest}`);
  } else {
    console.warn(`Missing: ${src}`);
  }
}

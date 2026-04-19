/**
 * Copies Photos/Mine/214A9735.JPG → public/images/about-section-portrait.jpg
 * (Who is Vinay — home About section.)
 *
 * Run from repo root: npm run sync-about-section-portrait
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const SRC = path.join(root, "Photos", "Mine", "214A9735.JPG");
const DEST = path.join(root, "public", "images", "about-section-portrait.jpg");

fs.mkdirSync(path.dirname(DEST), { recursive: true });

if (fs.existsSync(SRC)) {
  fs.copyFileSync(SRC, DEST);
  console.log(`${SRC} → ${DEST}`);
} else {
  console.warn(`Missing: ${SRC}`);
  process.exitCode = 0;
}

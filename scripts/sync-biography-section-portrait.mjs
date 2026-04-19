/**
 * Copies Photos/Mine/6e2cf71e-2c23-4707-984e-ff57236ec67f.jpg
 * → public/images/biography-section-portrait.jpg
 * (/biography — “Biography” section, image beside text.)
 *
 * Run: npm run sync-biography-section-portrait
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const SRC = path.join(
  root,
  "Photos",
  "Mine",
  "6e2cf71e-2c23-4707-984e-ff57236ec67f.jpg"
);
const DEST = path.join(root, "public", "images", "biography-section-portrait.jpg");

fs.mkdirSync(path.dirname(DEST), { recursive: true });

if (fs.existsSync(SRC)) {
  fs.copyFileSync(SRC, DEST);
  console.log(`${SRC} → ${DEST}`);
} else {
  console.warn(`Missing: ${SRC}`);
  process.exitCode = 0;
}

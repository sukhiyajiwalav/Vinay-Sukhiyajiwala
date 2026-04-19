/**
 * Rotates selected sketch images 90° anti-clockwise.
 *
 * For each folder:
 * - Copies the current 1.jpg → 1-original.jpg (backup, only once)
 * - Writes rotated output to 1.jpg (so the site uses it)
 * - Also writes a separate rotated copy as 1-rotated.jpg
 *
 * Run: node scripts/rotate-sketches-ccw-90.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const TARGETS = ["Banaras", "Age 30", "Baby Boy"];
const BASE = path.join(root, "Photos", "Sketch");

async function rotateOne(folderName) {
  const dir = path.join(BASE, folderName);
  const src = path.join(dir, "1.jpg");
  const backup = path.join(dir, "1-original.jpg");
  const rotatedCopy = path.join(dir, "1-rotated.jpg");

  if (!fs.existsSync(src)) {
    console.warn(`Missing: ${src}`);
    return;
  }

  if (!fs.existsSync(backup)) {
    fs.copyFileSync(src, backup);
    console.log(`Backup: ${backup}`);
  }

  const buf = await sharp(src).rotate(-90).toBuffer();
  fs.writeFileSync(src, buf);
  fs.writeFileSync(rotatedCopy, buf);
  console.log(`Rotated: ${src}`);
  console.log(`Rotated copy: ${rotatedCopy}`);
}

for (const name of TARGETS) {
  // eslint-disable-next-line no-await-in-loop
  await rotateOne(name);
}


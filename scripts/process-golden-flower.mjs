/**
 * One-off: remove white/light background from the marigold PNG, trim, write to public.
 * Run: node scripts/process-golden-flower.mjs
 */
import { existsSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const candidates = [
  join(root, "Photos", "Gloden Flower.png"),
  join(root, "public", "images", "golden-flower.png"),
];

const inputPath = candidates.find((p) => existsSync(p));
if (!inputPath) {
  console.error("No source image found (tried Photos/Gloden Flower.png and public copy).");
  process.exit(1);
}

const outputPath = join(root, "public", "images", "golden-flower.png");

const { data, info } = await sharp(inputPath)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height } = info;
const channels = info.channels;

for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const i = (y * width + x) * channels;
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const a = data[i + 3];

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const chroma = max - min;
    const avg = (r + g + b) / 3;
    const distWhite = Math.hypot(255 - r, 255 - g, 255 - b);

    // Keep saturated pixels (gold thread, shadows)
    if (chroma > 38) {
      continue;
    }

    let newA = a;

    if (distWhite < 32) {
      newA = 0;
    } else if (distWhite < 58) {
      newA = Math.round((a * (distWhite - 32)) / 26);
    } else if (chroma < 24 && avg > 212) {
      const fade = Math.max(0, Math.min(1, (248 - avg) / 38));
      newA = Math.round(a * fade);
    }

    data[i + 3] = newA;
  }
}

await sharp(data, {
  raw: { width, height, channels: 4 },
})
  .png({ compressionLevel: 9 })
  .trim({ threshold: 2 })
  .toFile(outputPath);

const meta = await sharp(outputPath).metadata();
console.log(`Wrote ${outputPath} (${meta.width}×${meta.height}) from ${inputPath}`);

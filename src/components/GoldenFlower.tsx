import "./styles/GoldenFlower.css";

const FLOWER_SRC = "/images/golden-flower.png";

/** Trimmed asset size after `node scripts/process-golden-flower.mjs` — keeps layout proportional. */
const FLOWER_NATURAL_W = 293;
const FLOWER_NATURAL_H = 316;

interface GoldenFlowerProps {
  size?: number;
  className?: string;
  /** Short accessible description; omit for decorative use (empty alt). */
  alt?: string;
}

/**
 * Marigold motif — transparent PNG (`Photos/Gloden Flower.png` → `public/images/golden-flower.png`).
 */
export default function GoldenFlower({
  size = 32,
  className = "",
  alt = "",
}: GoldenFlowerProps) {
  const decorative = !alt;
  const h = Math.round((size * FLOWER_NATURAL_H) / FLOWER_NATURAL_W);
  return (
    <img
      src={FLOWER_SRC}
      alt={alt}
      width={size}
      height={h}
      className={`golden-flower-img ${className}`.trim()}
      aria-hidden={decorative}
      loading="lazy"
      decoding="async"
      draggable={false}
    />
  );
}

const SECTION_FLOWER_SIZES = [54, 64, 50] as const;

export function SectionFlowers({ className = "" }: { className?: string }) {
  return (
    <div className={`section-flowers ${className}`.trim()} aria-hidden>
      {SECTION_FLOWER_SIZES.map((size, i) => (
        <GoldenFlower key={i} size={size} />
      ))}
    </div>
  );
}

/** Single motif below Works epigraph — brand continuity on home + gallery. */
export function WorksEpigraphMotif() {
  return (
    <div className="work-shop-motif" aria-hidden>
      <GoldenFlower size={40} className="golden-flower--section" />
    </div>
  );
}

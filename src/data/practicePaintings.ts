import { practiceImagesBySlug } from "./practiceImages.generated";

export interface PracticePainting {
  slug: string;
  title: string;
  /** One line: medium · format · year */
  metaLine: string;
  description: string;
}

const PRACTICE_META: PracticePainting[] = [
  {
    slug: "golden-hour",
    title: "Golden Hour",
    metaLine: "Acrylic on Canvas · Diptych · Two Panels · 2018",
    description:
      "Two panels. One moment. White magnolias open against a warm golden-amber field, their petals catching a light that seems to come from within the canvas itself. Dark branches curl and wind beneath them — intricate, deliberate, grounding the luminance above. Together the panels form a single breath — expansion and stillness held in the same frame. A painting about fullness. About the moment just before everything changes.",
  },
  {
    slug: "insistence-of-red",
    title: "The Insistence of Red",
    metaLine:
      "Acrylic on Canvas · Embossed · 61 × 31 × 2 cm · 2018",
    description:
      "Three red poppies push through a textured teal surface — not painted, but built. Each flower is embossed, three-dimensional, physically demanding its place on the canvas. The rough, granular texture of the background makes their emergence feel earned. This is not a painting about flowers. It is a painting about the stubbornness of life — the quiet refusal to stay flat.",
  },
];

export type PracticePaintingResolved = PracticePainting & { images: string[] };

export const practicePaintings: PracticePaintingResolved[] = PRACTICE_META.map(
  (p) => ({
    ...p,
    images: practiceImagesBySlug[p.slug] ?? [],
  })
);

export function getPracticePainting(
  slug: string | undefined
): PracticePaintingResolved | undefined {
  if (!slug) return undefined;
  return practicePaintings.find((p) => p.slug === slug);
}

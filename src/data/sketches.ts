import { sketchImagesBySlug } from "./sketchImages.generated";
import { sketchesMeta } from "./sketches.generated";

export type Sketch = {
  slug: string;
  title: string;
  images: string[];
};

export const sketches: Sketch[] = sketchesMeta.map((s) => ({
  ...s,
  images: sketchImagesBySlug[s.slug] ?? [],
}));

export function getSketch(slug: string | undefined): Sketch | undefined {
  if (!slug) return undefined;
  return sketches.find((s) => s.slug === slug);
}

export const sketchHubCoverImage = "/images/sketch-series-cover.jpg";

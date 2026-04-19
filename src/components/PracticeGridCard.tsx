import { Link } from "react-router-dom";
import WorkImage from "./WorkImage";
import "./styles/PaintingShop.css";
import type { PracticePaintingResolved } from "../data/practicePaintings";
import { excerptPoem } from "../utils/poemExcerpt";

interface PracticeGridCardProps {
  painting: PracticePaintingResolved;
  workLocationState?: { from: string };
}

export default function PracticeGridCard({
  painting,
  workLocationState,
}: PracticeGridCardProps) {
  const cover = painting.images[0] ?? "";
  const excerpt = excerptPoem(painting.description, 160);

  return (
    <article className="painting-shop-card painting-shop-card--practice" role="listitem">
      <Link
        to={`/gallery/practice-work/${painting.slug}`}
        state={workLocationState}
        className="painting-shop-card-link"
        data-cursor="disable"
      >
        <div className="painting-shop-card-wall">
          <WorkImage
            image={cover}
            alt={painting.title}
            gridCard
            frameTone="white"
          />
        </div>

        <div className="painting-shop-card-body">
          <h3 className="painting-shop-card-title">{painting.title}</h3>
          <p className="painting-shop-card-meta painting-shop-card-meta--practice">
            {painting.metaLine}
          </p>

          <div className="painting-shop-card-rule" aria-hidden />

          <p className="painting-shop-card-poem-en painting-shop-card-story-excerpt">
            {excerpt}
          </p>

          <p className="painting-shop-card-price">Price on request</p>
        </div>
      </Link>
    </article>
  );
}

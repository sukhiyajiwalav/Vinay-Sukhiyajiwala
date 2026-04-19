import { Link } from "react-router-dom";
import WorkImage from "./WorkImage";
import "./styles/PaintingShop.css";
import type { Painting } from "../data/paintings";
import { excerptPoem } from "../utils/poemExcerpt";

interface PaintingGridCardProps {
  painting: Painting;
  /** `location.state.from` on the work page — drives the painting “Back” target. */
  workLocationState?: { from: string };
}

/**
 * Sylvie-style shop card: wall + image, titles, meta, poem lines, price.
 */
export default function PaintingGridCard({
  painting,
  workLocationState,
}: PaintingGridCardProps) {
  const poemHi = excerptPoem(painting.poem, 130);
  const poemEn = excerptPoem(painting.poemEnglish, 150);

  return (
    <article className="painting-shop-card" role="listitem">
      <Link
        to={`/work/${painting.number}`}
        state={workLocationState}
        className="painting-shop-card-link"
        data-cursor="disable"
      >
        <div className="painting-shop-card-wall">
          <WorkImage
            image={painting.image}
            alt={`${painting.title} — ${painting.titleHindi}`}
            gridCard
            frameTone="white"
          />
        </div>

        <div className="painting-shop-card-body">
          <h3 className="painting-shop-card-title">{painting.title}</h3>
          <p className="painting-shop-card-title-hi" lang="hi">
            {painting.titleHindi}
          </p>
          <p className="painting-shop-card-meta">
            {painting.year}
            <span className="painting-shop-card-meta-sep" aria-hidden>
              {" "}
              ·{" "}
            </span>
            {painting.medium}
            <span className="painting-shop-card-meta-sep" aria-hidden>
              {" "}
              ·{" "}
            </span>
            {painting.size}
          </p>

          <div className="painting-shop-card-rule" aria-hidden />

          <p className="painting-shop-card-poem-hi" lang="hi">
            {poemHi}
          </p>
          <p className="painting-shop-card-poem-en">{poemEn}</p>

          <p className="painting-shop-card-price">Price on request</p>
        </div>
      </Link>
    </article>
  );
}

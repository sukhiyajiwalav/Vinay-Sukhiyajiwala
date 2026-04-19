import { Link } from "react-router-dom";
import WorkImage from "./WorkImage";
import "./styles/PaintingShop.css";
import type { Sketch } from "../data/sketches";

interface SketchGridCardProps {
  sketch: Sketch;
  workLocationState?: { from: string };
}

export default function SketchGridCard({ sketch, workLocationState }: SketchGridCardProps) {
  const cover = sketch.images[0] ?? "";

  return (
    <article className="painting-shop-card painting-shop-card--sketch" role="listitem">
      <Link
        to={`/gallery/sketches/${sketch.slug}`}
        state={workLocationState}
        className="painting-shop-card-link"
        data-cursor="disable"
        aria-label={`${sketch.title}, view sketch`}
      >
        <div className="painting-shop-card-wall">
          <WorkImage image={cover} alt={sketch.title} gridCard frameTone="white" />
        </div>

        <div className="painting-shop-card-body">
          <h3 className="painting-shop-card-title">{sketch.title}</h3>
          <p className="painting-shop-card-price">Price on request</p>
        </div>
      </Link>
    </article>
  );
}


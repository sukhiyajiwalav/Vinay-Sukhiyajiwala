import GoldenFlower from "./GoldenFlower";
import "./styles/Sketches.css";

export interface SketchesProps {
  /** When true, used on /gallery below the works grid (not on home). */
  embedded?: boolean;
}

const Sketches = ({ embedded = false }: SketchesProps) => {
  return (
    <section
      className={`sketches-section${embedded ? " sketches-section--embedded" : ""}`}
      id="sketches"
    >
      <div className={`sketches-inner${embedded ? "" : " section-container"}`}>
        <div className="sketches-title-row">
          <h2 className="sketches-title">Sketches</h2>
        </div>
        <p className="sketches-lead">
          Works on paper and studies — a selection will appear here.
        </p>
        <div className="sketches-motif" aria-hidden>
          <GoldenFlower size={36} className="golden-flower--sketch" />
        </div>
      </div>
    </section>
  );
};

export default Sketches;

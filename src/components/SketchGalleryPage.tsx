import { useEffect } from "react";
import { WorksEpigraphMotif } from "./GoldenFlower";
import PageBackLink from "./PageBackLink";
import SketchGridCard from "./SketchGridCard";
import { sketches } from "../data/sketches";
import "./styles/Work.css";
import "./styles/WorksGalleryPage.css";

const SketchGalleryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="works-gallery-page">
      <PageBackLink
        variant="onLight"
        to="/gallery"
        label="Back"
        ariaLabel="Back to Art Gallery"
      />
      <div className="works-gallery-page-inner section-container">
        <div className="takhleeq-intro-wrap">
          <header className="work-shop-header works-gallery-shop-header">
            <h1 className="work-shop-heading">Sketches</h1>
            <p className="work-shop-series">Works on paper</p>
            <p className="work-shop-epigraph">
              <span className="work-shop-epigraph-line">
                Line, study, and seeing in quick form —
              </span>
              <span className="work-shop-epigraph-line">
                each page a small decision held.
              </span>
            </p>
            <WorksEpigraphMotif />
          </header>
        </div>

        <div className="painting-shop-grid works-gallery-grid" role="list">
          {sketches.map((sketch) => (
            <SketchGridCard
              key={sketch.slug}
              sketch={sketch}
              workLocationState={{ from: "/gallery/sketches" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SketchGalleryPage;

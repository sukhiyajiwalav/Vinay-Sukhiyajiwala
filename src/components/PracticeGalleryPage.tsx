import { useEffect } from "react";
import { WorksEpigraphMotif } from "./GoldenFlower";
import PageBackLink from "./PageBackLink";
import PracticeGridCard from "./PracticeGridCard";
import { practicePaintings } from "../data/practicePaintings";
import "./styles/Work.css";
import "./styles/WorksGalleryPage.css";

const PracticeGalleryPage = () => {
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
            <h1 className="work-shop-heading">Practice Work</h1>
            <p className="work-shop-series">Studio · exercises</p>
            <p className="work-shop-epigraph">
              <span className="work-shop-epigraph-line">
                Studies, exercises, and studio experiments —
              </span>
              <span className="work-shop-epigraph-line">
                process and repetition outside the main series.
              </span>
            </p>
            <WorksEpigraphMotif />
          </header>
        </div>

        <div className="painting-shop-grid works-gallery-grid" role="list">
          {practicePaintings.map((painting) => (
            <PracticeGridCard
              key={painting.slug}
              painting={painting}
              workLocationState={{ from: "/gallery/practice-work" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PracticeGalleryPage;

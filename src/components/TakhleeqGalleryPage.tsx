import { useEffect } from "react";
import { WorksEpigraphMotif } from "./GoldenFlower";
import PageBackLink from "./PageBackLink";
import PaintingGridCard from "./PaintingGridCard";
import { paintings } from "../data/paintings";
import "./styles/Work.css";
import "./styles/WorksGalleryPage.css";

const TakhleeqGalleryPage = () => {
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
            <h1 className="work-shop-heading">Takhleeq</h1>
            <p className="work-shop-series">Series · 2023–2025</p>
            <p className="work-shop-epigraph">
              <span className="work-shop-epigraph-line">
                Each painting a poem. Each poem a painting.
              </span>
              <span className="work-shop-epigraph-line">
                Neither complete without the other.
              </span>
            </p>
            <WorksEpigraphMotif />
          </header>
        </div>

        <div className="painting-shop-grid works-gallery-grid" role="list">
          {paintings.map((painting) => (
            <PaintingGridCard
              key={painting.number}
              painting={painting}
              workLocationState={{ from: "/gallery/takhleeq" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TakhleeqGalleryPage;

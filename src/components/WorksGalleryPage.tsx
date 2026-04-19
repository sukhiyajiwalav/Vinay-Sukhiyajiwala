import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageBackLink from "./PageBackLink";
import "./styles/WorksGalleryPage.css";

/** Art Gallery hub — series covers from Photos (synced to public/images) */
const TAKHLEEQ_HUB_COVER = "/images/takhleeq-series-cover.jpg";
const SKETCH_HUB_COVER = "/images/sketch-series-cover.jpg";
const PRACTICE_HUB_COVER = "/images/practice-series-cover.jpg";

const takhleeqCover = TAKHLEEQ_HUB_COVER;
const sketchCover = SKETCH_HUB_COVER;
const practiceCover = PRACTICE_HUB_COVER;

/** Hub — Takhleeq, Sketch, Practice Work */
const WorksGalleryPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="works-gallery-page">
      <PageBackLink variant="onLight" to="/" label="Home" ariaLabel="Back to home" />
      <div className="works-gallery-page-inner section-container">
        <header className="gallery-hub">
          <p className="gallery-hub-artist">Vinay Sukhiyajiwala</p>
          <h1 className="gallery-hub-title">Art Gallery</h1>
          <p className="gallery-hub-filters" aria-label="Gallery sections">
            <Link to="/gallery/takhleeq" className="gallery-hub-filter-link">
              Takhleeq
            </Link>
            <span className="gallery-hub-filter-sep" aria-hidden>
              ·
            </span>
            <Link to="/gallery/sketches" className="gallery-hub-filter-link">
              Sketch
            </Link>
            <span className="gallery-hub-filter-sep" aria-hidden>
              ·
            </span>
            <Link
              to="/gallery/practice-work"
              className="gallery-hub-filter-link"
            >
              Practice Work
            </Link>
          </p>

          <nav className="gallery-hub-cards" aria-label="Gallery categories">
            <Link to="/gallery/takhleeq" className="gallery-hub-card">
              <div className="gallery-hub-card-media">
                {takhleeqCover ? (
                  <img
                    src={takhleeqCover}
                    alt=""
                    className="gallery-hub-card-img"
                    loading="eager"
                    decoding="async"
                  />
                ) : null}
              </div>
              <span className="gallery-hub-card-label">Takhleeq</span>
            </Link>
            <Link to="/gallery/sketches" className="gallery-hub-card">
              <div className="gallery-hub-card-media">
                {sketchCover ? (
                  <img
                    src={sketchCover}
                    alt=""
                    className="gallery-hub-card-img"
                    loading="eager"
                    decoding="async"
                  />
                ) : null}
              </div>
              <span className="gallery-hub-card-label">Sketch</span>
            </Link>
            <Link to="/gallery/practice-work" className="gallery-hub-card">
              <div className="gallery-hub-card-media">
                {practiceCover ? (
                  <img
                    src={practiceCover}
                    alt=""
                    className="gallery-hub-card-img"
                    loading="eager"
                    decoding="async"
                  />
                ) : null}
              </div>
              <span className="gallery-hub-card-label">Practice Work</span>
            </Link>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default WorksGalleryPage;

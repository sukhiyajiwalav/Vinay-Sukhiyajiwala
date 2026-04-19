import { Link } from "react-router-dom";
import { paintings } from "../data/paintings";
import { practicePaintings } from "../data/practicePaintings";
import { getSketch } from "../data/sketches";
import "./styles/VinayGallery.css";

const insistenceOfRed = practicePaintings.find(
  (p) => p.slug === "insistence-of-red"
);

const firstTakhleeq = paintings[0];
const societySketch = getSketch("society");

const VinayGallery = () => {
  const practiceImage = insistenceOfRed?.images[0] ?? "";
  const practiceTitle = insistenceOfRed?.title ?? "The Insistence of Red";
  const practiceSub = (
    insistenceOfRed?.metaLine?.split("·")[0]?.trim() ?? "Acrylic on Canvas"
  ).toUpperCase();

  const societyImage = societySketch?.images[0] ?? "";
  const societyTitle = societySketch?.title ?? "Society";

  return (
    <section
      className="vinay-gallery-section"
      id="vinay-gallery"
      aria-labelledby="vinay-gallery-heading"
    >
      <div className="vinay-gallery-inner section-container">
        <h2 id="vinay-gallery-heading" className="vinay-gallery-heading">
          <span className="vinay-gallery-heading-lead">Vinay&apos;s </span>
          <span className="vinay-gallery-heading-accent">Gallery</span>
        </h2>

        <ul className="vinay-gallery-grid">
          <li key={firstTakhleeq.number} className="vinay-gallery-grid-item">
            <Link
              to={`/work/${firstTakhleeq.number}`}
              state={{ from: "/" }}
              className="vinay-gallery-card"
              data-cursor="disable"
              aria-label={`${firstTakhleeq.title}, view painting`}
            >
              <div className="vinay-gallery-card-media">
                <img
                  src={firstTakhleeq.image}
                  alt=""
                  className="vinay-gallery-card-img"
                  loading="lazy"
                  decoding="async"
                  aria-hidden
                />
                <div className="vinay-gallery-card-overlay" aria-hidden>
                  <span className="vinay-gallery-card-title">
                    {firstTakhleeq.title}
                  </span>
                  <span className="vinay-gallery-card-sub">
                    {firstTakhleeq.medium.toUpperCase()}
                  </span>
                </div>
              </div>
            </Link>
          </li>
          <li className="vinay-gallery-grid-item">
            <Link
              to="/gallery/sketches/society"
              state={{ from: "/" }}
              className="vinay-gallery-card"
              data-cursor="disable"
              aria-label={`${societyTitle}, view sketch`}
            >
              <div className="vinay-gallery-card-media">
                <img
                  src={societyImage}
                  alt=""
                  className="vinay-gallery-card-img"
                  loading="lazy"
                  decoding="async"
                  aria-hidden
                />
                <div className="vinay-gallery-card-overlay" aria-hidden>
                  <span className="vinay-gallery-card-title">{societyTitle}</span>
                  <span className="vinay-gallery-card-sub">SKETCH</span>
                </div>
              </div>
            </Link>
          </li>
          <li className="vinay-gallery-grid-item">
            <Link
              to="/gallery/practice-work/insistence-of-red"
              state={{ from: "/" }}
              className="vinay-gallery-card"
              data-cursor="disable"
              aria-label={`${practiceTitle}, view painting`}
            >
              <div className="vinay-gallery-card-media">
                <img
                  src={practiceImage}
                  alt=""
                  className="vinay-gallery-card-img"
                  loading="lazy"
                  decoding="async"
                  aria-hidden
                />
                <div className="vinay-gallery-card-overlay" aria-hidden>
                  <span className="vinay-gallery-card-title">{practiceTitle}</span>
                  <span className="vinay-gallery-card-sub">{practiceSub}</span>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default VinayGallery;

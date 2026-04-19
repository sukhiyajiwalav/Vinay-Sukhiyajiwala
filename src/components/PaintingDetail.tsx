import { useEffect, useMemo, useState } from "react";
import {
  Link,
  Navigate,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { paintings } from "../data/paintings";
import { taglineForWorkNumber } from "../data/paintingTaglines";
import { splitReflection } from "../utils/splitReflection";
import PageBackLink from "./PageBackLink";
import PaintingLightbox from "./PaintingLightbox";
import "./styles/PaintingDetail.css";

function normalizeWorkNumber(raw: string | undefined): string | null {
  if (!raw || !/^\d{1,2}$/.test(raw.trim())) return null;
  return raw.trim().padStart(2, "0");
}

type WorkDetailState = { from?: string };

const PaintingDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { workNumber: rawParam } = useParams<{ workNumber: string }>();
  const workNumber = normalizeWorkNumber(rawParam);
  const painting = workNumber
    ? paintings.find((p) => p.number === workNumber)
    : undefined;

  const backTo =
    (location.state as WorkDetailState | null)?.from ?? "/gallery/takhleeq";

  const backAriaLabel =
    backTo === "/"
      ? "Back to home"
      : backTo === "/gallery/takhleeq"
        ? "Back to Takhleeq gallery"
        : backTo === "/gallery/sketches"
          ? "Back to Sketches"
          : backTo === "/gallery/practice-work"
            ? "Back to Practice Work"
            : backTo === "/gallery"
            ? "Back to Art Gallery"
            : "Back";

  const reflection = useMemo(
    () => (painting ? splitReflection(painting.poemEnglish) : { before: "", after: "" }),
    [painting]
  );

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  /** Selected image in the strip below the hero (thumbnails + main preview) */
  const [galleryFocusIndex, setGalleryFocusIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [workNumber]);

  useEffect(() => {
    setGalleryFocusIndex(0);
  }, [workNumber]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (lightboxIndex !== null) {
        setLightboxIndex(null);
        return;
      }
      navigate(backTo);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigate, backTo, lightboxIndex]);

  if (!workNumber || !painting) {
    return <Navigate to="/" replace />;
  }

  const tagline = taglineForWorkNumber(painting.number);
  const imgs = painting.images;
  /** Vertical strip: up to 5 thumbs; if more photos exist, last tile is +N (opens lightbox at first “extra”) */
  const MAX_STRIP_THUMBS = 5;
  const hasOverflow = imgs.length > MAX_STRIP_THUMBS;
  const thumbIndices = hasOverflow
    ? Array.from({ length: MAX_STRIP_THUMBS }, (_, i) => i)
    : imgs.map((_, i) => i);
  const overflowExtra = hasOverflow ? imgs.length - MAX_STRIP_THUMBS : 0;

  return (
    <div className="painting-detail-page" aria-labelledby="painting-detail-hero-title">
      <PaintingLightbox
        open={lightboxIndex !== null}
        initialIndex={lightboxIndex ?? 0}
        images={imgs}
        title={painting.title}
        onClose={() => setLightboxIndex(null)}
      />
      <PageBackLink
        variant="overlay"
        to={backTo}
        label="Back"
        ariaLabel={backAriaLabel}
      />

      <header className="painting-detail-hero">
        <div className="painting-detail-hero-visual">
          <img
            src={imgs[0]}
            alt=""
            className="painting-detail-hero-img"
            loading="eager"
            decoding="async"
          />
          <button
            type="button"
            className="painting-detail-hero-open"
            onClick={() => setLightboxIndex(0)}
            aria-label="Open full screen gallery"
          />
          <div className="painting-detail-hero-scrim" aria-hidden />
        </div>
        <div className="painting-detail-hero-text">
          <p className="painting-detail-hero-kicker">Takhleeq · Work</p>
          <h1 id="painting-detail-hero-title" className="painting-detail-hero-title">
            {painting.title}
          </h1>
          <p className="painting-detail-hero-meta">
            Medium: {painting.medium} · Size: {painting.size} · Year:{" "}
            {painting.year}
          </p>
        </div>
      </header>

      {imgs.length > 0 ? (
        <section
          className="painting-detail-strip section-container"
          aria-label="Painting photos"
        >
          <div
            className={
              imgs.length > 1
                ? "painting-detail-strip-inner"
                : "painting-detail-strip-inner painting-detail-strip-inner--solo"
            }
          >
            {imgs.length > 1 ? (
              <ul className="painting-detail-strip-thumbs" role="list">
                {thumbIndices.map((i) => (
                  <li key={i} className="painting-detail-strip-thumb-item">
                    <button
                      type="button"
                      className={
                        galleryFocusIndex === i
                          ? "painting-detail-strip-thumb is-active"
                          : "painting-detail-strip-thumb"
                      }
                      onClick={() => setGalleryFocusIndex(i)}
                      aria-label={`Photo ${i + 1} of ${imgs.length}`}
                      aria-pressed={galleryFocusIndex === i}
                    >
                      <span className="painting-detail-strip-thumb-frame">
                        <img
                          src={imgs[i]}
                          alt=""
                          loading="lazy"
                          decoding="async"
                        />
                      </span>
                    </button>
                  </li>
                ))}
                {hasOverflow ? (
                  <li className="painting-detail-strip-thumb-item">
                    <button
                      type="button"
                      className="painting-detail-strip-overflow"
                      onClick={() => setLightboxIndex(MAX_STRIP_THUMBS)}
                      aria-label={`Open gallery — ${overflowExtra} more photos`}
                    >
                      <span className="painting-detail-strip-overflow-text">
                        +{overflowExtra}
                      </span>
                    </button>
                  </li>
                ) : null}
              </ul>
            ) : null}

            <div className="painting-detail-strip-main">
              <button
                type="button"
                className="painting-detail-strip-main-open"
                onClick={() => setLightboxIndex(galleryFocusIndex)}
                aria-label="Open full screen gallery"
              >
                <img
                  src={imgs[galleryFocusIndex] ?? imgs[0]}
                  alt={`${painting.title} — ${galleryFocusIndex + 1} of ${imgs.length}`}
                  className="painting-detail-strip-main-img"
                  loading={imgs.length > 1 ? "lazy" : "eager"}
                  decoding="async"
                />
              </button>
            </div>
          </div>
        </section>
      ) : null}

      <article className="painting-detail-article">
        <div className="painting-detail-article-inner section-container">
          <h2 className="painting-detail-story-heading">Story</h2>

          <div className="painting-detail-story-body">
            <p className="painting-detail-story-lead">{tagline}</p>

            <p className="painting-detail-story-text">{reflection.before}</p>

            {reflection.after ? (
              <p className="painting-detail-story-text">{reflection.after}</p>
            ) : null}

            {painting.titleHindi ? (
              <p className="painting-detail-story-hindi" lang="hi">
                {painting.titleHindi}
              </p>
            ) : null}
          </div>

          {painting.poem ? (
            <section
              className="painting-detail-shayari"
              aria-labelledby="shayari-heading"
            >
              <div className="painting-detail-shayari-glow" aria-hidden />
              <span className="painting-detail-shayari-quote-mark" aria-hidden>
                “
              </span>
              <h3 id="shayari-heading" className="visually-hidden">
                Hindi poem
              </h3>
              <p className="painting-detail-poem-hi" lang="hi">
                {painting.poem}
              </p>
            </section>
          ) : null}

          <div className="painting-detail-bottom-bar">
            <Link
              className="painting-detail-all-link"
              to="/gallery/takhleeq"
              data-cursor="disable"
            >
              View all paintings
              <span className="painting-detail-all-link-arrow" aria-hidden>
                →
              </span>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default PaintingDetail;

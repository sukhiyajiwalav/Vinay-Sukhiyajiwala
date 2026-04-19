import { useCallback, useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import PageBackLink from "./PageBackLink";
import {
  BOOK_COVER_BACK,
  BOOK_COVER_FRONT,
  BOOK_FACTS,
  BOOK_PORTRAIT_FOR_QUOTE,
  BOOK_SOCIAL_FACTS,
  BOOK_THEMES,
  RETAILERS,
} from "../data/bookLanding";
import "./styles/BookLandingPage.css";

const BOOK_COVER_SLIDES = [
  { src: BOOK_COVER_FRONT, label: "Front cover" },
  { src: BOOK_COVER_BACK, label: "Back cover" },
] as const;

const BookLandingPage = () => {
  const [portraitOk, setPortraitOk] = useState(true);
  const [coverSlide, setCoverSlide] = useState(0);
  const coverCount = BOOK_COVER_SLIDES.length;

  const goPrevCover = useCallback(() => {
    setCoverSlide((i) => (i - 1 + coverCount) % coverCount);
  }, [coverCount]);

  const goNextCover = useCallback(() => {
    setCoverSlide((i) => (i + 1) % coverCount);
  }, [coverCount]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="book-landing">
      <PageBackLink variant="overlay" />

      {/* 1 — Hero: warm dark + gold, book carousel + headline stack */}
      <section className="book-landing-hero" aria-labelledby="book-landing-hero-title">
        <div className="book-landing-hero-inner section-container">
          <div className="book-landing-hero-visual">
            <div
              className="book-landing-hero-carousel"
              role="region"
              aria-roledescription="carousel"
              aria-label="Boond book covers"
            >
              <div className="book-landing-hero-carousel-row">
                <button
                  type="button"
                  className="book-landing-hero-carousel-nav"
                  onClick={goPrevCover}
                  aria-label="Previous cover"
                >
                  <MdChevronLeft size={28} aria-hidden />
                </button>
                <div className="book-landing-hero-carousel-stage">
                  <img
                    src={BOOK_COVER_SLIDES[coverSlide].src}
                    alt=""
                    className="book-landing-hero-book"
                    loading={coverSlide === 0 ? "eager" : "lazy"}
                    decoding="async"
                  />
                </div>
                <button
                  type="button"
                  className="book-landing-hero-carousel-nav"
                  onClick={goNextCover}
                  aria-label="Next cover"
                >
                  <MdChevronRight size={28} aria-hidden />
                </button>
              </div>
              <p className="book-landing-hero-carousel-counter" aria-live="polite">
                {coverSlide + 1} / {coverCount}
              </p>
              <div className="book-landing-hero-carousel-dots" role="tablist" aria-label="Choose cover">
                {BOOK_COVER_SLIDES.map((slide, i) => (
                  <button
                    key={slide.label}
                    type="button"
                    role="tab"
                    aria-selected={i === coverSlide}
                    aria-label={slide.label}
                    className={
                      i === coverSlide
                        ? "book-landing-hero-carousel-dot is-active"
                        : "book-landing-hero-carousel-dot"
                    }
                    onClick={() => setCoverSlide(i)}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="book-landing-hero-copy">
            <p className="book-landing-hero-kicker" id="book-landing-hero-title">
              Hindi poetry · {BOOK_FACTS.publisher} · {BOOK_FACTS.pubDate}
            </p>
            <h1 className="book-landing-hero-stat">
              Boond — अकेलेपन से लिखी कवितायें
            </h1>
            <p className="book-landing-hero-lead">
              {BOOK_FACTS.pages} pages · for readers who have known solitude — or
              want to truly feel what aloneness is.
            </p>
          </div>
        </div>
      </section>

      {/* 2 — Retailer pills */}
      <section
        className="book-landing-retailers"
        aria-labelledby="book-landing-retailers-heading"
      >
        <div className="book-landing-retailers-inner section-container">
          <h2 id="book-landing-retailers-heading" className="book-landing-retailers-title">
            Get your copy today:
          </h2>
          <div className="book-landing-retailers-row">
            {RETAILERS.map((r) => (
              <a
                key={r.id}
                href={r.href}
                className="book-landing-pill"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="disable"
              >
                {r.label}
              </a>
            ))}
          </div>
          <p className="book-landing-intl">
            Outside India?{" "}
            <a
              href={`https://www.amazon.com/s?k=${encodeURIComponent(BOOK_FACTS.isbn13)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="book-landing-intl-link"
            >
              Search by ISBN on Amazon
            </a>
          </p>
        </div>
      </section>

      {/* 3 — Book facts strip */}
      <section className="book-landing-social" aria-label="About this edition">
        <div className="book-landing-social-inner section-container">
          {BOOK_SOCIAL_FACTS.map((item) => (
            <div key={item.label} className="book-landing-social-item">
              <span
                className="book-landing-social-badge"
                lang={item.badge === "हि" ? "hi" : undefined}
              >
                {item.badge}
              </span>
              <span className="book-landing-social-label">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 4 — Two-column blurb */}
      <section className="book-landing-blurb">
        <div className="book-landing-blurb-inner section-container">
          <div className="book-landing-blurb-grid">
            <div className="book-landing-blurb-left">
              <p className="book-landing-blurb-kicker">The collection</p>
              <p className="book-landing-blurb-marker-wrap">
                <span className="book-landing-blurb-marker">
                  Love, loss, solitude &amp; faith
                </span>
              </p>
              <h3 className="book-landing-blurb-headline">
                Words that meet the canvas halfway.
              </h3>
            </div>
            <div className="book-landing-blurb-right">
              <p>
                This book is for anyone who has seen solitude — who wants to feel it
                fully, or who already lives inside it. We are all, in truth, alone; what
                matters is understanding what that aloneness is. Here, poetry is a slow
                tune that time keeps reshaping: the poem remains, though its name
                changes every moment.
              </p>
              <p>
                When everything has slipped away, when hope is gone, that very
                helplessness becomes the poem. Through the image of a drop (
                <span lang="hi">बूँद</span>) — nights without sleep, memory that
                won&apos;t leave, joy and sorrow in adjoining moments — these lines
                move between the self and the whole, the drop and the ocean. The same
                solitude that shaped Vinay&apos;s canvases speaks in Hindi here,
                between confession and song.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5 — Eight themes */}
      <section className="book-landing-eight" aria-labelledby="book-landing-eight-title">
        <div className="book-landing-eight-inner section-container">
          <div className="book-landing-eight-grid">
            <div className="book-landing-eight-head">
              <p id="book-landing-eight-title" className="book-landing-eight-top">
                8 themes
              </p>
              <p className="book-landing-eight-highlight">
                this collection explores
              </p>
            </div>
            <div className="book-landing-eight-cols">
              <ul className="book-landing-eight-col">
                {BOOK_THEMES.slice(0, 4).map((t, i) => (
                  <li key={t} className="book-landing-eight-item">
                    <span className="book-landing-eight-num">{i + 1}</span>
                    <span className="book-landing-eight-text">{t}</span>
                  </li>
                ))}
              </ul>
              <ul className="book-landing-eight-col">
                {BOOK_THEMES.slice(4, 8).map((t, i) => (
                  <li key={t} className="book-landing-eight-item">
                    <span className="book-landing-eight-num">{i + 5}</span>
                    <span className="book-landing-eight-text">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6 — Quote split + bottom CTA bar */}
      <section className="book-landing-quote-block">
        <div className="book-landing-quote-split">
          <div className="book-landing-quote-photo">
            {portraitOk ? (
              <img
                src={BOOK_PORTRAIT_FOR_QUOTE}
                alt=""
                className="book-landing-quote-img"
                loading="lazy"
                decoding="async"
                onError={() => setPortraitOk(false)}
              />
            ) : (
              <div className="book-landing-quote-photo-fallback" aria-hidden />
            )}
          </div>
          <div className="book-landing-quote-panel">
            <p className="book-landing-quote-lead">
              Poetry is a slow tune — it keeps the same heart while time changes
              its name. In the dark bindu where memory won&apos;t leave and sleep
              won&apos;t come, these poems ask: what is this aloneness we all carry?
            </p>
            <p className="book-landing-quote-big">
              WHY AM I A DROP WHEN I BELONG TO THE WHOLE OCEAN?
            </p>
            <p className="book-landing-quote-attrib">
              <span className="book-landing-quote-dash">—</span>{" "}
              <strong>Vinay Sukhiyajiwala</strong>, author of{" "}
              <em>Boond — Akelepan se liki kavitayein</em>
            </p>
          </div>
        </div>

        <div className="book-landing-quote-footer">
          <div className="book-landing-quote-footer-inner section-container">
            <p className="book-landing-quote-footer-label">Get your copy today:</p>
            <div className="book-landing-quote-footer-btns">
              {RETAILERS.map((r) => (
                <a
                  key={`f-${r.id}`}
                  href={r.href}
                  className="book-landing-pill book-landing-pill--footer"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="disable"
                >
                  {r.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookLandingPage;

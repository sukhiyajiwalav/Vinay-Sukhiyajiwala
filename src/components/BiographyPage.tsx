import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ABOUT_PORTRAIT,
  BIOGRAPHY_PARAGRAPHS,
  BIOGRAPHY_SECTION_PORTRAIT,
  BIO_PAGE_HERO_QUOTE_HIGHLIGHTS,
  BIO_PORTFOLIO_SERIES,
  ARTIST_STATEMENT_PARAS,
} from "../data/biographyPage";
import { BOOK_COVER_CARD_IMAGE, BOOK_FACTS } from "../data/bookLanding";
import PageBackLink from "./PageBackLink";
import WhatIDo from "./WhatIDo";
import "./styles/BiographyPage.css";

const BiographyPage = () => {
  const navigate = useNavigate();
  const [heroOk, setHeroOk] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const hash = window.location.hash.replace(/^#/, "");
    if (hash === "practice" || hash === "books") {
      requestAnimationFrame(() => {
        document.getElementById(hash)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        navigate("/");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigate]);

  const q = BIO_PAGE_HERO_QUOTE_HIGHLIGHTS;

  return (
    <div className="biography-page">
      <PageBackLink variant="onLight" />

      <header className="biography-page-titlebar">
        <h1 className="biography-page-titlebar-heading">About Vinay</h1>
      </header>

      <div className="biography-page-hero">
        {heroOk ? (
          <img
            src={ABOUT_PORTRAIT}
            alt=""
            className="biography-page-hero-img"
            onError={() => setHeroOk(false)}
          />
        ) : (
          <div className="biography-page-hero-fallback" aria-hidden />
        )}
        <div className="biography-page-hero-quote">
          <p className="biography-page-hero-quote-text">
            {q.before}
            <mark className="biography-page-highlight">{q.mark1}</mark>
            {q.middle}
            <mark className="biography-page-highlight">{q.mark2}</mark>
            {q.after}
          </p>
          <hr className="biography-page-hero-rule" />
          <p className="biography-page-hero-attrib">{q.attrib}</p>
        </div>
      </div>

      <div className="biography-page-letter section-container">
        <div className="biography-page-letter-inner">
          <p>{BIOGRAPHY_PARAGRAPHS[0]}</p>
          <p>{BIOGRAPHY_PARAGRAPHS[1]}</p>
          <p className="biography-page-letter-close">Love,</p>
          <p className="biography-page-signature">Vinay</p>
        </div>
      </div>

      <WhatIDo embedded />

      <section
        className="biography-page-pro"
        id="artist-statement"
        aria-labelledby="bio-artist-statement-heading"
      >
        <h2 id="bio-artist-statement-heading" className="biography-page-pro-title">
          Artist statement
        </h2>
        <p>{ARTIST_STATEMENT_PARAS[0]}</p>
        <p>{ARTIST_STATEMENT_PARAS[1]}</p>
      </section>

      <section
        className="biography-page-long section-container"
        aria-labelledby="bio-long-heading"
      >
        <h2 id="bio-long-heading" className="biography-page-long-title">
          Biography
        </h2>
        <div className="biography-page-long-layout">
          <div className="biography-page-long-copy">
            {BIOGRAPHY_PARAGRAPHS.slice(2).map((text, i) => (
              <p key={i} className="biography-page-long-para">
                {text}
              </p>
            ))}
          </div>
          <div className="biography-page-long-photo">
            <img
              src={BIOGRAPHY_SECTION_PORTRAIT}
              alt=""
              className="biography-page-long-photo-img"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className="biography-page-portfolio" aria-labelledby="bio-portfolio-heading">
        <div className="biography-page-portfolio-inner section-container">
          <h2 id="bio-portfolio-heading" className="biography-page-portfolio-heading">
            Portfolio
          </h2>
          <div className="biography-page-portfolio-grid">
            {BIO_PORTFOLIO_SERIES.map((item) => (
              <Link
                key={item.id}
                to={item.to}
                className={`biography-portfolio-card biography-portfolio-card--${item.tone}`}
                data-cursor="disable"
              >
                <div className="biography-portfolio-card-media">
                  <img
                    src={item.coverImage}
                    alt=""
                    className="biography-portfolio-card-img"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="biography-portfolio-card-copy">
                  <h3 className="biography-portfolio-card-title">
                    {item.title}
                    {item.titleHi ? (
                      <>
                        {" "}
                        <span lang="hi" className="biography-portfolio-card-hi">
                          {item.titleHi}
                        </span>
                      </>
                    ) : null}
                  </h3>
                  <p className="biography-portfolio-card-desc">{item.description}</p>
                  <span className="biography-portfolio-card-cta">
                    View all paintings
                    <span className="biography-portfolio-card-arrow" aria-hidden>
                      →
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <p className="biography-page-portfolio-hub">
            <Link to="/gallery" className="biography-page-portfolio-hub-link" data-cursor="disable">
              <span className="biography-page-portfolio-hub-circle" aria-hidden>
                →
              </span>{" "}
              GALLERY HUB
            </Link>
          </p>
        </div>
      </section>

      <section
        className="biography-page-portfolio biography-page-books"
        id="books"
        aria-labelledby="bio-books-heading"
      >
        <div className="biography-page-portfolio-inner section-container">
          <h2 id="bio-books-heading" className="biography-page-portfolio-heading">
            Books
          </h2>
          <div className="biography-page-portfolio-grid biography-page-books-grid">
            <Link
              to="/book"
              className="biography-portfolio-card biography-portfolio-card--amber"
              data-cursor="disable"
            >
              <div className="biography-portfolio-card-media biography-portfolio-card-media--book">
                <img
                  src={BOOK_COVER_CARD_IMAGE}
                  alt=""
                  className="biography-portfolio-card-img"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="biography-portfolio-card-copy">
                <h3 className="biography-portfolio-card-title">
                  Boond
                  <span lang="hi" className="biography-portfolio-card-hi">
                    {" "}
                    बूँद
                  </span>
                </h3>
                <p className="biography-portfolio-card-desc">
                  Akelepan se likhi kavitayein — {BOOK_FACTS.publisher} ·{" "}
                  {BOOK_FACTS.pubDate}. Hindi poetry from solitude; the book that
                  sealed word and image together.
                </p>
                <span className="biography-portfolio-card-cta">
                  Get the book
                  <span className="biography-portfolio-card-arrow" aria-hidden>
                    →
                  </span>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BiographyPage;

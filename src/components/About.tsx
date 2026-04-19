import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ABOUT_SECTION_INTRO_PARAGRAPHS,
  ABOUT_SECTION_PORTRAIT,
} from "../data/biographyPage";
import GoldenFlower from "./GoldenFlower";
import { initAboutMilestonesGolden } from "./utils/aboutMilestonesGolden";
import "./styles/About.css";

const milestones = [
  { year: "2015", text: "Began painting with watercolour" },
  { year: "2018", text: "First canvas and embossed technique works" },
  { year: "2019", text: "Group Exhibition, Surat, India" },
  {
    year: "2022",
    text: "Published: Boond — Akelepan se liki kavitayein",
  },
  { year: "2023", text: "Began Takhleeq series" },
  { year: "2025", text: "Completed the Takhleeq series" },
  {
    year: "2026",
    text: "Active international submissions and exhibitions",
  },
];

const About = () => {
  useEffect(() => {
    const cleanup = initAboutMilestonesGolden();
    return () => cleanup();
  }, []);

  return (
    <section
      className="about-section"
      id="about"
      aria-labelledby="about-heading-main"
    >
      <div className="about-editorial section-container">
        <div className="about-editorial-top">
          <div className="about-editorial-photo">
            <img
              src={ABOUT_SECTION_PORTRAIT}
              alt="Vinay Sukhiyajiwala"
              className="about-editorial-portrait"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="about-editorial-main">
            <div className="about-editorial-text-block">
              <div className="about-editorial-ornament" aria-hidden>
                <span className="about-editorial-ornament-flower">
                  <GoldenFlower
                    size={22}
                    className="golden-flower--about-ornament"
                  />
                </span>
                <span className="about-editorial-ornament-line" />
              </div>
              <h2 id="about-heading-main" className="about-editorial-title">
                <span className="about-editorial-title-lead">Who is </span>
                <span className="about-editorial-title-accent">
                  Vinay Sukhiyajiwala
                </span>
              </h2>
              <div className="about-editorial-body">
                {ABOUT_SECTION_INTRO_PARAGRAPHS.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
            <p className="about-editorial-bio-link-wrap">
              <Link
                className="about-editorial-bio-link"
                to="/biography"
                data-cursor="disable"
              >
                Read more about Vinay
              </Link>
            </p>
          </div>
        </div>

        <div className="about-editorial-rule" aria-hidden />

        <section
          className="about-milestones"
          id="exhibitions"
          aria-labelledby="about-milestones-heading"
        >
          <div className="about-milestones-inner">
            <div className="about-milestones-header">
              <p className="about-milestones-eyebrow">
                <span className="about-milestones-eyebrow-line" aria-hidden />
                <span>Chronicle</span>
                <span className="about-milestones-eyebrow-line" aria-hidden />
              </p>
              <h3
                id="about-milestones-heading"
                className="about-milestones-heading"
              >
                Exhibitions &amp; milestones
              </h3>
              <p className="about-milestones-deck">
                A thread through study, show, and print — each mark a door left
                slightly open.
              </p>
            </div>
            <div className="about-milestones-timeline-shell">
              <div className="about-milestones-spine" aria-hidden>
                <div className="about-milestones-spine-track" />
                <div className="about-milestones-spine-fill" />
                <div className="about-milestones-spine-head">
                  <img
                    src="/images/golden-flower-transparent.png"
                    alt=""
                    width={293}
                    height={316}
                    className="about-milestones-spine-flower-img"
                    draggable={false}
                    decoding="async"
                  />
                </div>
              </div>
              <ol className="about-milestones-timeline">
                {milestones.map((m, i) => {
                  const isRight = i % 2 === 0;
                  const side = isRight
                    ? "about-milestones-node--right"
                    : "about-milestones-node--left";
                  const body = (
                    <div className="about-milestones-node-body">
                      <time
                        className="about-milestones-node-year"
                        dateTime={m.year}
                      >
                        {m.year}
                      </time>
                      <p className="about-milestones-node-text">{m.text}</p>
                    </div>
                  );
                  const axis = (
                    <div className="about-milestones-node-axis" aria-hidden />
                  );
                  const gap = <div className="about-milestones-node-gap" aria-hidden />;
                  return (
                    <li className={`about-milestones-node ${side}`} key={`${m.year}-${i}`}>
                      {isRight ? (
                        <>
                          {gap}
                          {axis}
                          {body}
                        </>
                      ) : (
                        <>
                          {body}
                          {axis}
                          {gap}
                        </>
                      )}
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default About;

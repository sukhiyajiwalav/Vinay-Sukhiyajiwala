import { PropsWithChildren, useEffect } from "react";
import GoldenFlower from "./GoldenFlower";
import { LANDING_HERO_PHOTO } from "../data/biographyPage";
import { setAllTimeline, setPlaceholderHeroTimelines } from "./utils/GsapScroll";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    const t = window.setTimeout(() => {
      setPlaceholderHeroTimelines();
      setAllTimeline();
    }, 0);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <section className="landing-section" id="landingDiv">
      <div className="landing-hero landing-hero--fullbleed">
        <div className="landing-hero-photo">
          <img
            src={LANDING_HERO_PHOTO}
            alt="Vinay Sukhiyajiwala"
            width={1600}
            height={1067}
            className="landing-hero-photo-img"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
          <div className="landing-hero-scrim" aria-hidden />
        </div>

        <div className="landing-hero-content">
          <h1 className="landing-hero-name">
            <span className="landing-hero-name-line">VINAY</span>
            <span className="landing-hero-name-line">SUKHIYAJIWALA</span>
          </h1>

          <p className="landing-hero-role">
            Abstract artist and published poet
          </p>

          <div className="landing-hero-motif" aria-hidden>
            <GoldenFlower size={44} className="golden-flower--hero" />
          </div>

          <div className="landing-hero-rule" aria-hidden />
        </div>
      </div>

      {children}
    </section>
  );
};

export default Landing;

import { useEffect } from "react";
import { setPlaceholderHeroTimelines, setAllTimeline } from "./utils/GsapScroll";

/**
 * Soft hero wash — light gallery backdrop (no heavy 3D).
 */
const HeroVisual = () => {
  useEffect(() => {
    const run = () => {
      setPlaceholderHeroTimelines();
      setAllTimeline();
    };
    const t = window.setTimeout(run, 0);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const id = window.setTimeout(() => {
      document.querySelector(".hero-visual-root")?.classList.add("character-loaded");
    }, 2600);
    return () => clearTimeout(id);
  }, []);

  return (
    <div className="character-container hero-character-wrap">
      <div className="character-model hero-visual-root">
        <div className="hero-abstract-canvas" aria-hidden>
          <div className="hero-abstract-blob hero-abstract-blob--1" />
          <div className="hero-abstract-blob hero-abstract-blob--2" />
          <div className="hero-abstract-blob hero-abstract-blob--3" />
        </div>
      </div>
    </div>
  );
};

export default HeroVisual;

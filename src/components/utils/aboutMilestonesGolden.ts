import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Dim → bright as user scrolls (transparent PNG — use filter, not box-shadow). */
const FLOWER_FILTER_DIM =
  "brightness(0.82) drop-shadow(0 0 4px rgba(212, 175, 55, 0.22))";
const FLOWER_FILTER_BRIGHT =
  "brightness(1.12) drop-shadow(0 0 12px rgba(212, 175, 55, 0.55)) drop-shadow(0 0 22px rgba(184, 149, 42, 0.4))";

/**
 * Gold segment grows down the milestone spine; the golden flower travels with
 * scroll progress and gains golden light (filter) through the section.
 */
export function initAboutMilestonesGolden(): () => void {
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  const shell = document.querySelector<HTMLElement>(
    ".about-milestones-timeline-shell"
  );
  const fill = document.querySelector<HTMLElement>(
    ".about-milestones-spine-fill"
  );
  const track = document.querySelector<HTMLElement>(
    ".about-milestones-spine-track"
  );
  const head = document.querySelector<HTMLElement>(
    ".about-milestones-spine-head"
  );
  const flowerImg = document.querySelector<HTMLElement>(
    ".about-milestones-spine-flower-img"
  );
  if (!shell || !fill || !track || !head || !flowerImg) return () => {};

  const scroller =
    document.getElementById("smooth-wrapper") ?? document.documentElement;
  const scrollerTarget =
    scroller === document.documentElement ? window : scroller;

  const getMaxY = () => {
    const th = track.offsetHeight;
    const hh = head.offsetHeight;
    return Math.max(0, th - hh);
  };

  if (reduceMotion) {
    gsap.set(fill, { scaleY: 1 });
    gsap.set(head, { y: getMaxY(), opacity: 1 });
    gsap.set(flowerImg, {
      filter: "brightness(1.08) drop-shadow(0 0 10px rgba(212, 175, 55, 0.45))",
    });
    return () => {};
  }

  gsap.set(fill, { scaleY: 0, transformOrigin: "center top" });
  gsap.set(head, { y: 0, opacity: 0 });
  gsap.set(flowerImg, { filter: FLOWER_FILTER_DIM });

  const st = {
    trigger: shell,
    scroller: scrollerTarget,
    start: "top 78%",
    end: "bottom 22%",
    scrub: 1,
    invalidateOnRefresh: true,
  };

  const tl = gsap.timeline({ scrollTrigger: st });

  tl.to(
    fill,
    {
      scaleY: 1,
      ease: "none",
      duration: 1,
    },
    0
  )
    .to(
      head,
      {
        opacity: 1,
        ease: "power2.out",
        duration: 0.22,
      },
      0
    )
    .to(
      head,
      {
        y: () => getMaxY(),
        ease: "none",
        duration: 1,
      },
      0
    )
    .to(
      flowerImg,
      {
        filter: FLOWER_FILTER_BRIGHT,
        ease: "none",
        duration: 1,
      },
      0
    );

  return () => {
    tl.scrollTrigger?.kill();
    tl.kill();
  };
}

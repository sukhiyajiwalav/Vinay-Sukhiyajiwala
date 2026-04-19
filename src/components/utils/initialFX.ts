import { SplitText } from "gsap-trial/SplitText";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { smoother } from "../Navbar";

let initialFxRan = false;

export function initialFX() {
  document.body.style.overflowY = "auto";
  queueMicrotask(() => {
    smoother?.paused(false);
    ScrollTrigger.refresh(true);
  });

  if (initialFxRan) return;
  initialFxRan = true;
  document.getElementsByTagName("main")[0]?.classList.add("main-active");
  gsap.to("body", {
    backgroundColor: "#fafaf7",
    duration: 0.45,
    delay: 0,
  });

  const nameHeading = document.querySelector(".landing-hero-name");
  if (nameHeading) {
    const nameSplit = new SplitText(nameHeading, {
      type: "lines",
      linesClass: "landing-line-inner",
    });
    gsap.fromTo(
      nameSplit.lines,
      { opacity: 0, y: 48, filter: "blur(6px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.15,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.35,
      }
    );
  }

  gsap.fromTo(
    ".landing-hero-role",
    { opacity: 0, y: 22 },
    {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power2.out",
      delay: 0.5,
    }
  );

  gsap.fromTo(
    [".landing-hero-motif", ".landing-hero-rule"],
    { opacity: 0, y: 24 },
    {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "power2.out",
      stagger: 0.08,
      delay: 0.62,
    }
  );

  gsap.fromTo(
    ".landing-manifesto",
    { opacity: 0, y: 16 },
    {
      opacity: 1,
      y: 0,
      duration: 0.85,
      ease: "power2.out",
      delay: 0.95,
    }
  );

  gsap.fromTo(
    [".header", ".icons-section"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );
}

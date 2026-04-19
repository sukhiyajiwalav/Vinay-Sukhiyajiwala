import { PropsWithChildren, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import About from "./About";
import SiteFooter from "./SiteFooter";
import Cursor from "./Cursor";
import Landing from "./Landing";
import { smoother } from "./Navbar";
import InspiredQuoteSection from "./InspiredQuoteSection";
import Poetry from "./Poetry";
import SocialIcons from "./SocialIcons";
import AudienceCTA from "./AudienceCTA";
import PaintingQuote from "./PaintingQuote";
import VerseQuoteStrip from "./VerseQuoteStrip";
import VinayGallery from "./VinayGallery";
import setSplitText from "./utils/splitText";

const MainContainer = ({ children }: PropsWithChildren) => {
  const location = useLocation();
  const [isDesktopView, setIsDesktopView] = useState<boolean>(
    window.innerWidth > 1024
  );

  useEffect(() => {
    import("./utils/initialFX").then(({ initialFX }) => {
      initialFX();
    });
  }, []);

  useEffect(() => {
    const hash = location.hash.replace(/^#/, "");
    if (!hash) return;

    let cancelled = false;
    let attempts = 0;
    const tryScroll = () => {
      if (cancelled) return;
      attempts += 1;
      if (smoother) {
        smoother.scrollTo(`#${hash}`, true, "top top");
        return;
      }
      if (attempts < 90) {
        requestAnimationFrame(tryScroll);
        return;
      }
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    };
    const t = window.setTimeout(tryScroll, 50);
    return () => {
      cancelled = true;
      window.clearTimeout(t);
    };
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
      setIsDesktopView(window.innerWidth > 1024);
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, [isDesktopView]);

  return (
    <div className="container-main">
      <Cursor />
      <SocialIcons />
      {isDesktopView && children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing>{!isDesktopView && children}</Landing>
            <About />
            <VinayGallery />
            <PaintingQuote />
            <AudienceCTA />
            <VerseQuoteStrip />
            <Poetry />
            <InspiredQuoteSection />
            <SiteFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;

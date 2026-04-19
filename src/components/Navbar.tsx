import { useCallback, useEffect, useId, useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

export let smoother: ScrollSmoother | undefined;

const DESKTOP_MIN = 901;

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const drawerTitleId = useId();

  /** Create ScrollSmoother only when home shell mounts `#smooth-wrapper`; kill when leaving. */
  useLayoutEffect(() => {
    let cancelled = false;
    let attempts = 0;

    const syncSmoother = () => {
      if (cancelled) return;
      const w = document.getElementById("smooth-wrapper");
      const c = document.getElementById("smooth-content");
      if (w && c) {
        if (!smoother) {
          smoother = ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 0,
            effects: false,
            autoResize: true,
            ignoreMobileResize: true,
          });
          smoother.scrollTop(0);
        }
        /* Must run every return to Home — initialFX only runs once globally and left smoother paused. */
        smoother.paused(false);
        document.body.style.overflowY = "auto";
        ScrollTrigger.refresh(true);
        return;
      }
      if (smoother) {
        smoother.kill();
        smoother = undefined;
        document.body.style.overflowY = "auto";
      }
    };

    const iv = window.setInterval(() => {
      attempts += 1;
      syncSmoother();
      if (smoother || attempts > 80) {
        window.clearInterval(iv);
      }
    }, 40);

    syncSmoother();

    return () => {
      cancelled = true;
      window.clearInterval(iv);
    };
  }, [location.pathname]);

  useEffect(() => {
    const onHeaderClick = (e: Event) => {
      if (window.innerWidth < DESKTOP_MIN) return;
      if (window.location.pathname !== "/") return;
      if (!smoother) return;
      const el = (e.target as HTMLElement).closest(
        "a[data-href]"
      ) as HTMLAnchorElement | null;
      if (!el) return;
      e.preventDefault();
      const section = el.getAttribute("data-href");
      if (section) smoother.scrollTo(section, true, "top top");
    };

    const headerEl = document.querySelector(".header");
    headerEl?.addEventListener("click", onHeaderClick);

    const onResize = () => {
      if (smoother) ScrollSmoother.refresh(true);
    };
    window.addEventListener("resize", onResize);

    return () => {
      headerEl?.removeEventListener("click", onHeaderClick);
      window.removeEventListener("resize", onResize);
    };
  }, [location.pathname]);

  useEffect(() => {
    if (window.innerWidth >= DESKTOP_MIN) setMobileOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!mobileOpen) return;
    const html = document.documentElement;
    const body = document.body;
    const prev = {
      htmlOverflow: html.style.overflow,
      bodyOverflow: body.style.overflow,
      bodyOverflowX: body.style.overflowX,
      bodyOverflowY: body.style.overflowY,
    };
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      html.style.overflow = prev.htmlOverflow;
      body.style.overflow = prev.bodyOverflow;
      body.style.overflowX = prev.bodyOverflowX;
      body.style.overflowY = prev.bodyOverflowY;
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const galleryNavActive =
    location.pathname.startsWith("/gallery") ||
    location.pathname.startsWith("/work/");

  const contactNavActive = location.pathname === "/contact";

  const bookNavActive = location.pathname === "/book";

  const aboutNavActive = location.pathname === "/biography";

  /** Portal keeps the bar in `document.body` so `position: fixed` stays viewport-locked (not affected by transformed scroll parents like ScrollSmoother). */
  return createPortal(
    <>
      <header className="header header--scrolled">
        <div className="header-inner">
          <Link
            to="/"
            className="navbar-brand navbar-brand--wordmark"
            data-cursor="disable"
            onClick={closeMobile}
            aria-label="Vinay Sukhiyajiwala — Home"
          >
            <span className="navbar-brand-name">Vinay</span>
          </Link>

          <nav className="header-nav header-nav--desktop" aria-label="Main">
            <Link
              to="/"
              className="nav-top-link"
              data-cursor="disable"
              onClick={(e) => {
                if (location.pathname === "/" && smoother) {
                  e.preventDefault();
                  smoother.scrollTop(0);
                }
              }}
            >
              HOME
            </Link>
            <Link
              to="/biography"
              className={`nav-top-link${aboutNavActive ? " nav-top-link--active" : ""}`}
              data-cursor="disable"
            >
              About
            </Link>
            <Link
              to="/gallery"
              className={`nav-top-link${galleryNavActive ? " nav-top-link--active" : ""}`}
              data-cursor="disable"
            >
              Gallery
            </Link>
            <Link
              to="/book"
              className={`nav-top-link${bookNavActive ? " nav-top-link--active" : ""}`}
              data-cursor="disable"
            >
              Poetry Book
            </Link>
            <Link
              to="/contact"
              className={`nav-top-link${contactNavActive ? " nav-top-link--active" : ""}`}
              data-cursor="disable"
            >
              Contact us
            </Link>
          </nav>

          <button
            type="button"
            className={`header-burger${mobileOpen ? " is-open" : ""}`}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="site-nav-drawer"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span className="header-burger-bar" aria-hidden />
            <span className="header-burger-bar" aria-hidden />
            <span className="header-burger-bar" aria-hidden />
          </button>
        </div>
      </header>

      <div
        className={`header-drawer-overlay${mobileOpen ? " is-open" : ""}`}
        aria-hidden={!mobileOpen}
        onClick={closeMobile}
      />

      <aside
        id="site-nav-drawer"
        className={`header-drawer${mobileOpen ? " is-open" : ""}`}
        aria-hidden={!mobileOpen}
        aria-labelledby={drawerTitleId}
      >
        <div className="header-drawer-head">
          <span id={drawerTitleId} className="header-drawer-title">
            Menu
          </span>
          <button
            type="button"
            className="header-drawer-close"
            aria-label="Close menu"
            onClick={closeMobile}
          />
        </div>
        <nav className="header-drawer-nav" aria-label="Main">
          <Link
            to="/"
            className="header-drawer-link"
            data-cursor="disable"
            onClick={(e) => {
              closeMobile();
              if (location.pathname === "/" && smoother) {
                e.preventDefault();
                smoother.scrollTop(0);
              }
            }}
          >
            HOME
          </Link>
          <Link
            to="/biography"
            className={`header-drawer-link${aboutNavActive ? " header-drawer-link--active" : ""}`}
            data-cursor="disable"
            onClick={closeMobile}
          >
            About
          </Link>
          <Link
            to="/gallery"
            className={`header-drawer-link${galleryNavActive ? " header-drawer-link--active" : ""}`}
            data-cursor="disable"
            onClick={closeMobile}
          >
            Gallery
          </Link>
          <Link
            to="/book"
            className={`header-drawer-link${bookNavActive ? " header-drawer-link--active" : ""}`}
            data-cursor="disable"
            onClick={closeMobile}
          >
            Poetry Book
          </Link>
          <Link
            to="/contact"
            className={`header-drawer-link${contactNavActive ? " header-drawer-link--active" : ""}`}
            data-cursor="disable"
            onClick={closeMobile}
          >
            Contact us
          </Link>
        </nav>
      </aside>

    </>,
    document.body
  );
};

export default Navbar;

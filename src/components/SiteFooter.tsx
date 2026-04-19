import { useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaInstagram } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import GoldenFlower from "./GoldenFlower";
import { smoother } from "./Navbar";
import "./styles/Contact.css";

const SiteFooter = () => {
  const location = useLocation();

  const hashNav = useCallback(
    (hash: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (location.pathname === "/" && smoother) {
        e.preventDefault();
        smoother.scrollTo(hash, true, "top top");
      }
    },
    [location.pathname]
  );

  return (
    <footer className="contact-section" id="contact">
      <div className="contact-footer-inner section-container">
        <div className="site-footer-grid" role="navigation" aria-label="Footer">
          <div className="site-footer-col site-footer-col--brand">
            <Link
              to="/"
              className="site-footer-brand"
              data-cursor="disable"
            >
              <GoldenFlower size={36} className="golden-flower--on-dark" />
              <span className="site-footer-brand-text">Vinay</span>
            </Link>
            <blockquote className="site-footer-quote" cite="/">
              Painting and poetry share one rhythm — colour, word, and silence
              asking the same questions.
            </blockquote>
            <div className="site-footer-social">
              <a
                href="https://www.instagram.com/vinaysukhiyajiwala/"
                target="_blank"
                rel="noopener noreferrer"
                className="site-footer-social-link"
                aria-label="Instagram (opens in new tab)"
              >
                <FaInstagram />
              </a>
              <a
                href="mailto:sukhiyajiwalav@gmail.com"
                className="site-footer-social-link"
                data-cursor="disable"
                aria-label="Email"
              >
                <MdAlternateEmail />
              </a>
            </div>
            <p className="site-footer-email-line">
              <a
                href="mailto:sukhiyajiwalav@gmail.com"
                data-cursor="disable"
              >
                sukhiyajiwalav@gmail.com
              </a>
            </p>
          </div>

          <div className="site-footer-col">
            <h3 className="site-footer-heading">Quick links</h3>
            <ul className="site-footer-list">
              <li>
                <Link to="/gallery" data-cursor="disable">
                  Works / Gallery
                </Link>
              </li>
              <li>
                <Link to="/biography#practice" data-cursor="disable">
                  Practice
                </Link>
              </li>
              <li>
                <Link to="/gallery/sketches" data-cursor="disable">
                  Sketches
                </Link>
              </li>
              <li>
                <Link to="/gallery/practice-work" data-cursor="disable">
                  Practice Work
                </Link>
              </li>
              <li>
                <Link to="/biography" data-cursor="disable">
                  Biography
                </Link>
              </li>
              <li>
                <Link to="/contact" data-cursor="disable">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="site-footer-col">
            <h3 className="site-footer-heading">Artist</h3>
            <ul className="site-footer-list">
              <li>
                <Link to="/biography" data-cursor="disable">
                  About
                </Link>
              </li>
              <li>
                <a
                  href="/#exhibitions"
                  data-href="#exhibitions"
                  onClick={hashNav("#exhibitions")}
                >
                  Exhibitions
                </a>
              </li>
              <li>
                <a href="/#poetry" data-href="#poetry" onClick={hashNav("#poetry")}>
                  Poetry &amp; book
                </a>
              </li>
              <li>
                <Link to="/gallery" data-cursor="disable">
                  Series — <span lang="hi">तख़्लीक़</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="site-footer-bar" aria-label="Copyright">
        <p className="site-footer-copy">
          © {new Date().getFullYear()} <span className="vinay-wordmark">Vinay</span>{" "}
          Sukhiyajiwala
        </p>
      </div>
    </footer>
  );
};

export default SiteFooter;

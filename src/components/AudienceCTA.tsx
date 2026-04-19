import { Link } from "react-router-dom";
import { FaCartShopping, FaHandshake, FaInstagram } from "react-icons/fa6";
import "./styles/AudienceCTA.css";

const INSTAGRAM_URL = "https://www.instagram.com/vinaysukhiyajiwala/";

const AudienceCTA = () => {
  return (
    <section
      className="audience-cta-section"
      id="audience-cta"
      aria-label="For collectors, galleries, and followers"
    >
      <div className="audience-cta-inner section-container">
        <ul className="audience-cta-grid">
          <li>
            <article
              className="audience-cta-card"
              aria-labelledby="audience-cta-collector-heading"
            >
              <div className="audience-cta-icon" aria-hidden>
                <FaCartShopping />
              </div>
              <h3 id="audience-cta-collector-heading" className="audience-cta-title">
                If you are a collector…
              </h3>
              <p className="audience-cta-body">
                Owning an original work by Vinay will add quality, value, and
                interest to your collection. Browse the full gallery to explore
                available pieces and find out more.
              </p>
              <div className="audience-cta-actions">
                <Link
                  to="/gallery"
                  className="audience-cta-btn"
                  data-cursor="disable"
                >
                  Art Works
                </Link>
              </div>
            </article>
          </li>
          <li>
            <article
              className="audience-cta-card"
              aria-labelledby="audience-cta-gallery-heading"
            >
              <div className="audience-cta-icon" aria-hidden>
                <FaHandshake />
              </div>
              <h3 id="audience-cta-gallery-heading" className="audience-cta-title">
                If you own a gallery…
              </h3>
              <p className="audience-cta-body">
                Displaying a selection of Vinay&apos;s creations will catch the
                eye of visitors to your establishment. Contact us to arrange an
                exhibition.
              </p>
              <div className="audience-cta-actions">
                <Link
                  to="/contact"
                  className="audience-cta-btn"
                  data-cursor="disable"
                >
                  Contact Us
                </Link>
              </div>
            </article>
          </li>
          <li>
            <article
              className="audience-cta-card"
              aria-labelledby="audience-cta-instagram-heading"
            >
              <div className="audience-cta-icon" aria-hidden>
                <FaInstagram />
              </div>
              <h3 id="audience-cta-instagram-heading" className="audience-cta-title">
                Do you follow Vinay on Instagram?
              </h3>
              <p className="audience-cta-body">
                See new paintings, studio moments, and exhibition news where
                Vinay shares work in progress and finished pieces.
              </p>
              <div className="audience-cta-actions">
                <a
                  href={INSTAGRAM_URL}
                  className="audience-cta-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="disable"
                >
                  Follow
                </a>
              </div>
            </article>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AudienceCTA;

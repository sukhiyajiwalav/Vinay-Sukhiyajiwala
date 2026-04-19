import { Link } from "react-router-dom";
import { BOOK_COVER_FRONT } from "../data/bookLanding";
import "./styles/Poetry.css";

const Poetry = () => {
  return (
    <section className="poetry-section" id="poetry">
      <div className="poetry-book-promo section-container">
        <div className="poetry-book-promo-visual">
          <img
            src={BOOK_COVER_FRONT}
            alt=""
            className="poetry-book-promo-img"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="poetry-book-promo-copy">
          <p className="poetry-book-promo-eyebrow">Published Work</p>
          <h2 className="poetry-book-promo-headline">
            Boond — poems written from solitude
          </h2>
          <p className="poetry-book-promo-sub" lang="hi">
            बूँद — अकेलेपन से लिखी कवितायें
          </p>
          <p className="poetry-book-promo-year">2022</p>
          <p className="poetry-book-promo-body">
            A collection of Hindi poems exploring love, loss, solitude, and the
            search for meaning — the book that marked a lasting bond between
            verbal and visual work.
          </p>
          <Link to="/book" className="poetry-book-promo-cta" data-cursor="disable">
            Get the book
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Poetry;

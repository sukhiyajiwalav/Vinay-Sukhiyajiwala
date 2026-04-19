import "./styles/PaintingQuote.css";

const PaintingQuote = () => {
  return (
    <section
      className="painting-quote-section"
      aria-label="Artist statement on painting"
    >
      <div className="painting-quote-inner section-container">
        <blockquote className="painting-quote-block">
          <p className="painting-quote-text">
            <span className="painting-quote-line painting-quote-line--first">
              Painting is not what I do.
            </span>
            <span className="painting-quote-line painting-quote-line--second">
              It is how I think.
            </span>
          </p>
        </blockquote>
      </div>
    </section>
  );
};

export default PaintingQuote;

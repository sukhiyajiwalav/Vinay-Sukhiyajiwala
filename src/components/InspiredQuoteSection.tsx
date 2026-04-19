import "./styles/InspiredQuoteSection.css";

/** Classical pairing of image & word — fits painting + poetry practice */
const QUOTE_LINES = [
  "Painting is silent poetry,",
  "and poetry is painting that speaks.",
] as const;

const InspiredQuoteSection = () => {
  return (
    <section
      className="inspired-quote-section"
      id="inspired-quote"
      aria-label="Inspirational quote"
    >
      <div className="inspired-quote-backdrop" aria-hidden />
      <div className="inspired-quote-inner section-container">
        <blockquote className="inspired-quote-block">
          <span className="inspired-quote-mark" aria-hidden>
            “
          </span>
          <p className="inspired-quote-body">
            {QUOTE_LINES.map((line) => (
              <span key={line} className="inspired-quote-line">
                {line}
              </span>
            ))}
          </p>
          <footer className="inspired-quote-attribution">
            <span className="inspired-quote-dash" aria-hidden>
              —
            </span>
            <cite className="inspired-quote-cite">Plutarch</cite>
            <span className="inspired-quote-note"> Moralia</span>
          </footer>
        </blockquote>
      </div>
    </section>
  );
};

export default InspiredQuoteSection;

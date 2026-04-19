import GoldenFlower from "./GoldenFlower";
import "./styles/VerseQuoteStrip.css";

const VerseQuoteStrip = () => {
  return (
    <section
      className="verse-quote-strip"
      id="verse-canvas-quote"
      aria-label="On verse and canvas"
    >
      <div className="verse-quote-strip-flowers" aria-hidden>
        <GoldenFlower size={44} className="golden-flower--section" />
        <GoldenFlower size={56} className="golden-flower--section" />
        <GoldenFlower size={44} className="golden-flower--section" />
      </div>
      <div className="verse-quote-strip-inner section-container">
        <blockquote className="verse-quote-strip-block">
          <p className="verse-quote-strip-text">
            <span className="verse-quote-strip-line">
              In my paintings, each piece that carries verse was written alongside the
              canvas, not after it.
            </span>
            <span className="verse-quote-strip-line">
              Where the series{" "}
              <span lang="hi" className="verse-quote-strip-deva">
                तख़्लीक़
              </span>{" "}
              gathers them, the image and the word still answer to the same{"\u00A0"}hand.
            </span>
          </p>
        </blockquote>
      </div>
    </section>
  );
};

export default VerseQuoteStrip;

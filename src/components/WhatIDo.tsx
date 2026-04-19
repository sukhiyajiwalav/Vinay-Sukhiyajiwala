import "./styles/WhatIDo.css";

export interface WhatIDoProps {
  /** When true, lighter spacing for use inside Biography page (not home). */
  embedded?: boolean;
}

const practices = [
  {
    title: "Abstract Painting",
    subtitle: "Acrylic on canvas",
    body: "Embossed textures, layered surfaces, expressive color as emotional language.",
  },
  {
    title: "Hindi & Urdu Poetry",
    subtitle: "Published poet",
    body: "Words and images conceived together, neither complete without the other.",
  },
  {
    title: "Philosophical Inquiry",
    subtitle: "Each work questions",
    body: "Ego, grace, destiny, love, loss, the nature of existence.",
  },
  {
    title: "Spiritual Reflection",
    subtitle: "Rooted in Indian thought",
    body: "Sufi poetry, devotional tradition, the search for the divine within the human.",
  },
];

const WhatIDo = ({ embedded = false }: WhatIDoProps) => {
  return (
    <section
      className={`whatIDO practice-section${embedded ? " practice-section--embedded" : ""}`}
      id="practice"
      aria-labelledby="practice-heading"
    >
      <div
        className={`practice-wrap${embedded ? " practice-wrap--embedded" : " section-container"}`}
      >
        <header className="practice-header">
          <p className="practice-kicker">
            {embedded ? "How I work" : "Studio · Process"}
          </p>
          <div className="practice-title-block">
            <h2 id="practice-heading" className="practice-title">
              The <span className="practice-title-accent">Practice</span>
            </h2>
          </div>
          <p className="practice-lead">
            {embedded ? (
              <>
                Painting and poetry move as one rhythm — colour, word, and silence
                asking the same questions. The series{" "}
                <span lang="hi">तख़्लीक़</span> names that rhythm; the hand and the
                voice stay mine first.
              </>
            ) : (
              <>
                How I work — and why. Painting and poetry share one rhythm: colour,
                word, and silence asking the same questions. I sometimes gather that
                rhythm under the series title <span lang="hi">तख़्लीक़</span>; the
                hand and the voice are always mine first.
              </>
            )}
          </p>
        </header>

        <div className="practice-grid" role="list">
          {practices.map((p, index) => (
            <article
              key={p.title}
              className="practice-card"
              role="listitem"
            >
              <span className="practice-index" aria-hidden>
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="practice-card-inner">
                <h3 className="practice-card-title">{p.title}</h3>
                <p className="practice-card-subtitle">{p.subtitle}</p>
                <p className="practice-card-body">{p.body}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;

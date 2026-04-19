/** Swap these files in `public/images/` when you have assets ready. */
export const ABOUT_HERO_PAINTING = "/images/about-hero-painting.jpg";
/** Full-viewport landing hero (`Photos/Mine/214A9774.JPG` → `public/images/hero-portrait.jpg`). */
export const LANDING_HERO_PHOTO = "/images/hero-portrait.jpg";
/** /biography hero background (`Photos/Mine/aae7d124-c6d2-48b6-9941-53677ec6369e.jpg` → `public/images/about-portrait.jpg`). */
export const ABOUT_PORTRAIT = "/images/about-portrait.jpg";
/** About section on home — portrait (`Photos/Mine/214A9735.JPG` → `public/images/about-section-portrait.jpg`). */
export const ABOUT_SECTION_PORTRAIT = "/images/about-section-portrait.jpg";
/** /biography “Biography” block — image right of last two paragraphs (`Photos/Mine/6e2cf71e-2c23-4707-984e-ff57236ec67f.jpg` → `public/images/biography-section-portrait.jpg`). */
export const BIOGRAPHY_SECTION_PORTRAIT = "/images/biography-section-portrait.jpg";

export const ABOUT_QUOTE =
  "Every canvas asks the same thing the poem asks: what remains when you strip the noise away? I paint and write to listen for that answer.";

export const ARTIST_STATEMENT = `I work as a painter and a poet first — the identity is mine before any title. Much of this body of work is grouped under the series name Takhleeq (तख़्लीक़, “creation”), but each canvas stands on its own. Every piece carries an original Hindi poem written alongside the painting, not after it. Abstraction lets me work in colour, texture, and silence; poetry lets me speak in another register. Together they are one inquiry into memory, faith, loss, and what it means to be alive in Surat and in language.`;

/** Centered “Artist statement” block on /biography (two paragraphs; same text as ARTIST_STATEMENT) */
export const ARTIST_STATEMENT_PARAS: [string, string] = [
  `I work as a painter and a poet first — the identity is mine before any title. Much of this body of work is grouped under the series name Takhleeq (तख़्लीक़, “creation”), but each canvas stands on its own. Every piece carries an original Hindi poem written alongside the painting, not after it.`,
  `Abstraction lets me work in colour, texture, and silence; poetry lets me speak in another register. Together they are one inquiry into memory, faith, loss, and what it means to be alive in Surat and in language.`,
];

/** Home About column — opens with the short lines, then continues from the full biography. */
export const ABOUT_SECTION_INTRO_PARAGRAPHS: string[] = [
  "Abstract painter and published Hindi poet from Surat.",
  "Acrylic on canvas, embossed surfaces, colour as feeling — each canvas born with its own poem.",
  `Author of Boond — Akelepan se liki kavitayein (बूँद — अकेलेपन से लिखी कवितायें) (2022), poems written from solitude — the book that marked a lasting bond between his verbal and visual work.`,
  "Born 8 December 2003, he grew up drawing and painting, especially in watercolour; his first group exhibition in the ninth grade set the direction of his creative life.",
  "During the COVID-19 pandemic he turned deeply to Hindi novels and poetry. Writers such as Manav Kaul, encountered through programmes like Neelesh Misra's Slow Interview, opened a new lane beyond the studio: language as urgent and intimate as pigment.",
  "Much of his work is gathered under the series Takhleeq (तख़्लीक़, \"creation\"), but each canvas stands alone — acrylic on canvas in Surat, with the poem that shares each work's birth.",
];

/** Hero quote card — phrases highlighted in gold on /biography */
export const BIO_PAGE_HERO_QUOTE_HIGHLIGHTS: {
  before: string;
  mark1: string;
  middle: string;
  mark2: string;
  after: string;
  attrib: string;
} = {
  before: "Every canvas asks the same thing ",
  mark1: "the poem",
  middle: " asks: what remains when you strip the noise away? I paint and write to ",
  mark2: "listen for that answer",
  after: ".",
  attrib: "Vinay Sukhiyajiwala",
};

/** /biography “Portfolio” — same cover art as Art Gallery hub (`public/images/*-series-cover.jpg`) */
export const BIO_PORTFOLIO_SERIES: {
  id: string;
  title: string;
  titleHi?: string;
  description: string;
  to: string;
  tone: "mint" | "clay" | "amber";
  coverImage: string;
}[] = [
  {
    id: "takhleeq",
    title: "Takhleeq",
    titleHi: "तख़्लीक़",
    description:
      "Acrylic on canvas — embossed colour, poem and image conceived together.",
    to: "/gallery/takhleeq",
    tone: "mint",
    coverImage: "/images/takhleeq-series-cover.jpg",
  },
  {
    id: "sketches",
    title: "Sketches",
    description: "Works on paper — line, study, and seeing in quick form.",
    to: "/gallery/sketches",
    tone: "clay",
    coverImage: "/images/sketch-series-cover.jpg",
  },
  {
    id: "practice-work",
    title: "Practice Work",
    description:
      "Studio exercises and studies — process, play, and work outside the main series.",
    to: "/gallery/practice-work",
    tone: "amber",
    coverImage: "/images/practice-series-cover.jpg",
  },
];

export const BIOGRAPHY_PARAGRAPHS: string[] = [
  `Vinay Sukhiyajiwala (born 8 December 2003) is an abstract painter and published Hindi poet from Surat, Gujarat. He grew up drawing and painting, especially in watercolour, and in the ninth grade participated in his first group exhibition — an experience that set the direction of his creative life.`,

  `During the COVID-19 pandemic he turned deeply to Hindi novels and poetry. Writers such as Manav Kaul, encountered through programmes like Neelesh Misra's Slow Interview, opened a new lane beyond the studio: language as urgent and intimate as pigment.`,

  `In 2022 he published his first book of poems, Boond — Akelepan se liki kavitayein (बूँद — अकेलेपन से लिखी कवितायें), poems written from solitude. The collection marked a lasting bond between his verbal and visual work.`,

  `Today he continues to exhibit and to write. His abstract paintings favour acrylic on canvas, embossed and layered surfaces, and colour as emotional language — always in dialogue with the poem that shares the work's birth. He remains based in Surat, building a body of work where image and word refuse to be separated.`,
];

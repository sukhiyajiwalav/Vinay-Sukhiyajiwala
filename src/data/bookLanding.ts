/** Shared assets & links for the Boond / book landing page */

/** Scans: `Photos/Book/Front Cover Page.png` & `Back Cover Page.png` → `public/images/boond-book-*-cover.png` (`npm run sync-boond-book-cover`) */
export const BOOK_COVER_FRONT = "/images/boond-book-front-cover.png";
export const BOOK_COVER_BACK = "/images/boond-book-back-cover.png";

/** /biography Books card + /book hero + home Poetry promo — front cover */
export const BOOK_COVER_CARD_IMAGE = BOOK_COVER_FRONT;

/** /book hero — same as front cover scan */
export const BOOK_COVER_HERO = BOOK_COVER_FRONT;

export const BOOK_PORTRAIT_FOR_QUOTE =
  "/images/about-section-portrait.jpg";

/** Primary India purchase — Boond (paperback) */
export const AMAZON_IN_BOOND = "https://amzn.in/d/0gjBl4Mf";

/** Where to buy — Amazon.in, Flipkart (deep link), Astitva publisher store */
export const ASTITVA_BOOND_PRODUCT =
  "https://astitvaprakashan.com/product/boond-akelepan-se-likhi-kavitaen/";

export const FLIPKART_BOOND = "https://dl.flipkart.com/s/jjbqukuuuN";

export const RETAILERS: { id: string; label: string; href: string }[] = [
  { id: "amazon", label: "Amazon.in", href: AMAZON_IN_BOOND },
  { id: "flipkart", label: "Flipkart", href: FLIPKART_BOOND },
  { id: "astitva", label: "Astitva Prakashan", href: ASTITVA_BOOND_PRODUCT },
];

/** Real book facts (Amazon.in listing) — for hero + social strip */
export const BOOK_FACTS = {
  title: "Boond — Akelepan se likhi kavitayein",
  publisher: "Astitva Prakashan",
  pubDate: "November 2022",
  pages: 184,
  isbn13: "978-9394607682",
  language: "Hindi",
  readingAge: "10+",
} as const;

/** Strip under retailers — fact badges, not sales rank */
export const BOOK_SOCIAL_FACTS: { badge: string; label: string }[] = [
  { badge: "2022", label: "First edition · India" },
  { badge: "184", label: "Pages of poetry" },
  { badge: "हि", label: "Hindi · Devanagari" },
  { badge: "AP", label: "Astitva Prakashan" },
];

/**
 * Eight themes distilled from the book’s own description (solitude, poetry as
 * dhun, bindu, night/memory, joy/sorrow, self vs ocean).
 */
export const BOOK_THEMES: string[] = [
  "Solitude — for those who’ve seen it, seek it, or live in it",
  "Poetry as a slow tune that time keeps renaming",
  "When hope thins, the ache itself becomes the poem",
  "The bindu — night without sleep, memory that won’t leave",
  "Joy and sorrow in adjoining moments",
  "Eyes open, yet nothing visible — the dark in-between",
  "Truth, judgement, and what the body carries",
  "The drop and the ocean — self and the whole",
];

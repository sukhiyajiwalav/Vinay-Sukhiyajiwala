import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdChevronLeft, MdChevronRight, MdClose } from "react-icons/md";
import "./styles/PaintingLightbox.css";

type PaintingLightboxProps = {
  open: boolean;
  initialIndex: number;
  images: string[];
  title: string;
  onClose: () => void;
};

export default function PaintingLightbox({
  open,
  initialIndex,
  images,
  title,
  onClose,
}: PaintingLightboxProps) {
  const [slide, setSlide] = useState(initialIndex);

  useEffect(() => {
    if (open) setSlide(Math.min(initialIndex, Math.max(0, images.length - 1)));
  }, [open, initialIndex, images.length]);

  useEffect(() => {
    if (!open) return;
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

    return () => {
      html.style.overflow = prev.htmlOverflow;
      body.style.overflow = prev.bodyOverflow;
      body.style.overflowX = prev.bodyOverflowX;
      body.style.overflowY = prev.bodyOverflowY;
      queueMicrotask(() => {
        ScrollTrigger.refresh(true);
      });
    };
  }, [open]);

  useEffect(() => {
    if (!open || images.length === 0) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setSlide((i) => (i - 1 + images.length) % images.length);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        setSlide((i) => (i + 1) % images.length);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, images.length]);

  if (!open || images.length === 0) return null;

  const src = images[slide];
  const count = images.length;

  return createPortal(
    <div
      className="painting-lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${title} — full screen gallery`}
    >
      <div
        className="painting-lightbox-backdrop"
        role="presentation"
        onClick={onClose}
      />
      <div className="painting-lightbox-chrome">
        <button
          type="button"
          className="painting-lightbox-close"
          onClick={onClose}
          aria-label="Close"
        >
          <MdClose size={28} />
        </button>
        <p className="painting-lightbox-caption">
          <span className="painting-lightbox-title">{title}</span>
          <span className="painting-lightbox-counter" aria-live="polite">
            {slide + 1} / {count}
          </span>
        </p>
      </div>

      <div className="painting-lightbox-stage">
        {count > 1 ? (
          <button
            type="button"
            className="painting-lightbox-nav painting-lightbox-nav--prev"
            onClick={() =>
              setSlide((i) => (i - 1 + images.length) % images.length)
            }
            aria-label="Previous image"
          >
            <MdChevronLeft size={40} />
          </button>
        ) : null}

        <div className="painting-lightbox-frame">
          <img
            src={src}
            alt={`${title} — image ${slide + 1} of ${count}`}
            className="painting-lightbox-img"
            decoding="async"
          />
        </div>

        {count > 1 ? (
          <button
            type="button"
            className="painting-lightbox-nav painting-lightbox-nav--next"
            onClick={() => setSlide((i) => (i + 1) % images.length)}
            aria-label="Next image"
          >
            <MdChevronRight size={40} />
          </button>
        ) : null}
      </div>
    </div>,
    document.body
  );
}

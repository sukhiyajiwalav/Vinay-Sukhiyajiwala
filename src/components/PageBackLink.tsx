import { Link } from "react-router-dom";
import "./styles/PageBackLink.css";

export type PageBackLinkVariant = "onLight" | "overlay";

type PageBackLinkProps = {
  /** `onLight` — white/cream pages. `overlay` — dark hero (painting detail, book landing). */
  variant?: PageBackLinkVariant;
  /** Route pathname (e.g. `/`, `/gallery`, `/gallery/takhleeq`). */
  to?: string;
  /** Word after the arrow — e.g. `Home` or `Back`. */
  label?: string;
  /** Accessible name; defaults from `to` / `label` when omitted. */
  ariaLabel?: string;
};

const PageBackLink = ({
  variant = "onLight",
  to = "/",
  label = "Home",
  ariaLabel,
}: PageBackLinkProps) => {
  const visible = `←\u00a0${label}`;
  const defaultAria =
    label === "Home" && to === "/"
      ? "Back to home"
      : label === "Back"
        ? "Back"
        : `Go to ${label}`;

  return (
    <Link
      to={to}
      className={`page-back-link page-back-link--${variant}`}
      data-cursor="disable"
      aria-label={ariaLabel ?? defaultAria}
    >
      {visible}
    </Link>
  );
};

export default PageBackLink;

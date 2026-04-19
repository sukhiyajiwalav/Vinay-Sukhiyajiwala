import { useState } from "react";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
  /** Light gallery page: thin black frame, white mat */
  galleryLight?: boolean;
  /** Works section grid: white mat, soft shadow, thin frame */
  gridCard?: boolean;
  /** Frame color when `gridCard` is true */
  frameTone?: "black" | "white";
}

const WorkImage = (props: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");
  const [imgFailed, setImgFailed] = useState(false);

  const handleMouseEnter = async () => {
    if (props.video) {
      setIsVideo(true);
      const response = await fetch(`src/assets/${props.video}`);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      setVideo(blobUrl);
    }
  };

  const inner = (
    <>
      {props.link && (
        <div className="work-link">
          <span className="work-link-icon" aria-hidden>
            ↗
          </span>
        </div>
      )}
      {imgFailed ? (
        <div className="painting-placeholder">
          <span className="painting-placeholder-label">Image forthcoming</span>
        </div>
      ) : (
        <img
          src={props.image}
          alt={props.alt ?? ""}
          onError={() => setImgFailed(true)}
        />
      )}
      {isVideo && (
        <video src={video} autoPlay muted playsInline loop></video>
      )}
    </>
  );

  const frameClass = (() => {
    if (props.gridCard) {
      const tone = props.frameTone === "white" ? "white" : "black";
      return [
        "work-image-in",
        "work-image-grid-frame",
        tone === "white"
          ? "work-image-grid-frame--white"
          : "work-image-grid-frame--black",
      ].join(" ");
    }
    return [
      "work-image-in",
      "work-image-framed",
      props.galleryLight ? "work-image-gallery-light" : "",
    ]
      .filter(Boolean)
      .join(" ");
  })();

  if (props.link) {
    return (
      <div className="work-image">
        <a
          className={frameClass}
          href={props.link}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={() => setIsVideo(false)}
          target="_blank"
          rel="noreferrer"
          data-cursor="disable"
        >
          {inner}
        </a>
      </div>
    );
  }

  return (
    <div className="work-image">
      <div
        className={frameClass}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsVideo(false)}
        data-cursor="disable"
      >
        {inner}
      </div>
    </div>
  );
};

export default WorkImage;

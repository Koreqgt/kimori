import { Reveal } from "@/components/ui/reveal";
import { ParallaxImage } from "@/components/ui/parallax-image";

type FeatureProps = {
  img: string;
  alt: string;
  tag: string;
  title: string;
  titleEm?: string;
  desc: string;
  caption?: string;
  align?: "start" | "end" | "bottom";
  scrim?: "left" | "right" | "bottom";
  waveTop?: string;
  waveBottom?: string;
  waveTopFlip?: boolean;
  waveBottomFlip?: boolean;
};

export function Feature({
  img,
  alt,
  tag,
  title,
  titleEm,
  desc,
  caption,
  align = "start",
  scrim = "left",
  waveTop,
  waveBottom,
  waveTopFlip,
  waveBottomFlip,
}: FeatureProps) {
  return (
    <section className="feature" aria-label={tag}>
      <ParallaxImage src={img} alt={alt} strength={80} sizes="100vw" />
      <div className={`feature-scrim ${scrim}`} aria-hidden="true" />

      {waveTop && (
        <svg
          viewBox="0 0 1440 130"
          preserveAspectRatio="none"
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: 130,
            zIndex: 2,
            pointerEvents: "none",
            transform: waveTopFlip ? "scaleX(-1)" : undefined,
          }}
        >
          <path
            d="M0,0 L1440,0 L1440,60 C1200,105 960,30 720,78 C480,115 240,42 0,82 Z"
            style={{ fill: waveTop }}
          />
        </svg>
      )}

      {waveBottom && (
        <svg
          viewBox="0 0 1440 130"
          preserveAspectRatio="none"
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: 130,
            zIndex: 2,
            pointerEvents: "none",
            transform: waveBottomFlip ? "scaleX(-1)" : undefined,
          }}
        >
          <path
            d="M0,68 C240,28 480,105 720,58 C960,22 1200,88 1440,52 L1440,130 L0,130 Z"
            style={{ fill: waveBottom }}
          />
        </svg>
      )}

      <div
        className={`feature-content ${align === "end" ? "end" : align === "bottom" ? "bottom" : ""}`}
        style={{ position: "relative", zIndex: 3 }}
      >
        <div className="feature-text">
          <Reveal>
            <div className="feature-tag">{tag}</div>
            <div className="feature-title">
              {title} {titleEm && <em>{titleEm}</em>}
            </div>
            <p className="feature-desc">{desc}</p>
          </Reveal>
        </div>
      </div>
      {caption && <div className="feature-caption" style={{ zIndex: 3 }}>{caption}</div>}
    </section>
  );
}

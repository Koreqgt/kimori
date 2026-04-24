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
}: FeatureProps) {
  return (
    <section className="feature" aria-label={tag}>
      <ParallaxImage src={img} alt={alt} strength={80} sizes="100vw" />
      <div className={`feature-scrim ${scrim}`} aria-hidden="true" />
      <div
        className={`feature-content ${align === "end" ? "end" : align === "bottom" ? "bottom" : ""}`}
      >
        <div className="feature-text">
          <Reveal>
            <div className="feature-tag">{tag}</div>
            <h2 className="feature-title">
              {title} {titleEm && <em>{titleEm}</em>}
            </h2>
            <p className="feature-desc">{desc}</p>
          </Reveal>
        </div>
      </div>
      {caption && <div className="feature-caption">{caption}</div>}
    </section>
  );
}

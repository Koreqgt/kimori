import { Reveal } from "@/components/ui/reveal";

const PRINCIPLES = [
  {
    n: "01",
    jp: "現代",
    label: "Contemporary",
    desc: "A modern silhouette grounded in Japanese restraint. Clean lines and honest materials, designed for the way families live now and for thirty years from now.",
  },
  {
    n: "02",
    jp: "集合",
    label: "Collective",
    desc: "The character 木 (tree) holds 人 (person) within it. KIMORI is built around this idea: a community of homes where neighbours become quiet companions.",
  },
  {
    n: "03",
    jp: "個性",
    label: "Character",
    desc: "Resembling the genius loci of Bukit Serdang: its hill, its canopy, its breath. Spaces that take their cue from the land they sit upon, not the trends of the moment.",
  },
];

export function Philosophy() {
  return (
    <section
      className="philosophy"
      id="philosophy"
      aria-labelledby="philosophy-title"
    >
      <div className="phil-watermark jp" aria-hidden="true">森</div>
      <div className="container-k" style={{ position: "relative", zIndex: 1 }}>
        <Reveal>
          <div className="phil-header">
            <div className="phil-left">
              <div className="sec-eyebrow">Design Concept</div>
              <div
                className="phil-equation"
                aria-label="ki plus ki plus ki equals Mori"
              >
                <span className="phil-eq-char jp">木</span>
                <span className="phil-eq-op">+</span>
                <span className="phil-eq-char jp">木</span>
                <span className="phil-eq-op">+</span>
                <span className="phil-eq-char jp">木</span>
                <span className="phil-eq-op">=</span>
                <span className="phil-eq-char jp phil-eq-mori">森</span>
              </div>
              <div className="phil-roman">
                <em>ki &nbsp;+&nbsp; ki &nbsp;+&nbsp; ki &nbsp;=&nbsp; Mori</em>
              </div>
            </div>
            <div className="phil-right">
              <p className="phil-intro">
                <em>森</em> — <strong>MORI</strong> is the kanji for <em>forest</em>,
                formed by three repetitions of the character 木 —{" "}
                <strong>KI</strong>, meaning <em>tree</em>.
              </p>
              <p className="phil-intro">
                Within the 木 character itself sits 人, the kanji for{" "}
                <em>person</em>. So MORI carries an older meaning: an assembly
                of people who, together, become a community.
              </p>
              <p className="phil-intro">
                This is the heart of KIMORI. Not just trees on a hill, but
                lives, gathered.
              </p>
            </div>
          </div>
        </Reveal>
        <div className="phil-grid">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.12}>
              <article className="phil-card">
                <div className="phil-num">{p.n}</div>
                <div
                  className="phil-kanji jp"
                  aria-hidden="true"
                  id={i === 0 ? "philosophy-title" : undefined}
                >
                  {p.jp}
                </div>
                <div className="phil-label">{p.label}</div>
                <p className="phil-desc">{p.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

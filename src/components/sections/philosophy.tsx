import { Reveal } from "@/components/ui/reveal";

const PRINCIPLES = [
  {
    n: "01",
    jp: "間",
    title: "Ma",
    desc: "The eloquence of empty space. Layouts designed around breath — between rooms, between buildings, between hurry and rest.",
  },
  {
    n: "02",
    jp: "和",
    title: "Wa",
    desc: "Harmony with surroundings. North–south orientation, cross-ventilation, and material honesty let the hill shape the home.",
  },
  {
    n: "03",
    jp: "詫寂",
    title: "Wabi-Sabi",
    desc: "Beauty in restraint. Warm wood, quiet stone, plaster that ages gracefully — nothing loud, nothing false.",
  },
];

export function Philosophy() {
  return (
    <section
      className="philosophy"
      id="philosophy"
      aria-labelledby="philosophy-title"
    >
      <div className="container-k">
        <Reveal>
          <div style={{ maxWidth: 680 }}>
            <div className="sec-eyebrow">Design Philosophy</div>
            <h2 id="philosophy-title" className="sec-title">
              Three principles,
              <br />
              one <em>calm.</em>
            </h2>
            <p className="sec-lede" style={{ marginTop: 24 }}>
              KIMORI draws from Japanese residential traditions — not as
              pastiche, but as discipline. Every plan, every finish is tested
              against three old, patient ideas.
            </p>
          </div>
        </Reveal>
        <div className="phil-grid">
          {PRINCIPLES.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.12}>
              <article className="phil-card">
                <div className="phil-num">— {p.n}</div>
                <div className="phil-kanji jp" aria-hidden="true">{p.jp}</div>
                <h3 className="phil-title">{p.title}</h3>
                <p className="phil-desc">{p.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

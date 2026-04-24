import { Reveal } from "@/components/ui/reveal";

const FACTS = [
  { n: "418", u: "", l: "Total Units · Phase 1" },
  { n: "34", u: "", l: "Curated Facilities" },
  { n: "28", u: "", l: "Residential Levels" },
  { n: "2", u: "", l: "Carparks Minimum" },
  { n: "3", u: "km", l: "to UPM MRT Station" },
  { n: "5", u: "", l: "Hospitals within 10km" },
  { n: "8", u: "+", l: "Shopping Malls Nearby" },
  { n: "N–S", u: "", l: "All Units Facing" },
];

export function Facts() {
  return (
    <section className="facts" aria-labelledby="facts-title">
      <div className="container-k">
        <Reveal>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: 50,
              flexWrap: "wrap",
              gap: 30,
            }}
          >
            <div>
              <div className="sec-eyebrow">In Numbers</div>
              <h2
                id="facts-title"
                className="sec-title"
                style={{ fontSize: "clamp(36px,4.6vw,60px)" }}
              >
                Thoughtfully <em>measured.</em>
              </h2>
            </div>
            <p
              className="sec-lede"
              style={{ maxWidth: 380, fontSize: 15 }}
            >
              Every figure is a quiet argument for how KIMORI is built — not to
              impress, but to endure.
            </p>
          </div>
        </Reveal>
        <div className="facts-grid">
          {FACTS.map((f, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="fact">
                <div className="fact-n">
                  {f.n}
                  <span className="unit">{f.u}</span>
                </div>
                <div className="fact-l">{f.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

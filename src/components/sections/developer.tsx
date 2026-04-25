import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

const POINTS = [
  {
    n: "30+",
    t: "Years of Combined Experience",
    d: "Industry veterans from civil infrastructure, government projects, and residential developments across Malaysia.",
  },
  {
    n: "350",
    t: "Units · Kondominium Timur Perdana",
    d: "Completed in 2022 — a fully occupied high-rise residential development, delivered on time, on spec.",
  },
  {
    n: "01",
    t: "Contractor Roots · Magnibiz Sdn Bhd",
    d: "Hands-on construction experience. We build what we design, and we design what we would live in.",
  },
];

export function Developer() {
  return (
    <section
      className="developer"
      id="developer"
      aria-labelledby="developer-title"
    >
      <div className="container-k">
        <div className="dev-grid">
          <Reveal>
            <div className="dev-image">
              <Image
                src="/assets/entrance.jpg"
                alt="Premierex craftsmanship at Kimori's entrance"
                fill
                sizes="(max-width: 960px) 100vw, 40vw"
                style={{ objectFit: "cover" }}
              />
              <div className="dev-meta">Kimori Entrance · 2026</div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div>
              <div className="sec-eyebrow">The Developer</div>
              <h2 id="developer-title" className="sec-title">
                Premierex
                <br />
                <em>Development.</em>
              </h2>
              <p className="sec-lede" style={{ marginTop: 24 }}>
                Founded by industry veterans with a shared discipline: build
                quietly, build precisely, build for the long run. No gimmicks.
                No shortcuts. Just the kind of residential work that still
                feels right in thirty years.
              </p>
              <div className="dev-points">
                {POINTS.map((p, i) => (
                  <article key={i} className="dev-point">
                    <div className="dev-p-n">{p.n}</div>
                    <div>
                      <h3 className="dev-p-t">{p.t}</h3>
                      <p className="dev-p-d">{p.d}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

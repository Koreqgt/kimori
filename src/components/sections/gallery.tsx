import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function Gallery() {
  return (
    <section className="gallery" id="gallery" aria-labelledby="gallery-title">
      <div className="container-wide">
        <div className="gallery-head">
          <Reveal>
            <div>
              <div className="sec-eyebrow">The Residences in View</div>
              <h2 id="gallery-title" className="sec-title">
                Rendered with
                <br />
                <em>intention.</em>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="sec-lede">
              Seven moments that define KIMORI — from the iconic tree at the
              drop-off to the infinity pool suspended above the Serdang valley.
              Each render is a commitment.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="gallery-tall">
            <div className="gallery-item h-tall">
              <Image
                src="/assets/iconic.jpg"
                alt="Podium roundabout with the iconic mature tree at the drop-off"
                fill
                sizes="(max-width: 960px) 100vw, 55vw"
                style={{ objectFit: "cover" }}
              />
              <div className="cap">01 · Iconic Tree Roundabout</div>
            </div>
            <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: 24 }}>
              <div className="gallery-item">
                <Image
                  src="/assets/entrance.jpg"
                  alt="Grand entrance of KIMORI with timber screens and preserved canopy"
                  fill
                  sizes="(max-width: 960px) 100vw, 45vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="cap">02 · Grand Entrance</div>
              </div>
              <div className="gallery-item">
                <Image
                  src="/assets/podium.jpg"
                  alt="KIMORI iconic tower — reinforced concrete silhouette on the Serdang skyline"
                  fill
                  sizes="(max-width: 960px) 100vw, 45vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="cap">03 · Iconic Tower</div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="h-pair" style={{ marginBottom: 24 }}>
            <div className="gallery-item h-med">
              <Image
                src="/assets/pool.jpg"
                alt="25 metre infinity pool framing the KLCC skyline at KIMORI"
                fill
                sizes="(max-width: 960px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              <div className="cap">04 · 25m Infinity Pool</div>
            </div>
            <div className="gallery-item h-med">
              <Image
                src="/assets/rooftop.jpg"
                alt="KIMORI rooftop garden at dusk with pines and par course"
                fill
                sizes="(max-width: 960px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              <div className="cap">05 · Rooftop Horizon</div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="h-pair">
            <div className="gallery-item h-med">
              <Image
                src="/assets/jacuzzi.jpg"
                alt="Moonlit jacuzzi garden screened by timber lattice at KIMORI"
                fill
                sizes="(max-width: 960px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              <div className="cap">06 · Moonlit Jacuzzi</div>
            </div>
            <div
              className="gallery-item h-med auto-mobile"
              style={{
                background: "var(--forest)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "40px",
                color: "var(--paper)",
              }}
            >
              <div className="mono-tag" style={{ color: "var(--wood)" }}>
                07 · Full Experience
              </div>
              <div>
                <div
                  className="jp"
                  style={{
                    fontSize: 72,
                    color: "rgba(255,255,255,.14)",
                    marginBottom: 12,
                  }}
                  aria-hidden="true"
                >
                  見
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontWeight: 300,
                    fontSize: 46,
                    lineHeight: 1.05,
                    marginBottom: 20,
                  }}
                >
                  Walk through KIMORI in{" "}
                  <em style={{ color: "var(--wood)" }}>360°</em>
                </div>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.7,
                    opacity: 0.78,
                    marginBottom: 28,
                    maxWidth: 360,
                  }}
                >
                  Step into every room, every vista. A fully interactive
                  virtual tour of the residences and facilities.
                </p>
                <Button asChild variant="outline-light">
                  <a
                    href={siteConfig.tour360}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Enter Virtual Tour →</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

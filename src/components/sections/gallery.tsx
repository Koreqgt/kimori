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
                Composed with
                <br />
                <em>intention.</em>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="sec-lede">
              Moments that define KIMORI, from the iconic tree at the
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
                  alt="Podium deck at KIMORI with alfresco dining, barbecue counters, and a play court overlooking the city"
                  fill
                  sizes="(max-width: 960px) 100vw, 45vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="cap">03 · Podium Deck</div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="h-pair" style={{ marginBottom: 24 }}>
            <div className="gallery-item h-med">
              <Image
                src="/assets/lobby-02.jpg"
                alt="Drop-off arrival opening into the marble lobby of KIMORI Residences"
                fill
                sizes="(max-width: 960px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              <div className="cap">04 · Arrival Lobby</div>
            </div>
            <div className="gallery-item h-med">
              <Image
                src="/assets/gym-02.jpg"
                alt="Gymnasium with treadmills and free weights beneath a timber-slat ceiling at KIMORI"
                fill
                sizes="(max-width: 960px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              <div className="cap">05 · Sky Gym</div>
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
              <div className="cap">06 · 25m Infinity Pool</div>
            </div>
            <div className="gallery-item h-med">
              <Image
                src="/assets/rooftop.jpg"
                alt="KIMORI rooftop garden at dusk with pines and par course"
                fill
                sizes="(max-width: 960px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              <div className="cap">07 · Rooftop Horizon</div>
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
              <div className="cap">08 · Moonlit Jacuzzi</div>
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
                09 · Full Experience
              </div>
              <div>
                <div
                  className="jp gallery-tour-kanji"
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
                  className="gallery-tour-title"
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
                  className="gallery-tour-copy"
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
                <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
                  <Button asChild variant="outline-light">
                    <a
                      href={siteConfig.tour360TypeA}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Type A · 1,095 sq ft →</span>
                    </a>
                  </Button>
                  <Button asChild variant="outline-light">
                    <a
                      href={siteConfig.tour360TypeB}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Type B · 857 sq ft →</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

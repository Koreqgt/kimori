import { Reveal } from "@/components/ui/reveal";

export function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <div className="container-k">
        <div className="about-grid">
          <Reveal>
            <div>
              <div className="sec-eyebrow">About KIMORI</div>
              <div className="about-kanji jp" aria-hidden="true">
                木森
              </div>
              <h2 id="about-title" className="sec-title">
                A forest of
                <br />
                <em>belonging.</em>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="about-body">
              <p>
                KIMORI — 木森 — is a name formed from the Japanese characters
                for tree and forest. It is a quiet promise: that home can feel
                like a grove. Shelter from noise. Rooted, gentle, alive.
              </p>
              <p>
                Rising from the highest point of Bukit Serdang, KIMORI
                Residences is a 418-unit freehold condominium that trades
                spectacle for sincerity. Walls are reinforced concrete. Layouts
                are practical. Every home faces north–south to draw in the
                softest light.
              </p>
              <p>
                What you see from the balcony — the unblocked KLCC skyline, the
                Serdang canopy below — is not decoration. It is the work of
                choosing a site with discipline, and building on it with
                patience.
              </p>
              <div className="about-stats">
                <div>
                  <div className="stat-v">34</div>
                  <div className="stat-l">Facilities</div>
                </div>
                <div>
                  <div className="stat-v">
                    5{" "}
                    <span style={{ fontSize: 22, color: "var(--wood)" }}>
                      ac
                    </span>
                  </div>
                  <div className="stat-l">Freehold Land</div>
                </div>
                <div>
                  <div className="stat-v">
                    105
                    <span
                      style={{
                        fontSize: 18,
                        color: "var(--wood)",
                        marginLeft: 4,
                      }}
                    >
                      /ac
                    </span>
                  </div>
                  <div className="stat-l">Lowest Density</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

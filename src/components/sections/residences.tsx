"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

type ResKey = "A" | "B";

type Spec = {
  size: string;
  beds: string;
  baths: string;
  cars: string;
  tag: string;
  desc: string;
};

const TYPES: Record<ResKey, Spec> = {
  A: {
    size: "1,095",
    beds: "4+1",
    baths: "2",
    cars: "2",
    tag: "KLCC & Facilities View",
    desc: "The largest floorplate — a family sanctuary with a wide balcony, formal dining, and four generous bedrooms plus a utility room.",
  },
  B: {
    size: "857",
    beds: "3",
    baths: "2",
    cars: "2",
    tag: "Dual Outlook",
    desc: "An efficient three-bedroom plan with north–south ventilation, a private yard off the kitchen, and balcony off the living room.",
  },
};

export function Residences() {
  const [active, setActive] = useState<ResKey>("A");
  const t = TYPES[active];

  return (
    <section
      className="residences"
      id="residences"
      aria-labelledby="residences-title"
    >
      <div className="container-k">
        <Reveal>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 60,
              alignItems: "end",
              marginBottom: 20,
            }}
            className="residences-head"
          >
            <div>
              <div className="sec-eyebrow">Residences</div>
              <h2 id="residences-title" className="sec-title">
                Two plans.
                <br />
                <em>Both generous.</em>
              </h2>
            </div>
            <p className="sec-lede">
              Reinforced concrete shells, SPC flooring in bedrooms, quality
              tiles in the wet rooms. No surprises — only the finishes we would
              choose for our own families.
            </p>
          </div>
        </Reveal>

        <div className="res-tabs" role="tablist">
          {(Object.keys(TYPES) as ResKey[]).map((k) => (
            <button
              key={k}
              type="button"
              role="tab"
              aria-selected={active === k}
              className={`res-tab${active === k ? " active" : ""}`}
              onClick={() => setActive(k)}
            >
              Type {k} · {TYPES[k].size} sqft
            </button>
          ))}
        </div>

        <div className="res-body">
          <Reveal>
            <div className="res-plan">
              <svg
                viewBox="0 0 400 340"
                style={{ width: "86%", height: "auto" }}
                fill="none"
                aria-label={`Stylized floor plan of Type ${active}`}
              >
                <rect
                  x="10"
                  y="10"
                  width="380"
                  height="320"
                  stroke="var(--forest)"
                  strokeWidth="1.5"
                  fill="var(--paper)"
                />
                {active === "A" ? (
                  <g
                    stroke="var(--ink-soft)"
                    strokeWidth="1"
                    fill="var(--paper-2)"
                  >
                    <rect x="20" y="20" width="110" height="100" />
                    <text
                      x="30"
                      y="45"
                      fontSize="10"
                      fill="var(--ink-muted)"
                      letterSpacing="1"
                    >
                      MASTER
                    </text>
                    <rect
                      x="130"
                      y="20"
                      width="130"
                      height="100"
                      fill="var(--paper)"
                    />
                    <text
                      x="148"
                      y="75"
                      fontSize="12"
                      fill="var(--forest)"
                      letterSpacing="2"
                    >
                      LIVING
                    </text>
                    <rect x="260" y="20" width="130" height="100" />
                    <text
                      x="278"
                      y="45"
                      fontSize="10"
                      fill="var(--ink-muted)"
                      letterSpacing="1"
                    >
                      BEDROOM 2/3
                    </text>
                    <rect x="20" y="120" width="80" height="90" />
                    <text
                      x="28"
                      y="145"
                      fontSize="10"
                      fill="var(--ink-muted)"
                      letterSpacing="1"
                    >
                      BATH
                    </text>
                    <rect
                      x="100"
                      y="120"
                      width="160"
                      height="90"
                      fill="var(--paper)"
                    />
                    <text
                      x="130"
                      y="170"
                      fontSize="12"
                      fill="var(--forest)"
                      letterSpacing="2"
                    >
                      DINING
                    </text>
                    <rect x="260" y="120" width="130" height="90" />
                    <text
                      x="278"
                      y="145"
                      fontSize="10"
                      fill="var(--ink-muted)"
                      letterSpacing="1"
                    >
                      BEDROOM 4
                    </text>
                    <rect x="20" y="210" width="120" height="120" />
                    <text
                      x="28"
                      y="235"
                      fontSize="10"
                      fill="var(--ink-muted)"
                      letterSpacing="1"
                    >
                      KITCHEN
                    </text>
                    <rect x="140" y="210" width="120" height="120" />
                    <text
                      x="148"
                      y="235"
                      fontSize="10"
                      fill="var(--ink-muted)"
                      letterSpacing="1"
                    >
                      FOYER
                    </text>
                    <rect x="260" y="210" width="130" height="120" />
                    <text
                      x="268"
                      y="235"
                      fontSize="10"
                      fill="var(--ink-muted)"
                      letterSpacing="1"
                    >
                      YARD
                    </text>
                  </g>
                ) : (
                  <g
                    stroke="var(--ink-soft)"
                    strokeWidth="1"
                    fill="var(--paper-2)"
                  >
                    <rect x="20" y="20" width="150" height="120" />
                    <text
                      x="32"
                      y="45"
                      fontSize="10"
                      fill="var(--ink-muted)"
                      letterSpacing="1"
                    >
                      MASTER
                    </text>
                    <rect
                      x="170"
                      y="20"
                      width="100"
                      height="120"
                      fill="var(--paper)"
                    />
                    <text
                      x="188"
                      y="85"
                      fontSize="12"
                      fill="var(--forest)"
                      letterSpacing="2"
                    >
                      LIVING
                    </text>
                    <rect x="270" y="20" width="120" height="120" />
                    <text
                      x="282"
                      y="45"
                      fontSize="10"
                      fill="var(--ink-muted)"
                      letterSpacing="1"
                    >
                      BALCONY
                    </text>
                    <rect x="20" y="140" width="150" height="110" />
                    <text
                      x="32"
                      y="165"
                      fontSize="10"
                      fill="var(--ink-muted)"
                      letterSpacing="1"
                    >
                      BEDROOM 2
                    </text>
                    <rect
                      x="170"
                      y="140"
                      width="100"
                      height="110"
                      fill="var(--paper)"
                    />
                    <text
                      x="188"
                      y="200"
                      fontSize="12"
                      fill="var(--forest)"
                      letterSpacing="2"
                    >
                      DINING
                    </text>
                    <rect x="270" y="140" width="120" height="110" />
                    <text
                      x="282"
                      y="165"
                      fontSize="10"
                      fill="var(--ink-muted)"
                      letterSpacing="1"
                    >
                      BEDROOM 3
                    </text>
                    <rect x="20" y="250" width="180" height="80" />
                    <text
                      x="32"
                      y="275"
                      fontSize="10"
                      fill="var(--ink-muted)"
                      letterSpacing="1"
                    >
                      KITCHEN
                    </text>
                    <rect x="200" y="250" width="190" height="80" />
                    <text
                      x="212"
                      y="275"
                      fontSize="10"
                      fill="var(--ink-muted)"
                      letterSpacing="1"
                    >
                      YARD · UTILITY
                    </text>
                  </g>
                )}
                <text
                  x="200"
                  y="165"
                  fontSize="8"
                  fill="var(--wood)"
                  textAnchor="middle"
                  letterSpacing="2"
                  opacity=".6"
                >
                  TYPE {active}
                </text>
              </svg>
              <div
                style={{
                  position: "absolute",
                  bottom: 20,
                  right: 24,
                  fontSize: 10,
                  letterSpacing: ".32em",
                  textTransform: "uppercase",
                  color: "var(--ink-muted)",
                }}
              >
                Stylized · Indicative
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="res-specs">
              <div
                className="mono-tag"
                style={{ color: "var(--wood-deep)", marginBottom: 14 }}
              >
                {t.tag}
              </div>
              <div className="res-type">
                Type <em>{active}</em>
              </div>
              <div className="res-size">
                {t.size} <span className="u">sq ft built-up</span>
              </div>
              <div className="res-divide" />
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.75,
                  color: "var(--ink-soft)",
                  fontWeight: 300,
                  marginBottom: 32,
                }}
              >
                {t.desc}
              </p>
              <div className="res-rows">
                <div>
                  <div className="res-row-l">Bedrooms</div>
                  <div className="res-row-v">{t.beds}</div>
                </div>
                <div>
                  <div className="res-row-l">Bathrooms</div>
                  <div className="res-row-v">{t.baths}</div>
                </div>
                <div>
                  <div className="res-row-l">Carparks</div>
                  <div className="res-row-v">{t.cars}</div>
                </div>
              </div>
              <div style={{ marginTop: 40 }}>
                <Button asChild variant="primary">
                  <a href="#cta">
                    <span>Request Floorplan</span>
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

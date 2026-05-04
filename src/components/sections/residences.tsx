"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";

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
              <div className="sec-eyebrow">Floorplan</div>
              <h2 id="residences-title" className="sec-title">
                Two plans.
                <br />
                <em>Both generous.</em>
              </h2>
            </div>
            <p className="sec-lede">
              Concrete structure, SPC floors, quality tiles. Finishes we&apos;d
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
            <div
              className="res-plan"
              style={{ background: "none", border: "none" }}
            >
              <img
                src={active === "A" ? "/assets/plan A.png" : "/assets/plan B.png"}
                alt={`Type ${active} floor plan`}
                style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
              />
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
              <dl className="res-rows">
                <div>
                  <dt className="res-row-l">Bedrooms</dt>
                  <dd className="res-row-v">{t.beds}</dd>
                </div>
                <div>
                  <dt className="res-row-l">Bathrooms</dt>
                  <dd className="res-row-v">{t.baths}</dd>
                </div>
                <div>
                  <dt className="res-row-l">Carparks</dt>
                  <dd className="res-row-v">{t.cars}</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

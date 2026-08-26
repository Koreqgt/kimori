"use client";

import { useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { useIsAccordion } from "@/lib/use-is-accordion";

// `color` is the zone's key colour from the printed facilities legend — it
// paints the zone header block, its numbers and its marker rings, so the
// website reads the same way as the brochure.
const FACILITY_ZONES = [
  {
    zone: "Wetness Corner",
    color: "#5d9bd1",
    items: [
      { id: 1, name: "Wading Pool" },
      { id: 2, name: "25m Infinity Pool" },
      { id: 3, name: "Jacuzzi" },
      { id: 4, name: "Outdoor Shower" },
      { id: 5, name: "Pool Cabana" },
      { id: 6, name: "Pool Deck" },
      { id: 7, name: "Changing Room/Toilet" },
    ],
  },
  {
    zone: "Fitness Zone",
    color: "#e0a445",
    items: [
      { id: 8, name: "Inclusive Playground" },
      { id: 9, name: "Integrated Play" },
      { id: 10, name: "Half Basketball Court" },
      { id: 11, name: "Indoor Gym (Upper Flr)" },
      { id: 12, name: "Yoga Room (Upper Flr)" },
      { id: 13, name: "Outdoor Fitness" },
      { id: 14, name: "Jogging Track" },
    ],
  },
  {
    zone: "Closeness Community",
    color: "#d8452c",
    items: [
      { id: 15, name: "BBQ Terrace" },
      { id: 16, name: "Study Room" },
      { id: 17, name: "Game/Activity Room" },
      { id: 18, name: "Multipurpose Hall" },
      { id: 19, name: "Grand Drop-off Lobby" },
      { id: 20, name: "Outdoor Space" },
      { id: 21, name: "Function Room" },
      { id: 22, name: "Kindergarten (LG3)" },
    ],
  },
  {
    zone: "Timeless Leisure",
    color: "#4ba84b",
    items: [
      { id: 23, name: "Roundabout Iconic Tree" },
      { id: 24, name: "Gazebo" },
      { id: 25, name: "Garden Lawn & Deck" },
      { id: 26, name: "Semi Open Lounge" },
      { id: 27, name: "Outdoor Par Course" },
      { id: 28, name: "Exercise Lawn" },
      { id: 29, name: "Garden Lawn" },
      { id: 30, name: "Restricted Card Access Gate" },
    ],
  },
  {
    zone: "Access Convenience",
    color: "#a98bc7",
    items: [
      { id: 31, name: "Guardhouse" },
      { id: 32, name: "Shop" },
      { id: 33, name: "Laundry Room" },
      { id: 34, name: "Management Office" },
      { id: 35, name: "Car Wash Bay" },
      { id: 36, name: "EV Charging Bay (G Flr)" },
      { id: 37, name: "Mail Room (G Flr)" },
      { id: 38, name: "Prayer Room (LG3)" },
    ],
  },
];

const ZOOM_STEPS = [100, 160, 240, 320];

export function Facilities() {
  const [activeZone, setActiveZone] = useState(0);
  const [zoomStep, setZoomStep] = useState(0);
  const isMobile = useIsAccordion();

  // The plan is a flat picture: the numbers printed on it are the only
  // index, and the list below is the key to them. It opens fitted to the
  // frame, so nothing starts hidden off-screen — zoom is opt-in via +/-.

  const zoom = ZOOM_STEPS[zoomStep];

  const zoomControls = (
    <div className="fac-plan-buttons">
      <button
        type="button"
        onClick={() => setZoomStep((z) => Math.max(0, z - 1))}
        disabled={zoomStep === 0}
        aria-label="Zoom out"
      >
        &minus;
      </button>
      <button
        type="button"
        onClick={() => setZoomStep((z) => Math.min(ZOOM_STEPS.length - 1, z + 1))}
        disabled={zoomStep === ZOOM_STEPS.length - 1}
        aria-label="Zoom in"
      >
        +
      </button>
    </div>
  );

  return (
    <section
      className="facilities"
      id="facilities"
      aria-labelledby="facilities-title"
    >
      <div className="container-k">
        <Reveal>
          <div className="fac-header">
            <div className="sec-eyebrow fac-eyebrow">Facilities</div>
            <h2 id="facilities-title" className="sec-title fac-main-title">
              Amenities for the{" "}
              <em className="fac-title-accent">art of living.</em>
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="fac-plan-frame">
            <div className="fac-plan-tools">{zoomControls}</div>

            <div className="fac-plan-viewport">
              <div className="fac-plan-canvas" style={{ width: `${zoom}%` }}>
                <Image
                  src="/assets/facilities-plan-v2.png"
                  alt="KIMORI facilities site plan with numbered amenities"
                  width={1299}
                  height={528}
                  sizes="(max-width: 960px) 320vw, (max-width: 1200px) 90vw, 1304px"
                  className="fac-plan-img"
                  priority
                />
              </div>
            </div>

            <div className="fac-plan-caption">
              <span className="fac-plan-caption-line" />
              <span>Site Plan: Resort-Inspired Facilities</span>
              <span className="fac-plan-caption-line" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.34}>
          <div className="fac-cols">
            {FACILITY_ZONES.map((zone, zi) => (
              <div
                key={zone.zone}
                className={`fac-zone${zi === activeZone ? " is-active" : ""}`}
                style={{ "--zone": zone.color } as React.CSSProperties}
              >
                {/* Desktop lays all five zones out as open columns, so the
                    collapse state only exists — and is only announced — once
                    the accordion is actually in play below 960px. */}
                <h3 className="fac-zone-head">
                  <button
                    type="button"
                    className="fac-zone-title"
                    onClick={() => setActiveZone((z) => (z === zi ? -1 : zi))}
                    aria-expanded={isMobile ? zi === activeZone : undefined}
                    aria-controls={`fac-panel-${zi}`}
                  >
                    <span className="fac-zone-dot" aria-hidden="true" />
                    <span className="fac-zone-name">{zone.zone}</span>
                    <span className="fac-zone-chev" aria-hidden="true" />
                  </button>
                </h3>
                <div className="fac-zone-body" id={`fac-panel-${zi}`}>
                <ul className="fac-col-list">
                  {zone.items.map((item) => (
                    <li key={item.id}>
                      <div className="fac-col-row">
                        <span className="fac-col-letter">{item.id}</span>
                        <span className="fac-col-sep" aria-hidden="true" />
                        <span className="fac-col-name">{item.name}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

    </section>
  );
}

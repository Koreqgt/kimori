"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

const FACILITY_ZONES = [
  {
    zone: "Wetness Corner",
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
    items: [
      { id: 23, name: "Roundabout Iconic Tree" },
      { id: 24, name: "Gazebo" },
      { id: 25, name: "Garden Lawn & Deck" },
      { id: 26, name: "Semi Open Lounge" },
      { id: 27, name: "Outdoor Par Course" },
      { id: 28, name: "Exercise Lawn" },
      { id: 29, name: "Garden Lawn" },
    ],
  },
  {
    zone: "Access Convenience",
    items: [
      { id: 30, name: "Guardhouse" },
      { id: 31, name: "Shop" },
      { id: 32, name: "Laundry Room" },
      { id: 33, name: "Management Office" },
      { id: 34, name: "Car Wash Bay" },
      { id: 35, name: "EV Charging Bay (G Flr)" },
      { id: 36, name: "Mail Room (G Flr)" },
      { id: 37, name: "Prayer Room (LG3)" },
    ],
  },
];

/**
 * Where each numbered circle sits on facilities-plan.png, as a percentage of
 * the image box (x from the left edge, y from the top). These were read off the
 * 2600x1158 source by eye, so nudge any that land off-centre — these numbers are
 * the only thing positioning the hotspots, nothing else depends on them.
 *
 * Two ids intentionally have no entry: 22 (Kindergarten) and 37 (Prayer Room)
 * sit on LG3 and are not drawn on this podium plan. Id 5 (Pool Cabana) is
 * printed twice on the plan, so it has two entries.
 */
const MARKERS: { id: number; x: number; y: number }[] = [
  { id: 14, x: 16.2, y: 29.7 },
  { id: 24, x: 21.6, y: 38.6 },
  { id: 35, x: 34.2, y: 31.3 },
  { id: 19, x: 45.7, y: 28.6 },
  { id: 17, x: 53.5, y: 34.8 },
  { id: 16, x: 56.4, y: 34.8 },
  { id: 27, x: 77.7, y: 31.5 },
  { id: 21, x: 82.1, y: 37.0 },
  { id: 15, x: 63.3, y: 40.9 },
  { id: 10, x: 69.7, y: 37.1 },
  { id: 9, x: 76.6, y: 41.6 },
  { id: 36, x: 46.0, y: 42.5 },
  { id: 20, x: 53.6, y: 46.3 },
  { id: 8, x: 63.8, y: 51.7 },
  { id: 29, x: 69.5, y: 51.4 },
  { id: 28, x: 79.2, y: 54.5 },
  { id: 25, x: 31.8, y: 57.9 },
  { id: 13, x: 37.8, y: 56.6 },
  { id: 26, x: 53.3, y: 56.1 },
  { id: 6, x: 45.5, y: 60.0 },
  { id: 5, x: 37.3, y: 63.0 },
  { id: 5, x: 42.9, y: 63.0 },
  { id: 3, x: 32.6, y: 66.1 },
  { id: 4, x: 46.2, y: 65.7 },
  { id: 11, x: 48.2, y: 68.3 },
  { id: 18, x: 57.0, y: 69.2 },
  { id: 31, x: 64.9, y: 63.9 },
  { id: 34, x: 90.5, y: 68.5 },
  { id: 2, x: 40.0, y: 72.9 },
  { id: 1, x: 45.6, y: 72.7 },
  { id: 12, x: 49.7, y: 72.4 },
  { id: 32, x: 64.4, y: 70.4 },
  { id: 33, x: 64.9, y: 75.9 },
  { id: 23, x: 26.9, y: 76.9 },
  { id: 30, x: 14.0, y: 80.6 },
  { id: 7, x: 53.7, y: 80.0 },
];

const MARKED_IDS = new Set(MARKERS.map((m) => m.id));
const NAME_BY_ID = new Map(
  FACILITY_ZONES.flatMap((z) => z.items).map((i) => [i.id, i.name]),
);
const ZONE_BY_ID = new Map(
  FACILITY_ZONES.flatMap((z, zi) => z.items.map((i) => [i.id, zi] as const)),
);

const ZOOM_STEPS = [100, 160, 240, 320];

export function Facilities() {
  const [activeZone, setActiveZone] = useState(0);
  const [activeId, setActiveId] = useState<number | null>(null);
  const [zoomStep, setZoomStep] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const viewportRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  // The plan always opens fitted to the frame, so nothing is hidden off-screen
  // and there is no sideways scrolling to discover. Reading the printed numbers
  // is not how you find a facility here — tapping its row rings it on the plan —
  // so zoom stays opt-in via the +/Expand controls.

  const centerOn = useCallback((id: number) => {
    const vp = viewportRef.current;
    const canvas = canvasRef.current;
    const marker = MARKERS.find((m) => m.id === id);
    if (!vp || !canvas || !marker) return;

    vp.scrollTo({
      left: (canvas.offsetWidth * marker.x) / 100 - vp.clientWidth / 2,
      top: (canvas.offsetHeight * marker.y) / 100 - vp.clientHeight / 2,
      behavior: "smooth",
    });
  }, []);

  const select = useCallback(
    (id: number) => {
      setActiveId(id);
      const zone = ZONE_BY_ID.get(id);
      if (zone !== undefined) setActiveZone(zone);
      // let the tab switch paint before measuring the scroll target
      requestAnimationFrame(() => centerOn(id));
    },
    [centerOn],
  );

  useEffect(() => {
    if (!expanded) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setExpanded(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [expanded]);

  const zoom = ZOOM_STEPS[zoomStep];

  const plan = (
    <div className="fac-plan-viewport" ref={viewportRef}>
      <div
        className="fac-plan-canvas"
        ref={canvasRef}
        style={{ width: `${zoom}%` }}
      >
        <Image
          src="/assets/facilities-plan.png"
          alt="KIMORI facilities site plan with numbered amenities"
          width={2600}
          height={1158}
          sizes="(max-width: 960px) 320vw, (max-width: 1200px) 90vw, 1304px"
          className="fac-plan-img"
          priority
        />
        {MARKERS.map((m, i) => (
          <button
            key={`${m.id}-${i}`}
            type="button"
            className={`fac-marker${activeId === m.id ? " is-active" : ""}`}
            style={{ left: `${m.x}%`, top: `${m.y}%` }}
            onClick={() => select(m.id)}
            aria-label={`${m.id}. ${NAME_BY_ID.get(m.id) ?? ""}`}
            aria-pressed={activeId === m.id}
          />
        ))}
      </div>
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
            <div className="fac-plan-tools">
              <span className="fac-plan-hint">
                {activeId && NAME_BY_ID.get(activeId)
                  ? `${activeId} · ${NAME_BY_ID.get(activeId)}`
                  : "Tap a facility to locate it"}
              </span>
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
                  onClick={() =>
                    setZoomStep((z) => Math.min(ZOOM_STEPS.length - 1, z + 1))
                  }
                  disabled={zoomStep === ZOOM_STEPS.length - 1}
                  aria-label="Zoom in"
                >
                  +
                </button>
                <button
                  type="button"
                  onClick={() => setExpanded(true)}
                  aria-label="Open plan full screen"
                >
                  Expand
                </button>
              </div>
            </div>

            {plan}

            <div className="fac-plan-caption">
              <span className="fac-plan-caption-line" />
              <span>Site Plan: Resort-Inspired Facilities</span>
              <span className="fac-plan-caption-line" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.28}>
          <div className="fac-tabs" role="tablist" aria-label="Facility zones">
            {FACILITY_ZONES.map((zone, i) => (
              <button
                key={zone.zone}
                type="button"
                role="tab"
                id={`fac-tab-${i}`}
                aria-selected={i === activeZone}
                aria-controls={`fac-panel-${i}`}
                className={`fac-tab${i === activeZone ? " is-active" : ""}`}
                onClick={() => setActiveZone(i)}
              >
                {zone.zone}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.34}>
          <div className="fac-cols">
            {FACILITY_ZONES.map((zone, zi) => (
              <div
                key={zone.zone}
                id={`fac-panel-${zi}`}
                role="tabpanel"
                aria-labelledby={`fac-tab-${zi}`}
                className={`fac-zone${zi === activeZone ? " is-active" : ""}`}
              >
                <h3 className="fac-zone-title">{zone.zone}</h3>
                <ul className="fac-col-list">
                  {zone.items.map((item) => {
                    const locatable = MARKED_IDS.has(item.id);
                    return (
                      <li key={item.id}>
                        <button
                          type="button"
                          className={`fac-col-row${
                            activeId === item.id ? " is-active" : ""
                          }${locatable ? "" : " is-plain"}`}
                          onClick={() => select(item.id)}
                          aria-pressed={activeId === item.id}
                          // ids drawn on another floor have nothing to point at
                          disabled={!locatable}
                        >
                          <span className="fac-col-letter">{item.id}</span>
                          <span className="fac-col-sep" aria-hidden="true" />
                          <span className="fac-col-name">{item.name}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {expanded ? (
        <div
          className="fac-plan-modal"
          role="dialog"
          aria-modal="true"
          aria-label="Facilities site plan"
        >
          <button
            type="button"
            className="fac-plan-close"
            onClick={() => setExpanded(false)}
            aria-label="Close full screen plan"
          >
            Close
          </button>
          {plan}
        </div>
      ) : null}
    </section>
  );
}

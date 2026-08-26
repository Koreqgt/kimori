"use client";

import { useState } from "react";
import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { useIsAccordion } from "@/lib/use-is-accordion";

/**
 * Categories are keyed to the same five hues as the facilities legend, and the
 * columns below are built the same way, so the two sections read as one piece.
 * `color` only ever fills the heading block -- the distances stay neutral, as
 * the facility numbers do, because these hues go pale as small text.
 */
type AccessCategory = {
  key: string;
  title: string;
  color: string;
  items: { name: string; distance: string }[];
};

const CATEGORIES: AccessCategory[] = [
  {
    key: "shopping",
    title: "Shopping",
    color: "#e0a445",
    items: [
      { name: "Olive Hill Business Park", distance: "850 m" },
      { name: "Equine Boulevard", distance: "5.8 km" },
      { name: "AEON Mall Taman Equine", distance: "6.7 km" },
      { name: "Equine Shopping Centre", distance: "6.7 km" },
      { name: "Pavilion Bukit Jalil", distance: "8.9 km" },
      { name: "IOI City Mall", distance: "12.3 km" },
    ],
  },
  {
    key: "recreation",
    title: "Recreation",
    color: "#4ba84b",
    items: [
      { name: "Bukit Serdang Hiking Trail", distance: "600 m" },
      { name: "Bukit Jalil Recreational Park", distance: "7.0 km" },
      { name: "National Stadium Bukit Jalil", distance: "7.3 km" },
      { name: "Farm In The City", distance: "8.1 km" },
      { name: "UniPutra Golf Club", distance: "9.4 km" },
    ],
  },
  {
    key: "transport",
    title: "Public Transport",
    color: "#5d9bd1",
    items: [
      { name: "MRT UPM", distance: "3.2 km" },
      { name: "MRT Serdang Jaya", distance: "3.2 km" },
      { name: "KTM Serdang Station", distance: "5.5 km" },
    ],
  },
  {
    key: "healthcare",
    title: "Healthcare",
    color: "#d8452c",
    items: [
      { name: "Columbia Asia Hospital Bukit Jalil", distance: "7.3 km" },
      { name: "Andorra Women & Children Hospital", distance: "9.9 km" },
      { name: "UPM Hospital · Sultan Abdul Aziz Shah", distance: "10.1 km" },
      { name: "Serdang Hospital · Sultan Idris Shah", distance: "10.5 km" },
    ],
  },
  {
    key: "education",
    title: "Education",
    color: "#a98bc7",
    items: [
      { name: "SMK Seri Kembangan", distance: "1.1 km" },
      { name: "SJK(C) Serdang Baru 1", distance: "1.1 km" },
      { name: "Wembley International School", distance: "3.7 km" },
      { name: "International Medical University", distance: "6.5 km" },
      { name: "SJK(C) Bukit Serdang", distance: "8.7 km" },
      { name: "Tzu Chi International School", distance: "9.1 km" },
    ],
  },
];

function BranchSvg() {
  return (
    <svg
      viewBox="0 0 210 620"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* main stem from bottom, curving up */}
      <path
        d="M 5 620 C 10 548 22 478 40 408 C 58 338 78 290 100 238"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      {/* mid-stem small branch left */}
      <path
        d="M 55 368 C 34 345 15 328 -2 305"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
      <path
        d="M -2 305 C -4 285 2 264 10 244"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
      <path
        d="M -2 305 C 10 290 24 278 32 260"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
      <circle cx="10" cy="244" r="2" fill="currentColor" />
      <circle cx="32" cy="260" r="1.8" fill="currentColor" />
      {/* upper fork, left branch */}
      <path
        d="M 100 238 C 74 202 44 174 16 142"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M 16 142 C 8 118 4 90 8 62"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M 16 142 C 30 122 50 108 64 86"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M 64 86 C 70 68 72 48 68 28"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
      <path
        d="M 64 86 C 76 72 90 62 100 46"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
      <circle cx="8" cy="62" r="2.5" fill="currentColor" />
      <circle cx="68" cy="28" r="2" fill="currentColor" />
      <circle cx="100" cy="46" r="2" fill="currentColor" />
      {/* upper fork, right branch */}
      <path
        d="M 100 238 C 128 200 160 172 188 140"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
      <path
        d="M 188 140 C 196 116 200 88 196 60"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M 188 140 C 170 118 150 104 138 80"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M 138 80 C 132 60 132 40 136 18"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
      <path
        d="M 138 80 C 148 64 162 52 172 36"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
      <circle cx="196" cy="60" r="2.5" fill="currentColor" />
      <circle cx="136" cy="18" r="2" fill="currentColor" />
      <circle cx="172" cy="36" r="2" fill="currentColor" />
    </svg>
  );
}

export function Location() {
  const [activeCat, setActiveCat] = useState(0);
  const isAccordion = useIsAccordion();

  return (
    <section
      className="location"
      id="location"
      aria-labelledby="location-title"
    >
      <div className="loc-deco loc-deco--left">
        <BranchSvg />
      </div>
      <div className="loc-deco loc-deco--right">
        <BranchSvg />
      </div>
      <div className="container-k">
        <Reveal>
          <div
            className="loc-header"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 60,
              alignItems: "end",
              maxWidth: "none",
            }}
          >
            <div>
              <div className="sec-eyebrow loc-eyebrow">Location</div>
              <h2 id="location-title" className="sec-title loc-title">
                Access
                <br />
                <em>Made Easy.</em>
              </h2>
            </div>
            <p className="loc-lede">
              KL, Putrajaya, and the Klang Valley via MEX, NSE, and SKVE,
              from a quiet elevation above the city.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="loc-image">
            <Image
              src="/assets/Accessibility.png"
              alt="Map showing Kimori's connectivity to surrounding amenities across the Klang Valley"
              width={3104}
              height={2860}
              sizes="(max-width: 960px) 92vw, 1040px"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="access-grid">
            {CATEGORIES.map(({ key, title, color, items }, ci) => (
              <div
                key={key}
                className={`access-card${ci === activeCat ? " is-active" : ""}`}
                style={{ "--tone": color } as React.CSSProperties}
              >
                {/* Desktop lays all five categories out as open columns, so the
                    collapse state only exists — and is only announced — once
                    the accordion is actually in play below 960px. */}
                <h3 className="access-card-head">
                  <button
                    type="button"
                    className="access-card-title"
                    onClick={() => setActiveCat((c) => (c === ci ? -1 : ci))}
                    aria-expanded={isAccordion ? ci === activeCat : undefined}
                    aria-controls={`access-panel-${ci}`}
                  >
                    <span className="access-card-dot" aria-hidden="true" />
                    <span className="access-card-name">{title}</span>
                    <span className="access-card-chev" aria-hidden="true" />
                  </button>
                </h3>
                <div className="access-card-body" id={`access-panel-${ci}`}>
                  <ul className="access-list">
                    {items.map((item) => (
                      <li key={item.name} className="access-item">
                        <span className="access-item-name">{item.name}</span>
                        <span className="access-item-distance">
                          {item.distance}
                        </span>
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

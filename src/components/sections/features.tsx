"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    img: "/assets/entrance.jpg",
    tag: "01 · Grand Entrance",
    title: "The first",
    em: "impression.",
    desc: "A timber-canopied arrival sequence that greets every homecoming with calm, scale, and shade.",
  },
  {
    img: "/assets/lobby-01.jpg",
    tag: "02 · Grand Lobby",
    title: "Every return,",
    em: "received in calm.",
    desc: "Marble, timber, and soft light compose an arrival hall that treats the everyday homecoming as a quiet ceremony.",
  },
  {
    img: "/assets/gym-01.jpg",
    tag: "03 · Sky Gym",
    title: "Strength, framed",
    em: "by the skyline.",
    desc: "A fully equipped gymnasium beneath a timber-slat ceiling, its glass line opening to the city far below.",
  },
  {
    img: "/assets/games-room.jpg",
    tag: "04 · Games Room",
    title: "Play, at",
    em: "an easy pace.",
    desc: "Foosball, table tennis, and board games gathered in a timber-latticed room made for slow afternoons together.",
  },
  {
    img: "/assets/podium.jpg",
    tag: "05 · Podium Deck",
    title: "Days that gather",
    em: "in open air.",
    desc: "Alfresco dining under umbrellas, barbecue counters, a play court, and a children's playground, all laid out on a hilltop deck above the city.",
  },
  {
    img: "/assets/pool.jpg",
    tag: "06 · 25m Infinity Pool",
    title: "Swim into",
    em: "the horizon.",
    desc: "The rooftop pool is oriented to frame the unblocked KLCC skyline by day and an unbroken starfield by night.",
  },
  {
    img: "/assets/rooftop.jpg",
    tag: "07 · Sky Lounge",
    title: "Where the day",
    em: "softens into dusk.",
    desc: "A communal terrace at the crown of KIMORI, oriented to catch the slowest light of the evening.",
  },
];

export function Features() {
  const [i, setI] = useState(0);
  const f = slides[i];

  return (
    <section className="features" id="features" aria-labelledby="features-title">
      <div className="features-section-head">
        <div className="sec-eyebrow" style={{ color: "var(--paper)" }}>Gallery</div>
      </div>

      <div className="features-stage">
        <AnimatePresence initial={false}>
          <motion.img
            key={f.img}
            src={f.img}
            alt={f.title}
            className="features-img"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, transition: { duration: 1.1, ease: "linear" } }}
            transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
          />
        </AnimatePresence>

        <div className="features-scrim" />

        <div className="features-overlay">
          <div className="features-text">
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <div className="features-tag">{f.tag}</div>
                <h3 className="features-title">
                  {f.title} <em>{f.em}</em>
                </h3>
                <p className="features-desc">{f.desc}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="features-controls">
            <div className="feat-counter">
              <span className="cur">{String(i + 1).padStart(2, "0")}</span> /{" "}
              {String(slides.length).padStart(2, "0")}
            </div>

            <div className="feat-thumbs">
              {slides.map((s, idx) => (
                <button
                  key={s.img}
                  type="button"
                  className={`feat-thumb ${idx === i ? "active" : ""}`}
                  onClick={() => setI(idx)}
                  aria-label={s.tag}
                >
                  <img src={s.img} alt="" />
                  <div className="feat-thumb-label">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                </button>
              ))}
            </div>

            <div className="feat-arrows">
              <button
                type="button"
                onClick={() => setI((i - 1 + slides.length) % slides.length)}
                aria-label="Previous slide"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <path d="M15 6 L9 12 L15 18" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => setI((i + 1) % slides.length)}
                aria-label="Next slide"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <path d="M9 6 L15 12 L9 18" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

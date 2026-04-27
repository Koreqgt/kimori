"use client";

import { motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const scale = useMotionValue(1.05);

  useEffect(() => {
    const update = () => {
      const el = ref.current;
      if (!el) return;
      const p = Math.min(1, Math.max(0, window.scrollY / (el.offsetHeight || 1)));
      scale.set(1.05 + p * 0.13);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [scale]);

  return (
    <section ref={ref} className="hero" id="top" aria-label="Introduction">
      <motion.div className="hero-img-wrap" style={{ scale }}>
        <Image
          src="/assets/aerial.jpg"
          alt="Aerial view of KIMORI Residences rising above the green hills of Bukit Serdang"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </motion.div>
      <div className="hero-scrim" aria-hidden="true" />
      <div className="hero-kanji" aria-hidden="true">
        木森
      </div>
      <div className="hero-content">
        <Reveal delay={0.1}>
          <div className="hero-eyebrow">
            Freehold Residences · Serdang Hilltop
          </div>
        </Reveal>
        <Reveal delay={0.25}>
          <h1 className="hero-title">
            KIMORI
            <span className="hero-title-sub">
              Residences at Bukit Serdang
            </span>
          </h1>
        </Reveal>
        <Reveal delay={0.4}>
          <p className="hero-sub">
            A quiet ascent above the city. Freehold residences shaped by
            Japanese principles of balance, light, and lasting craft — perched
            on the highest peak of Bukit Serdang.
          </p>
        </Reveal>
        <Reveal delay={0.55}>
          <div className="hero-actions">
            <Button asChild variant="primary">
              <a href="#about">
                <span>Begin the Journey</span>
              </a>
            </Button>
            <Button asChild variant="outline-light">
              <a
                href={siteConfig.tour360}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Explore 360° Tour</span>
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
      <div className="hero-scroll hero-scroll--desktop" aria-hidden="true">
        <span>Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}

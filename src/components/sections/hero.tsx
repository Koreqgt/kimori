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
          /* 100vw is a lie for this element and desktop paid for it. The
             image is object-fit: cover inside a 100svh box, so a 16:9 source
             scales to fill the HEIGHT and gets cropped on the width -- it
             renders far wider than the viewport -- and the scroll transform
             on the wrapper (1.05 at rest, 1.18 scrolled) magnifies it again.
             At 100vw a ~1450px window asked for 1450px, got the 1920
             candidate, and painted it ~2330px wide: 0.82 source px per CSS
             px, i.e. a real upscale, visible at 1x. Phones never showed it
             because DPR 3 already pushed 430px past the 1080 candidate.
             Above the mobile breakpoint just ask for 2560 -- the largest
             deviceSize and the source's own native width, so it is a
             ceiling rather than a guess. Below it, unchanged. */
          sizes="(max-width: 620px) 100vw, 2560px"
          style={{ objectFit: "cover" }}
        />
      </motion.div>
      <div className="hero-scrim" aria-hidden="true" />
      <div className="hero-content">
        {/* Kept to one line. The rule before it is a fixed 44px flex item,
            so at 12px in 0.18em caps the old "Freehold Residences · Serdang
            Hilltop" overran a 375px column and broke to a second line beside
            it. "Residences" is already the h1's second line. */}
        <div className="hero-eyebrow">
          Freehold · Serdang Hilltop
        </div>
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
            A quiet ascent above the city. Freehold homes shaped by Japanese
            principles of balance, light, and lasting craft.
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

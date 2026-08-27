"use client";

import { motion, useMotionValue } from "framer-motion";
import { getImageProps } from "next/image";
import { useEffect, useRef } from "react";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

/* Art direction, not just a bigger file. The hero is object-fit: cover in a
   100svh box, so a 16:9 source is scaled to fill the HEIGHT and then cropped
   hard on the width -- a phone shows only the middle ~30% of aerial.jpg and
   throws the other 70% of the bytes away. Worse, cover magnifies what is left
   until the visible slice carries about 552x1029 real pixels behind a
   1290x2400 device-pixel panel.

   So mobile gets its own 750x1440 centre crop instead: every pixel downloaded
   is a pixel shown, the visible slice rises to ~714x1330, and the delivered
   AVIF drops from 163KB to 119KB (measured through next/image itself, not
   estimated). Sharper and lighter at once.

   The ceiling here is the source, not the plumbing: aerial.jpg is 1440px tall
   and a DPR-3 phone hero wants ~2400, so this is still a ~1.7x upscale. It
   cannot be closed without a taller original.

   0.52 aspect (750/1440) is deliberate -- real phone heroes at 100svh span
   roughly 0.45 to 0.58 depending on chassis and whether the browser chrome is
   showing, so sitting mid-range means cover only ever trims a little off one
   axis rather than a lot off either.

   getImageProps is what next/image documents for this; it keeps the optimizer
   and the srcset generation while letting <picture> pick the source. */
const HERO_ALT =
  "Aerial view of KIMORI Residences rising above the green hills of Bukit Serdang";

/* 2560px, not 100vw. 100vw is a lie for this element: cover on a tall box
   renders the image far wider than the viewport, and the scroll transform
   (1.05 at rest, 1.18 scrolled) magnifies it again. At 100vw a ~1450px window
   asked for 1450, got the 1920 candidate and painted it ~2330 wide -- 0.82
   source px per CSS px, a real upscale, plainly visible at DPR 1. 2560 is both
   the largest deviceSize and the source width, so it is a ceiling not a guess. */
const {
  props: { srcSet: desktopSrcSet, sizes: desktopSizes },
} = getImageProps({
  alt: HERO_ALT,
  src: "/assets/aerial.jpg",
  width: 2560,
  height: 1440,
  sizes: "2560px",
});

const {
  props: { srcSet: mobileSrcSet, sizes: mobileSizes, ...heroImgProps },
} = getImageProps({
  alt: HERO_ALT,
  src: "/assets/aerial-portrait.jpg",
  width: 750,
  height: 1440,
  sizes: "100vw",
});

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
        {/* One <picture>, so exactly one file is fetched -- the browser picks
            by media query and never downloads the other. That is also why
            this is fetchPriority/eager rather than next/image preload: the
            docs rule out preload precisely when the LCP image varies by
            viewport, since preloading would pull both crops. (priority is
            deprecated in Next 16 regardless.) */}
        <picture>
          <source
            media="(min-width: 621px)"
            srcSet={desktopSrcSet}
            sizes={desktopSizes}
          />
          <source
            media="(max-width: 620px)"
            srcSet={mobileSrcSet}
            sizes={mobileSizes}
          />
          <img
            {...heroImgProps}
            alt={HERO_ALT}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
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

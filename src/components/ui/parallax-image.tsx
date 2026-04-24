"use client";

import { motion, useMotionValue } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  strength?: number;
  priority?: boolean;
  sizes?: string;
};

export function ParallaxImage({
  src,
  alt,
  strength = 100,
  priority = false,
  sizes = "100vw",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const y = useMotionValue(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Cache layout values — only update on resize, never on scroll
    let elTop = 0;
    let elHeight = 0;

    const cacheLayout = () => {
      elTop = el.offsetTop;
      elHeight = el.offsetHeight;
      let parent = el.offsetParent as HTMLElement | null;
      while (parent) {
        elTop += parent.offsetTop;
        parent = parent.offsetParent as HTMLElement | null;
      }
    };

    const update = () => {
      const winH = window.innerHeight;
      const relTop = elTop - window.scrollY;
      const progress = (winH - relTop) / (winH + elHeight);
      y.set((Math.max(0, Math.min(1, progress)) - 0.5) * strength);
    };

    cacheLayout();
    update();

    const ro = new ResizeObserver(() => {
      cacheLayout();
      update();
    });
    ro.observe(document.documentElement);

    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, [strength, y]);

  return (
    <div
      ref={ref}
      style={{ position: "absolute", inset: 0, overflow: "hidden" }}
    >
      <motion.div
        style={{
          y,
          width: "100%",
          height: "110%",
          position: "absolute",
          top: "-5%",
          left: 0,
          willChange: "transform",
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          style={{ objectFit: "cover" }}
        />
      </motion.div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";

/**
 * True once the layout is narrow enough that a section's category columns
 * become a stacked accordion rather than sitting side by side. Starts false so
 * the server render and the first client render agree; the effect corrects it
 * before paint. Only the ARIA depends on it — the collapsing itself is pure
 * CSS, keyed off the same 960px breakpoint in globals.css.
 */
export function useIsAccordion() {
  const [isAccordion, setIsAccordion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 960px)");
    const sync = () => setIsAccordion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return isAccordion;
}

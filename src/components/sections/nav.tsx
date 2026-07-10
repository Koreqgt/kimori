"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { TreeMark } from "@/components/ui/tree-mark";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

const LINKS = [
  { href: "#about", label: "About", mobileLabel: "About Kimori" },
  {
    href: "#philosophy",
    label: "Philosophy",
    mobileLabel: "Design Philosophy",
  },
  { href: "#features", label: "Gallery", mobileLabel: "Gallery" },
  { href: "#location", label: "Location", mobileLabel: "Location Access" },
  { href: "#residences", label: "Floorplan", mobileLabel: "Floorplan" },
  { href: "#facilities", label: "Facilities", mobileLabel: "Facilities Deck" },
  { href: "#cta", label: "Contact", mobileLabel: "Contact Us" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [tourOpen, setTourOpen] = useState(false);
  const tourRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!tourOpen) return;
    const onDown = (e: PointerEvent) => {
      if (!tourRef.current?.contains(e.target as Node)) setTourOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setTourOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [tourOpen]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav className={`nav${scrolled ? " scrolled" : ""}`} aria-label="Primary">
        <a href="#top" className="nav-logo" aria-label={`${siteConfig.name} home`}>
          <TreeMark />
          <span>KIMORI</span>
        </a>
        <div className="nav-links">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </div>
        <div className="nav-tour" ref={tourRef}>
          <button
            type="button"
            className="nav-cta"
            aria-haspopup="menu"
            aria-expanded={tourOpen}
            onClick={() => setTourOpen((v) => !v)}
          >
            <span>360° Tour</span>
            <ChevronDown
              size={12}
              strokeWidth={1.2}
              className={`nav-tour-chev${tourOpen ? " open" : ""}`}
            />
          </button>
          {tourOpen && (
            <div className="nav-tour-menu" role="menu">
              <a
                href={siteConfig.tour360TypeA}
                target="_blank"
                rel="noopener noreferrer"
                role="menuitem"
                onClick={() => setTourOpen(false)}
              >
                <span>Type A</span>
                <em>1,095 sq ft</em>
              </a>
              <a
                href={siteConfig.tour360TypeB}
                target="_blank"
                rel="noopener noreferrer"
                role="menuitem"
                onClick={() => setTourOpen(false)}
              >
                <span>Type B</span>
                <em>857 sq ft</em>
              </a>
            </div>
          )}
        </div>
        <button
          type="button"
          className="nav-burger"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <span />
        </button>
      </nav>

      {open && (
        <div className="mobile-sheet" role="dialog" aria-modal="true">
          <div className="ms-top">
            <a
              href="#top"
              className="nav-logo"
              onClick={() => setOpen(false)}
              style={{ color: "var(--forest)" }}
            >
              <TreeMark color="var(--wood)" />
              <span>KIMORI</span>
            </a>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              style={{ width: 36, height: 36 }}
            >
              <X strokeWidth={1.2} />
            </button>
          </div>
          <nav aria-label="Mobile">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.mobileLabel}
              </a>
            ))}
          </nav>
          <div className="ms-cta" style={{ display: "grid", gap: 12 }}>
            <Button asChild variant="primary">
              <a
                href={siteConfig.tour360TypeA}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>360° Tour · Type A</span>
              </a>
            </Button>
            <Button asChild variant="primary">
              <a
                href={siteConfig.tour360TypeB}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>360° Tour · Type B</span>
              </a>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

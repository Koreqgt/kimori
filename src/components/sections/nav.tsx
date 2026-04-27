"use client";

import { useEffect, useState } from "react";
import { ArrowRight, X } from "lucide-react";
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
  { href: "#gallery", label: "Renders", mobileLabel: "Render Gallery" },
  { href: "#location", label: "Location", mobileLabel: "Location Access" },
  { href: "#residences", label: "Residences", mobileLabel: "Residence Plans" },
  { href: "#facilities", label: "Facilities", mobileLabel: "Facilities Deck" },
  { href: "#developer", label: "Developer", mobileLabel: "Developer Profile" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        <a
          href={siteConfig.tour360}
          target="_blank"
          rel="noopener noreferrer"
          className="nav-cta"
        >
          <span>360° Tour</span>
          <ArrowRight size={12} strokeWidth={1.2} />
        </a>
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
              style={{ color: "var(--ink)" }}
            >
              <TreeMark color="var(--forest)" />
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
          <div className="ms-cta">
            <Button asChild variant="primary">
              <a
                href={siteConfig.tour360}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Enter 360° Tour</span>
              </a>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

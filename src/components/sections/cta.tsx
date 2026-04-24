"use client";

import Image from "next/image";
import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { TreeMark } from "@/components/ui/tree-mark";
import { siteConfig } from "@/lib/site";

export function CTA() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="cta" id="cta" aria-labelledby="cta-title">
      <div className="cta-hero" aria-hidden="true">
        <Image
          src="/assets/rooftop.jpg"
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="cta-inner">
        <Reveal>
          <div
            className="mono-tag"
            style={{ color: "var(--wood)", marginBottom: 28 }}
          >
            Registration of Interest
          </div>
          <h2 id="cta-title" className="cta-title">
            Come and <em>sit with</em>
            <br />
            the hill awhile.
          </h2>
          <p className="cta-sub">
            Leave a few details and a member of our sales team will arrange a
            private viewing at the Kimori Sales Gallery — or a guided tour of
            the 360° experience, whichever you prefer.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          {submitted ? (
            <div
              style={{
                marginTop: 56,
                padding: "32px 0",
                borderTop: "1px solid rgba(255,255,255,.18)",
                borderBottom: "1px solid rgba(255,255,255,.18)",
                maxWidth: 720,
              }}
              role="status"
              aria-live="polite"
            >
              <div
                className="mono-tag"
                style={{ color: "var(--wood)", marginBottom: 14 }}
              >
                Thank You
              </div>
              <p style={{ fontSize: 18, lineHeight: 1.7, fontWeight: 300 }}>
                A member of our team will be in touch shortly. In the meantime,{" "}
                <a
                  href={siteConfig.tour360}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--wood)", textDecoration: "underline" }}
                >
                  step into the 360° tour
                </a>
                .
              </p>
            </div>
          ) : (
            <form className="cta-form" onSubmit={onSubmit} noValidate>
              <label className="sr-only" htmlFor="cta-name">
                Full Name
              </label>
              <input
                id="cta-name"
                className="cta-input"
                placeholder="Full Name"
                required
                autoComplete="name"
              />
              <label className="sr-only" htmlFor="cta-email">
                Email
              </label>
              <input
                id="cta-email"
                className="cta-input"
                placeholder="Email Address"
                type="email"
                required
                autoComplete="email"
              />
              <label className="sr-only" htmlFor="cta-phone">
                Phone
              </label>
              <input
                id="cta-phone"
                className="cta-input"
                placeholder="Phone · +60"
                required
                autoComplete="tel"
              />
              <label className="sr-only" htmlFor="cta-type">
                Preferred Unit Type
              </label>
              <select
                id="cta-type"
                className="cta-input"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Preferred Unit Type
                </option>
                <option>Type A · 1,095 sqft</option>
                <option>Type B · 857 sqft</option>
                <option>Undecided</option>
              </select>
              <label className="sr-only" htmlFor="cta-message">
                Message
              </label>
              <textarea
                id="cta-message"
                className="cta-input"
                placeholder="Message (optional)"
                rows={2}
                style={{ gridColumn: "1 / -1", resize: "vertical" }}
              />
              <div className="cta-submit">
                <Button type="submit" variant="primary">
                  <span>Reserve a Viewing</span>
                </Button>
              </div>
            </form>
          )}
        </Reveal>
      </div>
      <footer>
        <div className="foot-grid">
          <div className="foot-logo">
            <div className="foot-logo-mark">
              <TreeMark color="var(--wood)" size={28} />
              <div className="foot-brand">KIMORI</div>
            </div>
            <div className="foot-tag">
              木森 · A Premierex Development. Serdang Hilltop Condominium,
              Bukit Serdang, Selangor, Malaysia.
            </div>
          </div>
          <div className="foot-col">
            <h5>Explore</h5>
            <ul>
              <li>
                <a href="#about">About Kimori</a>
              </li>
              <li>
                <a href="#gallery">Renders</a>
              </li>
              <li>
                <a href="#residences">Residences</a>
              </li>
              <li>
                <a href="#facilities">Facilities</a>
              </li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Experience</h5>
            <ul>
              <li>
                <a
                  href={siteConfig.tour360}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  360° Virtual Tour
                </a>
              </li>
              <li>
                <a href="#cta">Book a Site Visit</a>
              </li>
              <li>
                <a href="#location">Location Map</a>
              </li>
              <li>
                <a href="#developer">Developer</a>
              </li>
            </ul>
          </div>
          <div className="foot-col">
            <h5>Sales Gallery</h5>
            <ul>
              <li>{siteConfig.address.street}</li>
              <li>
                {siteConfig.address.postal} {siteConfig.address.locality}
              </li>
              <li>
                {siteConfig.address.region}, {siteConfig.address.country}
              </li>
              <li style={{ marginTop: 12, color: "var(--wood)" }}>
                {siteConfig.phone}
              </li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <div>
            © {new Date().getFullYear()} Premierex Development Sdn Bhd. All
            rights reserved.
          </div>
          <div>Developer License · Advertising Permit · Terms</div>
        </div>
      </footer>
    </section>
  );
}

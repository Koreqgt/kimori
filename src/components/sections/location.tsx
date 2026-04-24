import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

const DISTS: [string, string][] = [
  ["Olive Hill Business Park", "850 m"],
  ["SJK(C) Serdang Baru 1", "1 km"],
  ["AEON Mall · Taman Equine", "6 km"],
  ["UPM · IMU University", "6 km"],
  ["Columbia Asia Hospital", "7 km"],
  ["Pavilion Bukit Jalil", "8 km"],
  ["IOI City Mall", "12 km"],
  ["KLCC · City Centre", "19.6 km"],
];

const PINS = [
  { x: 50, y: 50, label: "KIMORI", core: true },
  { x: 22, y: 28, label: "KL" },
  { x: 30, y: 72, label: "Putrajaya" },
  { x: 74, y: 34, label: "TRX" },
  { x: 78, y: 66, label: "Kajang" },
  { x: 20, y: 58, label: "Puchong" },
  { x: 62, y: 22, label: "Bukit Jalil" },
];

export function Location() {
  return (
    <section
      className="location"
      id="location"
      aria-labelledby="location-title"
    >
      <div className="loc-rings" aria-hidden="true" />
      <div className="container-k">
        <div className="loc-grid">
          <Reveal>
            <div>
              <div className="sec-eyebrow loc-eyebrow">Location</div>
              <h2 id="location-title" className="sec-title loc-title">
                At the peak of
                <br />
                <em>Bukit Serdang.</em>
              </h2>
              <p className="loc-lede">
                Seamless access to MEX, NSE, and SKVE. Effortless connectivity
                to Kuala Lumpur, Putrajaya, and the Klang Valley&apos;s
                lifestyle hubs — all while embracing the calm and greenery of
                an elevated retreat.
              </p>
              <div className="distances">
                {DISTS.map(([p, k], i) => (
                  <div key={i} className="dist-row">
                    <span className="dist-place">{p}</span>
                    <span className="dist-km">{k}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 36 }}>
                <Button asChild variant="primary">
                  <a href="#cta">
                    <span>Schedule a Site Visit</span>
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="loc-map" aria-label="Approximate Klang Valley map">
              <svg
                className="map-svg"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="grid"
                    width="10"
                    height="10"
                    patternUnits="userSpaceOnUse"
                  >
                    <path
                      d="M 10 0 L 0 0 0 10"
                      fill="none"
                      stroke="rgba(255,255,255,.06)"
                      strokeWidth=".2"
                    />
                  </pattern>
                </defs>
                <rect width="100" height="100" fill="url(#grid)" />
                <circle
                  cx="50"
                  cy="50"
                  r="18"
                  fill="none"
                  stroke="rgba(190,142,84,.25)"
                  strokeWidth=".2"
                  strokeDasharray="1 1"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="32"
                  fill="none"
                  stroke="rgba(190,142,84,.18)"
                  strokeWidth=".2"
                  strokeDasharray="1 1"
                />
                <path
                  d="M 22 28 Q 35 40 50 50"
                  stroke="rgba(190,142,84,.35)"
                  strokeWidth=".3"
                  fill="none"
                />
                <path
                  d="M 74 34 Q 62 42 50 50"
                  stroke="rgba(190,142,84,.35)"
                  strokeWidth=".3"
                  fill="none"
                />
                <path
                  d="M 30 72 Q 40 60 50 50"
                  stroke="rgba(190,142,84,.35)"
                  strokeWidth=".3"
                  fill="none"
                />
              </svg>
              <div className="map-inner">
                {PINS.map((p, i) => (
                  <div
                    key={i}
                    className={`map-dot ${p.core ? "core" : ""}`}
                    style={{ left: `${p.x}%`, top: `${p.y}%` }}
                  >
                    <div className="d" />
                    <div>{p.label}</div>
                  </div>
                ))}
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    fontSize: 10,
                    letterSpacing: ".3em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,.4)",
                  }}
                >
                  Klang Valley · Approximate
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

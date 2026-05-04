import { Reveal } from "@/components/ui/reveal";

function IconSchool() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 32V15L17 6l14 9v17" />
      <path d="M12 32V22h10v10" />
      <path d="M12 13h10M17 9v4" />
    </svg>
  );
}

function IconTrain() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
      <rect x="7" y="5" width="20" height="20" rx="3" />
      <line x1="7" y1="15" x2="27" y2="15" />
      <circle cx="12" cy="21" r="2" />
      <circle cx="22" cy="21" r="2" />
      <path d="M10 29l-3 4M24 29l3 4M7 32h20" />
      <rect x="13" y="9" width="8" height="4" rx="1" />
    </svg>
  );
}

function IconHospital() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="12" width="26" height="20" />
      <path d="M11 12V7h12v5" />
      <path d="M4 20h26" />
      <path d="M14 16v8M10 20h14" />
    </svg>
  );
}

function IconMall() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8 11h18l3 19H5L8 11z" />
      <path d="M13 11V8a4 4 0 0 1 8 0v3" />
      <path d="M11 20h12M11 26h12" />
    </svg>
  );
}

function IconHighway() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 3v28" />
      <path d="M9 3L3 31M25 3l6 28" />
      <path d="M17 12v4M17 20v4" />
    </svg>
  );
}

function IconEV() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 22h24M7 22l3-7h14l2 7" />
      <rect x="3" y="22" width="28" height="7" rx="2" />
      <circle cx="10" cy="29" r="2" />
      <circle cx="24" cy="29" r="2" />
      <path d="M21 4l-4 7h5l-4 7" />
    </svg>
  );
}

function IconCompass() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="17" cy="17" r="13" />
      <path d="M17 4v3M17 27v3M4 17h3M27 17h3" />
      <path d="M17 10l3.5 7H13.5L17 10z" />
      <path d="M17 24l-3.5-7h7L17 24z" />
      <circle cx="17" cy="17" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconLand() {
  return (
    <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="6" width="28" height="22" />
      <path d="M3 18h28" />
      <path d="M10 6v4M17 6v4M24 6v4" />
      <path d="M10 18v4M17 18v4M24 18v4" />
      <path d="M3 12h4M27 12h4" strokeDasharray="2 2" />
    </svg>
  );
}

const STATS = [
  { n: "418", label: "Total Units · Phase 1" },
  { n: "34", label: "Curated Facilities" },
  { n: "28", label: "Residential Levels" },
  { n: "2", u: "+", label: "Car Parks per Unit" },
  { n: "105", u: "/ac", label: "Lowest Unit Density" },
];

const HIGHLIGHTS = [
  { Icon: IconSchool, stat: "4", label: "Schools", sub: "within 5km" },
  { Icon: IconTrain, stat: "3km", label: "to UPM MRT Station", sub: "" },
  { Icon: IconHospital, stat: "5", label: "Hospitals & Medical", sub: "within 10km" },
  { Icon: IconMall, stat: "8+", label: "Shopping Malls", sub: "within 10km" },
  { Icon: IconHighway, stat: "", label: "MEX · SKVE · NSE", sub: "Direct Highway Access" },
  { Icon: IconEV, stat: "", label: "EV Ready", sub: "& ECO Friendly" },
  { Icon: IconCompass, stat: "", label: "North–South", sub: "All Units Facing" },
  { Icon: IconLand, stat: "5", u: "ac", label: "Freehold Land", sub: "Permanent Ownership" },
];

export function Highlights() {
  return (
    <section className="hlights" aria-label="Key highlights">
      <div className="container-k">
        <Reveal>
          <div className="hlights-head">
            <div className="sec-eyebrow">At a Glance</div>
            <h2 className="sec-title" style={{ fontSize: "clamp(36px,4.4vw,60px)" }}>
              Everything, <em>considered.</em>
            </h2>
          </div>
        </Reveal>

        {/* Stats strip */}
        <Reveal delay={0.1}>
          <div className="hlights-stats">
            {STATS.map((s, i) => (
              <div key={i} className="hlights-stat">
                <div className="hlights-stat-n">
                  {s.n}
                  {s.u && <span className="hlights-stat-u">{s.u}</span>}
                </div>
                <div className="hlights-stat-l">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Section label */}
        <Reveal delay={0.15}>
          <div className="hlights-zone-label">
            <span className="hlights-zone-line" />
            <span>Location &amp; Lifestyle</span>
            <span className="hlights-zone-line" />
          </div>
        </Reveal>

        {/* Feature grid */}
        <div className="hlights-grid">
          {HIGHLIGHTS.map(({ Icon, stat, u, label, sub }, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div className="hlight">
                <div className="hlight-icon">
                  <Icon />
                </div>
                {stat && (
                  <div className="hlight-stat">
                    {stat}
                    {u && <span className="hlight-u">{u}</span>}
                  </div>
                )}
                <div className="hlight-label">{label}</div>
                {sub && <div className="hlight-sub">{sub}</div>}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

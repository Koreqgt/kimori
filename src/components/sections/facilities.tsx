import { Reveal } from "@/components/ui/reveal";

const COLS = [
  {
    jp: "水",
    en: "Wetness Corner",
    items: [
      "Wading Pool",
      "25m Infinity Pool",
      "Jacuzzi",
      "Outdoor Shower",
      "Pool Cabana",
      "Pool Deck",
    ],
  },
  {
    jp: "動",
    en: "Fitness Zone",
    items: [
      "Inclusive Playground",
      "Indoor Gym",
      "Yoga Room",
      "Half Basketball Court",
      "Outdoor Fitness",
      "Jogging Track",
    ],
  },
  {
    jp: "集",
    en: "Closeness",
    items: [
      "BBQ Terrace",
      "Study Room",
      "Games Room",
      "Multipurpose Hall",
      "Grand Drop-off",
      "Function Room",
    ],
  },
  {
    jp: "憩",
    en: "Timeless Leisure",
    items: [
      "Iconic Tree Roundabout",
      "Gazebo",
      "Garden Lawn & Deck",
      "Semi Open Lounge",
      "Outdoor Par Course",
      "Exercise Lawn",
    ],
  },
  {
    jp: "便",
    en: "Access & Care",
    items: [
      "Guardhouse",
      "Shop",
      "Laundry Room",
      "Management Office",
      "Car Wash Bay",
      "EV Charging Bay",
    ],
  },
];

export function Facilities() {
  return (
    <section
      className="facilities"
      id="facilities"
      aria-labelledby="facilities-title"
    >
      <div className="container-k">
        <Reveal>
          <div style={{ maxWidth: 720 }}>
            <div className="sec-eyebrow" style={{ color: "var(--wood)" }}>
              Facilities
            </div>
            <h2
              id="facilities-title"
              className="sec-title"
              style={{ color: "var(--paper)" }}
            >
              Thirty-four ways to
              <br />
              <em style={{ color: "var(--wood)" }}>come home.</em>
            </h2>
            <p
              className="sec-lede"
              style={{ color: "rgba(255,255,255,.78)", marginTop: 24 }}
            >
              Arranged across five groves of use — from the wetness corner to
              the rooftop gardens — each facility is sited for light, quiet,
              and view.
            </p>
          </div>
        </Reveal>
        <div className="fac-grid">
          {COLS.map((c, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <article className="fac-col">
                <div className="fac-col-title jp" aria-hidden="true">{c.jp}</div>
                <div className="fac-col-en">{c.en}</div>
                <ul>
                  {c.items.map((it, j) => (
                    <li key={j}>— {it}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

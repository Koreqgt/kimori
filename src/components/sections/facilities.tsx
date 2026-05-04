import { Reveal } from "@/components/ui/reveal";
import Image from "next/image";

const FACILITIES = [
  { id: "A", facility: "25m Infinity Pool" },
  { id: "B", facility: "Jacuzzi" },
  { id: "C", facility: "Wading Pool" },
  { id: "D", facility: "Outdoor Shower" },
  { id: "E", facility: "Pool Deck" },
  { id: "F", facility: "Pool Cabana" },
  { id: "G", facility: "Outdoor Fitness" },
  { id: "H", facility: "Garden Lawn & Deck" },
  { id: "I", facility: "Inclusive Playground" },
  { id: "J", facility: "BBQ Terrace" },
  { id: "K", facility: "Multipurpose Court" },
  { id: "L", facility: "Integrated Play" },
  { id: "M", facility: "Outdoor Par Course" },
  { id: "N", facility: "Exercise Lawn" },
  { id: "O", facility: "Garden Lawn" },
];

const COL_A = FACILITIES.slice(0, 5);
const COL_B = FACILITIES.slice(5, 10);
const COL_C = FACILITIES.slice(10, 15);

export function Facilities() {
  return (
    <section
      className="facilities"
      id="facilities"
      aria-labelledby="facilities-title"
    >
      <div className="container-k">
        <Reveal>
          <div className="fac-header">
            <div className="sec-eyebrow fac-eyebrow">Facilities</div>
            <h2 id="facilities-title" className="sec-title fac-main-title">
              Amenities for the{" "}
              <em className="fac-title-accent">art of living.</em>
            </h2>
            <p className="fac-lede">
              Fifteen curated spaces across Level 4 — each one designed to
              complement the rhythms of everyday life.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="fac-plan-frame">
            <div className="fac-plan-inner">
              <Image
                src="/assets/Level 4.png"
                alt="Level 4 facilities floorplan"
                width={1304}
                height={600}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1304px"
                className="fac-plan-img"
                priority
              />
            </div>
            <div className="fac-plan-caption">
              <span className="fac-plan-caption-line" />
              <span>Level 4 &mdash; Resort-Inspired Facilities</span>
              <span className="fac-plan-caption-line" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.28}>
          <div className="fac-cols">
            {[COL_A, COL_B, COL_C].map((col, ci) => (
              <ul key={ci} className="fac-col-list">
                {col.map((item) => (
                  <li key={item.id} className="fac-col-row">
                    <span className="fac-col-letter">{item.id}</span>
                    <span className="fac-col-sep" aria-hidden="true" />
                    <span className="fac-col-name">{item.facility}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import Image from "next/image";
import {
  GraduationCap,
  ShoppingBag,
  Stethoscope,
  TrainFront,
  Trees,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

type AccessCategory = {
  key: string;
  title: string;
  icon: LucideIcon;
  items: { name: string; distance: string }[];
};

const CATEGORIES: AccessCategory[] = [
  {
    key: "shopping",
    title: "Shopping",
    icon: ShoppingBag,
    items: [
      { name: "Olive Hill Business Park", distance: "850 m" },
      { name: "Equine Boulevard", distance: "5.8 km" },
      { name: "AEON Mall Taman Equine", distance: "6.7 km" },
      { name: "Equine Shopping Centre", distance: "6.7 km" },
      { name: "Pavilion Bukit Jalil", distance: "8.9 km" },
      { name: "IOI City Mall", distance: "12.3 km" },
    ],
  },
  {
    key: "recreation",
    title: "Recreation",
    icon: Trees,
    items: [
      { name: "Bukit Serdang Hiking Trail", distance: "600 m" },
      { name: "Bukit Jalil Recreational Park", distance: "7.0 km" },
      { name: "National Stadium Bukit Jalil", distance: "7.3 km" },
      { name: "Farm In The City", distance: "8.1 km" },
      { name: "UniPutra Golf Club", distance: "9.4 km" },
    ],
  },
  {
    key: "transport",
    title: "Public Transport",
    icon: TrainFront,
    items: [
      { name: "MRT UPM", distance: "3.2 km" },
      { name: "MRT Serdang Jaya", distance: "3.2 km" },
      { name: "KTM Serdang Station", distance: "5.5 km" },
    ],
  },
  {
    key: "healthcare",
    title: "Healthcare",
    icon: Stethoscope,
    items: [
      { name: "Columbia Asia Hospital Bukit Jalil", distance: "7.3 km" },
      { name: "Andorra Women & Children Hospital", distance: "9.9 km" },
      { name: "UPM Hospital · Sultan Abdul Aziz Shah", distance: "10.1 km" },
      { name: "Serdang Hospital · Sultan Idris Shah", distance: "10.5 km" },
    ],
  },
  {
    key: "education",
    title: "Education",
    icon: GraduationCap,
    items: [
      { name: "SMK Seri Kembangan", distance: "1.1 km" },
      { name: "SJK(C) Serdang Baru 1", distance: "1.1 km" },
      { name: "Wembley International School", distance: "3.7 km" },
      { name: "International Medical University", distance: "6.5 km" },
      { name: "SJK(C) Bukit Serdang", distance: "8.7 km" },
      { name: "Tzu Chi International School", distance: "9.1 km" },
    ],
  },
];

export function Location() {
  return (
    <section
      className="location"
      id="location"
      aria-labelledby="location-title"
    >
      <div className="container-k">
        <Reveal>
          <div className="loc-header">
            <div className="sec-eyebrow loc-eyebrow">Location</div>
            <h2 id="location-title" className="sec-title loc-title">
              At the peak of
              <br />
              <em>Bukit Serdang.</em>
            </h2>
            <p className="loc-lede">
              Connected to Kuala Lumpur, Putrajaya, and the Klang Valley — via
              MEX, NSE, and SKVE — from a quiet elevation above the city.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="loc-image">
            <Image
              src="/assets/Accessibility.png"
              alt="Map showing Kimori's connectivity to surrounding amenities across the Klang Valley"
              width={1440}
              height={810}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="access-grid">
            {CATEGORIES.map(({ key, title, icon: Icon, items }) => (
              <article key={key} className="access-card">
                <header className="access-card-head">
                  <span className="access-card-icon" aria-hidden="true">
                    <Icon strokeWidth={1.4} size={22} />
                  </span>
                  <h3 className="access-card-title">{title}</h3>
                </header>
                <ul className="access-list">
                  {items.map((item) => (
                    <li key={item.name} className="access-item">
                      <span className="access-item-name">{item.name}</span>
                      <span className="access-item-distance">
                        {item.distance}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

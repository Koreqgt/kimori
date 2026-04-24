import { Nav } from "@/components/sections/nav";
import { Float360 } from "@/components/sections/float-360";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Feature } from "@/components/sections/feature";
import { Philosophy } from "@/components/sections/philosophy";
import { Gallery } from "@/components/sections/gallery";
import { Location } from "@/components/sections/location";
import { Facts } from "@/components/sections/facts";
import { Residences } from "@/components/sections/residences";
import { Facilities } from "@/components/sections/facilities";
import { Developer } from "@/components/sections/developer";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Nav />
      <Float360 />
      <main>
        <Hero />
        <About />

        <Feature
          img="/assets/iconic.jpg"
          alt="KIMORI iconic tower, 28 storeys of reinforced concrete"
          tag="The Iconic Tower"
          title="A quiet monument,"
          titleEm="rooted in place."
          desc="Twenty-eight storeys of reinforced concrete and measured proportion. Designed to be the skyline's most composed silhouette — not its loudest."
          caption="Render · North Elevation"
          align="start"
          scrim="left"
        />

        <Philosophy />

        <Feature
          img="/assets/podium.jpg"
          alt="Podium roundabout with preserved iconic tree at the drop-off"
          tag="The Iconic Tree"
          title="Welcomed by"
          titleEm="a living landmark."
          desc="At the heart of the drop-off, a mature canopy tree preserved and celebrated — the first thing you return to, every evening. It sets the pace of the entire address."
          caption="Render · Podium Roundabout"
          align="end"
          scrim="right"
        />

        <Gallery />

        <Feature
          img="/assets/pool.jpg"
          alt="The 25 metre infinity pool with KLCC skyline at KIMORI"
          tag="25-Metre Infinity Pool"
          title="Swim into"
          titleEm="the horizon."
          desc="The rooftop pool is oriented north — framing the unblocked KLCC skyline by day and an unbroken starfield by night. Timber decking, woven screens, deep lounge chairs."
          caption="Render · Level 4 Podium Deck"
          align="start"
          scrim="left"
        />

        <Location />
        <Facts />

        <Feature
          img="/assets/jacuzzi.jpg"
          alt="Sunken jacuzzi garden screened by timber lattice at KIMORI"
          tag="After-Dusk"
          title="Evenings that"
          titleEm="belong only to you."
          desc="The jacuzzi garden is sunk below the pool deck and screened by timber lattice — a private grove of steam and starlight, lit only by embedded ground lamps."
          caption="Render · Night Setting"
          align="end"
          scrim="right"
        />

        <Residences />
        <Facilities />

        <Feature
          img="/assets/rooftop.jpg"
          alt="KIMORI rooftop garden at dusk — pines, par course and lawn"
          tag="Rooftop Gardens"
          title="The final floor"
          titleEm="is a garden."
          desc="Pines, par course, reading lawns, and a view that stretches from Putrajaya to Merdeka 118. The roof is not an afterthought — it is the crown of KIMORI."
          caption="Render · Rooftop Dusk"
          align="start"
          scrim="bottom"
        />

        <Developer />
        <CTA />
      </main>
    </>
  );
}

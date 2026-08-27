import { Nav } from "@/components/sections/nav";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Highlights } from "@/components/sections/highlights";
import { Feature } from "@/components/sections/feature";
import { Features } from "@/components/sections/features";
import { Philosophy } from "@/components/sections/philosophy";
import { Location } from "@/components/sections/location";
import { Residences } from "@/components/sections/residences";
import { Facilities } from "@/components/sections/facilities";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />

        <Feature
          img="/assets/iconic.jpg"
          alt="KIMORI iconic tower, 28 storeys of reinforced concrete"
          tag="The Iconic Tower"
          title="A quiet monument,"
          titleEm="rooted in place."
          desc="Twenty-eight storeys of reinforced concrete and measured proportion. Designed to be the skyline's most composed silhouette, not its loudest."
          caption="North Elevation"
          align="start"
          scrim="left"
          focus="bottom"
        />

        <Philosophy />

        <Features />
        <Highlights />

        <Location />

        <Feature
          img="/assets/jacuzzi.jpg"
          alt="Sunken jacuzzi garden screened by timber lattice at KIMORI"
          tag="After-Dusk"
          title="Evenings that"
          titleEm="belong only to you."
          desc="The jacuzzi garden is sunk below the pool deck and screened by timber lattice, a private grove of steam and starlight lit only by embedded ground lamps."
          caption="Night Setting"
          align="end"
          scrim="right"
        />

        <Residences />
        <Facilities />

        <CTA />
      </main>
    </>
  );
}

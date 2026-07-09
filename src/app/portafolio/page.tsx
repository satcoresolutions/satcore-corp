import Hero from "@/components/modules/portafolio/sections/hero";

import Catalog from "@/components/modules/portafolio/sections/catalog/catalog";

import Trust from "@/components/modules/portafolio/sections/trust";

export default function PortafolioPage() {
  return (
    <>
      <main>
        <Hero />

        <Catalog />

        <Trust />
      </main>
    </>
  );
}
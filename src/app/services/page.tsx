"use client";

import ServicesHero
  from "@/components/modules/services/sections/hero/hero";

import Services
  from "@/components/modules/services/sections/services";

import ProcessSection
  from "@/components/modules/services/sections/process";

import BenefitsSection
  from "@/components/modules/services/sections/benefits";

import ServicesCTA
  from "@/components/modules/services/sections/cta";


import usePillars
  from "@/hooks/use-pillars";


export default function ServicesPage() {

  const pillars =
    usePillars();


  return (
    <main>

      <ServicesHero />


      <Services
        pillars={pillars}
      />


      <ProcessSection />


      <BenefitsSection />


      <ServicesCTA />


    </main>
  );
}
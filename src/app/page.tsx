import Hero
  from "@/components/modules/home/sections/hero";

import FeaturedProducts
  from "@/components/modules/home/sections/featured-services";

import WhySatCore
  from "@/components/modules/home/sections/why-satcore";

import UseCases
  from "@/components/modules/home/sections/use-cases";

import Portfolio
  from "@/components/modules/home/sections/portfolio";

import Testimonials from "@/components/modules/home/sections/testimonials";

import CTA
  from "@/components/modules/home/sections/cta";

import Section
  from "@/components/ui/section";

import Container
  from "@/components/ui/container";

export default function HomePage() {
  return (
    <main>
      <Hero />

      <FeaturedProducts />

      <Section variant="surface">
        <Container>
          <div
            className="
              grid
              items-center
              gap-16

              md:grid-cols-[1fr_2.5fr]
            "
          >
            <WhySatCore />

            <UseCases />
          </div>
        </Container>
      </Section>

      <Portfolio />

      <Testimonials/>

      <CTA />
    </main>
  );
}
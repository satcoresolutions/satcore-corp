import Hero, {
  HeroBadge,
  HeroContent,
  HeroTitle,
} from "@/components/ui/hero";

import Container from "@/components/ui/container";
import Button from "@/components/ui/button";

interface StoreHeroProps {
  total: number;
}

export default function StoreHero({ total }: StoreHeroProps) {
  return (
    <Hero
      variant="editorial"
      height="md"
      className="border-b border-white/10 py-25"
    >
      <Container>
        <HeroContent>
          {/* Badge */}
          <HeroBadge>
            <span className="inline-flex items-center gap-3 uppercase">
              <span className="h-px w-8 bg-primary" />
              Catálogo de software
              <span className="h-px w-8 bg-primary" />
            </span>
          </HeroBadge>

          {/* Title */}
          <HeroTitle>
            Software original,
            <span className="text-accent"> con licencia</span>{" "}
            y listo para instalar.
          </HeroTitle>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-secondary sm:text-lg">
            Encuentra {total} programas de seguridad, diseño, productividad
            y desarrollo. Paga, recibe tu clave y descarga desde el sitio
            oficial.
          </p>

          {/* Features */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {[
              "Licencias de software",
              "Descargas oficiales",
              "Productos digitales",
            ].map((feature) => (
              <span
                key={feature}
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-accent/10
                  bg-secondary/5
                  px-4
                  py-2
                  text-sm
                  text-secondary
                  backdrop-blur-sm
                "
              >
                <span aria-hidden="true" className="text-accent">
                  ✦
                </span>
                {feature}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              href="#catalogo"
              variant="primary"
              className="px-6 py-3 font-semibold"
            >
              Ver catálogo <span aria-hidden="true">→</span>
            </Button>
          </div>

          {/* Product count */}
          <p className="mt-5 text-sm text-secondary">
            {total} {total === 1 ? "producto disponible" : "productos disponibles"}
          </p>
        </HeroContent>
      </Container>
    </Hero>
  );
}
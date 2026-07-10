"use client";

import Button
  from "@/components/ui/button";

import {
  useLanguage,
} from "@/hooks/use-language";

const content = {
  en: {
    button: "View All Services",
  },

  es: {
    button: "Ver Todos los Servicios",
  },

  pt: {
    button: "Ver Todos os Serviços",
  },
} as const;

export default function FeaturedProductsActions() {
  const lang =
    useLanguage();

  return (
    <div
      className="
        mt-12
        flex
        justify-center
      "
    >
      <Button
        href="/services"
        variant="primary"
      >
        {content[lang].button}
      </Button>
    </div>
  );
}
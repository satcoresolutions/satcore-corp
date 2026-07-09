"use client";

import Section from "@/components/ui/section";
import Container from "@/components/ui/container";

import ServicesHeader
  from "./components/ServicesHeader";

import ServicesGrid
  from "./components/ServicesGrid";

import type {
  ServicesProps,
} from "./types/services.types";


import {
  useLanguage,
} from "@/hooks/use-language";


export default function Services({
  pillars,
}: ServicesProps) {

  const lang =
    useLanguage();


  // Usamos el primer pilar solamente
  // para textos generales de la sección
  const content =
    pillars[0]?.translations[lang];


  if (!content) {
    return null;
  }


  return (

    <Section

      id="services"

      variant="default"

      spacing="xl"

      className="py-10"

    >

      <Container>


        <ServicesHeader

          title={
            content.serviceCatalog.title
          }

          description={
            content.serviceCatalog.description
          }

        />


        <ServicesGrid

          pillars={
            pillars
          }

        />


      </Container>


    </Section>

  );
}
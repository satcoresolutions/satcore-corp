"use client";

import Hero
  from "@/components/modules/services/[pillar]/hero";

import ServiceCTA
  from "@/components/modules/services/[pillar]/cta";

import Breadcrumb
  from "@/components/ui/breadcrumb";

import ServiceCatalog
  from "@/components/modules/services/[pillar]/service-catalog";

import TechStack
  from "@/components/modules/services/[pillar]/tech-stack";

import Process
  from "@/components/modules/services/[pillar]/process";

import Scope
  from "@/components/modules/services/[pillar]/scope";

import Pricing
  from "@/components/modules/services/[pillar]/pricing";

import Guarantee
  from "@/components/modules/services/[pillar]/guarantee";

import Requirements
  from "@/components/modules/services/[pillar]/requirements";

import Legal
  from "@/components/modules/services/[pillar]/legal";


import {
  useLanguage,
} from "@/hooks/use-language";

import usePillar
  from "@/hooks/use-pillar";

import useServicesByPillar
  from "@/hooks/use-servicesByPillar";


import type {
  PillarSlug,
} from "@/types/common.types";


interface PillarContentProps {
  slug: PillarSlug;
}


export default function PillarContent({
  slug,
}: PillarContentProps) {

  const language =
    useLanguage();


  const pillar =
    usePillar(slug);


  const services =
    useServicesByPillar(slug);


  if (!pillar) {
    return null;
  }


  const content =
    pillar.translations[language];


  return (
    <main className="bg-background">


      <Hero
        pillar={pillar}
      />


      <Breadcrumb
        currentLabel={
          content.title
        }
      />


      <TechStack
        title={
          content.techStack.title
        }

        description={
          content.techStack.description
        }

        technologies={
          pillar.core.technologies
        }
      />


      <ServiceCatalog
        title={
          content.serviceCatalog.title
        }

        description={
          content.serviceCatalog.description
        }

        services={
          services
        }
      />


      <Process
        pillar={
          pillar
        }
      />


      <Scope
        pillar={
          pillar
        }
      />


      <Pricing
        pillar={
          pillar
        }
      />


      <Guarantee
        pillar={
          pillar
        }
      />


      <Requirements
        pillar={
          pillar
        }
      />


      <Legal
        pillar={
          pillar
        }
      />


      <ServiceCTA
        serviceName={
          content.title
        }
      />


    </main>
  );
}
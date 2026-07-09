"use client";

import type {
  ServiceDetail,
} from "@/types/service-detail.types";

import {
  useLanguage,
} from "@/hooks/use-language";

import Breadcrumb
  from "@/components/ui/breadcrumb";

import ServiceHero
  from "@/components/modules/services/service-detail/sections/hero";

import ServiceOverview
  from "@/components/modules/services/service-detail/sections/overview";

import ServiceWorkflow
  from "@/components/modules/services/service-detail/sections/workflow";

import ServiceUseCases
  from "@/components/modules/services/service-detail/sections/use-cases";

import ServiceFeatures
  from "@/components/modules/services/service-detail/sections/features";

import ServicePricing
  from "@/components/modules/services/service-detail/sections/pricing";

import ServiceCTA
  from "@/components/modules/services/service-detail/sections/cta";

interface ServiceDetailContentProps {
  detail: ServiceDetail;
}

export default function ServiceDetailContent({
  detail,
}: ServiceDetailContentProps) {
  const lang =
    useLanguage();

  const content =
    detail.translations[lang];

  return (
    <main
      className="
        text-foreground
      "
    >
      <ServiceHero
        core={detail.core}
        content={content}
      />

      <Breadcrumb
        currentLabel={
          content.title
        }
      />

      <ServicePricing
        plans={detail.core.plans}
        pillar={detail.core.pillar}
        serviceSlug={detail.core.slug}
        title=""
        description=""
        buttonLabel=""
      />

      <ServiceOverview
        overview={
          content.overview
        }
      />

      <ServiceWorkflow
        workflow={
          content.workflow
        }
      />

      <ServiceUseCases
        useCases={
          content.useCases
        }
      />

      <ServiceFeatures
        features={
          content.features
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
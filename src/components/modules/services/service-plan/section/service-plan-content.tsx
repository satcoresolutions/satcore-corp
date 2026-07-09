"use client";

import type {
  ServicePlan,
} from "@/types/plan.types";

import {
  portfolioData,
} from "@/data/portfolio";

import {
  useLanguage,
} from "@/hooks/use-language";

import Breadcrumb
  from "@/components/ui/breadcrumb";

import ServicePlanHero
  from "@/components/modules/services/service-plan/section/hero";

import ServiceBenefits
  from "@/components/modules/services/service-plan/section/benefits";

import ServiceProcess
  from "@/components/modules/services/service-plan/section/process";

import ServiceGallery
  from "@/components/modules/services/service-plan/section/gallery";

import ServiceTechnologies
  from "@/components/modules/services/service-plan/section/technologies";

import ServiceFAQ
  from "@/components/modules/services/service-plan/section/faq";

import ServiceCTA
  from "@/components/modules/services/service-plan/section/cta";

interface ServicePlanContentProps {
  plan: ServicePlan;
}

export default function ServicePlanContent({
  plan,
}: ServicePlanContentProps) {
  const lang =
    useLanguage();

  const content =
    plan.translations[lang];

  const projects =
    portfolioData.filter(
      (project) =>
        project.plan ===
        plan.core.slug,
    );

  return (
    <main
      className="
        bg-background
        text-foreground
      "
    >
      <ServicePlanHero
        core={plan.core}
        content={content}
      />

      <Breadcrumb
        currentLabel={
          content.title
        }
      />

      <ServiceBenefits
        benefits={
          content.benefits ?? []
        }
      />

      <ServiceGallery
        projects={projects}
      />

      <ServiceProcess
        process={
          content.process ?? []
        }
      />

      <ServiceTechnologies
        technologies={
          plan.core.technologies ?? []
        }
      />

      <ServiceFAQ
        faq={
          content.faq ?? []
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
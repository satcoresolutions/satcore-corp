import { notFound } from "next/navigation";

import {
  plansData,
} from "@/data/plans";

import ServicePlanContent
  from "@/components/modules/services/service-plan/section/service-plan-content";

interface PageProps {
  params: Promise<{
    pillar: string;
    service: string;
    plan: string;
  }>;
}

export default async function ServicePlanPage({
  params,
}: PageProps) {
  const {
    pillar,
    service,
    plan,
  } = await params;

  const selectedPlan =
    plansData.find(
      item =>
        item.core.slug === plan
    );

  if (!selectedPlan) {
    notFound();
  }

  return (
    <ServicePlanContent
      plan={selectedPlan}
    />
  );
}
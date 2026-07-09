import { notFound } from "next/navigation";

import ServiceDetailContent
  from "@/components/modules/services/service-detail/sections/service-detail-content";

import {
  serviceDetailsData,
} from "@/data/service-details";

interface PageProps {
  params: Promise<{
    pillar: string;
    service: string;
  }>;
}

export default async function ServiceDetailPage({
  params,
}: PageProps) {
  const {
    pillar,
    service,
  } = await params;

  const detail = serviceDetailsData.find(
    item =>
      item.core.slug === service
  );

  if (!detail) {
    notFound();
  }

  return (
    <ServiceDetailContent
      detail={detail}
    />
  );
}
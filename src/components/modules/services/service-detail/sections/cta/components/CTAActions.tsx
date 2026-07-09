"use client";

import Button from "@/components/ui/button";

import { ctaConfig } from "@/config/cta.config";
import { companyConfig } from "@/config/company.config";

interface CTAActionsProps {
  serviceName?: string;

  primaryLabel: string;
  secondaryLabel: string;

  whatsappTemplate: string;
}

export default function CTAActions({
  serviceName,
  primaryLabel,
  secondaryLabel,
  whatsappTemplate,
}: CTAActionsProps) {
  const encodedService = encodeURIComponent(serviceName ?? "");

  const whatsappMessage = whatsappTemplate.replace(
    "{service}",
    serviceName ?? ""
  );

  const whatsappHref = `https://wa.me/${
    companyConfig.whatsapp
  }?text=${encodeURIComponent(whatsappMessage)}`;

  const contactHref = `${ctaConfig.service.primaryAction.href}?service=${encodedService}`;

  return (
    <div className="flex flex-col justify-center gap-4 sm:flex-row">
      <Button href={contactHref} variant="primary">
        {primaryLabel}
      </Button>

      <Button
        href={whatsappHref}
        variant="glass"
        target="_blank"
        rel="noopener noreferrer"
      >
        {secondaryLabel}
      </Button>
    </div>
  );
}
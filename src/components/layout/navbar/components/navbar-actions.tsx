"use client";

import Button from "@/components/ui/button";

import { ctaConfig } from "@/config/cta.config";

import { ctaContent } from "@/i18n/cta.content";

import { useLanguage } from "@/hooks/use-language";

import { pushEvent } from "@/integrations/google/analytics";

export default function NavbarActions() {
  const lang = useLanguage();

  const t = ctaContent[lang];

  return (
    <Button
      href={ctaConfig.navbar.href}
      variant="gradient"
      onClick={() =>
        pushEvent({
          event: "cta_click",
          cta_type: "primary",
          cta_label: "navbar_cta",
          section: "navbar",
          page_path: window.location.pathname,
        })
      }
    >
      {t.navbar.label}
    </Button>
  );
}
"use client";

import Link from "next/link";

import { navigationConfig } from "@/config/navigation.config";
import { navigationContent } from "@/i18n/navigation.content";

import { useLanguage } from "@/hooks/use-language";

import { pushEvent } from "@/integrations/google/analytics";

export default function NavbarNavigation() {
  const lang = useLanguage();

  const t = navigationContent[lang];

  return (
    <nav className="hidden items-center gap-8 md:flex">
      {navigationConfig.main.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() =>
            pushEvent({
              event: "cta_click",
              cta_type: "navigation",
              cta_label: link.key,
              section: "navbar",
              page_path: window.location.pathname,
            })
          }
          className="
            text-sm
            transition-opacity
            hover:opacity-70
          "
        >
          {t[link.key]}
        </Link>
      ))}
    </nav>
  );
}
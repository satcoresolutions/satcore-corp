"use client";

import Link from "next/link";

import { navigationConfig } from "@/config/navigation.config";

import { navigationContent } from "@/i18n/navigation.content";

import { useLanguage } from "@/hooks/use-language";

import { pushEvent } from "@/integrations/google/analytics";

export default function NavbarMobileNavigation() {
  const lang = useLanguage();

  const t = navigationContent[lang];

  return (
    <nav className="flex flex-col gap-3">
      {navigationConfig.main.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={() =>
            pushEvent({
              event: "cta_click",
              cta_type: "navigation",
              cta_label: link.key,
              section: "mobile_nav",
              page_path: window.location.pathname,
            })
          }
          className="
            text-sm
            font-medium
            text-zinc-300
            transition
            hover:text-white
          "
        >
          {t[link.key]}
        </Link>
      ))}
    </nav>
  );
}
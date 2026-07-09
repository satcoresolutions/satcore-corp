"use client";

import Section from "@/components/ui/section";
import Link from "@/components/ui/nav-link";

import { navigationConfig } from "@/config/navigation.config";
import { useLanguage } from "@/hooks/use-language";
import { navigationContent } from "@/i18n/navigation.content";

export default function FooterLegal() {
  const lang = useLanguage();
  const t = navigationContent[lang];

  return (
    <Section className="px-0"
      style={{ paddingTop: 5, paddingBottom: 0 }}
    >
      {/* TITLE */}
      <h5>
        {t.privacy ? "Legal" : "Legal"}
      </h5>

      {/* LINKS */}
      <div className="flex flex-wrap gap-x-4 gap-y-2">
        {navigationConfig.legal.map((item) => (
          <Link key={item.href} href={item.href}>
            {t[item.key]}
          </Link>
        ))}
      </div>
    </Section>
  );
}
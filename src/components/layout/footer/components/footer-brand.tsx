"use client";

import Icon from "@/components/ui/icon";

import { companyConfig } from "@/config/company.config";
import { assetsConfig } from "@/config/assets.config";
import { companyContent } from "@/i18n/company.content";
import { useLanguage } from "@/hooks/use-language";

export default function FooterBrand() {
  const lang = useLanguage();
  const content = companyContent[lang];

  return (
    <div className="space-y-4 text-center">
      {/* LOGO */}
      <div className="flex items-center justify-center">
        <Icon
          src={assetsConfig.logoSecondary}
          alt={companyConfig.name}
          size="2xl"
          variant="brand"
          className="pl-15"
        />

        <h5
        className="pr-10"
          style={{
            fontSize: "1.75rem",
            fontWeight: 700,
            lineHeight: 1,
            margin: 0,
          }}
        >
          {companyConfig.name}
        </h5>
      </div>

      {/* DESCRIPTION (i18n) */}
      <p className="text-text-primary">
        {content.description}
      </p>
    </div>
  );
}
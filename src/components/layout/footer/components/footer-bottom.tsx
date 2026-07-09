"use client";

import { companyConfig } from "@/config/company.config";
import { footerContent } from "../content/footer.content";
import { useLanguage } from "@/hooks/use-language";

export default function FooterBottom() {
  const lang = useLanguage();
  const content = footerContent[lang];

  return (
    <div
      className="
        border-t
        border-surface-secondary
        pt-8

        text-center
        text-sm
        text-primary
      "
    >
      © {new Date().getFullYear()}{" "}
      {companyConfig.organization}.{" "}
      {content.copyright}
    </div>
  );
}
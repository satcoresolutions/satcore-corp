"use client";

import { companyConfig } from "@/config/company.config";

import {
  footerContent,
} from "../content/footer.content";

import {
  useLanguage,
} from "@/hooks/use-language";

import {
  pushEvent,
} from "@/integrations/google/analytics";

export default function FooterContact() {
  const lang = useLanguage();

  const content = footerContent[lang];

  return (
    <div id="contact">
      {/* TITLE */}
      <h5 className="mb-4 font-semibold">
        {content.sections.contact.title}
      </h5>

      <ul className="space-y-2 text-text-primary">

        {/* EMAIL */}
        <li>
          <a
            href={`mailto:${companyConfig.email}`}
            onClick={() =>
              pushEvent({
                event: "cta_click",
                cta_type: "email",
                cta_label: "email_footer",
                section: "footer",
                page_path: window.location.pathname,
              })
            }
            className="
              transition-colors
              hover:text-text-primary
            "
          >
            {content.contact.email}: {companyConfig.email}
          </a>
        </li>

        {/* WHATSAPP */}
        <li>
          <a
            href={`https://wa.me/${companyConfig.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              pushEvent({
                event: "cta_click",
                cta_type: "whatsapp",
                cta_label: "whatsapp_footer",
                section: "footer",
                page_path: window.location.pathname,
              })
            }
            className="
              transition-colors
              hover:text-text-primary
            "
          >
            {content.contact.whatsapp}: +{companyConfig.whatsapp}
          </a>
        </li>

        {/* WEBSITE */}
        <li>
          {content.contact.website}: {companyConfig.website}
        </li>

      </ul>
    </div>
  );
}
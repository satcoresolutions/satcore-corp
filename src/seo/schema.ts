import {
  siteConfig,
} from "@/config/site.config";

import {
  companyConfig,
} from "@/config/company.config";

import {
  assetsConfig,
} from "@/config/assets.config";

import {
  socialsConfig,
} from "@/config/socials.config";

import {
  siteContent,
} from "@/i18n/site.content";

const content =
  siteContent.es;

const sameAs =
  Object.values(
    socialsConfig,
  ).map(
    ({ href }) => href,
  );

export const organizationSchema = {
  "@context":
    "https://schema.org",

  "@type":
    "Organization",

  name:
    companyConfig.name,

  url:
    siteConfig.url,

  logo:
    `${siteConfig.url}${assetsConfig.logoPrimary}`,

  email:
    companyConfig.email,

  sameAs,

  contactPoint: {
    "@type":
      "ContactPoint",

    telephone:
      companyConfig.whatsapp,

    contactType:
      "customer service",

    availableLanguage:
      "Spanish",
  },
};

export const websiteSchema = {
  "@context":
    "https://schema.org",

  "@type":
    "WebSite",

  name:
    siteConfig.name,

  url:
    siteConfig.url,

  description:
    content.description,
};

export const professionalServiceSchema = {
  "@context":
    "https://schema.org",

  "@type":
    "ProfessionalService",

  name:
    companyConfig.name,

  url:
    siteConfig.url,

  email:
    companyConfig.email,

  telephone:
    companyConfig.whatsapp,

  address: {
    "@type":
      "PostalAddress",

    streetAddress:
      companyConfig.address.label,
  },

  sameAs,
};

export function getSchemaScript() {
  return JSON.stringify([
    organizationSchema,
    websiteSchema,
    professionalServiceSchema,
  ]);
}
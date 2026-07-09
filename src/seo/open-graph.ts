import type { Metadata } from "next";

import { siteConfig }  from "@/config/site.config";
import { assetsConfig } from "@/config/assets.config";
import { siteContent }  from "@/i18n/site.content";

const { description } = siteContent["es"];

export const openGraphMetadata:
Metadata["openGraph"] = {
  type: "website",

  locale:
    siteConfig.ogLocale,

  url:
    siteConfig.url,

  siteName:
    siteConfig.name,

  title:
    siteConfig.name,

  description,

  images: [
    {
      url:
        assetsConfig.ogImage,

      width: 1200,

      height: 630,

      alt:
        `${siteConfig.name} - Desarrollo Web y Productos Digitales`,
    },
  ],
};

export const twitterMetadata:
Metadata["twitter"] = {
  card:
    "summary_large_image",

  title:
    siteConfig.name,

  description,

  creator:
    "@satcore_solutions",

  images: [
    assetsConfig.twitterCard,
  ],
};
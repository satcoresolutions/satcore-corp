import type { Metadata } from "next";

import { siteConfig } from "@/config/site.config";
import { assetsConfig } from "@/config/assets.config";
import { siteContent } from "@/i18n/site.content";

const { description } = siteContent["es"];

export const baseMetadata: Metadata = {
  metadataBase: new URL(
    siteConfig.url,
  ),

  title: {
    default: siteConfig.name,

    template:
      `%s | ${siteConfig.name}`,
  },

  description,

  keywords:
    siteConfig.keywords,

  authors: [
    {
      name: siteConfig.name,
      url: siteConfig.url,
    },
  ],

  applicationName: siteConfig.name,

  category: "Technology",

  creator:
    siteConfig.name,

  publisher:
    siteConfig.name,

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon:
      assetsConfig.favicon,

    apple:
      assetsConfig.appleTouch,
  },
};
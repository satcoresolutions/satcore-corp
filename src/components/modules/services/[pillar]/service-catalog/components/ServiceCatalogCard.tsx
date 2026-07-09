"use client";

import Link
  from "next/link";

import {
  motion,
} from "framer-motion";

import Card
  from "@/components/ui/card";

import {
  useLanguage,
} from "@/hooks/use-language";

import {
  serviceIcons,
} from "@/data/stack/service-icons";

import type {
  ServiceCatalogCardProps,
} from "../types/service-catalog.types";

export default function ServiceCatalogCard({
  service,
}: ServiceCatalogCardProps) {
  const lang =
    useLanguage();

  const content =
    service.translations[lang];

  const Icon =
    serviceIcons[
    service.core.icon
    ];

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{
        once: true,
      }}
      className="h-full"
    >
      <Link
        href={`/services/${service.core.pillar}/${service.core.slug}`}
        className="block h-full"
      >
        <Card
          variant="glass"
          className="
    group

    h-full

    p-4

    flex
    flex-col
    items-center
    justify-center

    gap-6

    text-center

    transition-all
    duration-300

    hover:-translate-y-1
    hover:shadow-xl
  "
        >
          {Icon && (
            <div
              className="
        flex

        h-14
        w-14

        items-center
        justify-center

        rounded-xl

        bg-primary/10

        text-primary

        transition-all
        duration-300

        group-hover:scale-110
      "
            >
              <Icon
                className="
          h-7
          w-7
        "
              />
            </div>
          )}

          <div
            className="
      flex
      flex-col
      items-center
      gap-4
    "
          >
            <h5
              className="
        text-xl
        font-semibold
        leading-tight

        transition-colors
        duration-300

        group-hover:text-primary
      "
            >
              {content.title}
            </h5>

            <p
              className="
        text-sm
        leading-7
        text-surface
        max-w-xs
      "
            >
              {content.subtitle}
            </p>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
}
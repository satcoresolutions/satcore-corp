"use client";

import {
  motion,
} from "framer-motion";

import type {
  ServiceCatalogHeaderProps,
} from "../types/service-catalog.types";

export default function ServiceCatalogHeader({
  title,
  description,
}: ServiceCatalogHeaderProps) {
  return (
    <motion.div
      className="
        mx-auto
        mb-16

        flex
        flex-col
        items-center
        text-center

        max-w-3xl
      "
      initial={{
        opacity: 0,
        y: 15,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      viewport={{
        once: false,
      }}
    >
      <h2
        className="
          text-3xl
          md:text-5xl
          font-bold
          mb-4
          leading-tight
        "
      >
        {title}
      </h2>

      <p
        className="
          text-base
          md:text-lg
          text-text-muted
          leading-7
        "
      >
        {description}
      </p>
    </motion.div>
  );
}
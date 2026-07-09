"use client";

import {
  motion,
  type Variants,
} from "framer-motion";

import Card from "@/components/ui/card";
import Button from "@/components/ui/button";

import {
  serviceIcons,
} from "@/data/stack/service-icons";

import type {
  ServicesCardProps,
} from "../types/services.types";

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 36,
    scale: 0.97,
  },

  show: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.55,
      ease: [
        0.22,
        1,
        0.36,
        1,
      ],
    },
  },
};

export default function ServicesCard({
  title,
  description,
  icon,
  href,
  image,
  imageAlt,
}: ServicesCardProps) {
  const Icon = serviceIcons[icon];

  return (
    <motion.div
      variants={item}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className="h-full"
    >
      <Card
        variant="premium"
        className="
          flex
          h-full
          flex-col
          overflow-hidden
        "
      >
        <img
          src={image}
          alt={imageAlt}
          className="
            h-48
            w-full
            object-cover
          "
        />

        <div
          className="
            flex
            flex-1
            flex-col
            p-6
          "
        >
          <Icon
            className="
              h-10
              w-10
              text-secondary
            "
          />

          <h3
            className="
              mt-6
              text-xl
              font-semibold
            "
          >
            {title}
          </h3>

          <p
            className="
              mt-3
              flex-1
              text-sm
              text-text-muted
            "
          >
            {description}
          </p>

          <Button
            href={href}
            variant="gradient"
            className="mt-6"
          >
            Ver servicio
          </Button>
        </div>
      </Card>
    </motion.div>
  );
}
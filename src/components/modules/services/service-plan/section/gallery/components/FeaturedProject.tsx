"use client";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import Image from "next/image";

import Card from "@/components/ui/card";

import {
  useLanguage,
} from "@/hooks/use-language";

import type {
  FeaturedProjectProps,
} from "../types/gallery.types";

export default function FeaturedProject({
  project,
}: FeaturedProjectProps) {
  const lang =
    useLanguage();

  const content =
    project.translations[lang];

  return (
    <Card
      variant="premium"
      className="
        overflow-hidden
      "
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={project.id}
          initial={{
            opacity: 0,
            scale: 1.03,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 0.98,
          }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
        >
          <Image
            src={project.image}
            alt={content.imageAlt}
            width={1600}
            height={900}
            className="
              w-full
              object-cover
            "
          />
        </motion.div>
      </AnimatePresence>
    </Card>
  );
}
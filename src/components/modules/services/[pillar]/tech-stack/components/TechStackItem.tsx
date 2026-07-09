"use client";

import Image
  from "@/components/ui/image";

import {
  technologyRegistry,
} from "@/data/stack/technology-registry";

import type {
  TechStackItemProps,
} from "../types/tech-stack.types";

export default function TechStackItem({
  technology,
}: TechStackItemProps) {
  const tech =
    technologyRegistry[
      technology as keyof typeof technologyRegistry
    ];

  if (!tech) {
    return null;
  }

  return (
    <div
      className="
        flex
        items-center
        justify-center
        opacity-80
        transition-opacity
        duration-300
        hover:opacity-100
      "
      title={technology}
    >
      <Image
        src={tech.icon}
        alt={technology}
        width={60}
        height={60}
        className="
          w-14
          h-14
          object-contain
        "
      />
    </div>
  );
}
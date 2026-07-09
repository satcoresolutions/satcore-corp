"use client";

import Image from "next/image";

import Card from "@/components/ui/card";

import {
  useLanguage,
} from "@/hooks/use-language";

import type {
  ProjectThumbnailProps,
} from "../types/gallery.types";

export default function ProjectThumbnail({
  project,
  active,
  onClick,
}: ProjectThumbnailProps) {
  const lang =
    useLanguage();

  const content =
    project.translations[lang];

  return (
    <button
      onClick={onClick}
      className="w-full"
    >
      <Card
        variant={
          active
            ? "outlined"
            : "default"
        }
        className={`
          overflow-hidden
          transition-all

          ${
            active
              ? "scale-[1.02]"
              : "opacity-70 hover:opacity-100"
          }
        `}
      >
        <Image
          src={project.image}
          alt={content.imageAlt}
          width={400}
          height={250}
          className="
            h-24
            w-full
            object-cover
          "
        />
      </Card>
    </button>
  );
}
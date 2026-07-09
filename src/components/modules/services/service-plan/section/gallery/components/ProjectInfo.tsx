"use client";

import {
  useLanguage,
} from "@/hooks/use-language";

import {
  galleryContent,
} from "../content/gallery.content";

import type {
  ProjectInfoProps,
} from "../types/gallery.types";

export default function ProjectInfo({
  project,
}: ProjectInfoProps) {
  const lang =
    useLanguage();

  const gallery =
    galleryContent[lang];

  const content =
    project.translations[lang];

  return (
    <div
      className="
        max-w-3xl
      "
    >
      <h5
        className="
          text-2xl
          font-semibold
        "
      >
        {gallery.projectTitle}
      </h5>

      <h6
        className="
          mt-2
          text-lg
          font-medium
        "
      >
        {content.title}
      </h6>

      <p
        className="
          mt-3
          text-text-primary
        "
      >
        {content.description}
      </p>
    </div>
  );
}
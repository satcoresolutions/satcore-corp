"use client";

import { useState } from "react";

import FeaturedProject from "./FeaturedProject";
import ProjectThumbnail from "./ProjectThumbnail";
import ProjectInfo from "./ProjectInfo";

import type {
  GalleryShowcaseProps,
} from "../types/gallery.types";

export default function GalleryShowcase({
  projects,
}: GalleryShowcaseProps) {
  const [activeIndex, setActiveIndex] =
    useState(0);

  const activeProject =
    projects[activeIndex];

  return (
    <div
      className="
        grid
        gap-8
        lg:grid-cols-[1.5fr_320px]
      "
    >
      <div
        className="
          space-y-6
        "
      >
        <FeaturedProject
          project={activeProject}
        />

        <ProjectInfo
          project={activeProject}
        />
      </div>

      <div
        className="
          flex
          flex-col
          gap-4
        "
      >
        {projects.map(
          (project) => (
            <ProjectThumbnail
              key={project.id}
              project={project}
              active={
                activeProject.id ===
                project.id
              }
              onClick={() =>
                setActiveIndex(
                  projects.findIndex(
                    (p) =>
                      p.id === project.id,
                  ),
                )
              }
            />
          ),
        )}
      </div>
    </div>
  );
}
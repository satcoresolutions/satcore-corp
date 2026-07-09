"use client";

import type {
  TechnologyHeaderProps,
} from "../types/technologies.types";

export default function TechnologyHeader({
  badge,
  title,
  description,
}: TechnologyHeaderProps) {
  return (
    <div
      className="
        mx-auto
        mb-16
        max-w-3xl
        text-center
      "
    >
      <span
        className="
          text-sm
          font-medium
          text-primary
        "
      >
        {badge}
      </span>

      <h2
        className="
          mt-3
          text-3xl
          font-bold

          md:text-5xl
        "
      >
        {title}
      </h2>

      <p
        className="
          mt-4
          text-lg
          text-surface
        "
      >
        {description}
      </p>
    </div>
  );
}
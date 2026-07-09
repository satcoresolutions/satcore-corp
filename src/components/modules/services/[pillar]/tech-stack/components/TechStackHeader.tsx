"use client";

import type {
  TechStackHeaderProps,
} from "../types/tech-stack.types";

export default function TechStackHeader({
  title,
  description,
}: TechStackHeaderProps) {
  return (
    <div
      className="
        mb-14
        text-center
      "
    >
      <h2
        className="
          mb-4
          text-3xl
          font-bold
          md:text-5xl
        "
      >
        {title}
      </h2>

      <p
        className="
          text-text-muted
        "
      >
        {description}
      </p>
    </div>
  );
}
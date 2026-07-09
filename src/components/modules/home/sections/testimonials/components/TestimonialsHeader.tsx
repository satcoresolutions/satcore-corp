"use client";

import type {
  TestimonialsHeaderProps,
} from "../types/testimonials.types";

export default function TestimonialsHeader({
  content,
}: TestimonialsHeaderProps) {
  return (
    <header
      className="
        mx-auto
        max-w-3xl
        pb-12
        text-center
      "
    >
      <h2 className="mb-4">
        {content.title}
      </h2>

      <p className="text-surface">
        {content.description}
      </p>
    </header>
  );
}
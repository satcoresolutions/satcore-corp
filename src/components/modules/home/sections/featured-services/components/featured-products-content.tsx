"use client";

import type {
  FeaturedProductsContentProps,
} from "../types/featured-products.types";

export default function FeaturedProductsContent({
  content,
}: FeaturedProductsContentProps) {
  return (
    <div
      className="
        mx-auto
        max-w-3xl
        text-center
      "
    >
      <span
        className="
          text-sm
          font-medium
          uppercase
          tracking-[0.2em]
          text-primary
        "
      >
        {content.badge}
      </span>

      <h2 className="mt-4">
        {content.title}
      </h2>

      <p
        className="
          mt-6
          text-surface
        "
      >
        {content.description}
      </p>
    </div>
  );
}
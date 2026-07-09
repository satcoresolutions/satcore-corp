"use client";

import Card from "@/components/ui/card";

import type {
  ProcessCardProps,
} from "../types/process.types";

export default function ProcessCard({
  step,
  index,
}: ProcessCardProps) {
  return (
    <Card
      variant="featured"
      className="
        h-full
        p-6
        text-center
      "
    >
      <div
        className="
          mx-auto
          mb-4

          flex
          h-10
          w-10

          items-center
          justify-center

          rounded-full
          text-sm
          font-semibold
        "
        style={{
          background:
            "var(--color-surface-secondary)",

          color:
            "var(--color-primary)",
        }}
      >
        {index + 1}
      </div>

      <h3
        className="
          text-lg
          font-semibold
        "
      >
        {step.title}
      </h3>

      <p
        className="
          mt-3
          text-sm
        "
        style={{
          color:
            "var(--color-text-muted)",
        }}
      >
        {step.description}
      </p>
    </Card>
  );
}
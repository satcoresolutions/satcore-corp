"use client";

import Card from "@/components/ui/card";

import type {
  BenefitCardProps,
} from "../types/benefits.types";

export default function BenefitCard({
  benefit,
}: BenefitCardProps) {
  const Icon =
    benefit.icon;

  return (
    <Card
      variant="glass"
      className="
        h-full
        p-6
        text-center
      "
    >
      <Icon
        className="
          mx-auto
          h-10
          w-10
        "
        style={{
          color:
            "var(--color-primary)",
        }}
      />

      <h5
        className="
          mt-5
          text-lg
          font-semibold
        "
      >
        {benefit.title}
      </h5>

      <p
        className="
          mt-3
          text-sm
        "
        style={{
          color:
            "var(--color-text-primary)",
        }}
      >
        {benefit.description}
      </p>
    </Card>
  );
}
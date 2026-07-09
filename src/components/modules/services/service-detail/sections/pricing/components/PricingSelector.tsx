"use client";

import PricingSelectorItem
  from "./PricingSelectorItem";

import {
  useLanguage,
} from "@/hooks/use-language";

import type {
  PricingSelectorProps,
} from "../types/pricing.types";

export default function PricingSelector({
  plans,
  activePlan,
  onSelect,
}: PricingSelectorProps) {
  const lang =
    useLanguage();

  return (
    <aside
      className="
        flex
        flex-col
        gap-2
      "
    >
      {plans.map((plan) => (
        <PricingSelectorItem
          key={plan.core.id}
          content={
            plan.translations[
              lang
            ]
          }
          active={
            plan.core.id ===
            activePlan.core.id
          }
          onClick={() =>
            onSelect(plan)
          }
        />
      ))}
    </aside>
  );
}
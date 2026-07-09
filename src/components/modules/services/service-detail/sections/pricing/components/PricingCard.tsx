"use client";

import Card
  from "@/components/ui/card";

import PricingButton
  from "./PricingButton";

import type {
  PricingCardProps,
} from "../types/pricing.types";

export default function PricingCard({
  plan,
  content,
  href,
  buttonLabel,
}: PricingCardProps) {
  return (
    <Card
      variant="glass"
      className="
        flex
        h-full
        flex-col
        p-8
      "
    >
      {/* HEADER */}
      <div
        className="
          mb-6
        "
      >
        <span
          className="
            text-xs
            uppercase
            tracking-widest
            text-primary
          "
        >
          {content.level}
        </span>

        <h5
          className="
            mt-2
            text-2xl
            font-bold
          "
        >
          {content.name}
        </h5>
      </div>

      {/* PRICE */}

      <div
        className="
          mb-6
        "
      >
        <p
          className="
            text-3xl
            font-bold
            text-primary
          "
        >
          {plan.core.price}
        </p>

        <p
          className="
            mt-2
            text-sm
            text-surface
          "
        >
          {content.time}
        </p>
      </div>

      {/* FEATURES */}

      <ul
        className="
          flex-1
          space-y-3
        "
      >
        {content.includes.map(
          (item) => (
            <li
              key={item}
              className="
                flex
                items-start
                gap-2
              "
            >
              <span
                className="
                  text-text-muted
                "
              >
                ✓
              </span>

              <span
                className="
                  text-sm
                  text-text-primary
                "
              >
                {item}
              </span>
            </li>
          ),
        )}
      </ul>
      <div
        className="
                flex
                justify-end
              "
      >
        <PricingButton
          href={href}
          label={buttonLabel}
        />
      </div>
    </Card>
  );
}
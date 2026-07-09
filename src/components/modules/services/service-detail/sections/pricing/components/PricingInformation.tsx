"use client";

import {
  Info,
} from "lucide-react";

import type {
  PricingInformationProps,
} from "../types/pricing.types";

export default function PricingInformation({
  name,
  description,
}: PricingInformationProps) {
  return (
    <div
      className="
        rounded-3xl
        border
        bg-accent/40
        p-6
      "
    >
      <div
        className="
          flex
          items-start
          gap-4
        "
      >
        <div
          className="
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-full
            bg-primary/10
          "
        >
          <Info
            className="
              h-5
              w-5
              text-primary
            "
          />
        </div>

        <div
          className="
            flex-1
            space-y-2
          "
        >
          <h5
            className="
              text-2xl
              font-bold
            "
          >
            {name}
          </h5>

          <p
            className="
              text-primary
              leading-7
            "
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
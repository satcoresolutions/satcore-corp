"use client";

import Button
  from "@/components/ui/button";

import type {
  PortfolioCTAProps,
} from "../types/portfolio.types";


export default function PortfolioCTA({
  content,
}: PortfolioCTAProps) {
  return (
    <div
      className="
        mt-16
        text-center
      "
    >
      <p
        className="
          text-primary
        "
      >
        {content.description}
      </p>

      <Button
        href={content.href}
        variant="primary"
        className="mt-5"
      >
        {content.buttonLabel}
      </Button>
    </div>
  );
}
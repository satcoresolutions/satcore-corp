"use client";

import Button
  from "@/components/ui/button";

import type {
  PricingButtonProps,
} from "../types/pricing.types";

export default function PricingButton({
  href,
  label,
}: PricingButtonProps) {
  return (
    <Button
      href={href}
      variant="gradient"
    >
      {label}
    </Button>
  );
}
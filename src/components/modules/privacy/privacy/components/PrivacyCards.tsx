"use client";

import Card from "@/components/ui/card";

import type {
  PrivacyCardProps,
} from "../types/privacy.types";

export default function PrivacyCard({
  item,
}: PrivacyCardProps) {
  return (
    <Card
      variant="premium"
      className="
        flex
        h-full
        flex-col
        p-6
      "
    >
      <h3 className="mb-4">
        {item.title}
      </h3>

      <p className="text-text-muted">
        {item.description}
      </p>
    </Card>
  );
}
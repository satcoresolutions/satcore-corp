import Card
  from "@/components/ui/card";

import type {
  BenefitsCardProps,
} from "../types/benefits.types";

export default function BenefitsCard({
  benefit,
}: BenefitsCardProps) {
  return (
    <Card
    variant="premium"
      className="
        h-full
        p-6
      "
    >
      <h3
        className="
          mb-3
          text-xl
          font-semibold
        "
      >
        {benefit.title}
      </h3>

      <p
        className="
          text-text-muted
        "
      >
        {benefit.description}
      </p>
    </Card>
  );
}
import Card from "@/components/ui/card";

import type {
  FeatureCardProps,
} from "../types/features.types";

export default function FeatureCard({
  feature,
}: FeatureCardProps) {
  return (
    <Card
      variant="glass"
      className="
        h-full
        p-8
      "
    >
      <h3
        className="
          text-xl
          font-semibold
        "
      >
        {feature.title}
      </h3>

      <p
        className="
          mt-4
          leading-7
          text-quaternary
        "
      >
        {feature.description}
      </p>
    </Card>
  );
}
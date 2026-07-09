import Card from "@/components/ui/card";

import type {
  UseCaseCardProps,
} from "../types/use-cases.types";

export default function UseCaseCard({
  useCase,
}: UseCaseCardProps) {
  return (
    <Card
    variant="featured"
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
        {useCase.title}
      </h3>

      <p
        className="
          mt-4
          leading-7
          text-text-muted
        "
      >
        {useCase.description}
      </p>
    </Card>
  );
}
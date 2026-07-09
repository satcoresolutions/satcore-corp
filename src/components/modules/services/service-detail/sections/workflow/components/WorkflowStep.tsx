import Card from "@/components/ui/card";

import type { WorkflowStepProps } from "../types/workflow.types";

export default function WorkflowStep({
  step,
  index,
}: WorkflowStepProps) {
  return (
    <Card
      variant="premium"
      className="
        relative
        p-6
        w-full
        h-full
      "
    >
      <div className="flex flex-col gap-2 items-center">
        {/* número */}
        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-accent
            text-primary
            font-bold
            shrink-0
          "
        >
          {index + 1}
        </div>

        {/* contenido */}
        <div className="min-w-0">
          <h3 className="text-xl font-semibold">
            {step.title}
          </h3>

          <p className="mt-3 text-text-muted leading-7">
            {step.description}
          </p>
        </div>
      </div>
    </Card>
  );
}
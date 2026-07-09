import Card from "@/components/ui/card";

import {
  Search,
  PencilRuler,
  Code2,
  Rocket,
  Workflow,
} from "lucide-react";

import type {
  ProcessStepProps,
} from "../types/process.types";

const icons = [
  Search,
  PencilRuler,
  Code2,
  Rocket,
];

export default function ProcessStep({
  step,
  index,
  isLast,
}: ProcessStepProps) {
  const Icon =
    icons[index] ?? Workflow;

  return (
    <div
      className="
        relative

        w-full

        md:max-w-85

        xl:max-w-70
      "
    >
      {/* Línea hacia la siguiente tarjeta */}
      {!isLast && (
        <div
          className="
            hidden

            xl:block

            absolute

            top-6
            left-full

            h-px
            w-8

            bg-border
          "
        />
      )}

      <Card
        variant="featured"
        className="
          group
          relative

          flex
          flex-col

          h-full
          min-h-80

          overflow-visible

          p-8
          pt-14

          text-center

          transition-all
          duration-300

          hover:-translate-y-2
        "
      >
        {/* Número */}
        <div
          className="
            absolute

            -top-5
            left-1/2

            flex
            h-12
            w-12

            -translate-x-1/2

            items-center
            justify-center

            rounded-full

            border
            border-border

            bg-surface-secondary

            text-sm
            font-bold

            shadow-md
          "
        >
          {String(index + 1).padStart(2, "0")}
        </div>

        {/* Icono */}
        <div
          className="
            mb-8

            flex
            justify-center
          "
        >
          <div
            className="
              flex
              h-20
              w-20

              items-center
              justify-center

              rounded-full

              bg-secondary/10

              transition-all
              duration-300

              group-hover:scale-110
              group-hover:bg-primary/15
            "
          >
            <Icon
              size={36}
              strokeWidth={1.8}
              className="
                text-secondary
              "
            />
          </div>
        </div>

        {/* Contenido */}
        <div
          className="
            flex
            flex-1
            flex-col
            items-center
          "
        >
          <h5
            className="
              text-xl
              font-semibold
            "
          >
            {step.title}
          </h5>

          <p
            className="
              mt-4

              max-w-xs

              text-sm
              leading-relaxed

              text-secondary
            "
          >
            {step.description}
          </p>
        </div>
      </Card>
    </div>
  );
}
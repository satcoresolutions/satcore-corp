"use client";

import Image
    from "@/components/ui/image";

import Card
    from "@/components/ui/card";

import {
    technologyRegistry,
} from "@/data/stack/technology-registry";

import type {
    TechnologyCardProps,
} from "../types/technologies.types";

export default function TechnologyCard({
    technology,
}: TechnologyCardProps) {
    const tech =
        technologyRegistry[
        technology as keyof typeof technologyRegistry
        ];

    if (!tech) {
        return null;
    }

    return (
        <Card
            variant="premium"
            className="
        group

        flex
    w-40
    h-48
        flex-col
        items-center

        justify-between

        p-6

        transition-all
        duration-300

        hover:-translate-y-2
      "
        >
            <Image
                src={tech.icon}
                alt={technology}
                width={64}
                height={64}
                className="
          h-16
          w-16

          object-contain

          transition-transform
          duration-300

          group-hover:scale-110
        "
            />

            <span
                className="
          text-center
          text-sm
          font-medium
          text-secondary
        "
            >
                {technology}
            </span>
        </Card>
    );
}
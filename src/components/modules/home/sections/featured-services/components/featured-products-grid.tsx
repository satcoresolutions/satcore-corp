"use client";

import Card from "@/components/ui/card";
import Button from "@/components/ui/button";

import {
  useLanguage,
} from "@/hooks/use-language";

import useFeaturedServices
  from "../hooks/use-featured-services";

interface FeaturedServicesGridProps {
  buttonLabel: string;
}

export default function FeaturedServicesGrid({
  buttonLabel,
}: FeaturedServicesGridProps) {

  const pillars =
    useFeaturedServices();

  const language =
    useLanguage();

  return (
    <div
      className="
        mt-10
        grid
        gap-6
        sm:grid-cols-2
        lg:grid-cols-4
      "
    >
      {pillars.map((pillar) => {

        const translation =
          pillar.translations[language];

        return (
          <Card
            key={pillar.core.id}
            variant="outlined"
            className="
              flex
              h-full
              flex-col
              overflow-hidden
            "
          >
            <img
              src={pillar.core.image}
              alt={translation.imageAlt}
              className="
                h-48
                w-full
                object-cover
              "
            />

            <div
              className="
                flex
                flex-1
                flex-col
                p-6
              "
            >
              <h3
                className="
                  text-xl
                  font-semibold
                "
              >
                {translation.title}
              </h3>

              <p
                className="
                  mt-3
                  flex-1
                  text-sm
                  text-surface
                "
              >
                {translation.description}
              </p>

              <div
                className="
                  mt-6
                  flex
                  justify-end
                "
              >
                <Button
                  href={pillar.href}
                  variant="subtle"
                >
                  {buttonLabel}
                </Button>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
"use client";

import Section from "@/components/ui/section";
import Container from "@/components/ui/container";

import FAQItem from "./components/FAQItem";

import { useTranslation } from "@/hooks/use-translation";

import { faqContent } from "./content/faq.content";

import type {
  FAQProps,
} from "./types/faq.types";

export default function FAQ({
  faq,
}: FAQProps) {
  const {
    title,
    description,
  } = useTranslation(faqContent);

  if (faq.length === 0) {
    return null;
  }

  return (
    <Section
      id="service-faq"
      className="py-10"
    >
      <Container>

        <div
          className="
            mx-auto
            mb-12
            max-w-3xl
            text-center
          "
        >
          <h2
            className="
              text-3xl
              font-bold
              md:text-4xl
            "
          >
            {title}
          </h2>

          <p
            className="
              mt-4
              text-surface
            "
          >
            {description}
          </p>
        </div>

        <div
          className="
            mx-auto
            flex
            max-w-4xl
            flex-col
            gap-4
          "
        >
          {faq.map((item, index) => (
            <FAQItem
              key={`${item.question}-${index}`}
              item={item}
            />
          ))}
        </div>

      </Container>
    </Section>
  );
}
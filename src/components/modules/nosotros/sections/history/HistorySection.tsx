"use client";

import Section from "@/components/ui/section";
import Container from "@/components/ui/container";

import HistoryContent
  from "./components/HistoryContent";

import HistoryHighlight
  from "./components/HistoryHighlight";

import {
  historyContent,
} from "./content/history.content";

import {
  useTranslation,
} from "@/hooks/use-translation";

export default function HistorySection() {
  const content =
    useTranslation(
      historyContent,
    );

  return (
    <Section
      variant="default"
      className="py-10"
    >
      <Container
        className="
          grid
          items-center
          gap-10
          md:grid-cols-2
        "
      >
        <HistoryContent
          content={{
            title: content.title,
            paragraphs:
              content.paragraphs,
          }}
        />

        <HistoryHighlight
          content={
            content.highlight
          }
        />
      </Container>
    </Section>
  );
}
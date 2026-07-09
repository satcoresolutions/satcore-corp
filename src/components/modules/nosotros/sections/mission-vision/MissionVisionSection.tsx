"use client";

import Section from "@/components/ui/section";
import Container from "@/components/ui/container";

import MissionVisionHeader
  from "./components/MissionVisionHeader";

import MissionVisionGrid
  from "./components/MissionVisionGrid";

import {
  missionVisionContent,
} from "./content/mission-vision.content";

import {
  useTranslation,
} from "@/hooks/use-translation";

export default function MissionVisionSection() {
  const content =
    useTranslation(
      missionVisionContent,
    );

  return (
    <Section variant="default">
      <Container>

        <MissionVisionHeader
          content={content.header}
        />

        <MissionVisionGrid
          content={content.cards}
        />

      </Container>
    </Section>
  );
}
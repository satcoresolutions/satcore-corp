"use client";

import Section from "@/components/ui/section";
import Container from "@/components/ui/container";

import { useTranslation } from "@/hooks/use-translation";
import { useLanguage } from "@/hooks/use-language";

import {
  privacyContent,
} from "./content/privacy.content";

import PrivacyHeader from "./components/PrivacyHeader";
import PrivacyGrid from "./components/PrivacyGrid";

export default function PrivacySection() {
  const content =
    useTranslation(
      privacyContent,
    );

  const language =
    useLanguage();

  return (
    <Section id="privacy-policy" variant="default">
      <Container>

        <PrivacyHeader
          content={content.header}
        />

        <PrivacyGrid
          animationKey={language}
          items={content.items}
        />

      </Container>
    </Section>
  );
}
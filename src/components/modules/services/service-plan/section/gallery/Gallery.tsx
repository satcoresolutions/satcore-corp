"use client";

import Section from "@/components/ui/section";
import Container from "@/components/ui/container";

import { useTranslation } from "@/hooks/use-translation";

import {
  galleryContent,
} from "./content/gallery.content";

import GalleryShowcase
  from "./components/GalleryShowcase";

import type {
  GalleryProps,
} from "./types/gallery.types";

export default function Gallery({
  projects,
}: GalleryProps) {
  const content =
    useTranslation(
      galleryContent,
    );

  if (!projects.length) {
    return null;
  }

  return (
    <Section
      id="service-gallery"
      variant="surface"
      spacing="xl"
      className="p-10"
    >
      <Container>

        <div
          className="
            mx-auto
            mb-16
            max-w-3xl
            text-center
          "
        >
          <span
            className="
              text-sm
              font-medium
              text-primary
            "
          >
            {content.badge}
          </span>

          <h2
            className="
              mt-3
              text-3xl
              font-bold
              md:text-5xl
            "
          >
            {content.title}
          </h2>

          <p
            className="
              mt-4
              text-lg
              text-surface
            "
          >
            {content.description}
          </p>
        </div>

        <GalleryShowcase
          projects={projects}
        />

      </Container>
    </Section>
  );
}
"use client";

import Section
  from "@/components/ui/section";

import {
  useTranslation,
} from "@/hooks/use-translation";

import {
  useLanguage,
} from "@/hooks/use-language";

import {
  portfolioData,
} from "@/data/portfolio";

import {
  portfolioContent,
} from "./content/portfolio.content";

import PortfolioHeader
  from "./components/PortfolioHeader";

import PortfolioGrid
  from "./components/PortfolioGrid";

import PortfolioCTA
  from "./components/PortfolioCTA";


function getHomeProjects() {
  const featured =
    portfolioData.filter(
      (project) =>
        project.featured,
    );

  return featured.length > 0
    ? featured.slice(0, 3)
    : portfolioData.slice(0, 3);
}


export default function Portfolio() {
  const content =
    useTranslation(
      portfolioContent,
    );

  const language =
    useLanguage();

  const homeProjects =
    getHomeProjects();

  const projectsView =
    homeProjects.map(
      (project) => ({
        id: project.id,

        title:
          project.translations[
            language
          ].title,

        description:
          project.translations[
            language
          ].description,

        imageAlt:
          project.translations[
            language
          ].imageAlt,

        image:
          project.image,

        href:
          project.href,
      }),
    );

  return (
    <Section
      variant="default"
    >
      <div
        className="
          mx-auto
          max-w-6xl
          px-6
        "
      >
        <PortfolioHeader
          content={
            content.header
          }
        />

        <PortfolioGrid
          animationKey={
            language
          }
          projects={
            projectsView
          }
        />

        <PortfolioCTA
          content={
            content.cta
          }
        />
      </div>
    </Section>
  );
}
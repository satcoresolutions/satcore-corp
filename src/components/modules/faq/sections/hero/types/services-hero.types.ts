import type {
  LanguageCode,
} from "@/types/common.types";

export interface HeroContent {
  badge: string;

  title: string;

  description: string;

  primaryAction: string;

  secondaryAction: string;
}

export interface ServicesHeroProps {
  className?: string;
}

export type ServicesHeroTranslations =
  Record<
    LanguageCode,
    HeroContent
  >;

export interface HeroContentProps {
  content: HeroContent;
}

export interface HeroActionsProps {
  primaryAction: string;

  secondaryAction: string;
}
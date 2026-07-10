"use client";

import Input from "@/components/ui/input";

import {
  portfolioSearchContent,
} from "./content/portafolio-search.content";

import {
  useLanguage,
} from "@/hooks/use-language";

import type {
  PortfolioSearchProps,
} from "./types/portafolio-search.types";

export default function ServiceSearch({
  value,
  onChange,
}: PortfolioSearchProps) {
  const lang = useLanguage();

  const content =
    portfolioSearchContent[lang];

  return (
    <div className="flex justify-center">
      <Input
        variant="filled"
        value={value}
        placeholder={content.placeholder}
        onChange={(event) =>
          onChange?.(event.target.value)
        }
      />
    </div>
  );
}
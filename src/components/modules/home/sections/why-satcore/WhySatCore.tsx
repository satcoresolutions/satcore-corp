"use client";

import {
  useTranslation,
} from "@/hooks/use-translation";

import {
  useLanguage,
} from "@/hooks/use-language";

import {
  whySatCoreContent,
} from "./content/why-satcore.content";

import WhySatCoreHeader
  from "./components/WhySatCoreHeader";

import WhySatCoreList
  from "./components/WhySatCoreList";


export default function WhySatCore() {
  const content =
    useTranslation(
      whySatCoreContent,
    );

  const language =
    useLanguage();


  return (
    <div
      className="
        h-full
        flex
        flex-col
        justify-center
      "
    >

      <WhySatCoreHeader
        content={
          content.header
        }
      />


      <WhySatCoreList
        animationKey={
          language
        }
        items={
          content.items
        }
      />

    </div>
  );
}
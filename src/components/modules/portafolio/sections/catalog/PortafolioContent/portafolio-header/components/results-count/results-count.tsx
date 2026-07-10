"use client";

import {
  motion,
} from "framer-motion";

import {
  useLanguage,
} from "@/hooks/use-language";

interface ResultsCountProps {
  count: number;
}

export default function ResultsCount({
  count,
}: ResultsCountProps) {
  const lang = useLanguage();

  const labels = {
    en: "Services found",
    es: "Servicios encontrados",
    pt: "Serviços encontrados",
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
      className="
        inline-flex
        items-center
        gap-2
        justify-center
        px-3
        py-1.5

        border

        bg-(--color-surface-secondary)
        border-[color-mix(in_srgb,var(--color-text-muted)_15%,transparent)]

        shadow-sm
      "
      style={{
        borderRadius: "var(--radius-badge)",
      }}
    >
      <span
        className="
          text-xs
          font-semibold
          text-primary
        "
      >
        {count}
      </span>

      <span
        className="
          text-xs
          text-text-primary
        "
      >
        {labels[lang]}
      </span>
    </motion.div>
  );
}
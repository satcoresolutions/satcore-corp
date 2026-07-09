"use client";

import type {
  PrivacyHeaderContent,
} from "../types/privacy.types";

interface PrivacyHeaderProps {
  content: PrivacyHeaderContent;
}

export default function PrivacyHeader({
  content,
}: PrivacyHeaderProps) {
  return (
    <header
      className="
        mx-auto
        max-w-3xl
        pb-12
        text-center
      "
    >
      <h2 className="mb-4">
        {content.title}
      </h2>

      <p className="text-surface">
        {content.description}
      </p>
    </header>
  );
}
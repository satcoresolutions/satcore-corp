"use client";

import type {
  TermsHeaderContent,
} from "../types/terms.types";

interface TermsHeaderProps {
  content: TermsHeaderContent;
}

export default function TermsHeader({
  content,
}: TermsHeaderProps) {
  return (
    <header className="mx-auto max-w-3xl pb-12 text-center">
      <h2 className="mb-4">
        {content.title}
      </h2>

      <p className="text-surface">
        {content.description}
      </p>
    </header>
  );
}
"use client";

import { useState } from "react";

import type {
  FAQItemProps,
} from "../types/faq.types";

export default function FAQItem({
  item,
}: FAQItemProps) {
  const [open, setOpen] =
    useState(false);

  return (
    <div
      className="
        rounded-xl
        border
        bg-accent/40
      "
    >
      <button
        onClick={() => setOpen(!open)}
        className="
          flex
          w-full
          items-center
          justify-between
          p-5
          text-left
        "
      >
        <span
          className="
            font-semibold
          "
        >
          {item.question}
        </span>

        <span>
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <div
          className="
            border-t
            px-5
            py-4
            text-primary
          "
        >
          {item.answer}
        </div>
      )}
    </div>
  );
}
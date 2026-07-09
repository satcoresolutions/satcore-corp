"use client";

import { useState } from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import Card from "@/components/ui/card";

import type {
  FAQContent,
} from "../types/faq.types";

interface FAQLayoutProps {
  content: FAQContent;
}

export default function FAQLayout({
  content,
}: FAQLayoutProps) {
  const [activeIndex, setActiveIndex] =
    useState(0);

  const handleChange = (index: number) => {
    setActiveIndex(index);

    const el =
      document.getElementById(
        "faq-content",
      );

    if (!el) return;

    const yOffset = -100;

    const y =
      el.getBoundingClientRect().top +
      window.scrollY +
      yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="
        mx-auto
        grid
        max-w-6xl
        gap-10
        px-6
        md:grid-cols-4
      "
    >
      {/* SIDEBAR */}

      <motion.div
        className="md:col-span-1"
        initial={{
          opacity: 0,
          x: -20,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        viewport={{
          once: true,
        }}
      >
        <div className="sticky top-24 space-y-2">
          {content.map(
            (category, index) => (
              <button
                key={category.title}
                onClick={() =>
                  handleChange(index)
                }
                className={`
                  w-full
                  rounded-xl
                  px-4
                  py-3
                  text-left
                  text-sm
                  transition

                  ${
                    activeIndex === index
                      ? "bg-accent text-text-primary font-semibold shadow-md"
                      : "text-primary hover:bg-accent"
                  }
                `}
              >
                {category.title}
              </button>
            ),
          )}
        </div>
      </motion.div>

      {/* CONTENT */}

      <div
        id="faq-content"
        className="md:col-span-3"
      >
        <motion.h2
          key={activeIndex}
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.4,
          }}
          className="pb-6"
        >
          {
            content[
              activeIndex
            ].title
          }
        </motion.h2>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            transition={{
              duration: 0.4,
            }}
            className="
              grid
              gap-6
              sm:grid-cols-2
            "
          >
            {content[
              activeIndex
            ].items.map((faq) => (
              <motion.div
                key={faq.question}
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="h-full"
              >
                <Card
                  variant="premium"
                  className="h-full p-6"
                >
                  <h3 className="mb-4">
                    {faq.question}
                  </h3>

                  <p
                    className="
                      text-sm
                      leading-relaxed
                      text-text-muted
                    "
                  >
                    {faq.answer}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
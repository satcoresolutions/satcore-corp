"use client";

import { motion } from "framer-motion";

import Card from "@/components/ui/card";

import { useLanguage } from "@/hooks/use-language";

import { formContent } from "../content/form.content";

import FormFields from "./form-fields";
import FormSubmit from "./form-submit";

import { useContactSubmit } from "../hooks/use-contact-submit";

export default function FormContent() {
  const lang = useLanguage();

  const content =
    formContent[lang];

  const {
    handleSubmit,
    loading,
  } = useContactSubmit(
    content.validation,
  );

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -100,
        scale: 0.96,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{
        once: false,
      }}
      className="
    mx-auto
    max-w-2xl
  "
    >
      <Card
        variant="glass"
        className="
          p-8
          md:p-10
        "
      >
        {/* HEADER */}
        <div
          className="
            mb-10
            flex
            flex-col
            gap-4
            text-center
          "
        >
          <span
            className="
              text-sm
              uppercase
              tracking-widest
              text-primary
            "

          >
            {content.badge}
          </span>

          <h2>
            {content.title}
          </h2>

          <p
            className="text-surface"
          >
            {content.description}
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="
            flex
            flex-col
            gap-4
          "
        >
          <FormFields
            content={content}
          />

          <FormSubmit
            label={
              content.submit
            }
            loading={loading}
          />
        </form>
      </Card>
    </motion.div>
  );
}
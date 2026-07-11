"use client";

import {
  motion,
} from "framer-motion";

import Card
  from "@/components/ui/card";

import Section
  from "@/components/ui/section";

import {
  useLanguage,
} from "@/hooks/use-language";

import SocialsIcons
  from "./components/socials-icons";

import SocialsContact
  from "./components/socials-contact";

import {
  socialsContent,
} from "./content/socials.content";

export default function Socials() {
  const lang =
    useLanguage();

  const content =
    socialsContent[lang];

  return (
    <Section
      spacing="none"
      style={{ paddingTop: 5, paddingBottom: 5 }}
    >
      <motion.div
        initial={{
          opacity: 0,
          x: 80,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{
          once: false,
        }}
      >
        <Card
          variant="featured"
          className="
            p-6
          "
        >
          <div
            className="
              flex
              flex-col
              gap-4
            "
          >
            <div
              className="
                flex
                flex-col
                gap-2
              "
            >
              <h3>
                {content.title}
              </h3>

              <p
                className="
                  text-text-muted
                "
              >
                {content.description}
              </p>
            </div>

            <SocialsIcons />

            <SocialsContact />
          </div>
        </Card>
      </motion.div>
    </Section>
  );
}
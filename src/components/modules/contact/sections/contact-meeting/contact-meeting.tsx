"use client";

import {
  motion,
} from "framer-motion";

import Card
  from "@/components/ui/card";

import Section
  from "@/components/ui/section";

import Button
  from "@/components/ui/button";

import {
  useLanguage,
} from "@/hooks/use-language";

import {
  contactMeetingContent,
} from "./content/contact-meeting.content";

import {
  GOOGLE_CALENDAR_LINK,
} from "@/lib/utils/calendar";

export default function ContactMeeting() {
  const lang =
    useLanguage();

  const content =
    contactMeetingContent[lang] ??
    contactMeetingContent.en;

  return (
    <Section
      spacing="none"
      style={{ paddingTop: 5, paddingBottom: 5 }}
    >
      <motion.div
        initial={{
          opacity: 0,
          x: -80,
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

            <motion.div
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
            >
              <Button
                id="cta-calendar-main"
                onClick={() =>
                  window.open(
                    GOOGLE_CALENDAR_LINK,
                    "_blank",
                  )
                }
              >
                {content.cta}
              </Button>
            </motion.div>
          </div>
        </Card>
      </motion.div>
    </Section>
  );
}
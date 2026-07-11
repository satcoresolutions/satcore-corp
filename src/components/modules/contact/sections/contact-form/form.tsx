"use client";

import Section from "@/components/ui/section";

import FormContent from "./components/form-content";

export default function ContactForm() {
  return (
    <Section id="contact-form" style={{ paddingTop: 5, paddingBottom: 5 }}>
      <FormContent />
    </Section>
  );
}
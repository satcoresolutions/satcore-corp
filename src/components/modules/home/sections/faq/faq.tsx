import Section
  from "@/components/ui/section";

import Container
  from "@/components/ui/container";

import FAQContent
  from "./components/faq-content";

import FAQAccordion
  from "./components/faq-accordion";

export default function FAQ() {
  return (
    <Section
      id="faq"
      spacing="xl"
      className="mt-10"
    >
      <Container>
        <div
          className="
            mx-auto
            w-full
            max-w-5xl
            px-4
            md:px-6
          "
        >
          <FAQContent />

          <FAQAccordion />
        </div>
      </Container>
    </Section>
  );
}
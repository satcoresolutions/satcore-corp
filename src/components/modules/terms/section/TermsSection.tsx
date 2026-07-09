"use client";

import Section from "@/components/ui/section";
import Container from "@/components/ui/container";

import { useTranslation } from "@/hooks/use-translation";
import { useLanguage } from "@/hooks/use-language";

import TermsHeader from "./components/TermsHeader";
import TermsGrid from "./components/TermsGrid";

import { termsContent } from "./content/terms";

export default function TermsSection() {
    const content = useTranslation(termsContent);

    const language = useLanguage();

    return (
        <Section variant="default">
            <Container>
                <TermsHeader
                    content={content.header}
                />

                <TermsGrid
                    animationKey={language}
                    content={content.terms}
                />
            </Container>
        </Section>
    );
}
"use client";

import Section from "@/components/ui/section";
import Container from "@/components/ui/container";

import {
  useTranslation,
} from "@/hooks/use-translation";

import {
  featuredProductsContent,
} from "./content/featured-products.content";

import FeaturedProductsContent from "./components/featured-products-content";
import FeaturedProductsGrid from "./components/featured-products-grid";
import FeaturedProductsActions from "./components/featured-products-actions";

export default function FeaturedProducts() {
  const content =
    useTranslation(
      featuredProductsContent,
    );

  return (
    <Section
      id="featured-products"
      spacing="xl"
      className="my-10"
    >
      <Container>

        <FeaturedProductsContent
          content={content}
        />

        <FeaturedProductsGrid
          buttonLabel={
            content.button
          }
        />

        <FeaturedProductsActions />

      </Container>
    </Section>
  );
}
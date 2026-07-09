"use client";

import {
  motion,
  type Variants,
} from "framer-motion";

import {
  useLanguage,
} from "@/hooks/use-language";

import ServicesCard
  from "./ServicesCard";

import type {
  ServicesProps,
} from "../types/services.types";


const container: Variants = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};


export default function ServicesGrid({
  pillars,
}: ServicesProps) {

  const lang =
    useLanguage();


  return (

    <motion.div

      className="
        mt-16
        grid
        gap-6
        sm:grid-cols-2
        lg:grid-cols-3
      "

      variants={container}

      initial="hidden"

      whileInView="show"

      viewport={{
        once: false,
        amount: 0.15,
      }}

    >

      {
        pillars.map((pillar) => {

          const content =
            pillar.translations[lang];


          return (

            <ServicesCard

              key={
                pillar.core.id
              }


              title={
                content.title
              }


              description={
                content.description
              }


              icon={
                pillar.core.icon
              }


              href={
                pillar.href
              }


              image={
                pillar.core.image
              }


              imageAlt={
                content.imageAlt
              }

            />

          );

        })
      }


    </motion.div>

  );
}
"use client";

import {
  motion,
} from "framer-motion";

import {
  companyConfig,
} from "@/config/company.config";

export default function SocialsContact() {
  return (
    <motion.div
      className="
        flex
        flex-col
        gap-2
        text-sm
        text-text-muted
      "
      initial={{
        opacity: 0,
        y: 15,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{
        once: true,
      }}
    >
      <motion.div
        whileHover={{
          x: 4,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
        }}
      >
        📍 {companyConfig.address.label}
      </motion.div>

      <motion.div
        whileHover={{
          x: 4,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
        }}
      >
        ✉️ {companyConfig.email}
      </motion.div>
    </motion.div>
  );
}
"use client";

import Link from "next/link";

import {
  motion,
} from "framer-motion";

import Icon from "@/components/ui/icon";

import {
  socialsConfig,
} from "@/config/socials.config";

const socials = Object.entries(
  socialsConfig,
).map(([key, value]) => ({
  key,
  href: value.href,
  icon: value.icon,
}));

const container = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 15,
    scale: 0.9,
  },

  show: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function SocialsIcons() {
  return (
    <motion.div
      className="
        flex
        flex-wrap
        items-center
        gap-3
      "
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{
        once: true,
      }}
    >
      {socials.map((social) => (
        <motion.div
          key={social.key}
          whileHover={{
            y: -4,
            scale: 1.1,
          }}
        >
          <Link
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.key}
          >
            <Icon
              src={social.icon}
              alt={social.key}
              size="md"
              variant="social"
            />
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
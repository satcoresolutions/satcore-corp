export type SocialKey =
  | "instagram"
  | "facebook"
  | "youtube"
  | "tiktok";

export interface SocialItem {
  href: string;
  icon: string;
}

export type SocialConfig = Record<SocialKey, SocialItem>;

export const socialsConfig: SocialConfig = {
   facebook: {
    href: "https://www.facebook.com/SatCore.Solutions/",
    icon: "/images/socials/facebook.png",
  },
   instagram: {
    href: "https://www.instagram.com/satcore_solutions",
    icon: "/images/socials/instagram.png",
  },
   youtube: {
    href: "https://www.youtube.com/@SatCore_Solutions",
    icon: "/images/socials/youtube.png",
  },
   tiktok: {
    href: "https://www.tiktok.com/@satcore_solutions",
    icon: "/images/socials/tiktok.png",
  },
};
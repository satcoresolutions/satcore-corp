"use client";

import Container from "@/components/ui/container";

import FooterBrand from "./components/footer-brand";
import FooterMap from "./components/Footer-map";
import FooterNavigation from "./components/footer-navigation";
import FooterContact from "./components/footer-contact";
import FooterSocials from "./components/footer-socials";
import FooterLegal from "./components/footer-legal";
import FooterBottom from "./components/footer-bottom";

export default function Footer() {
  return (
    <footer className="border-t border-primary p-5">
        <div
          className="
          pb-5
        grid
        gap-8
        md:grid-cols-2
        lg:grid-cols-4
      "
        >
          <FooterBrand />

          <div className="space-y-2">
            <FooterNavigation />
            <FooterLegal />
          </div>

          <FooterMap />

          <div className="space-y-8">
            <FooterContact />
            <FooterSocials />
          </div>
        </div>

        <FooterBottom />
  
    </footer>
  );
}
import Container from "@/components/ui/container";

import NavbarBrand from "./components/navbar-brand";
import NavbarNavigation from "./components/navbar-navigation";
import NavbarActions from "./components/navbar-actions";
import ThemeModeToggle from "./components/theme-mode-toggle";
import NavbarMobile from "./components/navbar-mobile";
import LanguageSwitcher from "./components/navbar-lenguage";

export default function Navbar() {
  return (
    <header
      className="
        fixed
        inset-x-0
        top-4
        z-100
        px-4
      "
    >
      <Container>
        <div
          className="
            relative
            flex
            h-16
            items-center
            justify-between
            overflow-visible
            rounded-2xl
            border
            px-6
            backdrop-blur-xl
          "
          style={{
            background:
              "color-mix(in srgb, var(--background) 82%, transparent)",
            borderColor:
              "color-mix(in srgb, var(--surface) 10%, transparent)",
            boxShadow:
              "0 12px 40px rgb(0 0 0 / 0.12)",
          }}
        >
          {/* Brillo superior */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-linear-to-b
              from-white/10
              via-transparent
              to-transparent
              rounded-2xl
            "
          />

          <div className="relative z-10">
            <NavbarBrand />
          </div>

          <div className="relative z-10 uppercase">
            <NavbarNavigation />
          </div>

          <div
            className="
              relative
              z-10
              hidden
              items-center
              gap-3
              lg:flex
            "
          >
            <NavbarActions />

            <ThemeModeToggle />

            <LanguageSwitcher />
          </div>

          <div className="relative z-10 lg:hidden">
            <NavbarMobile />
          </div>
        </div>
      </Container>
    </header>
  );
}
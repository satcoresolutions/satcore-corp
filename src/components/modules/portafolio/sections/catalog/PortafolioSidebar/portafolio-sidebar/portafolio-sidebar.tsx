"use client";

import Card from "@/components/ui/card";

import type {
  portfolioSidebarProps,
} from "./types/portafolio-sidebar.types";

export default function PortfolioSidebar({
  children,
  className = "",
  onClose,
}: portfolioSidebarProps & {
  className?: string;
  onClose?: () => void;
}) {
  return (
    <aside
      className={`
        ${className}

        fixed
        left-0
        top-0
        h-full
        w-[320px]

        z-40

        lg:static
        lg:h-auto
        lg:w-[320px]
      `}
    >
      <Card
        variant="glass"
        className="
          h-full
          lg:h-auto

          flex
          flex-col
          gap-6
          p-6

          backdrop-blur-xl
          bg-white/10
          border
        "
      >
        {children}
      </Card>
    </aside>
  );
}
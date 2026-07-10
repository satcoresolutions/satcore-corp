"use client";

import Card from "@/components/ui/card";

import type {
  portfolioSidebarProps,
} from "./types/portafolio-sidebar.types";

export default function PortfolioSidebar({
  children,
  className = "",
}: portfolioSidebarProps & {
  className?: string;
  onClose?: () => void;
}) {
  return (
    <aside
      className={`
        ${className}
        z-40
      `}
    >
      <Card
        variant="glass"
        className="
          flex
          max-h-[75vh]
          flex-col

          overflow-hidden

          border
          bg-white/10
          backdrop-blur-xl

          lg:max-h-none
        "
      >
        <div
          className="
            flex-1
            overflow-y-auto
            p-6
          "
        >
          {children}
        </div>
      </Card>
    </aside>
  );
}
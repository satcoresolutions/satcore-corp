import type {
  ReactNode,
} from "react";

interface HeroLayoutProps {
  children: ReactNode;

  reverse?: boolean;

  className?: string;
}

export default function HeroLayout({
  children,
  reverse = false,
  className = "",
}: HeroLayoutProps) {
  return (
    <div
      className={`
        relative
        z-10

        mx-auto
        w-full
        max-w-7xl

        px-6
        md:px-8
        lg:px-12

        flex
        flex-col

        ${
          reverse
            ? "lg:flex-row-reverse"
            : "lg:flex-row"
        }

        items-center
        gap-12

        ${className}
      `}
    >
      {children}
    </div>
  );
}
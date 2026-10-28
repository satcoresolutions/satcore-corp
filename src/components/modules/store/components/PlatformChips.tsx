import type { Platform } from "../content-types";

interface PlatformChipsProps {
  platforms?: Platform[];
}

export function PlatformChips({
  platforms = [],
}: PlatformChipsProps) {
  if (platforms.length === 0) return null;

  return (
    <ul
      className="flex flex-wrap gap-2"
      aria-label="Plataformas compatibles"
    >
      {platforms.map((platform) => (
        <li
          key={platform}
          className="
            inline-flex items-center
            rounded-lg border border-white/10
            bg-surface-secondary px-2.5 py-1
            text-xs font-medium
            text-text-secondary
            transition-colors duration-200
            hover:border-accent/30
            hover:text-text-primary
          "
        >
          {platform}
        </li>
      ))}
    </ul>
  );
}
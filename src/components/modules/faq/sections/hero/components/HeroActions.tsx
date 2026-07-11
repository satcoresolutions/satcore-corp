import Button from "@/components/ui/button";

import type {
  HeroActionsProps,
} from "../types/services-hero.types";

export default function HeroActions({
  primaryAction,
  secondaryAction,
}: HeroActionsProps) {
  return (
    <div
      className="
        flex
        flex-wrap
        justify-center
        gap-4
      "
    >
      <Button
        href="#services"
      >
        {primaryAction}
      </Button>

      <Button
        variant="secondary"
        href="/contact"
      >
        {secondaryAction}
      </Button>
    </div>
  );
}
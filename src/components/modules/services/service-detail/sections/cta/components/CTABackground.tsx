interface CTABackgroundProps {
  imageUrl?: string;
}

export default function CTABackground({
  imageUrl = "/images/hero/hero-cta.png",
}: CTABackgroundProps) {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      {/* Base image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${imageUrl}')` }}
      />

      {/* Horizontal gradient — darkens left side where text sits */}
      <div className="absolute inset-0 bg-linear-to-r from-surface-secondary via-surface-secondary/80 to-surface-secondary/20" />

      {/* Vertical gradient — adds depth top-to-bottom */}
      <div className="absolute inset-0 bg-linear-to-t from-surface-secondary/60 via-transparent to-surface-secondary/30" />

      {/* Vignette — subtly darkens edges, focuses attention center-left */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,transparent_0%,rgba(0,0,0,0.35)_100%)]" />

      {/* Top hairline accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-foreground/25 to-transparent" />

      {/* Bottom shadow — grounds the card visually */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/30 to-transparent" />
    </div>
  );
}
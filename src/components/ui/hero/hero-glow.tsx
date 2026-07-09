interface HeroGlowProps {
  className?: string;
}

export default function HeroGlow({
  className = "",
}: HeroGlowProps) {
  return (
    <div
      className={`
        absolute
        inset-0

        flex
        items-center
        justify-center

        pointer-events-none

        ${className}
      `}
    >
      <div
        className="
          h-125
          w-125

          rounded-full

          bg-primary/20

          blur-[150px]
        "
      />
    </div>
  );
}
export default function HeroParticles() {
  return (
    <>
      <span
        className="
          absolute
          left-[10%]
          top-[20%]

          h-2
          w-2

          rounded-full
          bg-primary/50
        "
      />

      <span
        className="
          absolute
          right-[15%]
          top-[35%]

          h-3
          w-3

          rounded-full
          bg-primary/40
        "
      />

      <span
        className="
          absolute
          bottom-[20%]
          left-[20%]

          h-2
          w-2

          rounded-full
          bg-primary/30
        "
      />
    </>
  );
}
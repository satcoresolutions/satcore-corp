interface HeroVideoProps {
  src: string;

  className?: string;
}

export default function HeroVideo({
  src,
  className = "",
}: HeroVideoProps) {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className={`
        absolute
        inset-0

        h-full
        w-full

        object-cover

        ${className}
      `}
    >
      <source
        src={src}
        type="video/mp4"
      />
    </video>
  );
}
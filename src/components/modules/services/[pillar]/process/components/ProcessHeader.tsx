export default function ProcessHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div
      className="
        mb-16
        text-center
      "
    >
      <h2
        className="
          mb-4
          text-3xl
          font-bold
          md:text-5xl
        "
      >
        {title}
      </h2>

      <p
        className="
          text-text-muted
        "
      >
        {description}
      </p>
    </div>
  );
}
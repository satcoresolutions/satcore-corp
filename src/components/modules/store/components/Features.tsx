
import type { Feature } from "../content-types";

interface FeaturesProps {
  features: Feature[];
}

export function Features({ features }: FeaturesProps) {
  return (
    <section
      id="garantias"
      className="
        mx-auto w-full max-w-7xl
        px-4 py-16
        sm:px-6 sm:py-20
        lg:px-8 lg:py-24
      "
    >
      <div className="mb-10 max-w-2xl sm:mb-12">
        <h2
          className="
            mb-4 text-text-primary
            font-semibold tracking-tight
          "
        >
          Qué recibes con cada compra
        </h2>

        <p className="text-base leading-relaxed text-text-secondary">
          Todo lo que necesitas para aprovechar al máximo
          tu compra.
        </p>
      </div>

      <div
        className="
          grid grid-cols-1 gap-4
          sm:grid-cols-2
          lg:grid-cols-3
          lg:gap-6
        "
      >
        {features.map((feature) => (
          <article
            key={feature.id}
            className="
              rounded-2xl border border-white/10
              bg-surface p-5
              transition-all duration-300
              hover:-translate-y-1
              hover:border-accent/30
              sm:p-6
            "
          >
            <h3
              className="
                mb-3 font-semibold
                text-text-primary
              "
            >
              {feature.title}
            </h3>

            <p
              className="
                text-sm leading-relaxed
                text-text-secondary
              "
            >
              {feature.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}


import type { Category, CategorySlug } from "../content-types";

interface Props {
  categories: Category[];
  active: CategorySlug | "todas";
  onChange: (value: CategorySlug | "todas") => void;
}

export function CategoryFilter({
  categories,
  active,
  onChange,
}: Props) {
  const baseClass = `
    inline-flex shrink-0 items-center justify-center
    rounded-xl border px-4 py-2.5
    text-sm font-medium
    transition-colors duration-200
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-accent
    focus-visible:ring-offset-2
    focus-visible:ring-offset-background
  `;

  const getButtonClass = (selected: boolean) =>
    selected
      ? `
          ${baseClass}
          border-primary bg-primary
          text-white
        `
      : `
          ${baseClass}
          border-white/10 bg-surface
          text-text-secondary
          hover:border-accent/40
          hover:bg-surface-secondary
          hover:text-text-primary
        `;

  return (
    <div
      className="
        flex flex-wrap items-center gap-2
      "
      role="group"
      aria-label="Filtrar por categoría"
    >
      <button
        type="button"
        className={getButtonClass(active === "todas")}
        aria-pressed={active === "todas"}
        onClick={() => onChange("todas")}
      >
        Todas
      </button>

      {categories.map((category) => {
        const selected = active === category.slug;

        return (
          <button
            key={category.slug}
            type="button"
            className={getButtonClass(selected)}
            aria-pressed={selected}
            onClick={() => onChange(category.slug)}
          >
            {category.name}
          </button>
        );
      })}
    </div>
  );
}

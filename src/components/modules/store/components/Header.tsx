
export function Header() {
  return (
    <header
      className="
        sticky top-0 z-50 w-full
        border-b border-white/10
        bg-background/90
        backdrop-blur-xl
      "
    >
      <div
        className="
          mx-auto flex w-full max-w-7xl
          items-center justify-between
          gap-4 px-4 py-4
          sm:px-6 lg:px-8
        "
      >
        {/* Brand */}
        <a
          href="#catalogo"
          className="
            shrink-0 text-lg font-bold
            tracking-tight text-text-primary
            transition-colors duration-200
            hover:text-accent
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-accent
            focus-visible:ring-offset-2
            focus-visible:ring-offset-background
          "
        >
          Licenciada
        </a>

        {/* Navigation */}
        <nav
          aria-label="Navegación principal"
          className="
            flex items-center gap-4
            sm:gap-6
          "
        >
          <a
            href="#catalogo"
            className="
              text-sm font-medium
              text-text-secondary
              transition-colors duration-200
              hover:text-accent
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-accent
              rounded-sm
            "
          >
            Catálogo
          </a>

          <a
            href="#garantias"
            className="
              text-sm font-medium
              text-text-secondary
              transition-colors duration-200
              hover:text-accent
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-accent
              rounded-sm
            "
          >
            Garantías
          </a>
        </nav>
      </div>
    </header>
  );
}

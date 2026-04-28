import Link from "next/link";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="#inicio"
      className="group flex items-center gap-3"
      aria-label="Inicio — Dra. Ana Rojas Dentista"
    >
      <span className="relative grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 shadow-soft ring-1 ring-white/40 transition-transform duration-300 group-hover:scale-[1.04]">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="h-5 w-5 text-white"
        >
          <path
            d="M7.5 3.75c-2.21 0-4 1.79-4 4 0 1.18.51 3.21 1.27 5.43.6 1.74 1.31 3.6 1.95 5 .49 1.07 1.6 1.69 2.74 1.51.8-.13 1.46-.71 1.7-1.49l.84-2.71h0a.93.93 0 0 1 1.78 0l.84 2.7c.24.79.9 1.36 1.7 1.5 1.14.18 2.25-.45 2.74-1.52.64-1.4 1.35-3.26 1.95-5 .76-2.22 1.27-4.25 1.27-5.43 0-2.21-1.79-4-4-4-1.06 0-2.05.41-2.79 1.13a4 4 0 0 0-5.42 0A3.99 3.99 0 0 0 7.5 3.75z"
            fill="currentColor"
            opacity="0.95"
          />
        </svg>
        <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-accent-500 ring-2 ring-white" />
      </span>

      {!compact && (
        <span className="flex flex-col leading-tight">
          <span className="font-display text-lg font-semibold text-ink">
            Dra. Ana Rojas
          </span>
          <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-brand-600">
            Cirujana Dentista
          </span>
        </span>
      )}
    </Link>
  );
}

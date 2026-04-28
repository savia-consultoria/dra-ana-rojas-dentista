import { Star, Quote } from "lucide-react";
import { GoogleBadge } from "./GoogleBadge";
import { site } from "@/lib/site";

const testimonials = [
  {
    name: "Andrea Martínez",
    initials: "AM",
    role: "Paciente desde 2023",
    rating: 5,
    text: "La Dra. Ana es increíble. Me explicó todo con mucha paciencia y mi blanqueamiento quedó espectacular. El consultorio es impecable y el trato no podría ser mejor. ¡100% recomendada!",
  },
  {
    name: "Roberto Mendoza",
    initials: "RM",
    role: "Tratamiento de ortodoncia",
    rating: 5,
    text: "Llegué con mucho miedo después de malas experiencias y la Dra. me hizo sentir en confianza desde el primer minuto. Mis brackets fueron mucho más rápidos de lo que esperaba y el resultado quedó perfecto.",
  },
  {
    name: "Lucía Hernández",
    initials: "LH",
    role: "Paciente familiar",
    rating: 5,
    text: "Llevo a mis dos hijos y la atención es fantástica. Saben hacer que los niños se sientan tranquilos. Súper puntuales, limpios y los precios son muy honestos. ¡Sin duda nuestra dentista de cabecera!",
  },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="section">
      <div className="container-x">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <span className="eyebrow">Lo que dicen nuestros pacientes</span>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:text-5xl">
              100 sonrisas que avalan nuestro trabajo
            </h2>
          </div>
          <GoogleBadge
            stars={site.rating.stars}
            reviews={site.rating.reviews}
            variant="solid"
          />
        </div>

        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <li
              key={t.name}
              className="relative flex flex-col rounded-3xl border border-brand-500/10 bg-white p-7 shadow-card transition hover:-translate-y-1 hover:shadow-soft"
            >
              <Quote
                className="absolute right-6 top-6 h-8 w-8 text-brand-500/15"
                aria-hidden="true"
              />

              <div
                className="flex items-center gap-1"
                aria-label={`${t.rating} de 5 estrellas`}
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < t.rating
                        ? "fill-accent-500 text-accent-500"
                        : "text-ink-muted/30"
                    }`}
                  />
                ))}
              </div>

              <p className="mt-4 grow text-sm leading-relaxed text-ink-soft">
                “{t.text}”
              </p>

              <div className="mt-6 flex items-center gap-3 border-t border-brand-500/10 pt-5">
                <span
                  aria-hidden="true"
                  className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-brand-700 text-sm font-semibold text-white"
                >
                  {t.initials}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-semibold text-ink">
                    {t.name}
                  </p>
                  <p className="truncate text-xs text-ink-muted">{t.role}</p>
                </div>
                <span className="ml-auto inline-flex items-center gap-1 rounded-full bg-canvas px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand-700">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-3 w-3"
                    aria-hidden="true"
                  >
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.25 1.06-3.71 1.06-2.86 0-5.29-1.93-6.15-4.53H2.18v2.84A11 11 0 0 0 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.85 14.1A6.6 6.6 0 0 1 5.5 12c0-.73.13-1.43.35-2.1V7.07H2.18A11 11 0 0 0 1 12c0 1.78.43 3.46 1.18 4.93l3.67-2.83z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.07.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.67 2.83C6.71 7.31 9.14 5.38 12 5.38z"
                    />
                  </svg>
                  Google
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

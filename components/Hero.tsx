import Image from "next/image";
import { ArrowRight, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { GoogleBadge } from "./GoogleBadge";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pb-20 pt-32 sm:pb-24 sm:pt-36 lg:pb-28 lg:pt-40"
    >
      {/* Decorative backgrounds */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-hero-radial"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 h-px bg-gradient-to-r from-transparent via-brand-500/15 to-transparent"
      />

      <div className="container-x grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <div className="animate-fade-up">
            <GoogleBadge
              stars={site.rating.stars}
              reviews={site.rating.reviews}
            />
          </div>

          <h1 className="mt-6 animate-fade-up text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
            Tu mejor sonrisa,
            <br />
            <span className="bg-gradient-to-r from-brand-500 via-brand-600 to-brand-700 bg-clip-text text-transparent">
              cuidada con dedicación
            </span>
            <span className="text-accent-500">.</span>
          </h1>

          <p className="mt-6 max-w-xl animate-fade-up-delay text-lg leading-relaxed text-ink-soft sm:text-xl">
            Odontología cercana, moderna y sin dolor en{" "}
            <span className="font-semibold text-ink">Querétaro</span>. Más de
            100 pacientes confían en la Dra. Ana Rojas para mantener su
            sonrisa sana y radiante.
          </p>

          <div className="mt-8 flex animate-fade-up-delay-2 flex-col gap-3 sm:flex-row">
            <a
              href={`${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Agendar por WhatsApp
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#servicios" className="btn-ghost">
              Ver servicios
            </a>
          </div>

          <ul className="mt-10 grid animate-fade-up-delay-2 grid-cols-1 gap-3 text-sm text-ink-soft sm:grid-cols-3">
            <li className="flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-50 text-brand-600">
                <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              </span>
              Atención sin dolor
            </li>
            <li className="flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-50 text-brand-600">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
              </span>
              Tecnología de punta
            </li>
            <li className="flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-50 text-brand-600">
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </span>
              Citas el mismo día
            </li>
          </ul>
        </div>

        {/* Image / Visual */}
        <div className="relative lg:col-span-5">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md animate-fade-in">
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-[2.25rem] bg-gradient-to-br from-brand-500/10 via-accent-500/10 to-transparent blur-2xl"
            />
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-brand-50 shadow-soft ring-1 ring-white/60">
              <Image
                src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=80"
                alt="Dra. Ana Rojas atendiendo a un paciente en su consultorio dental"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover"
              />

              {/* Floating cards */}
              <div className="absolute left-4 top-4 rounded-2xl bg-white/95 px-4 py-3 shadow-card backdrop-blur">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-brand-700">
                  Hoy disponible
                </p>
                <p className="mt-1 flex items-center gap-2 text-sm font-semibold text-ink">
                  <span className="h-2 w-2 animate-soft-pulse rounded-full bg-emerald-500" />
                  Citas a partir de las 4:00 pm
                </p>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white p-4 shadow-card sm:block">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent-500/15 text-accent-700">
                  <Sparkles className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-ink-muted">
                    Pacientes felices
                  </p>
                  <p className="font-display text-2xl font-semibold text-ink">
                    100+
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 top-1/3 hidden rounded-2xl bg-brand-500 p-4 text-white shadow-soft sm:block">
              <p className="font-display text-3xl font-semibold leading-none">
                5.0
              </p>
              <p className="mt-1 text-[11px] font-medium uppercase tracking-widest opacity-80">
                Calificación Google
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { MapPin, Clock, ExternalLink } from "lucide-react";
import { site } from "@/lib/site";

export function Location() {
  return (
    <section id="ubicacion" className="section">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Encuéntranos</span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:text-5xl">
            Visítanos en Querétaro
          </h2>
          <p className="mt-4 text-base text-ink-soft sm:text-lg">
            Estacionamiento disponible y fácil acceso desde las principales
            avenidas. Te esperamos.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-brand-500/10 bg-white shadow-card">
          <div className="grid lg:grid-cols-12">
            <div className="relative h-[320px] lg:col-span-7 lg:h-auto">
              <iframe
                title="Ubicación del consultorio dental Dra. Ana Rojas en Querétaro"
                src={site.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            </div>

            <div className="flex flex-col gap-6 p-7 sm:p-8 lg:col-span-5">
              <div>
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-50 text-brand-600 ring-1 ring-brand-500/15">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                  Dirección
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                  {site.city}
                  <br />
                  Consulta la dirección exacta al confirmar tu cita.
                </p>
                <a
                  href={site.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
                >
                  Cómo llegar
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>

              <div className="border-t border-brand-500/10 pt-6">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-accent-500/15 text-accent-700 ring-1 ring-accent-500/20">
                  <Clock className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                  Horarios
                </h3>
                <ul className="mt-3 divide-y divide-brand-500/10">
                  {site.hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex items-center justify-between py-2 text-sm"
                    >
                      <span className="font-medium text-ink">{h.day}</span>
                      <span className="text-ink-soft">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

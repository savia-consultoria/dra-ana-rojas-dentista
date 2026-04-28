import { Mail, MapPin, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { site } from "@/lib/site";

const quickLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#por-que", label: "¿Por qué nosotros?" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#contacto", label: "Agendar cita" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(11,110,142,0.5),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(240,192,64,0.18),transparent_55%)]"
      />
      <div className="container-x relative grid gap-12 py-16 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5">
          <div className="rounded-2xl bg-white p-3 shadow-card ring-1 ring-white/10 inline-block">
            <Logo />
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/75">
            Odontología cercana, profesional y de confianza en Querétaro.
            Cuidamos tu sonrisa con la calidez que mereces y la precisión que
            tu salud necesita.
          </p>

          <div className="mt-6 flex items-center gap-3">
            <a
              href={`${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-emerald-400"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-display text-base font-semibold text-white">
            Navegación
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-white/75 transition hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="font-display text-base font-semibold text-white">
            Contacto
          </h4>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-3">
              <MapPin
                className="mt-0.5 h-4 w-4 flex-none text-accent-400"
                aria-hidden="true"
              />
              <span>{site.city}</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail
                className="mt-0.5 h-4 w-4 flex-none text-accent-400"
                aria-hidden="true"
              />
              <a
                href={`mailto:${site.email}`}
                className="hover:text-white"
              >
                {site.email}
              </a>
            </li>
          </ul>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-wider text-accent-400">
              Calificación Google
            </p>
            <p className="mt-1 font-display text-2xl font-semibold text-white">
              5.0 ★ · {site.rating.reviews} reseñas
            </p>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/55 sm:flex-row">
          <p>
            © 28/4/2026 {site.name}. Todos los derechos reservados.
          </p>
          <p>
            Sitio diseñado por{" "}
            <span className="font-semibold text-white/80">
              Savia Consultoría
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

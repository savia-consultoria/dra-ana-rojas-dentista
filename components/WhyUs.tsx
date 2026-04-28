import Image from "next/image";
import {
  Award,
  HeartHandshake,
  Clock4,
  Microscope,
  ShieldCheck,
} from "lucide-react";
import { GoogleBadge } from "./GoogleBadge";
import { site } from "@/lib/site";

const reasons = [
  {
    icon: Award,
    title: "Calificación 5 ★ en Google",
    desc: "Más de 100 pacientes nos han calificado con la máxima puntuación. Tu confianza es nuestro mayor logro.",
  },
  {
    icon: Microscope,
    title: "Equipo y materiales de primer nivel",
    desc: "Trabajamos con tecnología digital, materiales certificados y protocolos estrictos de esterilización.",
  },
  {
    icon: HeartHandshake,
    title: "Atención cercana y sin juicios",
    desc: "Te explicamos cada paso, escuchamos tus inquietudes y diseñamos un plan a tu medida.",
  },
  {
    icon: Clock4,
    title: "Citas puntuales y flexibles",
    desc: "Respetamos tu tiempo. Horarios extendidos y disponibilidad incluso los sábados.",
  },
  {
    icon: ShieldCheck,
    title: "Tratamientos sin sorpresas",
    desc: "Presupuestos claros desde el inicio. Sin letras chicas ni costos ocultos.",
  },
];

export function WhyUs() {
  return (
    <section id="por-que" className="section bg-white">
      <div className="container-x grid items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span className="eyebrow">¿Por qué elegirnos?</span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:text-5xl">
            Donde el cuidado dental se siente <em className="not-italic text-brand-600">como en casa</em>.
          </h2>
          <p className="mt-5 text-base text-ink-soft sm:text-lg">
            En el consultorio de la Dra. Ana Rojas combinamos experiencia
            clínica, tecnología actual y un trato cercano para que cada visita
            sea una experiencia tranquila y positiva.
          </p>

          <div className="mt-7">
            <GoogleBadge
              stars={site.rating.stars}
              reviews={site.rating.reviews}
              variant="solid"
            />
          </div>

          <div className="relative mt-10 hidden overflow-hidden rounded-3xl shadow-card lg:block">
            <Image
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80"
              alt="Consultorio dental moderno y luminoso"
              width={1200}
              height={800}
              className="h-[280px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-700/60 via-brand-700/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <p className="font-display text-xl font-semibold">
                Una experiencia que cambia tu relación con el dentista.
              </p>
            </div>
          </div>
        </div>

        <ul className="grid gap-4 lg:col-span-7 sm:grid-cols-2">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <li
              key={title}
              className="rounded-3xl border border-brand-500/10 bg-canvas p-6 transition-all hover:border-brand-500/25 hover:shadow-card"
            >
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-brand-600 ring-1 ring-brand-500/15">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                {title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                {desc}
              </p>
            </li>
          ))}

          <li className="rounded-3xl bg-brand-500 p-6 text-white shadow-soft">
            <p className="font-display text-2xl font-semibold leading-snug">
              “Buscamos que salgas del consultorio sonriendo más que cuando
              entraste.”
            </p>
            <p className="mt-3 text-sm font-medium text-white/85">
              — Dra. Ana Rojas
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

import {
  Sparkles,
  Smile,
  Stethoscope,
  Crown,
  Baby,
  ScanLine,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Limpieza dental profunda",
    desc: "Profilaxis y eliminación de sarro para mantener encías sanas y aliento fresco.",
  },
  {
    icon: Smile,
    title: "Blanqueamiento profesional",
    desc: "Devuelve a tus dientes su brillo natural en una sola sesión, sin sensibilidad.",
  },
  {
    icon: ScanLine,
    title: "Ortodoncia & Alineadores",
    desc: "Brackets estéticos y alineadores invisibles para una sonrisa perfectamente alineada.",
  },
  {
    icon: Crown,
    title: "Coronas y carillas",
    desc: "Diseño de sonrisa con porcelana de alta estética para resultados naturales.",
  },
  {
    icon: Stethoscope,
    title: "Endodoncia sin dolor",
    desc: "Tratamiento de conductos con técnicas modernas que cuidan tu pieza dental.",
  },
  {
    icon: Baby,
    title: "Odontopediatría",
    desc: "Atención cercana y divertida para que los más pequeños amen su visita al dentista.",
  },
];

export function Services() {
  return (
    <section id="servicios" className="section">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Nuestros servicios</span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:text-5xl">
            Cuidamos cada detalle de tu sonrisa
          </h2>
          <p className="mt-4 text-base text-ink-soft sm:text-lg">
            Tratamientos integrales con un enfoque humano y la última tecnología
            dental, en el corazón de Querétaro.
          </p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, desc }, i) => (
            <li
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-brand-500/10 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/25 hover:shadow-soft"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div
                aria-hidden="true"
                className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-brand-500/5 blur-2xl transition group-hover:bg-brand-500/15"
              />
              <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-brand-50 text-brand-600 ring-1 ring-brand-500/10 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                <Icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="relative mt-5 font-display text-xl font-semibold text-ink">
                {title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-ink-soft">
                {desc}
              </p>
              <span className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
                Saber más
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

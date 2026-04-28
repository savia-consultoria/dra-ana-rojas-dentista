"use client";

import { useState } from "react";
import {
  MessageCircle,
  Send,
  Phone,
  CheckCircle2,
  Loader2,
  Clock,
} from "lucide-react";
import { site } from "@/lib/site";

const services = [
  "Limpieza dental",
  "Blanqueamiento",
  "Ortodoncia / Alineadores",
  "Coronas y carillas",
  "Endodoncia",
  "Odontopediatría",
  "Otro / consulta general",
];

type Status = "idle" | "loading" | "success";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    service: services[0],
    message: "",
  });

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function buildWhatsAppLink() {
    const text = `Hola Dra. Ana, soy ${form.name || "(sin nombre)"}.

Servicio de interés: ${form.service}
Teléfono: ${form.phone || "(no proporcionado)"}

${form.message || "Me gustaría agendar una consulta."}`;
    return `${site.whatsapp}?text=${encodeURIComponent(text)}`;
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    const link = buildWhatsAppLink();
    setTimeout(() => {
      setStatus("success");
      window.open(link, "_blank", "noopener,noreferrer");
    }, 600);
  }

  return (
    <section id="contacto" className="section bg-white">
      <div className="container-x grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <span className="eyebrow">Agenda tu cita</span>
          <h2 className="mt-4 text-3xl font-semibold leading-tight text-ink sm:text-4xl lg:text-5xl">
            Reservar es rápido y sencillo
          </h2>
          <p className="mt-5 text-base text-ink-soft sm:text-lg">
            Cuéntanos un poco sobre lo que necesitas y te confirmamos tu cita
            por WhatsApp en menos de 30 minutos en horario de atención.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href={`${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 rounded-2xl border border-emerald-500/20 bg-emerald-50 p-4 transition hover:border-emerald-500/40 hover:bg-emerald-100"
            >
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-500 text-white shadow-soft">
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
                  WhatsApp directo
                </p>
                <p className="truncate font-semibold text-ink">
                  Chatea con nosotros ahora
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-brand-500/15 bg-canvas p-4">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-500 text-white">
                <Phone className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
                  Llámanos
                </p>
                <p className="font-semibold text-ink">
                  Pide informes en horario de oficina
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-brand-500/15 bg-canvas p-4">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-accent-500 text-ink">
                <Clock className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-700">
                  Tiempo de respuesta
                </p>
                <p className="font-semibold text-ink">
                  Menos de 30 minutos
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <form
            onSubmit={onSubmit}
            className="relative overflow-hidden rounded-3xl border border-brand-500/10 bg-canvas p-6 shadow-card sm:p-8"
            noValidate
          >
            <div
              aria-hidden="true"
              className="absolute -right-24 -top-24 h-48 w-48 rounded-full bg-accent-500/10 blur-3xl"
            />

            <div className="relative grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-ink"
                >
                  Nombre <span className="text-brand-600">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="Tu nombre"
                  className="mt-2 h-12 w-full rounded-2xl border border-brand-500/15 bg-white px-4 text-sm text-ink placeholder:text-ink-muted/70 shadow-sm transition focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/15"
                />
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-ink"
                >
                  Teléfono / WhatsApp <span className="text-brand-600">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  inputMode="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder="442 000 0000"
                  className="mt-2 h-12 w-full rounded-2xl border border-brand-500/15 bg-white px-4 text-sm text-ink placeholder:text-ink-muted/70 shadow-sm transition focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/15"
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="service"
                  className="block text-sm font-semibold text-ink"
                >
                  ¿Qué servicio te interesa?
                </label>
                <select
                  id="service"
                  value={form.service}
                  onChange={(e) => update("service", e.target.value)}
                  className="mt-2 h-12 w-full rounded-2xl border border-brand-500/15 bg-white px-4 text-sm text-ink shadow-sm transition focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/15"
                >
                  {services.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-ink"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  placeholder="Cuéntanos un poco sobre lo que necesitas..."
                  className="mt-2 w-full resize-none rounded-2xl border border-brand-500/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-muted/70 shadow-sm transition focus:border-brand-500 focus:outline-none focus:ring-4 focus:ring-brand-500/15"
                />
              </div>
            </div>

            <p className="relative mt-5 text-xs text-ink-muted">
              Al enviar, abriremos WhatsApp con tu mensaje listo para
              confirmar. Sin spam, sin compromisos.
            </p>

            <div className="relative mt-6 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-primary disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "loading" ? (
                  <>
                    <Loader2
                      className="h-4 w-4 animate-spin"
                      aria-hidden="true"
                    />
                    Enviando...
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                    Abierto en WhatsApp
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" aria-hidden="true" />
                    Enviar y abrir WhatsApp
                  </>
                )}
              </button>

              <a
                href={`${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Prefiero escribir directo
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import { Menu, X, CalendarCheck } from "lucide-react";
import { Logo } from "./Logo";
import { site } from "@/lib/site";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#por-que", label: "¿Por qué nosotros?" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 shadow-card backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between">
        <Logo />

        <nav
          aria-label="Navegación principal"
          className="hidden items-center gap-1 lg:flex"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-brand-50 hover:text-brand-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={site.appointmentUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <CalendarCheck className="h-4 w-4" aria-hidden="true" />
            Agendar cita
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-full border border-brand-500/15 bg-white/80 text-brand-700 shadow-sm backdrop-blur transition hover:bg-white lg:hidden"
        >
          {open ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`fixed inset-0 top-[72px] bg-ink/30 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`fixed inset-x-0 top-[72px] origin-top transform border-t border-brand-500/10 bg-white p-6 shadow-card transition-all duration-300 ${
            open
              ? "translate-y-0 opacity-100"
              : "-translate-y-3 opacity-0"
          }`}
        >
          <nav
            aria-label="Navegación móvil"
            className="flex flex-col gap-1"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-base font-medium text-ink transition hover:bg-brand-50 hover:text-brand-700"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href={site.appointmentUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn-primary mt-4 w-full"
          >
            <CalendarCheck className="h-4 w-4" aria-hidden="true" />
            Agendar cita
          </a>
        </div>
      </div>
    </header>
  );
}

import { CalendarCheck } from "lucide-react";
import { site } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={site.appointmentUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agenda una cita"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full bg-emerald-500 px-4 py-3 text-white shadow-[0_12px_30px_-8px_rgba(16,185,129,0.55)] transition-all duration-300 hover:bg-emerald-400 hover:shadow-[0_18px_40px_-10px_rgba(16,185,129,0.65)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/30 sm:bottom-6 sm:right-6"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-emerald-500 opacity-60 group-hover:opacity-0 motion-safe:animate-soft-pulse"
      />
      <span className="relative grid h-7 w-7 place-items-center">
        <CalendarCheck className="h-6 w-6" aria-hidden="true" />
      </span>
      <span className="relative hidden text-sm font-semibold sm:inline">
        Agenda una cita
      </span>
    </a>
  );
}

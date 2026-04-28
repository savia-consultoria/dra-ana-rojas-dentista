import { site } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={`${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full bg-emerald-500 px-4 py-3 text-white shadow-[0_12px_30px_-8px_rgba(16,185,129,0.55)] transition-all duration-300 hover:bg-emerald-400 hover:shadow-[0_18px_40px_-10px_rgba(16,185,129,0.65)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/30 sm:bottom-6 sm:right-6"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-emerald-500 opacity-60 group-hover:opacity-0 motion-safe:animate-soft-pulse"
      />
      <span className="relative grid h-7 w-7 place-items-center">
        <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true">
          <path
            fill="currentColor"
            d="M19.11 17.27c-.27-.13-1.59-.78-1.84-.87-.25-.09-.43-.13-.61.13-.18.27-.7.87-.86 1.05-.16.18-.32.2-.59.07-.27-.13-1.13-.42-2.16-1.34-.8-.71-1.34-1.6-1.5-1.86-.16-.27-.02-.41.12-.54.12-.12.27-.32.4-.48.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.48-.07-.13-.61-1.46-.83-2-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.96.94-.96 2.29s.98 2.66 1.12 2.84c.13.18 1.93 2.95 4.69 4.13.66.28 1.17.45 1.57.58.66.21 1.26.18 1.74.11.53-.08 1.59-.65 1.81-1.27.22-.62.22-1.16.16-1.27-.07-.11-.25-.18-.52-.31zM16 4C9.38 4 4 9.38 4 16c0 2.06.55 4 1.51 5.69L4 28l6.46-1.69A11.94 11.94 0 0 0 16 28c6.62 0 12-5.38 12-12S22.62 4 16 4zm0 22c-1.86 0-3.61-.5-5.12-1.36l-.37-.21-3.84 1 1.02-3.74-.24-.39A9.94 9.94 0 0 1 6 16c0-5.51 4.49-10 10-10s10 4.49 10 10-4.49 10-10 10z"
          />
        </svg>
      </span>
      <span className="relative hidden text-sm font-semibold sm:inline">
        Agendar por WhatsApp
      </span>
    </a>
  );
}

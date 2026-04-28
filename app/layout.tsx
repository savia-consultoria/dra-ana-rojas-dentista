import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const SITE_URL = "https://dra-ana-rojas-dentista.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Dra. Ana Rojas | Dentista | Dental en Querétaro",
  description:
    "Dentista en Querétaro con más de 100 pacientes satisfechos y calificación 5 ★ en Google. Limpieza, blanqueamiento, ortodoncia y odontología estética con la Dra. Ana Rojas. Agenda tu cita hoy.",
  keywords: [
    "dentista Querétaro",
    "Dra. Ana Rojas",
    "odontólogo Querétaro",
    "blanqueamiento dental Querétaro",
    "ortodoncia Querétaro",
    "limpieza dental",
    "consultorio dental Querétaro",
  ],
  authors: [{ name: "Dra. Ana Rojas" }],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: SITE_URL,
    title: "Dra. Ana Rojas | Dentista en Querétaro · 5 ★ en Google",
    description:
      "Cuidamos tu sonrisa con tecnología de punta y trato cercano. 100 reseñas 5 ★ en Google. Agenda en minutos por WhatsApp.",
    siteName: "Dra. Ana Rojas | Dentista",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dra. Ana Rojas | Dentista en Querétaro",
    description:
      "Sonrisas saludables y radiantes en Querétaro. 5 ★ en Google con 100 pacientes satisfechos.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0B6E8E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="es-MX" className={`${playfair.variable} ${dmSans.variable}`}>
      <body>
        {children}

        {/* Google Analytics — placeholder */}
        {GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}

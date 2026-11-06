import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { atkinson, nunito } from "@/lib/fonts";
import type { Locale } from "@/lib/i18n";

const text = {
  fr: { banner: "Projet d'entraînement – site non officiel", skip: "Aller au contenu" },
  en: { banner: "Practice project – unofficial website", skip: "Skip to content" },
};

/** The full HTML document shared by the French and English root layouts. */
export function SiteDocument({ locale, children }: { locale: Locale; children: ReactNode }) {
  const t = text[locale];
  return (
    <html lang={locale} className={`${nunito.variable} ${atkinson.variable} antialiased`}>
      {/* Root document head (this component is rendered by the root layouts). */}
      {/* eslint-disable-next-line @next/next/no-head-element */}
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
      </head>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only z-[100] rounded-full bg-sun px-5 py-3 font-bold text-brand-deep focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          {t.skip}
        </a>
        <p className="bg-brand-deep px-4 py-1.5 text-center text-sm font-bold text-white">{t.banner}</p>
        <Header locale={locale} />
        <main id="main" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}

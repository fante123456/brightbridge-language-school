import Link from "next/link";
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { Container } from "./Section";
import { localePath, type Locale } from "@/lib/i18n";
import { hours, navFor, site } from "@/lib/site";

const text = {
  fr: {
    home: " – page d'accueil",
    about:
      "Le spécialiste de l'anglais au Havre : éveil dès 12 mois, ateliers pour enfants, collégiens et lycéens, stages de vacances et cours à domicile.",
    explore: "Navigation",
    contact: "Nous trouver",
    hours: "Horaires d'accueil",
    newTab: "(nouvel onglet)",
    maps: "Voir sur Google Maps",
    demo: "Démo réalisée par Ammar Rajabi à titre d'entraînement. Le propriétaire peut demander sa suppression.",
    privacy: "Aucune donnée de formulaire, aucun cookie ni outil de statistiques.",
    credits: "Crédits photos",
  },
  en: {
    home: " – home page",
    about:
      "The English specialist in Le Havre: classes from 12 months, workshops for children and teenagers, holiday courses and home tutoring.",
    explore: "Explore",
    contact: "Find us",
    hours: "Reception hours",
    newTab: "(opens in a new tab)",
    maps: "View on Google Maps",
    demo: "Demo made by Ammar Rajabi as a practice project. The owner can ask for it to be removed.",
    privacy: "No form data, cookies or analytics are collected.",
    credits: "Photo credits",
  },
};

export function Footer({ locale }: { locale: Locale }) {
  const t = text[locale];
  return (
    <footer className="bg-brand-deep text-white/85">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1.2fr] lg:gap-12">
        <div>
          <Link href={localePath(locale, "/")} className="inline-block">
            <Logo tone="light" />
            <span className="sr-only">{t.home}</span>
          </Link>
          <p className="mt-5 max-w-xs">{t.about}</p>
          <p className="mt-4 font-display font-bold italic text-white">« Your success is our mission! »</p>
        </div>

        <nav aria-label={t.explore}>
          <h2 className="font-display text-lg font-bold text-white">{t.explore}</h2>
          <ul className="mt-4 space-y-2.5">
            {navFor(locale).map((item) => (
              <li key={item.path}>
                <Link href={localePath(locale, item.path)} className="hover:text-white hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-lg font-bold text-white">{t.contact}</h2>
          <ul className="mt-4 space-y-3">
            <li className="flex gap-3">
              <MapPin className="mt-1 size-4 shrink-0 text-sun" aria-hidden="true" />
              <address className="not-italic">
                {site.address.street}
                <br />
                {site.address.postcode} {site.address.city}
              </address>
            </li>
            <li>
              <a href={site.phoneHref} className="flex gap-3 hover:text-white hover:underline">
                <Phone className="mt-1 size-4 shrink-0 text-sun" aria-hidden="true" />
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex gap-3 break-all hover:text-white hover:underline">
                <Mail className="mt-1 size-4 shrink-0 text-sun" aria-hidden="true" />
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.mapsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 hover:text-white hover:underline"
              >
                <ExternalLink className="mt-1 size-4 shrink-0 text-sun" aria-hidden="true" />
                {t.maps}
                <span className="sr-only"> {t.newTab}</span>
              </a>
            </li>
            <li>
              <a
                href={site.facebookHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 hover:text-white hover:underline"
              >
                <ExternalLink className="mt-1 size-4 shrink-0 text-sun" aria-hidden="true" />
                Facebook
                <span className="sr-only"> {t.newTab}</span>
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-lg font-bold text-white">{t.hours}</h2>
          <dl className="mt-4 space-y-2">
            {hours[locale].map((h) => (
              <div key={h.days} className="flex justify-between gap-4 border-b border-white/10 pb-2">
                <dt>
                  <abbr title={h.days} className="no-underline">
                    {h.short}
                  </abbr>
                </dt>
                <dd className="text-right font-bold text-white">
                  {h.times.map((time) => (
                    <span key={time} className="block whitespace-nowrap">
                      {time}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-6 text-sm text-white/75 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p>{t.demo}</p>
            <p>{t.privacy}</p>
          </div>
          <Link href={localePath(locale, "/credits")} className="shrink-0 underline underline-offset-4 hover:text-white">
            {t.credits}
          </Link>
        </Container>
      </div>
    </footer>
  );
}

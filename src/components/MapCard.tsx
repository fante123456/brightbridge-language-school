import { ExternalLink, MapPin, Navigation, Star } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import { site } from "@/lib/site";

const text = {
  fr: {
    title: "Let's Go English au Havre",
    maps: "Voir sur Google Maps",
    route: "Itinéraire",
    newTab: "(nouvel onglet)",
    rating: "sur Google",
    reviews: "avis",
  },
  en: {
    title: "Let's Go English in Le Havre",
    maps: "View on Google Maps",
    route: "Directions",
    newTab: "(opens in a new tab)",
    rating: "on Google",
    reviews: "reviews",
  },
};

/**
 * Address card with links to the real Google Maps listing and directions.
 * No embedded map: no API key, no tracking, nothing invented about the area.
 */
export function MapCard({ locale }: { locale: Locale }) {
  const t = text[locale];
  return (
    <div className="overflow-hidden rounded-[var(--radius-card)] border border-brand-line bg-white">
      <div className="flex flex-col items-start gap-5 bg-brand-soft p-6 sm:flex-row sm:items-center sm:p-8">
        <span className="grid size-16 shrink-0 place-items-center rounded-2xl bg-sun text-brand-deep">
          <MapPin className="size-8" aria-hidden="true" />
        </span>
        <div>
          <p className="font-display text-2xl font-extrabold text-brand">{t.title}</p>
          <p className="mt-1 text-lg font-bold text-brand-deep">
            {site.address.street}, {site.address.postcode} {site.address.city}
          </p>
          <p className="num mt-2 flex items-center gap-2 text-brand-deep/85">
            <Star className="size-5 fill-sun text-sun-deep" aria-hidden="true" />
            <span>
              <strong>{site.rating.value[locale]}/5</strong> {t.rating} ({site.rating.count} {t.reviews})
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-3 p-6 sm:flex-row sm:p-8">
        <a
          href={site.mapsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand px-6 font-bold text-white transition-colors hover:bg-brand-deep"
        >
          <ExternalLink className="size-4" aria-hidden="true" />
          {t.maps}
          <span className="sr-only"> {t.newTab}</span>
        </a>
        <a
          href={site.directionsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-brand/25 px-6 font-bold text-brand transition-colors hover:border-brand"
        >
          <Navigation className="size-4" aria-hidden="true" />
          {t.route}
          <span className="sr-only"> {t.newTab}</span>
        </a>
      </div>
    </div>
  );
}

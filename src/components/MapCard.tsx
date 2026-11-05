import { ExternalLink, MapPin, TramFront } from "lucide-react";
import { site } from "@/lib/site";

/**
 * A light, privacy-friendly address block with a simple drawn street plan
 * (no third-party map iframe, no tracking). The link opens real maps.
 */
export function MapCard() {
  return (
    <div className="overflow-hidden rounded-[var(--radius-card)] border border-brand-line bg-white">
      <svg viewBox="0 0 600 300" className="block h-auto w-full bg-brand-soft" role="img" aria-labelledby="map-title">
        <title id="map-title">Simple street plan showing BrightBridge on Oxford Road, near St Peter&apos;s Square</title>
        {/* blocks */}
        <g fill="#FFFFFF">
          <rect x="20" y="20" width="150" height="90" rx="10" />
          <rect x="20" y="150" width="150" height="130" rx="10" />
          <rect x="390" y="20" width="190" height="110" rx="10" />
          <rect x="390" y="170" width="190" height="110" rx="10" />
          <rect x="250" y="20" width="80" height="90" rx="10" />
          <rect x="250" y="150" width="80" height="130" rx="10" />
        </g>
        {/* streets */}
        <g stroke="#D6DEEE" strokeWidth="18" strokeLinecap="round">
          <path d="M0 130H600" />
          <path d="M210 0V300" />
        </g>
        {/* Oxford Road */}
        <path d="M360 0V300" stroke="#1E3A8A" strokeWidth="34" />
        <g fontFamily="system-ui, sans-serif" fontWeight="700" fill="#172554">
          <text x="368" y="74" fontSize="22" transform="rotate(-90 368 74)" fill="#FFFFFF" textAnchor="middle">
            Oxford Road
          </text>
          <text x="30" y="98" fontSize="22">Tram stop</text>
        </g>
        {/* tram stop */}
        <circle cx="210" cy="130" r="12" fill="#172554" />
        <circle cx="210" cy="130" r="5" fill="#F9FAFB" />
        {/* pin */}
        <g transform="translate(360 196)">
          <circle r="26" fill="#FACC15" opacity="0.35" />
          <path d="M0-34c-12 0-21 9-21 21 0 16 21 37 21 37s21-21 21-37c0-12-9-21-21-21Z" fill="#FACC15" stroke="#172554" strokeWidth="3" />
          <circle cy="-13" r="7" fill="#172554" />
        </g>
      </svg>
      <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-2">
          <p className="flex gap-2.5 font-bold">
            <MapPin className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden="true" />
            {site.address.street}, {site.address.city} {site.address.postcode}
          </p>
          <p className="flex gap-2.5 text-brand-deep/85">
            <TramFront className="mt-0.5 size-5 shrink-0 text-brand" aria-hidden="true" />
            Short walk from St Peter&apos;s Square tram stop and Oxford Road station.
          </p>
        </div>
        <a
          href={site.mapsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 shrink-0 items-center gap-2 self-start rounded-full border-2 border-brand/25 px-5 font-bold text-brand hover:border-brand sm:self-auto"
        >
          Open in Google Maps
          <ExternalLink className="size-4" aria-hidden="true" />
          <span className="sr-only">(opens in a new tab)</span>
        </a>
      </div>
    </div>
  );
}

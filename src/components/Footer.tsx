import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./BridgeMark";
import { Container } from "./Section";
import { hours, nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-brand-deep text-white/85">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1.2fr] lg:gap-12">
        <div>
          <Link href="/" className="inline-block">
            <Logo tone="light" />
            <span className="sr-only"> – home page</span>
          </Link>
          <p className="mt-5 max-w-xs">
            {site.tagline}. Friendly English, Spanish, French and German courses in central Manchester
            and online.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="font-display text-lg font-bold text-white">Explore</h2>
          <ul className="mt-4 space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-lg font-bold text-white">Visit or contact us</h2>
          <ul className="mt-4 space-y-3">
            <li className="flex gap-3">
              <MapPin className="mt-1 size-4 shrink-0 text-sun" aria-hidden="true" />
              <address className="not-italic">
                {site.address.street}
                <br />
                {site.address.city} {site.address.postcode}
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
          </ul>
        </div>

        <div>
          <h2 className="font-display text-lg font-bold text-white">Opening hours</h2>
          <dl className="mt-4 space-y-2">
            {hours.map((h) => (
              <div key={h.days} className="flex justify-between gap-4 border-b border-white/10 pb-2">
                <dt>
                  <abbr title={h.days} className="no-underline">
                    {h.short}
                  </abbr>
                </dt>
                <dd className="whitespace-nowrap font-bold text-white">{h.time}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-sm text-white/75">Fictional hours for this demo.</p>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-3 py-6 text-sm text-white/75 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <p>
              © 2026 {site.name}. A fictional school created for the MX AI Academy Challenge 5 exercise.
            </p>
            <p>Demo website: no form data, cookies or analytics are collected.</p>
          </div>
          <Link href="/credits" className="underline underline-offset-4 hover:text-white">
            Photo credits
          </Link>
        </Container>
      </div>
    </footer>
  );
}

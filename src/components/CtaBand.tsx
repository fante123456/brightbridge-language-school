import Link from "next/link";
import { Phone } from "lucide-react";
import { ArcEdge } from "./ArcEdge";
import { buttonClass } from "./Button";
import { Container } from "./Section";
import { localePath, type Locale } from "@/lib/i18n";
import { contactAnchor, site } from "@/lib/site";

const text = {
  fr: {
    title: "Ready to go?",
    text: "Les inscriptions 2026-2027 sont ouvertes toute l'année. Tarifs et plannings sur demande : appelez-nous ou passez à l'accueil.",
    cta: "Nous contacter",
    call: "Appeler le",
  },
  en: {
    title: "Ready to go?",
    text: "Enrolment for 2026-2027 is open all year round. Prices and timetables on request: call us or drop by the reception.",
    cta: "Contact us",
    call: "Call",
  },
};

/** Closing call to action shown above the footer. */
export function CtaBand({ locale, title, text: body }: { locale: Locale; title?: string; text?: string }) {
  const t = text[locale];
  return (
    <section
      aria-labelledby="cta-title"
      className="relative overflow-hidden bg-brand pb-16 pt-24 text-white sm:pb-20 sm:pt-32 lg:pt-40"
    >
      <ArcEdge edge="top" />
      <Container className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="reveal max-w-2xl">
          {/* The default title is the school's own English slogan. */}
          <h2
            id="cta-title"
            lang={title ? undefined : "en"}
            className="text-[2rem] font-extrabold leading-[1.12] text-white sm:text-[2.5rem]"
          >
            {title ?? t.title}
          </h2>
          <p className="mt-4 text-lg text-white/90">{body ?? t.text}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Link href={localePath(locale, contactAnchor)} className={buttonClass("sun", "whitespace-nowrap")}>
            {t.cta}
          </Link>
          <a href={site.phoneHref} className={buttonClass("outline-light", "num whitespace-nowrap")}>
            <Phone className="size-4" aria-hidden="true" />
            <span className="sr-only">{t.call} </span>
            {site.phone}
          </a>
        </div>
      </Container>
    </section>
  );
}

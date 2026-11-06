import { Suspense } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { buttonClass } from "@/components/Button";
import { ContactForm } from "@/components/ContactForm";
import { ContactFormFromUrl } from "@/components/ContactFormFromUrl";
import { MapCard } from "@/components/MapCard";
import { PageHero } from "@/components/PageHero";
import { Container, SectionHeading } from "@/components/Section";
import { pageMeta, type Locale } from "@/lib/i18n";
import { hours, site } from "@/lib/site";

const text = {
  fr: {
    metaTitle: "Contact et horaires",
    metaDescription:
      "Contactez Let's Go English, 18 rue Paul Doumer, 76600 Le Havre. Téléphone 02 35 45 09 01. Horaires d'accueil, itinéraire, tarifs et plannings sur demande.",
    eyebrow: "Contact",
    title: "Contactez Let's Go English",
    intro:
      "Appelez-nous, écrivez-nous ou passez à l'accueil, au 18 rue Paul Doumer au Havre. Tarifs et plannings sur demande.",
    call: "Appeler le",
    details: "Coordonnées",
    address: "Adresse",
    phone: "Téléphone",
    phoneNote: "Pendant les horaires d'accueil",
    email: "E-mail",
    hours: "Horaires d'accueil",
    formEyebrow: "Demande d'informations",
    formTitle: "Une question ? Écrivez-nous",
    formIntro:
      "Dites-nous qui souhaite apprendre l'anglais et ce qui vous intéresse. Ce formulaire est une démonstration : pour une vraie demande, appelez l'école.",
    bullets: [
      "Dès 12 mois, enfants, ados et adultes",
      "Tarifs et plannings sur demande",
      "Inscriptions 2026-2027 ouvertes toute l'année",
    ],
    findEyebrow: "Nous trouver",
    findTitle: "18 rue Paul Doumer, Le Havre",
    findIntro: "Retrouvez l'école sur Google Maps ou lancez l'itinéraire depuis votre téléphone.",
  },
  en: {
    metaTitle: "Contact and Opening Hours",
    metaDescription:
      "Contact Let's Go English, 18 rue Paul Doumer, 76600 Le Havre, France. Phone +33 2 35 45 09 01. Reception hours, directions, prices and timetables on request.",
    eyebrow: "Contact",
    title: "Contact Let's Go English",
    intro:
      "Call us, write to us or drop by the reception at 18 rue Paul Doumer in Le Havre. Prices and timetables on request.",
    call: "Call",
    details: "Contact details",
    address: "Address",
    phone: "Phone",
    phoneNote: "During reception hours",
    email: "Email",
    hours: "Reception hours",
    formEyebrow: "Information request",
    formTitle: "A question? Write to us",
    formIntro:
      "Tell us who would like to learn English and what you are interested in. This form is a demo: for a real enquiry, please call the school.",
    bullets: [
      "From 12 months: children, teenagers and adults",
      "Prices and timetables on request",
      "Enrolment for 2026-2027 open all year round",
    ],
    findEyebrow: "Find us",
    findTitle: "18 rue Paul Doumer, Le Havre",
    findIntro: "Find the school on Google Maps or get directions from your phone.",
  },
};

export function contactMeta(locale: Locale) {
  const t = text[locale];
  return pageMeta({ locale, path: "/contact", title: t.metaTitle, description: t.metaDescription });
}

export function ContactView({ locale }: { locale: Locale }) {
  const t = text[locale];
  return (
    <>
      <PageHero locale={locale} eyebrow={t.eyebrow} title={t.title} intro={<p>{t.intro}</p>} photo="welcome">
        <a href={site.phoneHref} className={buttonClass("sun", "num mt-8")}>
          <Phone className="size-4" aria-hidden="true" />
          {t.call} {site.phone}
        </a>
      </PageHero>

      <section aria-labelledby="details-title" className="py-16 sm:py-20">
        <Container>
          <h2 id="details-title" className="sr-only">
            {t.details}
          </h2>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <li className="rounded-[var(--radius-card)] border border-brand-line bg-white p-6">
              <MapPin className="size-6 text-brand" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-extrabold">{t.address}</h3>
              <address className="mt-1 not-italic text-brand-deep/90">
                {site.address.street}
                <br />
                {site.address.postcode} {site.address.city}
                <br />
                {site.address.country[locale]}
              </address>
            </li>
            <li className="rounded-[var(--radius-card)] border border-brand-line bg-white p-6">
              <Phone className="size-6 text-brand" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-extrabold">{t.phone}</h3>
              <a href={site.phoneHref} className="mt-1 block font-bold text-brand underline-offset-4 hover:underline">
                {site.phone}
              </a>
              <p className="text-[0.9375rem] text-slate">{t.phoneNote}</p>
            </li>
            <li className="rounded-[var(--radius-card)] border border-brand-line bg-white p-6">
              <Mail className="size-6 text-brand" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-extrabold">{t.email}</h3>
              <a
                href={`mailto:${site.email}`}
                className="mt-1 block break-all font-bold text-brand underline-offset-4 hover:underline"
              >
                {site.email}
              </a>
            </li>
            <li className="rounded-[var(--radius-card)] border border-brand-line bg-white p-6">
              <Clock className="size-6 text-brand" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-extrabold">{t.hours}</h3>
              <dl className="mt-1 space-y-1.5 text-[0.9375rem]">
                {hours[locale].map((h) => (
                  <div key={h.days} className="flex justify-between gap-3">
                    <dt>{h.days}</dt>
                    <dd className="text-right font-bold">
                      {h.times.map((time) => (
                        <span key={time} className="block whitespace-nowrap">
                          {time}
                        </span>
                      ))}
                    </dd>
                  </div>
                ))}
              </dl>
            </li>
          </ul>
        </Container>
      </section>

      <section id="enquiry" aria-labelledby="enquiry-title" className="scroll-mt-24 bg-brand-soft py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <SectionHeading id="enquiry-title" eyebrow={t.formEyebrow} title={t.formTitle} intro={t.formIntro} />
            <ul className="mt-8 space-y-4">
              {t.bullets.map((x) => (
                <li key={x} className="flex items-center gap-3 font-bold">
                  <span className="size-2.5 shrink-0 rounded-full bg-leaf" aria-hidden="true" />
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[var(--radius-card)] bg-white p-6 shadow-[0_20px_50px_-30px_rgb(23_37_84/0.45)] sm:p-8">
            <Suspense fallback={<ContactForm locale={locale} />}>
              <ContactFormFromUrl locale={locale} />
            </Suspense>
          </div>
        </Container>
      </section>

      <section aria-labelledby="find-title" className="py-16 sm:py-24">
        <Container>
          <SectionHeading id="find-title" eyebrow={t.findEyebrow} title={t.findTitle} intro={t.findIntro} />
          <div className="mt-10">
            <MapCard locale={locale} />
          </div>
        </Container>
      </section>
    </>
  );
}

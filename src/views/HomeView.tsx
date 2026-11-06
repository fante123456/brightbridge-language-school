import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  ExternalLink,
  Heart,
  Home,
  Phone,
  Quote,
  Star,
  Users,
  UserRound,
  UserPlus,
} from "lucide-react";
import { ArcEdge } from "@/components/ArcEdge";
import { buttonClass } from "@/components/Button";
import { CourseCard } from "@/components/CourseCard";
import { CtaBand } from "@/components/CtaBand";
import { Photo } from "@/components/Photo";
import { Container, Eyebrow, SectionHeading } from "@/components/Section";
import { courses } from "@/lib/courses";
import { localePath, pageMeta, type Locale } from "@/lib/i18n";
import { reviews, reviewText } from "@/lib/reviews";
import { site } from "@/lib/site";

const text = {
  fr: {
    metaTitle: "Let's Go English | École d'anglais au Havre",
    metaDescription:
      "Let's Go English, le spécialiste de l'anglais au Havre : éveil dès 12 mois, ateliers enfants, collégiens et lycéens, stages de vacances et cours à domicile.",
    eyebrow: "Le Havre · Enfants, ados & adultes",
    h1Before: "Le spécialiste de ",
    h1Mark: "l'anglais",
    h1After: " au Havre",
    lead: "Éveil à l'anglais dès 12 mois, ateliers pour enfants, collégiens et lycéens, stages de vacances et cours à domicile. Une équipe d'enseignants natifs ou parfaitement bilingues, sans « par cœur » ni pression.",
    call: "Appeler le",
    explore: "Voir les cours",
    facts: ["Dès 12 mois", "Enseignants natifs ou bilingues", "Inscriptions ouvertes toute l'année"],
    ratingLabel: "sur Google",
    ratingCount: "avis",
    introEyebrow: "Bienvenue chez Let's Go English",
    introTitle: "Pas une école traditionnelle",
    intro: [
      "Helen Snyers, originaire du Royaume-Uni, enseigne l'anglais au Havre depuis 2009. Elle a créé Let's Go English, une structure indépendante à taille humaine.",
      "Ici, on apprend avec bienveillance et sur mesure, sans « par cœur » ni pression. Notre valeur principale : le partage.",
    ],
    introLink: "Découvrir notre histoire",
    popularEyebrow: "Cours & ateliers",
    popularTitle: "Un atelier pour chaque âge",
    popularIntro: "Des tout-petits aux adultes, chaque offre indique l'âge, la durée et le format.",
    seeAll: (n: number) => `Voir les ${n} offres`,
    priceNote: "Tarifs et plannings sur demande.",
    whyEyebrow: "Pourquoi Let's Go English",
    whyTitle: "Apprendre l'anglais avec bienveillance",
    reasons: [
      { icon: Users, title: "En mini-groupes", text: "6 enfants maximum en Baby Steps, des ateliers en mini-groupe pour les 7–10 ans." },
      { icon: UserRound, title: "Des enseignants qualifiés", text: "Une équipe d'enseignants natifs ou parfaitement bilingues." },
      { icon: Heart, title: "Sans pression", text: "Un apprentissage bienveillant, sans « par cœur » ni pression." },
      { icon: Home, title: "Sur mesure", text: "Des cours à domicile pour les ados et les adultes, adaptés à chacun." },
    ],
    stepsTitle: "S'inscrire en trois étapes",
    steps: [
      { icon: Phone, title: "Contactez-nous", text: "Par téléphone, par e-mail ou à l'accueil, pendant les horaires d'ouverture." },
      { icon: ClipboardList, title: "Tarifs et plannings", text: "Nous vous donnons les tarifs et les plannings sur demande." },
      { icon: UserPlus, title: "Inscription", text: "Les inscriptions 2026-2027 sont ouvertes toute l'année." },
    ],
    reviewsEyebrow: "Avis Google",
    reviewsTitle: "Ce qu'en disent les familles",
    reviewsIntro: (v: string, n: number) => `Note de ${v}/5 sur Google, sur ${n} avis. Voici quelques extraits.`,
    allReviews: "Voir tous les avis sur Google",
    newTab: "(nouvel onglet)",
    googleReview: "Avis Google",
    translated: "",
  },
  en: {
    metaTitle: "Let's Go English | English School in Le Havre",
    metaDescription:
      "Let's Go English, the English specialist in Le Havre: classes from 12 months, workshops for children and teenagers, holiday courses and home tutoring.",
    eyebrow: "Le Havre · Children, teens & adults",
    h1Before: "The ",
    h1Mark: "English",
    h1After: " specialist in Le Havre",
    lead: "English for little ones from 12 months, workshops for children and teenagers, holiday courses and home tutoring. A team of native or fully bilingual teachers, with no rote learning and no pressure.",
    call: "Call",
    explore: "See the classes",
    facts: ["From 12 months", "Native or bilingual teachers", "Enrolment open all year"],
    ratingLabel: "on Google",
    ratingCount: "reviews",
    introEyebrow: "Welcome to Let's Go English",
    introTitle: "Not a traditional school",
    intro: [
      "Helen Snyers, who comes from the United Kingdom, has been teaching English in Le Havre since 2009. She founded Let's Go English, a small, independent school.",
      "Here, learning is kind and tailor-made, with no rote learning and no pressure. Our main value: sharing.",
    ],
    introLink: "Read our story",
    popularEyebrow: "Classes & workshops",
    popularTitle: "A workshop for every age",
    popularIntro: "From little ones to adults, every offer shows the age, length and format.",
    seeAll: (n: number) => `See all ${n} offers`,
    priceNote: "Prices and timetables on request.",
    whyEyebrow: "Why Let's Go English",
    whyTitle: "Learning English in a kind way",
    reasons: [
      { icon: Users, title: "Small groups", text: "Max 6 children in Baby Steps, and small-group workshops for ages 7–10." },
      { icon: UserRound, title: "Qualified teachers", text: "A team of native or fully bilingual teachers." },
      { icon: Heart, title: "No pressure", text: "Kind teaching, with no rote learning and no pressure." },
      { icon: Home, title: "Tailor-made", text: "Home tutoring for teenagers and adults, adapted to each learner." },
    ],
    stepsTitle: "Enrol in three steps",
    steps: [
      { icon: Phone, title: "Contact us", text: "By phone, by email or at the reception, during opening hours." },
      { icon: ClipboardList, title: "Prices and timetables", text: "We give you prices and timetables on request." },
      { icon: UserPlus, title: "Enrolment", text: "Enrolment for 2026-2027 is open all year round." },
    ],
    reviewsEyebrow: "Google reviews",
    reviewsTitle: "What families say",
    reviewsIntro: (v: string, n: number) => `Rated ${v}/5 on Google from ${n} reviews. Here are a few of them.`,
    allReviews: "See all reviews on Google",
    newTab: "(opens in a new tab)",
    googleReview: "Google review",
    translated: "(translated from French)",
  },
};

export function homeMeta(locale: Locale) {
  const t = text[locale];
  return pageMeta({ locale, path: "/", title: t.metaTitle, description: t.metaDescription, absoluteTitle: true });
}

export function HomeView({ locale }: { locale: Locale }) {
  const t = text[locale];
  const popular = courses.filter((c) => c.popular);
  const rating = site.rating.value[locale];

  return (
    <>
      {/* Hero: royal blue band closed by the arc */}
      <section className="relative overflow-hidden bg-brand pb-20 text-white sm:pb-28 lg:pb-36">
        <Container className="grid items-center gap-10 pt-10 sm:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pt-20">
          <div>
            <div className="rise">
              <Eyebrow light>{t.eyebrow}</Eyebrow>
            </div>
            <h1 className="rise rise-2 mt-4 text-[2.5rem] font-extrabold leading-[1.06] text-white sm:text-[3.5rem] lg:text-[3.75rem]">
              {t.h1Before}
              <span className="relative inline-block whitespace-nowrap">
                {t.h1Mark}
                <svg
                  viewBox="0 0 300 24"
                  preserveAspectRatio="none"
                  className="absolute -bottom-2 left-0 h-3 w-full text-sun sm:h-4"
                  aria-hidden="true"
                >
                  <path d="M4 20C70 4 230 4 296 20" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
                </svg>
              </span>
              {t.h1After}
            </h1>
            <p className="rise rise-3 mt-7 max-w-xl text-lg text-white/90 sm:text-xl">{t.lead}</p>
            <div className="rise rise-3 mt-8 flex flex-col gap-3 sm:flex-row">
              <a href={site.phoneHref} className={buttonClass("sun", "num")}>
                <Phone className="size-4" aria-hidden="true" />
                {t.call} {site.phone}
              </a>
              <Link href={localePath(locale, "/courses")} className={buttonClass("outline-light")}>
                {t.explore}
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
            <ul className="rise rise-3 mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-6">
              {t.facts.map((f) => (
                <li key={f} className="num flex items-center gap-2 font-bold text-white/90">
                  <CheckCircle2 className="size-5 shrink-0 text-leaf" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="rise rise-2 relative">
            <Photo locale={locale}
              name="hero"
              preload
              sizes="(min-width: 1200px) 540px, (min-width: 1024px) 45vw, 100vw"
              className="aspect-[4/3] rounded-[var(--radius-card)] ring-4 ring-white/10 lg:aspect-[5/5.2]"
            />
            <a
              href={site.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-brand-deep shadow-[0_16px_40px_-20px_rgb(23_37_84/0.6)] transition-transform hover:-translate-y-0.5 sm:left-6"
            >
              <span className="num grid h-10 min-w-10 place-items-center rounded-xl bg-sun px-1.5 font-display font-extrabold text-brand-deep">
                {rating}
              </span>
              <span className="text-sm font-bold leading-snug">
                <span className="flex items-center gap-0.5" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-3.5 fill-sun-deep text-sun-deep" />
                  ))}
                </span>
                <span className="num block">
                  {rating}/5 {t.ratingLabel} · {site.rating.count} {t.ratingCount}
                </span>
                <span className="sr-only"> {t.newTab}</span>
              </span>
            </a>
          </div>
        </Container>
        <ArcEdge edge="bottom" />
      </section>

      {/* School intro */}
      <section aria-labelledby="intro-title" className="py-16 sm:py-24">
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Photo locale={locale}
            name="intro"
            sizes="(min-width: 1200px) 560px, (min-width: 1024px) 46vw, 100vw"
            className="reveal aspect-[4/3] rounded-[var(--radius-card)]"
          />
          <div className="reveal">
            <SectionHeading id="intro-title" eyebrow={t.introEyebrow} title={t.introTitle} />
            <div className="mt-5 space-y-4 text-lg text-brand-deep/85">
              {t.intro.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <Link
              href={localePath(locale, "/about")}
              className="mt-7 inline-flex min-h-11 items-center gap-2 font-bold text-brand underline decoration-sun decoration-[3px] underline-offset-[6px] hover:decoration-brand"
            >
              {t.introLink}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Popular courses */}
      <section aria-labelledby="popular-title" className="pb-16 sm:pb-24">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading id="popular-title" eyebrow={t.popularEyebrow} title={t.popularTitle} intro={t.popularIntro} />
            <Link
              href={localePath(locale, "/courses")}
              className={buttonClass("outline", "shrink-0 self-start md:self-auto")}
            >
              {t.seeAll(courses.length)}
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {popular.map((c) => (
              <li key={c.slug} className="reveal">
                <CourseCard course={c} locale={locale} />
              </li>
            ))}
          </ul>
          <p className="mt-5 text-[0.9375rem] text-slate">{t.priceNote}</p>
        </Container>
      </section>

      {/* Why choose us */}
      <section aria-labelledby="why-title" className="bg-brand-soft py-16 sm:py-24">
        <Container>
          <SectionHeading id="why-title" eyebrow={t.whyEyebrow} title={t.whyTitle} align="center" />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.reasons.map((r) => (
              <li key={r.title} className="reveal rounded-[var(--radius-card)] bg-white p-6">
                <span className="grid size-12 place-items-center rounded-xl bg-brand text-white">
                  <r.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-extrabold">{r.title}</h3>
                <p className="mt-2 text-brand-deep/85">{r.text}</p>
              </li>
            ))}
          </ul>

          <div className="reveal mt-12 rounded-[var(--radius-card)] bg-white p-6 sm:p-8">
            <h3 className="text-center text-2xl font-extrabold">{t.stepsTitle}</h3>
            <ol className="mt-8 grid gap-8 md:grid-cols-3 md:gap-6">
              {t.steps.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-sun font-display text-lg font-extrabold text-brand-deep">
                    {i + 1}
                  </span>
                  <div>
                    <h4 className="flex items-center gap-2 text-lg font-extrabold">
                      <s.icon className="size-5 text-brand" aria-hidden="true" />
                      {s.title}
                    </h4>
                    <p className="mt-1 text-brand-deep/85">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* Real Google reviews */}
      <section aria-labelledby="voices-title" className="py-16 sm:py-24">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              id="voices-title"
              eyebrow={t.reviewsEyebrow}
              title={t.reviewsTitle}
              intro={t.reviewsIntro(rating, site.rating.count)}
            />
            <a
              href={site.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClass("outline", "shrink-0 self-start md:self-auto")}
            >
              {t.allReviews}
              <ExternalLink className="size-4" aria-hidden="true" />
              <span className="sr-only"> {t.newTab}</span>
            </a>
          </div>
          <ul className="mt-10 grid gap-5 lg:grid-cols-3">
            {reviews.map((r) => {
              const q = reviewText(r, locale);
              return (
                <li key={r.name} className="reveal">
                  <figure className="flex h-full flex-col rounded-[var(--radius-card)] border border-brand-line bg-white p-6 sm:p-7">
                    <Quote className="size-8 text-brand/25" aria-hidden="true" />
                    <blockquote lang={q.lang} className="mt-3 flex-1 text-lg leading-relaxed text-brand-deep">
                      <p>“{q.text}”</p>
                    </blockquote>
                    {q.translated && <p className="mt-3 text-[0.9375rem] italic text-slate">{t.translated}</p>}
                    <figcaption className="mt-6 flex items-center justify-between gap-3 border-t border-brand-line pt-4">
                      <span className="font-bold text-brand">{r.name}</span>
                      <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand">
                        {t.googleReview}
                      </span>
                    </figcaption>
                  </figure>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <CtaBand locale={locale} />
    </>
  );
}

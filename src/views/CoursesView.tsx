import { CalendarCheck, ClipboardList, Home, UserRound } from "lucide-react";
import { CourseFilters } from "@/components/CourseFilters";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Container, SectionHeading } from "@/components/Section";
import { courses } from "@/lib/courses";
import { pageMeta, type Locale } from "@/lib/i18n";

const text = {
  fr: {
    metaTitle: "Cours et ateliers d'anglais au Havre",
    metaDescription:
      "Baby Steps dès 12 mois, ateliers 3–10 ans, collégiens et lycéens, ateliers immersifs, stages de vacances et cours à domicile au Havre. Tarifs sur demande.",
    eyebrow: "Cours & ateliers",
    title: "Un atelier d'anglais pour chaque âge",
    intro: (n: number) =>
      `${n} offres, de l'éveil dès 12 mois aux cours à domicile pour les adultes. Chaque offre indique l'âge, la durée et le format.`,
    finderEyebrow: "Trouver un atelier",
    finderTitle: "Choisissez selon l'âge",
    finderIntro: "Filtrez par public. Vous hésitez ? Appelez-nous, nous vous conseillerons.",
    priceNote: "Tarifs et plannings sur demande.",
    pathEyebrow: "Grandir en anglais",
    pathTitle: "De 12 mois à l'âge adulte",
    pathIntro: "Chaque âge a son atelier.",
    path: [
      { code: "12 m", name: "Baby Steps", text: "Dès 12 mois, avec maman ou papa, en mini-groupes de 6 enfants maximum." },
      { code: "3–6", name: "Very Small & Little Learners", text: "Chansons, comptines et jeux pour les 3–4 ans et les 5–6 ans." },
      { code: "7–10", name: "Ateliers 7–8 et 9–10 ans", text: "1 h par semaine en mini-groupe, avec une approche plus structurée." },
      { code: "Ados", name: "Collégiens et lycéens", text: "1 h à 1 h 30 par semaine : jeux de rôle, échanges et mini-projets." },
      { code: "Adultes", name: "Cours à domicile", text: "Pour les ados et les adultes, sur mesure, chez vous." },
    ],
    goodEyebrow: "Bon à savoir",
    goodTitle: "Les infos pratiques",
    good: [
      { icon: CalendarCheck, title: "Inscriptions ouvertes", text: "Les inscriptions 2026-2027 sont ouvertes toute l'année." },
      { icon: ClipboardList, title: "Tarifs et plannings", text: "Sur demande, par téléphone, par e-mail ou à l'accueil." },
      { icon: UserRound, title: "Enseignants", text: "Une équipe qualifiée, native ou parfaitement bilingue." },
      { icon: Home, title: "Service à la Personne", text: "Cours à domicile : 50 % de réduction d'impôt." },
    ],
    ctaTitle: "Vous hésitez entre deux ateliers ?",
    ctaText: "Appelez-nous ou passez à l'accueil : nous vous aiderons à choisir.",
  },
  en: {
    metaTitle: "English Classes and Workshops in Le Havre",
    metaDescription:
      "Baby Steps from 12 months, workshops for ages 3–10, teenagers, immersive workshops, holiday courses and home tutoring in Le Havre. Prices on request.",
    eyebrow: "Classes & workshops",
    title: "An English workshop for every age",
    intro: (n: number) =>
      `${n} offers, from first steps at 12 months to home tutoring for adults. Every offer shows the age, length and format.`,
    finderEyebrow: "Find a workshop",
    finderTitle: "Choose by age",
    finderIntro: "Filter by who it is for. Not sure? Call us and we will help you choose.",
    priceNote: "Prices and timetables on request.",
    pathEyebrow: "Growing up with English",
    pathTitle: "From 12 months to adulthood",
    pathIntro: "Every age has its workshop.",
    path: [
      { code: "12 m", name: "Baby Steps", text: "From 12 months, with mum or dad, in small groups of max 6 children." },
      { code: "3–6", name: "Very Small & Little Learners", text: "Songs, nursery rhymes and games for ages 3–4 and 5–6." },
      { code: "7–10", name: "Workshops 7–8 and 9–10", text: "1 hour a week in a small group, with a more structured approach." },
      { code: "Teens", name: "Secondary school students", text: "1 to 1.5 hours a week: role plays, discussions and mini-projects." },
      { code: "Adults", name: "Home tutoring", text: "For teenagers and adults, tailor-made, at your home." },
    ],
    goodEyebrow: "Good to know",
    goodTitle: "Practical information",
    good: [
      { icon: CalendarCheck, title: "Enrolment open", text: "Enrolment for 2026-2027 is open all year round." },
      { icon: ClipboardList, title: "Prices and timetables", text: "On request, by phone, by email or at the reception." },
      { icon: UserRound, title: "Teachers", text: "A qualified team of native or fully bilingual teachers." },
      { icon: Home, title: "“Service à la Personne”", text: "Home tutoring: 50% tax reduction (French scheme)." },
    ],
    ctaTitle: "Not sure which workshop to choose?",
    ctaText: "Call us or drop by the reception: we will help you choose.",
  },
};

export function coursesMeta(locale: Locale) {
  const t = text[locale];
  return pageMeta({ locale, path: "/courses", title: t.metaTitle, description: t.metaDescription });
}

export function CoursesView({ locale }: { locale: Locale }) {
  const t = text[locale];
  return (
    <>
      <PageHero locale={locale} eyebrow={t.eyebrow} title={t.title} intro={<p>{t.intro(courses.length)}</p>} photo="courses" />

      <section aria-labelledby="finder-title" className="py-16 sm:py-20">
        <Container>
          <SectionHeading id="finder-title" eyebrow={t.finderEyebrow} title={t.finderTitle} intro={t.finderIntro} />
          <div className="mt-10">
            <CourseFilters locale={locale} />
          </div>
          <p className="mt-6 text-[0.9375rem] text-slate">{t.priceNote}</p>
        </Container>
      </section>

      <section aria-labelledby="path-title" className="bg-brand-soft py-16 sm:py-24">
        <Container>
          <SectionHeading id="path-title" eyebrow={t.pathEyebrow} title={t.pathTitle} intro={t.pathIntro} />
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {t.path.map((l, i) => (
              <li key={l.code} className="reveal rounded-[var(--radius-card)] bg-white p-5">
                <div className="flex items-center gap-3">
                  <span className="grid h-12 min-w-12 shrink-0 place-items-center rounded-xl bg-brand px-2 font-display text-sm font-extrabold text-white">
                    {l.code}
                  </span>
                  <h3 className="text-lg font-extrabold leading-tight">{l.name}</h3>
                </div>
                <div className="mt-4 grid grid-cols-5 gap-1" aria-hidden="true">
                  {t.path.map((_, j) => (
                    <span key={j} className={`h-1.5 rounded-full ${j <= i ? "bg-brand" : "bg-brand-line"}`} />
                  ))}
                </div>
                <p className="mt-4 text-brand-deep/85">{l.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section aria-labelledby="good-title" className="py-16 sm:py-24">
        <Container>
          <SectionHeading id="good-title" eyebrow={t.goodEyebrow} title={t.goodTitle} />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.good.map((x) => (
              <li key={x.title} className="reveal flex gap-4 rounded-[var(--radius-card)] border border-brand-line bg-white p-5">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-sun text-brand-deep">
                  <x.icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-extrabold">{x.title}</h3>
                  <p className="mt-1 text-brand-deep/85">{x.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand locale={locale} title={t.ctaTitle} text={t.ctaText} />
    </>
  );
}

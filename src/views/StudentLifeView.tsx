import type { ReactNode } from "react";
import { Baby, CalendarCheck, CheckCircle2, ChefHat, FlaskConical, Home, Sun, UserRound, Drama } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { Container, SectionHeading } from "@/components/Section";
import { pageMeta, type Locale } from "@/lib/i18n";
import type { PhotoKey } from "@/lib/photos";

const text = {
  fr: {
    metaTitle: "Vie de l'école",
    metaDescription:
      "La vie à Let's Go English au Havre : mini-groupes, ateliers immersifs en anglais (jeux de rôle, cuisine, sciences), stages de vacances et cours à domicile.",
    eyebrow: "Vie de l'école",
    title: "L'anglais, ça se vit !",
    intro:
      "Chansons, jeux de rôle, cuisine ou expériences scientifiques : chez Let's Go English, on apprend l'anglais en le pratiquant.",
    little: {
      eyebrow: "Les tout-petits",
      title: "Un éveil à l'anglais en douceur",
      body: "Les plus jeunes découvrent l'anglais en jouant, avec des chansons et des comptines.",
      points: [
        "Baby Steps dès 12 mois, avec maman ou papa",
        "Séances de 45 min, 6 enfants maximum",
        "Very Small Learners (3–4 ans) et Little Learners (5–6 ans) : chansons, comptines, jeux",
      ],
    },
    groups: {
      eyebrow: "Les ateliers",
      title: "Des mini-groupes pour parler anglais",
      body: "En grandissant, les ateliers deviennent plus structurés, toujours en petits groupes.",
      points: [
        "Ateliers 7–8 ans et 9–10 ans : 1 h par semaine en mini-groupe",
        "Collégiens et lycéens : 1 h à 1 h 30 par semaine",
        "Jeux de rôle, échanges et mini-projets",
      ],
    },
    immersiveEyebrow: "Ateliers immersifs",
    immersiveTitle: "Tout en anglais, de 4 à 11 ans",
    immersiveIntro: "Des ateliers où l'anglais devient la langue du jeu, de la cuisine et des sciences.",
    activities: [
      { icon: Drama, title: "Jeux de rôle", text: "Se mettre dans la peau d'un personnage, en anglais." },
      { icon: ChefHat, title: "Cuisine", text: "Préparer une recette… en anglais." },
      { icon: FlaskConical, title: "Expériences scientifiques", text: "Observer, tester et découvrir, en anglais." },
      { icon: Sun, title: "Stages de vacances", text: "Pour les 3–10 ans, avec des animatrices anglophones." },
    ],
    home: {
      eyebrow: "Cours à domicile",
      title: "Des cours sur mesure, chez vous",
      body: "Pour les ados et les adultes, Let's Go English propose aussi des cours à domicile.",
      points: [
        "Cours sur mesure, adaptés à chaque élève",
        "En anglais, mais aussi en espagnol et en français langue étrangère",
        "Service à la Personne : 50 % de réduction d'impôt",
      ],
    },
    factsLabel: "En bref",
    facts: [
      { icon: Baby, text: "Dès 12 mois" },
      { icon: UserRound, text: "Enseignants natifs ou bilingues" },
      { icon: CalendarCheck, text: "Inscriptions ouvertes toute l'année" },
      { icon: Home, text: "50 % de réduction d'impôt (à domicile)" },
    ],
  },
  en: {
    metaTitle: "School Life",
    metaDescription:
      "Life at Let's Go English in Le Havre: small groups, immersive workshops in English (role plays, cooking, science), holiday courses and home tutoring.",
    eyebrow: "School life",
    title: "English you can live!",
    intro:
      "Songs, role plays, cooking or science experiments: at Let's Go English, you learn English by using it.",
    little: {
      eyebrow: "Little ones",
      title: "A gentle first step into English",
      body: "The youngest children discover English through play, with songs and nursery rhymes.",
      points: [
        "Baby Steps from 12 months, with mum or dad",
        "45-minute sessions, max 6 children",
        "Very Small Learners (3–4) and Little Learners (5–6): songs, nursery rhymes, games",
      ],
    },
    groups: {
      eyebrow: "Workshops",
      title: "Small groups to speak English",
      body: "As children grow, the workshops become more structured, always in small groups.",
      points: [
        "Workshops for ages 7–8 and 9–10: 1 hour a week in a small group",
        "Secondary school students: 1 to 1.5 hours a week",
        "Role plays, discussions and mini-projects",
      ],
    },
    immersiveEyebrow: "Immersive workshops",
    immersiveTitle: "All in English, for ages 4 to 11",
    immersiveIntro: "Workshops where English becomes the language of play, cooking and science.",
    activities: [
      { icon: Drama, title: "Role plays", text: "Stepping into a character's shoes, in English." },
      { icon: ChefHat, title: "Cooking", text: "Making a recipe… in English." },
      { icon: FlaskConical, title: "Science experiments", text: "Observing, testing and discovering, in English." },
      { icon: Sun, title: "Holiday courses", text: "For ages 3–10, with English-speaking leaders." },
    ],
    home: {
      eyebrow: "Home tutoring",
      title: "Tailor-made lessons at your home",
      body: "For teenagers and adults, Let's Go English also offers lessons at home.",
      points: [
        "Tailor-made lessons, adapted to each learner",
        "In English, and also in Spanish and French as a foreign language",
        "“Service à la Personne” scheme: 50% tax reduction",
      ],
    },
    factsLabel: "Key facts",
    facts: [
      { icon: Baby, text: "From 12 months" },
      { icon: UserRound, text: "Native or bilingual teachers" },
      { icon: CalendarCheck, text: "Enrolment open all year" },
      { icon: Home, text: "50% tax reduction (home tutoring)" },
    ],
  },
};

export function studentLifeMeta(locale: Locale) {
  const t = text[locale];
  return pageMeta({ locale, path: "/student-life", title: t.metaTitle, description: t.metaDescription });
}

function Feature({
  locale,
  id,
  eyebrow,
  title,
  photo,
  points,
  children,
  flip = false,
}: {
  locale: Locale;
  id: string;
  eyebrow: string;
  title: string;
  photo: PhotoKey;
  points: string[];
  children: ReactNode;
  flip?: boolean;
}) {
  return (
    <section aria-labelledby={id} className="py-12 sm:py-16">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Photo locale={locale}
          name={photo}
          sizes="(min-width: 1200px) 560px, (min-width: 1024px) 46vw, 100vw"
          className={`reveal aspect-[4/3] rounded-[var(--radius-card)] ${flip ? "lg:order-2" : ""}`}
        />
        <div className="reveal">
          <SectionHeading id={id} eyebrow={eyebrow} title={title} />
          <div className="mt-5 text-lg text-brand-deep/85">{children}</div>
          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-leaf" aria-hidden="true" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export function StudentLifeView({ locale }: { locale: Locale }) {
  const t = text[locale];
  return (
    <>
      <PageHero locale={locale} eyebrow={t.eyebrow} title={t.title} intro={<p>{t.intro}</p>} photo="conversation" />

      <div className="pt-4 sm:pt-8">
        <Feature locale={locale} id="little-title" eyebrow={t.little.eyebrow} title={t.little.title} photo="handUp" points={t.little.points}>
          <p>{t.little.body}</p>
        </Feature>

        <Feature locale={locale} id="groups-title" eyebrow={t.groups.eyebrow} title={t.groups.title} photo="group" flip points={t.groups.points}>
          <p>{t.groups.body}</p>
        </Feature>
      </div>

      <section aria-labelledby="immersive-title" className="bg-brand-soft py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading id="immersive-title" eyebrow={t.immersiveEyebrow} title={t.immersiveTitle} intro={t.immersiveIntro} />
            <Photo locale={locale}
              name="support"
              sizes="(min-width: 1200px) 480px, (min-width: 1024px) 40vw, 100vw"
              className="reveal mt-8 aspect-[4/3] rounded-[var(--radius-card)]"
            />
          </div>
          <ul className="grid content-start gap-4 sm:grid-cols-2">
            {t.activities.map((a) => (
              <li key={a.title} className="reveal rounded-[var(--radius-card)] bg-white p-6">
                <span className="grid size-12 place-items-center rounded-xl bg-brand text-white">
                  <a.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-extrabold">{a.title}</h3>
                <p className="mt-2 text-brand-deep/85">{a.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Feature locale={locale} id="home-title" eyebrow={t.home.eyebrow} title={t.home.title} photo="online" points={t.home.points}>
        <p>{t.home.body}</p>
      </Feature>

      <section aria-label={t.factsLabel} className="pb-16 pt-4 sm:pb-24">
        <Container>
          <ul className="grid gap-4 rounded-[var(--radius-card)] border border-brand-line bg-white p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-4">
            {t.facts.map((f) => (
              <li key={f.text} className="flex items-center gap-3 font-bold">
                <f.icon className="size-6 shrink-0 text-brand" aria-hidden="true" />
                {f.text}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand locale={locale} />
    </>
  );
}

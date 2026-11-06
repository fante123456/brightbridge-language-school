import { Heart, Ruler, Share2, Smile, Sparkles, Trophy, Users } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { Container, SectionHeading } from "@/components/Section";
import { pageMeta, type Locale } from "@/lib/i18n";

const text = {
  fr: {
    metaTitle: "À propos de l'école",
    metaDescription:
      "Let's Go English au Havre : une structure indépendante à taille humaine créée par Helen Snyers, qui enseigne l'anglais au Havre depuis 2009.",
    eyebrow: "À propos",
    title: "Une structure indépendante à taille humaine",
    intro:
      "Let's Go English n'est pas une école traditionnelle : ici, on apprend l'anglais avec bienveillance, sur mesure, sans « par cœur » ni pression.",
    storyEyebrow: "Notre histoire",
    storyTitle: "Une passion pour l'anglais, au Havre",
    story: [
      "Helen Snyers, originaire du Royaume-Uni, enseigne l'anglais au Havre depuis 2009.",
      "Elle a créé Let's Go English, une structure indépendante à taille humaine, avec une équipe d'enseignants qualifiés, natifs ou parfaitement bilingues.",
    ],
    timeline: [
      { year: "2009", text: "Helen Snyers commence à enseigner l'anglais au Havre." },
      { year: "Aujourd'hui", text: "Let's Go English accueille les enfants dès 12 mois, les collégiens, les lycéens et les adultes." },
      { year: "2026-2027", text: "Les inscriptions sont ouvertes toute l'année." },
    ],
    approachEyebrow: "Notre approche",
    approachTitle: "Pas une école traditionnelle",
    approachIntro: "Trois idées guident chaque atelier.",
    approach: [
      { icon: Heart, title: "Bienveillance", text: "Un apprentissage bienveillant, dans une structure à taille humaine." },
      { icon: Ruler, title: "Sur mesure", text: "Des ateliers par âge et des cours à domicile adaptés à chaque élève." },
      { icon: Smile, title: "Sans pression", text: "Pas de « par cœur » ni de pression : des chansons, des jeux, des jeux de rôle et des échanges." },
    ],
    teamEyebrow: "L'équipe",
    teamTitle: "Les personnes derrière Let's Go English",
    team: [
      { initials: "HS", name: "Helen Snyers", role: "Directrice", bio: "Originaire du Royaume-Uni, elle enseigne l'anglais au Havre depuis 2009." },
      { initials: null, name: "Les enseignants", role: "Équipe pédagogique", bio: "Des enseignants qualifiés, natifs ou parfaitement bilingues." },
      { initials: null, name: "Les animatrices", role: "Stages de vacances", bio: "Des animatrices anglophones encadrent les stages pour les 3–10 ans." },
    ],
    caption: "Photo d'illustration.",
    valuesEyebrow: "Nos valeurs",
    valuesTitle: "Ce qui nous tient à cœur",
    values: [
      { icon: Share2, title: "Le partage", text: "C'est la valeur principale de Let's Go English." },
      { icon: Trophy, title: "« Your success is our mission! »", text: "La réussite de chaque élève est au cœur de notre mission.", lang: "en" },
      { icon: Sparkles, title: "« Ready to go? »", text: "Le slogan de l'école, pour se lancer en anglais.", lang: "en" },
    ],
  },
  en: {
    metaTitle: "About the School",
    metaDescription:
      "Let's Go English in Le Havre: a small, independent school founded by Helen Snyers, who has been teaching English in Le Havre since 2009.",
    eyebrow: "About us",
    title: "A small, independent school",
    intro:
      "Let's Go English is not a traditional school: here, English is learned in a kind, tailor-made way, with no rote learning and no pressure.",
    storyEyebrow: "Our story",
    storyTitle: "A passion for English, in Le Havre",
    story: [
      "Helen Snyers, who comes from the United Kingdom, has been teaching English in Le Havre since 2009.",
      "She founded Let's Go English, a small, independent school, with a team of qualified teachers who are native or fully bilingual.",
    ],
    timeline: [
      { year: "2009", text: "Helen Snyers starts teaching English in Le Havre." },
      { year: "Today", text: "Let's Go English welcomes children from 12 months, teenagers and adults." },
      { year: "2026-2027", text: "Enrolment is open all year round." },
    ],
    approachEyebrow: "Our approach",
    approachTitle: "Not a traditional school",
    approachIntro: "Three ideas guide every workshop.",
    approach: [
      { icon: Heart, title: "Kindness", text: "Kind teaching, in a small, independent school." },
      { icon: Ruler, title: "Tailor-made", text: "Workshops by age group and home tutoring adapted to each learner." },
      { icon: Smile, title: "No pressure", text: "No rote learning and no pressure: songs, games, role plays and discussions." },
    ],
    teamEyebrow: "The team",
    teamTitle: "The people behind Let's Go English",
    team: [
      { initials: "HS", name: "Helen Snyers", role: "Director", bio: "Originally from the United Kingdom, she has taught English in Le Havre since 2009." },
      { initials: null, name: "The teachers", role: "Teaching team", bio: "Qualified teachers who are native or fully bilingual." },
      { initials: null, name: "The holiday leaders", role: "Holiday courses", bio: "English-speaking leaders run the holiday courses for ages 3–10." },
    ],
    caption: "Illustration photo.",
    valuesEyebrow: "Our values",
    valuesTitle: "What matters to us",
    values: [
      { icon: Share2, title: "Sharing", text: "It is the main value of Let's Go English." },
      { icon: Trophy, title: "“Your success is our mission!”", text: "Each learner's success is at the heart of our mission.", lang: "en" },
      { icon: Sparkles, title: "“Ready to go?”", text: "The school's slogan, to get started in English.", lang: "en" },
    ],
  },
};

export function aboutMeta(locale: Locale) {
  const t = text[locale];
  return pageMeta({ locale, path: "/about", title: t.metaTitle, description: t.metaDescription });
}

export function AboutView({ locale }: { locale: Locale }) {
  const t = text[locale];
  return (
    <>
      <PageHero locale={locale}
        eyebrow={t.eyebrow}
        title={t.title}
        intro={<p>{t.intro}</p>}
        photo="teacher"
        photoPosition="object-[80%_center]"
      />

      {/* Story */}
      <section aria-labelledby="story-title" className="py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="reveal">
            <SectionHeading id="story-title" eyebrow={t.storyEyebrow} title={t.storyTitle} />
            <div className="mt-5 space-y-4 text-lg text-brand-deep/85">
              {t.story.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <ol className="reveal relative space-y-6 border-l-2 border-brand-line pl-8">
            {t.timeline.map((x) => (
              <li key={x.year} className="relative">
                <span
                  className="absolute -left-[41px] top-1 size-4 rounded-full border-4 border-paper bg-brand"
                  aria-hidden="true"
                />
                <p className="font-display text-xl font-extrabold text-brand">{x.year}</p>
                <p className="mt-1 text-brand-deep/85">{x.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Approach */}
      <section aria-labelledby="approach-title" className="bg-brand-soft py-16 sm:py-24">
        <Container>
          <SectionHeading id="approach-title" eyebrow={t.approachEyebrow} title={t.approachTitle} intro={t.approachIntro} />
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {t.approach.map((p) => (
              <li key={p.title} className="reveal rounded-[var(--radius-card)] bg-white p-6 sm:p-7">
                <span className="grid size-12 place-items-center rounded-xl bg-brand text-white">
                  <p.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-extrabold">{p.title}</h3>
                <p className="mt-2 text-brand-deep/85">{p.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Team */}
      <section aria-labelledby="team-title" className="py-16 sm:py-24">
        <Container>
          <SectionHeading id="team-title" eyebrow={t.teamEyebrow} title={t.teamTitle} />
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {t.team.map((m) => (
              <li key={m.name} className="reveal flex flex-col rounded-[var(--radius-card)] border border-brand-line bg-white p-6">
                <span
                  className="grid size-16 place-items-center rounded-2xl bg-brand font-display text-xl font-extrabold text-white"
                  aria-hidden="true"
                >
                  {m.initials ?? <Users className="size-7" />}
                </span>
                <h3 className="mt-5 text-xl font-extrabold">{m.name}</h3>
                <p className="font-bold text-brand-deep">{m.role}</p>
                <p className="mt-3 flex-1 text-brand-deep/85">{m.bio}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Photo + values */}
      <section aria-labelledby="values-title" className="pb-16 sm:pb-24">
        <Container className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <figure className="reveal">
            <Photo locale={locale}
              name="classroom"
              sizes="(min-width: 1200px) 600px, (min-width: 1024px) 50vw, 100vw"
              className="aspect-[4/3] rounded-[var(--radius-card)]"
            />
            <figcaption className="mt-3 text-[0.9375rem] text-slate">{t.caption}</figcaption>
          </figure>
          <div className="reveal">
            <SectionHeading id="values-title" eyebrow={t.valuesEyebrow} title={t.valuesTitle} />
            <ul className="mt-8 space-y-6">
              {t.values.map((v) => (
                <li key={v.title} className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-sun text-brand-deep">
                    <v.icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 lang={"lang" in v ? v.lang : undefined} className="text-xl font-extrabold">
                      {v.title}
                    </h3>
                    <p className="mt-1 text-brand-deep/85">{v.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <CtaBand locale={locale} />
    </>
  );
}

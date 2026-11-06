// The real offers of Let's Go English (public information, Nov 2026).
// Prices and timetables are not public: they are given "on request".

import type { T } from "./i18n";

export const AUDIENCES = ["little", "kids", "teens", "adults"] as const;
export type Audience = (typeof AUDIENCES)[number];

export const audienceLabels: Record<Audience, T> = {
  little: { fr: "Tout-petits (dès 12 mois – 6 ans)", en: "Little ones (12 months – 6 years)" },
  kids: { fr: "Enfants (7–11 ans)", en: "Children (7–11)" },
  teens: { fr: "Collégiens & lycéens", en: "Teenagers" },
  adults: { fr: "Adultes", en: "Adults" },
};

/** Short labels for the filter buttons. */
export const audienceShort: Record<Audience, T> = {
  little: { fr: "Tout-petits", en: "Little ones" },
  kids: { fr: "Enfants", en: "Children" },
  teens: { fr: "Ados", en: "Teens" },
  adults: { fr: "Adultes", en: "Adults" },
};

export type Course = {
  slug: string;
  title: T;
  /** Short code shown on the card badge. */
  code: string;
  audiences: Audience[];
  age: T;
  description: T;
  /** Only filled in when the business states it. */
  session?: T;
  group?: T;
  format: T;
  atHome?: boolean;
  popular?: boolean;
};

export const courses: Course[] = [
  {
    slug: "baby-steps",
    title: { fr: "Baby Steps", en: "Baby Steps" },
    code: "12m",
    audiences: ["little"],
    age: { fr: "Dès 12 mois", en: "From 12 months" },
    description: {
      fr: "Un éveil à l'anglais tout en douceur, avec maman ou papa.",
      en: "A gentle first step into English, together with mum or dad.",
    },
    session: { fr: "Séances de 45 min", en: "45-minute sessions" },
    group: { fr: "6 enfants maximum", en: "Max 6 children" },
    format: { fr: "Avec un parent", en: "With a parent" },
    popular: true,
  },
  {
    slug: "very-small-and-little-learners",
    title: { fr: "Very Small Learners & Little Learners", en: "Very Small Learners & Little Learners" },
    code: "3–6",
    audiences: ["little"],
    age: { fr: "3–4 ans et 5–6 ans", en: "Ages 3–4 and 5–6" },
    description: {
      fr: "Des chansons, des comptines et des jeux pour découvrir l'anglais en s'amusant. Deux groupes : Very Small Learners (3–4 ans) et Little Learners (5–6 ans).",
      en: "Songs, nursery rhymes and games to discover English while having fun. Two groups: Very Small Learners (3–4) and Little Learners (5–6).",
    },
    format: { fr: "En groupe", en: "In a group" },
  },
  {
    slug: "ateliers-7-10-ans",
    title: { fr: "Ateliers 7–8 ans et 9–10 ans", en: "Workshops for ages 7–8 and 9–10" },
    code: "7–10",
    audiences: ["kids"],
    age: { fr: "7–8 ans et 9–10 ans", en: "Ages 7–8 and 9–10" },
    description: {
      fr: "Un atelier plus structuré, chaque semaine en mini-groupe, pour progresser pas à pas.",
      en: "A more structured weekly workshop in a small group, to make progress step by step.",
    },
    session: { fr: "1 h par semaine", en: "1 hour a week" },
    group: { fr: "Mini-groupe", en: "Small group" },
    format: { fr: "En groupe", en: "In a group" },
    popular: true,
  },
  {
    slug: "collegiens-lyceens",
    title: { fr: "Collégiens et lycéens", en: "Secondary school students" },
    code: "Ados",
    audiences: ["teens"],
    age: { fr: "Collège et lycée", en: "Middle and high school" },
    description: {
      fr: "Des ateliers chaque semaine autour de jeux de rôle, d'échanges et de mini-projets.",
      en: "Weekly workshops built around role plays, discussions and mini-projects.",
    },
    session: { fr: "1 h à 1 h 30 par semaine", en: "1 to 1.5 hours a week" },
    format: { fr: "En groupe", en: "In a group" },
    popular: true,
  },
  {
    slug: "ateliers-immersifs",
    title: { fr: "Ateliers immersifs", en: "Immersive workshops" },
    code: "4–11",
    audiences: ["little", "kids"],
    age: { fr: "4–11 ans", en: "Ages 4–11" },
    description: {
      fr: "Jeux de rôle, cuisine et expériences scientifiques… le tout en anglais !",
      en: "Role plays, cooking and science experiments… all in English!",
    },
    format: { fr: "En groupe", en: "In a group" },
  },
  {
    slug: "stages-vacances",
    title: { fr: "Stages de vacances", en: "Holiday courses" },
    code: "3–10",
    audiences: ["little", "kids"],
    age: { fr: "3–10 ans", en: "Ages 3–10" },
    description: {
      fr: "Pendant les vacances, des stages en anglais avec des animatrices anglophones.",
      en: "English courses during the school holidays, led by English-speaking leaders.",
    },
    format: { fr: "Pendant les vacances", en: "During the holidays" },
  },
  {
    slug: "cours-a-domicile",
    title: { fr: "Cours à domicile", en: "Home tutoring" },
    code: "Dom.",
    audiences: ["teens", "adults"],
    age: { fr: "Ados et adultes", en: "Teens and adults" },
    description: {
      fr: "Des cours sur mesure chez vous, en anglais mais aussi en espagnol et en français langue étrangère. Service à la Personne : 50 % de réduction d'impôt.",
      en: "Tailor-made lessons at your home, in English and also in Spanish and French as a foreign language. Eligible for the French “Service à la Personne” scheme: 50% tax reduction.",
    },
    format: { fr: "À domicile, sur mesure", en: "At home, tailor-made" },
    atHome: true,
  },
];

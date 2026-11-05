// Fictional course catalogue for the demo. Prices are example "from" prices
// in GBP and are labelled as fictional on the page.

export const LEVELS = ["A1", "A2", "B1", "B2", "C1"] as const;
export type Level = (typeof LEVELS)[number];

export const LANGUAGES = ["English", "Spanish", "French", "German"] as const;
export type Language = (typeof LANGUAGES)[number];

export type Format = "In person" | "Online" | "In person or online";

export type Course = {
  slug: string;
  title: string;
  language: Language;
  /** Short code shown on the card badge. */
  code: string;
  description: string;
  levelFrom: Level;
  levelTo: Level;
  weeks: number;
  hoursPerWeek: number;
  format: Format;
  maxClassSize: number;
  priceFrom: number;
  schedule: string;
  audience?: string;
  popular?: boolean;
};

export const courses: Course[] = [
  {
    slug: "english-for-beginners",
    title: "English for Beginners",
    language: "English",
    code: "EN",
    description:
      "Start from zero and build everyday English step by step: introductions, shopping, travel, small talk at work and simple messages.",
    levelFrom: "A1",
    levelTo: "A2",
    weeks: 10,
    hoursPerWeek: 4,
    format: "In person or online",
    maxClassSize: 10,
    priceFrom: 260,
    schedule: "Mon & Wed, 18:30 – 20:30",
    popular: true,
  },
  {
    slug: "business-english",
    title: "Business English",
    language: "English",
    code: "EN",
    description:
      "Practise meetings, emails, presentations and negotiation phrases through realistic workplace tasks, with feedback on every piece of writing.",
    levelFrom: "B1",
    levelTo: "C1",
    weeks: 8,
    hoursPerWeek: 3,
    format: "In person or online",
    maxClassSize: 8,
    priceFrom: 340,
    schedule: "Tue & Thu, 18:00 – 19:30",
  },
  {
    slug: "ielts-preparation",
    title: "IELTS Preparation",
    language: "English",
    code: "EN",
    description:
      "Structured practice in Listening, Reading, Writing and Speaking, timed mock tests and personal feedback. We help you prepare well; no course can promise a band score.",
    levelFrom: "B1",
    levelTo: "C1",
    weeks: 6,
    hoursPerWeek: 6,
    format: "In person",
    maxClassSize: 10,
    priceFrom: 390,
    schedule: "Mon, Wed & Fri, 10:00 – 12:00",
    popular: true,
  },
  {
    slug: "spanish",
    title: "Spanish",
    language: "Spanish",
    code: "ES",
    description:
      "Speak Spanish from the first lesson with role plays, listening practice and useful grammar for travel, friends and work.",
    levelFrom: "A1",
    levelTo: "B1",
    weeks: 10,
    hoursPerWeek: 3,
    format: "In person",
    maxClassSize: 10,
    priceFrom: 230,
    schedule: "Tue, 18:00 – 19:30 & Sat, 10:00 – 11:30",
    popular: true,
  },
  {
    slug: "french",
    title: "French",
    language: "French",
    code: "FR",
    description:
      "Clear grammar, natural pronunciation and plenty of speaking, from ordering at a café to holding a confident conversation.",
    levelFrom: "A1",
    levelTo: "B2",
    weeks: 10,
    hoursPerWeek: 3,
    format: "In person or online",
    maxClassSize: 10,
    priceFrom: 230,
    schedule: "Mon & Thu, 18:30 – 20:00",
  },
  {
    slug: "german",
    title: "German",
    language: "German",
    code: "DE",
    description:
      "Learn German in small live online groups, with step-by-step grammar, vocabulary for daily life and regular speaking practice.",
    levelFrom: "A1",
    levelTo: "B1",
    weeks: 10,
    hoursPerWeek: 3,
    format: "Online",
    maxClassSize: 10,
    priceFrom: 230,
    schedule: "Wed, 18:00 – 19:30 & Sat, 11:00 – 12:30",
  },
  {
    slug: "english-conversation-club",
    title: "English Conversation Club",
    language: "English",
    code: "EN",
    description:
      "Relaxed weekly speaking sessions on news, culture and everyday topics to build fluency and confidence with other learners.",
    levelFrom: "B1",
    levelTo: "C1",
    weeks: 6,
    hoursPerWeek: 2,
    format: "In person",
    maxClassSize: 10,
    priceFrom: 120,
    schedule: "Thu, 18:30 – 20:30",
  },
  {
    slug: "teen-english",
    title: "Teen English (ages 12–16)",
    language: "English",
    code: "EN",
    description:
      "Saturday classes for young learners that build school and exam skills through projects, presentations and teamwork.",
    levelFrom: "A2",
    levelTo: "B2",
    weeks: 12,
    hoursPerWeek: 3,
    format: "In person",
    maxClassSize: 10,
    priceFrom: 280,
    schedule: "Sat, 10:00 – 13:00",
    audience: "Young learners",
  },
];

export function levelIndex(level: Level) {
  return LEVELS.indexOf(level);
}

export function coversLevel(course: Course, level: Level) {
  const i = levelIndex(level);
  return i >= levelIndex(course.levelFrom) && i <= levelIndex(course.levelTo);
}

export function levelRange(course: Course) {
  return `${course.levelFrom}–${course.levelTo}`;
}

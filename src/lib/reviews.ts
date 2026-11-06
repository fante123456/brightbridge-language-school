// Real Google reviews of Let's Go English, quoted exactly as written
// (only an obvious missing accent fixed). First name + initial only.

import type { Locale } from "./i18n";

export type Review = {
  name: string;
  /** Language the review was written in. */
  lang: Locale;
  original: string;
  /** English translation, for reviews written in French. */
  translation?: string;
};

export const reviews: Review[] = [
  {
    name: "Max P.",
    lang: "fr",
    original:
      "Mes enfants y vont avec le sourire, et les résultats sont très concrets (et bien sûr audibles… ils parlent en anglais). Une école et une équipe au top",
    translation:
      "My children go there with a smile, and the results are very real (and of course you can hear them… they speak English). A top school and a top team.",
  },
  {
    name: "Catherine B.",
    lang: "fr",
    original:
      "À 70 ans, je me suis lancée avec une amie, à reprendre des cours d'Anglais. L'équipe de Let's Go English a été super et a fait les démarches nécessaires.",
    translation:
      "At 70, a friend and I decided to take English lessons again. The Let's Go English team was great and took care of the necessary paperwork.",
  },
  {
    name: "Adriana M.",
    lang: "en",
    original:
      "I highly recommend Let's go English for young children. My 4-and-a-half-year-old daughter started 18 months ago, and the experience has been wonderful.",
  },
];

/** The quote to show on a page in the given language. */
export function reviewText(r: Review, locale: Locale) {
  if (locale === "en" && r.lang === "fr" && r.translation) {
    return { text: r.translation, lang: "en" as const, translated: true };
  }
  return { text: r.original, lang: r.lang, translated: false };
}

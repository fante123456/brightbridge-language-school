// Free-licence photos from Unsplash (https://unsplash.com/license), used as
// illustrations for now (real photos come in a later step).
// Credits are shown on the /credits page.

import type { T } from "./i18n";

export type Photo = {
  id: string;
  /** Alt text in French and English. */
  alt: T;
  author: string;
  username: string;
};

export function photoSrc(id: string) {
  return `https://images.unsplash.com/photo-${id}`;
}

export const photos = {
  hero: {
    id: "1758270705518-b61b40527e76",
    alt: {
      fr: "Un groupe d'adultes souriants réunis autour d'un ordinateur portable, en train de travailler ensemble en classe",
      en: "A diverse group of smiling adult students gathered around a laptop, working on a task together in class",
    },
    author: "Vitaly Gariev",
    username: "silverkblack",
  },
  intro: {
    id: "1571260898938-0fe5057e7208",
    alt: {
      fr: "Deux élèves à un bureau : l'une montre une fiche d'exercices, l'autre suit, dans une salle de classe lumineuse",
      en: "Two students at a desk as one points to a worksheet and the other follows along, in a bright classroom",
    },
    author: "javier trueba",
    username: "javotrueba",
  },
  classroom: {
    id: "1758270705696-ec9caffc73dd",
    alt: {
      fr: "Une enseignante debout devant une classe ensoleillée pendant qu'un petit groupe d'adultes prend des notes",
      en: "A teacher standing at the front of a sunny classroom while a small group of adult learners take notes",
    },
    author: "Vitaly Gariev",
    username: "silverkblack",
  },
  teacher: {
    id: "1580894732444-8ecded7900cd",
    alt: {
      fr: "Une enseignante souriante debout à côté d'un tableau blanc, prête à accueillir sa classe",
      en: "A smiling teacher standing beside a whiteboard, ready to welcome her class",
    },
    author: "ThisisEngineering",
    username: "thisisengineering",
  },
  courses: {
    id: "1571260899304-425eee4c7efc",
    alt: {
      fr: "Une jeune femme souriante tient un manuel vert dans une salle de classe où d'autres élèves écrivent",
      en: "A smiling young woman holding a green course book in a classroom with other students writing at their desks",
    },
    author: "javier trueba",
    username: "javotrueba",
  },
  handUp: {
    id: "1758270704021-361c165d68fd",
    alt: {
      fr: "Une élève lève la main pour répondre à la question de l'enseignante pendant un cours animé",
      en: "A student raising a hand to answer the teacher's question during a lively group lesson",
    },
    author: "Vitaly Gariev",
    username: "silverkblack",
  },
  conversation: {
    id: "1522202176988-66273c2fd55f",
    alt: {
      fr: "Trois élèves rient ensemble autour d'une table avec des ordinateurs portables et des carnets",
      en: "Three students laughing together around a table with laptops and notebooks during a conversation practice",
    },
    author: "Brooke Cagle",
    username: "brookecagle",
  },
  online: {
    id: "1759984782106-4b56d0aa05b8",
    alt: {
      fr: "Une jeune élève avec un casque prend des notes à son bureau, à côté d'un ordinateur portable",
      en: "A young learner wearing headphones, writing notes at her desk next to a laptop",
    },
    author: "Julio Lopez",
    username: "juliolopez",
  },
  group: {
    id: "1531545514256-b1400bc00f31",
    alt: {
      fr: "Quatre élèves souriants penchés autour d'un ordinateur portable pendant une activité de groupe",
      en: "Four students leaning in around a laptop, smiling as they work on a group activity",
    },
    author: "Mimi Thian",
    username: "mimithian",
  },
  support: {
    id: "1664382953647-5c6c76dd63b9",
    alt: {
      fr: "Une tutrice se penche pour aider une élève sur son ordinateur dans une salle d'étude calme",
      en: "A tutor leaning over to help a student with her work on a laptop in a quiet study room",
    },
    author: "Centre for Ageing Better",
    username: "ageing_better",
  },
  resources: {
    id: "1543109740-4bdb38fda756",
    alt: {
      fr: "Un manuel jaune intitulé Everyday English posé sur une table mouchetée",
      en: "A yellow course book titled Everyday English lying on a speckled table",
    },
    author: "Ivan Shilov",
    username: "mycreate",
  },
  welcome: {
    id: "1706403615881-d83dc2067c5d",
    alt: {
      fr: "Des bulles de papier colorées sur un mur en bois, chacune disant bienvenue dans une langue et une écriture différentes",
      en: "Colourful paper speech bubbles on a wooden wall, each saying welcome in a different language and script",
    },
    author: "zhendong wang",
    username: "tonybear2",
  },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;

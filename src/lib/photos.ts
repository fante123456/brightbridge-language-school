// Free-licence photos from Unsplash (https://unsplash.com/license),
// chosen from a contact sheet for a consistent bright, friendly style.
// Credits are shown on the /credits page.

export type Photo = {
  id: string;
  alt: string;
  author: string;
  username: string;
};

export function photoSrc(id: string) {
  return `https://images.unsplash.com/photo-${id}`;
}

export const photos = {
  hero: {
    id: "1758270705518-b61b40527e76",
    alt: "A diverse group of smiling adult students gathered around a laptop, working on a task together in class",
    author: "Vitaly Gariev",
    username: "silverkblack",
  },
  intro: {
    id: "1571260898938-0fe5057e7208",
    alt: "Two students at a desk as one points to a worksheet and the other follows along, in a bright classroom",
    author: "javier trueba",
    username: "javotrueba",
  },
  classroom: {
    id: "1758270705696-ec9caffc73dd",
    alt: "A teacher standing at the front of a sunny classroom while a small group of adult learners take notes",
    author: "Vitaly Gariev",
    username: "silverkblack",
  },
  teacher: {
    id: "1580894732444-8ecded7900cd",
    alt: "A smiling teacher standing beside a whiteboard, ready to welcome her class",
    author: "ThisisEngineering",
    username: "thisisengineering",
  },
  courses: {
    id: "1571260899304-425eee4c7efc",
    alt: "A smiling young woman holding a green course book in a classroom with other students writing at their desks",
    author: "javier trueba",
    username: "javotrueba",
  },
  handUp: {
    id: "1758270704021-361c165d68fd",
    alt: "A student raising a hand to answer the teacher's question during a lively group lesson",
    author: "Vitaly Gariev",
    username: "silverkblack",
  },
  conversation: {
    id: "1522202176988-66273c2fd55f",
    alt: "Three students laughing together around a table with laptops and notebooks during a conversation practice",
    author: "Brooke Cagle",
    username: "brookecagle",
  },
  online: {
    id: "1759984782106-4b56d0aa05b8",
    alt: "A young learner wearing headphones, writing notes at her desk next to a laptop during an online lesson",
    author: "Julio Lopez",
    username: "juliolopez",
  },
  group: {
    id: "1531545514256-b1400bc00f31",
    alt: "Four students leaning in around a laptop, smiling as they work on a group activity",
    author: "Mimi Thian",
    username: "mimithian",
  },
  support: {
    id: "1664382953647-5c6c76dd63b9",
    alt: "A tutor leaning over to help a student with her work on a laptop in a quiet study room",
    author: "Centre for Ageing Better",
    username: "ageing_better",
  },
  resources: {
    id: "1543109740-4bdb38fda756",
    alt: "A yellow course book titled Everyday English lying on a speckled table",
    author: "Ivan Shilov",
    username: "mycreate",
  },
  welcome: {
    id: "1706403615881-d83dc2067c5d",
    alt: "Colourful paper speech bubbles on a wooden wall, each saying welcome in a different language and script",
    author: "zhendong wang",
    username: "tonybear2",
  },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;

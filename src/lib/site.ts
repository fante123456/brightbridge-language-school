// Real, public facts about Let's Go English (Le Havre), checked on 6 Nov 2026.
// Practice demo only: this is not the school's official website.
// Prices and timetables are not public, so the site says "on request".

import type { Locale } from "./i18n";

export const site = {
  name: "Let's Go English",
  tagline: { fr: "Le spécialiste de l'anglais au Havre", en: "The English specialist in Le Havre" },
  // Domain of this demo (unchanged).
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://brightbridge.ammar-rajabi.com",
  phone: "02 35 45 09 01",
  phoneHref: "tel:+33235450901",
  email: "contact.letsgoenglish@gmail.com",
  address: {
    street: "18 rue Paul Doumer",
    postcode: "76600",
    city: "Le Havre",
    country: { fr: "France", en: "France" },
  },
  mapsHref: "https://maps.google.com/?cid=11631697542550944835",
  directionsHref:
    "https://www.google.com/maps/dir/?api=1&destination=18+rue+Paul+Doumer%2C+76600+Le+Havre",
  facebookHref: "https://www.facebook.com/profile.php?id=61564658947664",
  rating: { value: { fr: "5,0", en: "5.0" }, count: 40 },
  slogans: ["Ready to go?", "Your success is our mission!"],
} as const;

export function navFor(locale: Locale) {
  return locale === "fr"
    ? [
        { path: "/", label: "Accueil" },
        { path: "/about", label: "À propos" },
        { path: "/courses", label: "Cours & ateliers" },
        { path: "/student-life", label: "Vie de l'école" },
        { path: "/contact", label: "Contact" },
      ]
    : [
        { path: "/", label: "Home" },
        { path: "/about", label: "About" },
        { path: "/courses", label: "Classes" },
        { path: "/student-life", label: "School life" },
        { path: "/contact", label: "Contact" },
      ];
}

/** Reception opening hours (accueil). */
export const hours = {
  fr: [
    { days: "Mardi", short: "Mar.", times: ["13h30 – 18h"] },
    { days: "Mercredi", short: "Mer.", times: ["9h – 12h30", "14h30 – 18h"] },
    { days: "Vendredi", short: "Ven.", times: ["12h – 13h30"] },
    { days: "Samedi", short: "Sam.", times: ["9h – 12h30"] },
    { days: "Lundi, jeudi et dimanche", short: "Lun., jeu., dim.", times: ["Fermé"] },
  ],
  en: [
    { days: "Tuesday", short: "Tue", times: ["1:30 – 6 pm"] },
    { days: "Wednesday", short: "Wed", times: ["9 am – 12:30 pm", "2:30 – 6 pm"] },
    { days: "Friday", short: "Fri", times: ["12 – 1:30 pm"] },
    { days: "Saturday", short: "Sat", times: ["9 am – 12:30 pm"] },
    { days: "Monday, Thursday and Sunday", short: "Mon, Thu, Sun", times: ["Closed"] },
  ],
} as const;

export const contactAnchor = "/contact#enquiry";

export const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Let's Go English, le spécialiste de l'anglais au Havre",
};

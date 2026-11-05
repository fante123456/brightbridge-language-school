// School facts come from the MX AI Academy Challenge 5 brief.
// Opening hours, prices, teachers and testimonials are fictional demo
// content and are labelled as such on the page.

export const site = {
  name: "BrightBridge Language School",
  shortName: "BrightBridge",
  tagline: "Learn languages with confidence",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://brightbridge-language-school.vercel.app",
  phone: "0161 555 6841",
  phoneHref: "tel:+441615556841",
  email: "study@brightbridge.co.uk",
  address: {
    street: "42 Oxford Road",
    city: "Manchester",
    postcode: "M1 5QA",
    country: "United Kingdom",
  },
  mapsHref: "https://www.google.com/maps/search/?api=1&query=42+Oxford+Road+Manchester+M1+5QA",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/student-life", label: "Student Life" },
  { href: "/contact", label: "Contact" },
] as const;

/** Fictional opening hours for the demo. */
export const hours = [
  { days: "Monday – Thursday", short: "Mon – Thu", time: "9:00 – 20:00" },
  { days: "Friday", short: "Fri", time: "9:00 – 17:00" },
  { days: "Saturday", short: "Sat", time: "10:00 – 14:00" },
  { days: "Sunday", short: "Sun", time: "Closed" },
] as const;

export const trialHref = "/contact#enquiry";

export const ogImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "BrightBridge Language School: learn languages with confidence, Manchester",
};

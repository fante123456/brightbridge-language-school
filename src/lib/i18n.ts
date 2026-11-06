import type { Metadata } from "next";
import { ogImage } from "./site";

/** French is the default language (no prefix); English lives under /en. */
export type Locale = "fr" | "en";

/** A piece of text in both languages. */
export type T = { fr: string; en: string };

export function localePath(locale: Locale, path: string) {
  if (locale === "fr") return path;
  return path === "/" ? "/en" : `/en${path}`;
}

/** The same page in the other language, from the current pathname. */
export function switchPath(pathname: string, to: Locale) {
  const clean = pathname.replace(/\/+$/, "") || "/";
  const base = clean === "/en" ? "/" : clean.startsWith("/en/") ? clean.slice(3) : clean;
  return localePath(to, base);
}

/** Shared page metadata: title, description, canonical, hreflang and Open Graph. */
export function pageMeta({
  locale,
  path,
  title,
  description,
  absoluteTitle = false,
}: {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  absoluteTitle?: boolean;
}): Metadata {
  const url = localePath(locale, path);
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: {
      canonical: url,
      languages: { fr: localePath("fr", path), en: localePath("en", path) },
    },
    openGraph: {
      url,
      title: absoluteTitle ? title : `${title} | Let's Go English`,
      description,
      locale: locale === "fr" ? "fr_FR" : "en_GB",
      images: [ogImage],
    },
  };
}

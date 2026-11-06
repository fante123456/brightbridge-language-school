"use client";

import { useSearchParams } from "next/navigation";
import { ContactForm } from "./ContactForm";
import type { Locale } from "@/lib/i18n";

/** Preselects the class when arriving from a course card (?course=slug). */
export function ContactFormFromUrl({ locale }: { locale: Locale }) {
  const course = useSearchParams().get("course") ?? undefined;
  return <ContactForm key={course ?? "none"} locale={locale} initialCourse={course} />;
}

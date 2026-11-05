"use client";

import { useSearchParams } from "next/navigation";
import { ContactForm } from "./ContactForm";

/** Preselects the course when arriving from a course card (?course=slug). */
export function ContactFormFromUrl() {
  const course = useSearchParams().get("course") ?? undefined;
  return <ContactForm key={course ?? "none"} initialCourse={course} />;
}

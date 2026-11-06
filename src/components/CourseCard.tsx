import Link from "next/link";
import { ArrowRight, Baby, Clock, Home, MapPin, Users } from "lucide-react";
import type { Course } from "@/lib/courses";
import { localePath, type Locale } from "@/lib/i18n";

const text = {
  fr: {
    glance: "En bref",
    age: "Âge",
    session: "Durée",
    format: "Format",
    group: "Groupe",
    price: "Tarifs",
    onRequest: "Sur demande",
    enquire: "Se renseigner",
    about: "sur",
  },
  en: {
    glance: "At a glance",
    age: "Age",
    session: "Length",
    format: "Format",
    group: "Group",
    price: "Prices",
    onRequest: "On request",
    enquire: "Enquire",
    about: "about",
  },
};

function Chip({ icon: Icon, label, value }: { icon: typeof Users; label: string; value: string }) {
  return (
    <li className="flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1.5 font-display text-sm font-bold text-brand">
      <Icon className="size-4 shrink-0" aria-hidden="true" />
      <span className="sr-only">{label}: </span>
      {value}
    </li>
  );
}

export function CourseCard({
  course,
  locale,
  headingLevel = "h3",
}: {
  course: Course;
  locale: Locale;
  headingLevel?: "h2" | "h3";
}) {
  const t = text[locale];
  const Heading = headingLevel;
  const title = course.title[locale];
  return (
    <article className="group flex h-full flex-col rounded-[var(--radius-card)] border border-brand-line bg-white p-6 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-[0_12px_32px_-16px_rgb(30_58_138/0.35)]">
      <div className="flex items-start justify-between gap-4">
        <Heading className="text-[1.375rem] font-extrabold leading-tight">{title}</Heading>
        <span
          className="grid h-11 min-w-11 shrink-0 place-items-center rounded-xl bg-brand px-2 font-display text-sm font-extrabold text-white"
          aria-hidden="true"
        >
          {course.code}
        </span>
      </div>

      <ul className="mt-4 flex flex-wrap gap-2" aria-label={t.glance}>
        <Chip icon={Baby} label={t.age} value={course.age[locale]} />
        {course.session && <Chip icon={Clock} label={t.session} value={course.session[locale]} />}
        <Chip icon={course.atHome ? Home : MapPin} label={t.format} value={course.format[locale]} />
      </ul>

      <p className="mt-4 text-brand-deep/85">{course.description[locale]}</p>

      {course.group && (
        <dl className="mt-5 flex flex-wrap gap-x-5 gap-y-2.5 border-t border-brand-line pt-4 text-[0.9375rem]">
          <div className="flex items-center gap-2">
            <Users className="size-4 shrink-0 text-brand" aria-hidden="true" />
            <dt className="sr-only">{t.group}</dt>
            <dd>{course.group[locale]}</dd>
          </div>
        </dl>
      )}

      <div className="mt-auto flex items-end justify-between gap-4 pt-6">
        <p className="leading-tight">
          <span className="block text-sm text-slate">{t.price}</span>
          <span className="font-display text-xl font-extrabold text-brand">{t.onRequest}</span>
        </p>
        <Link
          href={`${localePath(locale, "/contact")}?course=${course.slug}#enquiry`}
          className="inline-flex min-h-11 items-center gap-1.5 rounded-full bg-brand px-5 font-bold text-white transition-colors hover:bg-brand-deep"
        >
          {t.enquire}
          <span className="sr-only">{` ${t.about} ${title}`}</span>
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

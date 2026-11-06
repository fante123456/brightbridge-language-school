"use client";

import { useState } from "react";
import { RotateCcw } from "lucide-react";
import { CourseCard } from "./CourseCard";
import { AUDIENCES, audienceShort, courses, type Audience } from "@/lib/courses";
import type { Locale } from "@/lib/i18n";

type Filter = Audience | "all";

const text = {
  fr: {
    legend: "Pour qui ?",
    all: "Tous",
    clear: "Effacer le filtre",
    showing: (n: number, total: number) => `${n} offre${n > 1 ? "s" : ""} sur ${total}`,
    forWho: (label: string) => ` pour : ${label.toLowerCase()}`,
    emptyTitle: "Aucune offre pour ce choix",
    emptyText: "Appelez-nous : nous vous dirons quel atelier ou quel cours convient le mieux.",
    showAll: "Voir toutes les offres",
  },
  en: {
    legend: "Who is it for?",
    all: "All",
    clear: "Clear filter",
    showing: (n: number, total: number) => `Showing ${n} of ${total} offers`,
    forWho: (label: string) => ` for ${label.toLowerCase()}`,
    emptyTitle: "Nothing matches this choice",
    emptyText: "Call us: we will tell you which workshop or class suits you best.",
    showAll: "Show all offers",
  },
};

export function CourseFilters({ locale }: { locale: Locale }) {
  const t = text[locale];
  const [who, setWho] = useState<Filter>("all");
  const results = courses.filter((c) => who === "all" || c.audiences.includes(who));
  const options: Filter[] = ["all", ...AUDIENCES];
  const label = (o: Filter) => (o === "all" ? t.all : audienceShort[o][locale]);

  return (
    <div>
      <div className="flex flex-col gap-6 rounded-[var(--radius-card)] border border-brand-line bg-white p-5 sm:p-6 lg:flex-row lg:items-end lg:gap-10">
        <fieldset>
          <legend className="mb-2.5 text-sm font-bold uppercase tracking-[0.12em] text-brand-deep/80">{t.legend}</legend>
          <div className="flex flex-wrap gap-2">
            {options.map((o) => (
              <button
                key={o}
                type="button"
                aria-pressed={who === o}
                onClick={() => setWho(o)}
                className="min-h-11 rounded-full border-2 border-brand-line bg-white px-4 font-bold text-brand-deep transition-colors hover:border-brand/50 aria-pressed:border-brand aria-pressed:bg-brand aria-pressed:text-white"
              >
                {label(o)}
              </button>
            ))}
          </div>
        </fieldset>
        {who !== "all" && (
          <button
            type="button"
            onClick={() => setWho("all")}
            className="inline-flex min-h-11 items-center gap-2 self-start rounded-full px-2 font-bold text-brand underline-offset-4 hover:underline lg:ml-auto lg:self-end"
          >
            <RotateCcw className="size-4" aria-hidden="true" />
            {t.clear}
          </button>
        )}
      </div>

      <p className="mt-6 font-bold text-brand-deep" role="status" aria-live="polite">
        {t.showing(results.length, courses.length)}
        {who !== "all" && t.forWho(label(who))}
      </p>

      {results.length > 0 ? (
        <ul className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {results.map((c) => (
            <li key={c.slug}>
              <CourseCard course={c} locale={locale} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-5 rounded-[var(--radius-card)] border-2 border-dashed border-brand-line bg-white p-8 text-center">
          <p className="font-display text-xl font-bold text-brand">{t.emptyTitle}</p>
          <p className="mx-auto mt-2 max-w-md text-brand-deep/85">{t.emptyText}</p>
          <button
            type="button"
            onClick={() => setWho("all")}
            className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-brand px-5 font-bold text-white hover:bg-brand-deep"
          >
            <RotateCcw className="size-4" aria-hidden="true" />
            {t.showAll}
          </button>
        </div>
      )}
    </div>
  );
}

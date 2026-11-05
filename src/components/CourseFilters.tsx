"use client";

import { useState } from "react";
import { RotateCcw } from "lucide-react";
import { CourseCard } from "./CourseCard";
import { LANGUAGES, LEVELS, courses, coversLevel, type Language, type Level } from "@/lib/courses";

type LangFilter = Language | "All";
type LevelFilter = Level | "Any";

function FilterGroup<T extends string>({
  legend,
  options,
  value,
  onChange,
}: {
  legend: string;
  options: readonly T[];
  value: T;
  onChange: (v: T) => void;
}) {
  return (
    <fieldset>
      <legend className="mb-2.5 text-sm font-bold uppercase tracking-[0.12em] text-brand-deep/80">{legend}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o}
            type="button"
            aria-pressed={value === o}
            onClick={() => onChange(o)}
            className="min-h-11 rounded-full border-2 border-brand-line bg-white px-4 font-bold text-brand-deep transition-colors hover:border-brand/50 aria-pressed:border-brand aria-pressed:bg-brand aria-pressed:text-white"
          >
            {o}
          </button>
        ))}
      </div>
    </fieldset>
  );
}

export function CourseFilters() {
  const [lang, setLang] = useState<LangFilter>("All");
  const [level, setLevel] = useState<LevelFilter>("Any");

  const results = courses.filter(
    (c) => (lang === "All" || c.language === lang) && (level === "Any" || coversLevel(c, level)),
  );
  const filtered = lang !== "All" || level !== "Any";
  const reset = () => {
    setLang("All");
    setLevel("Any");
  };

  return (
    <div>
      <div className="flex flex-col gap-6 rounded-[var(--radius-card)] border border-brand-line bg-white p-5 sm:p-6 lg:flex-row lg:items-end lg:gap-10">
        <FilterGroup legend="Language" options={["All", ...LANGUAGES] as const} value={lang} onChange={setLang} />
        <FilterGroup legend="Your level (CEFR)" options={["Any", ...LEVELS] as const} value={level} onChange={setLevel} />
        {filtered && (
          <button
            type="button"
            onClick={reset}
            className="inline-flex min-h-11 items-center gap-2 self-start rounded-full px-2 font-bold text-brand underline-offset-4 hover:underline lg:ml-auto lg:self-end"
          >
            <RotateCcw className="size-4" aria-hidden="true" />
            Clear filters
          </button>
        )}
      </div>

      <p className="mt-6 font-bold text-brand-deep" role="status" aria-live="polite">
        Showing {results.length} of {courses.length} courses
        {lang !== "All" && ` in ${lang}`}
        {level !== "Any" && ` for level ${level}`}
      </p>

      {results.length > 0 ? (
        <ul className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {results.map((c) => (
            <li key={c.slug}>
              <CourseCard course={c} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-5 rounded-[var(--radius-card)] border-2 border-dashed border-brand-line bg-white p-8 text-center">
          <p className="font-display text-xl font-bold text-brand">No course matches this mix yet</p>
          <p className="mx-auto mt-2 max-w-md text-brand-deep/85">
            Try another level, or ask us about a private class. We can also run a free level check to find
            the right group for you.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-brand px-5 font-bold text-white hover:bg-brand-deep"
          >
            <RotateCcw className="size-4" aria-hidden="true" />
            Show all courses
          </button>
        </div>
      )}
    </div>
  );
}

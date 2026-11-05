import Link from "next/link";
import { ArrowRight, CalendarDays, Clock, MapPin, Monitor, Signal, Users } from "lucide-react";
import { LEVELS, levelIndex, levelRange, type Course } from "@/lib/courses";

/** CEFR A1–C1 strip: the levels a course covers are filled in blue. */
export function LevelBar({ course }: { course: Course }) {
  const from = levelIndex(course.levelFrom);
  const to = levelIndex(course.levelTo);
  return (
    <div>
      <p className="sr-only">
        Covers CEFR levels {course.levelFrom} to {course.levelTo}
      </p>
      <ol className="grid grid-cols-5 gap-1" aria-hidden="true">
        {LEVELS.map((l, i) => {
          const on = i >= from && i <= to;
          return (
            <li key={l} className="text-center">
              <span className={`block h-1.5 rounded-full ${on ? "bg-brand" : "bg-brand-line"}`} />
              <span className={`mt-1 block text-xs font-bold ${on ? "text-brand" : "text-slate"}`}>{l}</span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

function Chip({ icon: Icon, label, value }: { icon: typeof Signal; label: string; value: string }) {
  return (
    <li className="flex items-center gap-1.5 rounded-full bg-brand-soft px-3 py-1.5 font-display text-sm font-bold text-brand">
      <Icon className="size-4 shrink-0" aria-hidden="true" />
      <span className="sr-only">{label}: </span>
      {value}
    </li>
  );
}

export function CourseCard({ course, headingLevel = "h3" }: { course: Course; headingLevel?: "h2" | "h3" }) {
  const Heading = headingLevel;
  const FormatIcon = course.format === "Online" ? Monitor : MapPin;
  return (
    <article className="group flex h-full flex-col rounded-[var(--radius-card)] border border-brand-line bg-white p-6 transition-[border-color,box-shadow,transform] duration-200 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-[0_12px_32px_-16px_rgb(30_58_138/0.35)]">
      <div className="flex items-start justify-between gap-4">
        <Heading className="text-[1.375rem] font-extrabold leading-tight">{course.title}</Heading>
        <span
          className="grid size-11 shrink-0 place-items-center rounded-xl bg-brand font-display text-sm font-extrabold text-white"
          aria-hidden="true"
        >
          {course.code}
        </span>
      </div>

      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Course at a glance">
        <Chip icon={Signal} label="Level" value={levelRange(course)} />
        <Chip icon={CalendarDays} label="Duration" value={`${course.weeks} weeks`} />
        <Chip icon={FormatIcon} label="Format" value={course.format} />
      </ul>

      <p className="mt-4 text-brand-deep/85">{course.description}</p>

      <div className="mt-5">
        <LevelBar course={course} />
      </div>

      <dl className="mt-5 flex flex-wrap gap-x-5 gap-y-2.5 border-t border-brand-line pt-4 text-[0.9375rem]">
        <div className="flex items-center gap-2">
          <Users className="size-4 shrink-0 text-brand" aria-hidden="true" />
          <dt className="sr-only">Class size</dt>
          <dd>Max {course.maxClassSize} students</dd>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="size-4 shrink-0 text-brand" aria-hidden="true" />
          <dt className="sr-only">Hours per week</dt>
          <dd>{course.hoursPerWeek} hours / week</dd>
        </div>
        <div className="flex basis-full items-center gap-2">
          <CalendarDays className="size-4 shrink-0 text-brand" aria-hidden="true" />
          <dt className="sr-only">Example timetable</dt>
          <dd>{course.schedule}</dd>
        </div>
      </dl>

      <div className="mt-auto flex items-end justify-between gap-4 pt-6">
        <p className="leading-tight">
          <span className="block text-sm text-slate">From*</span>
          <span className="font-display text-2xl font-extrabold text-brand">£{course.priceFrom}</span>
        </p>
        <Link
          href={`/contact?course=${course.slug}#enquiry`}
          className="inline-flex min-h-11 items-center gap-1.5 rounded-full bg-brand px-5 font-bold text-white transition-colors hover:bg-brand-deep"
        >
          Enquire
          <span className="sr-only"> about {course.title}</span>
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

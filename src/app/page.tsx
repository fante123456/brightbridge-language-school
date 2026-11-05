import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CalendarClock,
  CheckCircle2,
  ClipboardCheck,
  MessagesSquare,
  Quote,
  Signal,
  UserRound,
  Users,
} from "lucide-react";
import { ArcEdge } from "@/components/ArcEdge";
import { buttonClass } from "@/components/Button";
import { CourseCard } from "@/components/CourseCard";
import { CtaBand } from "@/components/CtaBand";
import { Photo } from "@/components/Photo";
import { Container, Eyebrow, SectionHeading } from "@/components/Section";
import { courses } from "@/lib/courses";
import { ogImage, trialHref } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "BrightBridge Language School | Language Courses in Manchester" },
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "BrightBridge Language School | Language Courses in Manchester",
    description:
      "Friendly English, IELTS, Spanish, French and German courses in small classes in central Manchester and online.",
    images: [ogImage],
  },
};

const heroFacts = ["Max 10 students per class", "CEFR levels A1 to C1", "In person & online"];

const reasons = [
  {
    icon: Users,
    title: "Small, friendly classes",
    text: "Every group has 10 students or fewer, so everyone speaks in every lesson and teachers know your name.",
  },
  {
    icon: Signal,
    title: "Clear levels, clear progress",
    text: "Every course follows the CEFR levels from A1 to C1, with a progress review every four weeks.",
  },
  {
    icon: UserRound,
    title: "Qualified, patient teachers",
    text: "Our (fictional) teachers plan lessons around real situations: work, travel, study and everyday life.",
  },
  {
    icon: CalendarClock,
    title: "Times that fit your week",
    text: "Daytime, evening and Saturday classes, in our Oxford Road school or live online from home.",
  },
];

const steps = [
  { icon: ClipboardCheck, title: "Free level check", text: "A short online quiz and a 10-minute chat with a teacher." },
  { icon: MessagesSquare, title: "Free trial lesson", text: "Join a real 45-minute class and see how it feels." },
  { icon: CheckCircle2, title: "Join your group", text: "Pick the times that suit you and start learning." },
];

const testimonials = [
  {
    quote:
      "I was nervous about speaking, but the small class made it easy. After one term I could chat with my colleagues at lunch.",
    name: "Amara O.",
    course: "English for Beginners",
  },
  {
    quote:
      "The mock tests and writing feedback showed me exactly what to work on. I felt calm and prepared on exam day.",
    name: "Tomasz W.",
    course: "IELTS Preparation",
  },
  {
    quote:
      "Saturday Spanish is the best part of my week. Lots of speaking, lots of laughing, and I finally understand the grammar.",
    name: "Priya S.",
    course: "Spanish",
  },
];

export default function HomePage() {
  const popular = courses.filter((c) => c.popular);

  return (
    <>
      {/* Hero: royal blue band closed by the bridge arc */}
      <section className="relative overflow-hidden bg-brand pb-20 text-white sm:pb-28 lg:pb-36">
        <Container className="grid items-center gap-10 pt-10 sm:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:pt-20">
          <div>
            <div className="rise">
              <Eyebrow light>Language school in Manchester · Adults & teens</Eyebrow>
            </div>
            <h1 className="rise rise-2 mt-4 text-[2.75rem] font-extrabold leading-[1.04] text-white sm:text-6xl lg:text-[4.25rem]">
              Learn languages with{" "}
              <span className="relative inline-block whitespace-nowrap">
                confidence
                <svg
                  viewBox="0 0 300 24"
                  preserveAspectRatio="none"
                  className="absolute -bottom-2 left-0 h-3 w-full text-sun sm:h-4"
                  aria-hidden="true"
                >
                  <path d="M4 20C70 4 230 4 296 20" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
                </svg>
              </span>
            </h1>
            <p className="rise rise-3 mt-7 max-w-xl text-lg text-white/90 sm:text-xl">
              English, IELTS, Spanish, French and German in small, friendly classes on Oxford Road and live
              online. Start with a free level check and a free trial lesson.
            </p>
            <div className="rise rise-3 mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={trialHref} className={buttonClass("sun")}>
                Book a free trial lesson
              </Link>
              <Link href="/courses" className={buttonClass("outline-light")}>
                Explore courses
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
            <ul className="rise rise-3 mt-8 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-6">
              {heroFacts.map((f) => (
                <li key={f} className="num flex items-center gap-2 font-bold text-white/90">
                  <CheckCircle2 className="size-5 shrink-0 text-leaf" aria-hidden="true" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="rise rise-2 relative">
            <Photo
              name="hero"
              preload
              sizes="(min-width: 1200px) 540px, (min-width: 1024px) 45vw, 100vw"
              className="aspect-[4/3] rounded-[var(--radius-card)] ring-4 ring-white/10 lg:aspect-[5/5.2]"
            />
            <div className="absolute -bottom-5 left-4 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 text-brand-deep shadow-[0_16px_40px_-20px_rgb(23_37_84/0.6)] sm:left-6">
              <span className="grid size-10 place-items-center rounded-xl bg-sun font-display font-extrabold text-brand-deep">
                4
              </span>
              <p className="text-sm font-bold leading-snug">
                languages taught
                <span className="block font-normal text-brand-deep/80">English · Spanish · French · German</span>
              </p>
            </div>
          </div>
        </Container>
        <ArcEdge edge="bottom" />
      </section>

      {/* School intro */}
      <section aria-labelledby="intro-title" className="py-16 sm:py-24">
        <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Photo
            name="intro"
            sizes="(min-width: 1200px) 560px, (min-width: 1024px) 46vw, 100vw"
            className="reveal aspect-[4/3] rounded-[var(--radius-card)]"
          />
          <div className="reveal">
            <SectionHeading
              id="intro-title"
              eyebrow="Welcome to BrightBridge"
              title="A friendly school that helps you speak from day one"
            />
            <div className="mt-5 space-y-4 text-lg text-brand-deep/85">
              <p>
                BrightBridge is a (fictional) independent language school in central Manchester. We teach adults
                and teenagers who want to use a new language at work, on their travels, in exams or simply with
                new friends.
              </p>
              <p>
                Lessons are practical and relaxed: you talk, listen and write about real situations, and your
                teacher gives you clear, kind feedback every week.
              </p>
            </div>
            <Link
              href="/about"
              className="mt-7 inline-flex min-h-11 items-center gap-2 font-bold text-brand underline decoration-sun decoration-[3px] underline-offset-[6px] hover:decoration-brand"
            >
              Read our story
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </section>

      {/* Popular courses */}
      <section aria-labelledby="popular-title" className="pb-16 sm:pb-24">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              id="popular-title"
              eyebrow="Popular courses"
              title="Find the right course for your level"
              intro="Level, length and format are shown on every course, so you can compare at a glance."
            />
            <Link href="/courses" className={buttonClass("outline", "shrink-0 self-start md:self-auto")}>
              See all {courses.length} courses
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {popular.map((c) => (
              <li key={c.slug} className="reveal">
                <CourseCard course={c} />
              </li>
            ))}
          </ul>
          <p className="mt-5 text-[0.9375rem] text-slate">
            *Fictional example prices in GBP for this demo website.
          </p>
        </Container>
      </section>

      {/* Why choose us */}
      <section aria-labelledby="why-title" className="bg-brand-soft py-16 sm:py-24">
        <Container>
          <SectionHeading
            id="why-title"
            eyebrow="Why choose us"
            title="Learning that feels clear, calm and personal"
            align="center"
          />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r) => (
              <li key={r.title} className="reveal rounded-[var(--radius-card)] bg-white p-6">
                <span className="grid size-12 place-items-center rounded-xl bg-brand text-white">
                  <r.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-extrabold">{r.title}</h3>
                <p className="mt-2 text-brand-deep/85">{r.text}</p>
              </li>
            ))}
          </ul>

          <div className="reveal mt-12 rounded-[var(--radius-card)] bg-white p-6 sm:p-8">
            <h3 className="text-center text-2xl font-extrabold">Getting started takes three easy steps</h3>
            <ol className="mt-8 grid gap-8 md:grid-cols-3 md:gap-6">
              {steps.map((s, i) => (
                <li key={s.title} className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-sun font-display text-lg font-extrabold text-brand-deep">
                    {i + 1}
                  </span>
                  <div>
                    <h4 className="flex items-center gap-2 text-lg font-extrabold">
                      <s.icon className="size-5 text-brand" aria-hidden="true" />
                      {s.title}
                    </h4>
                    <p className="mt-1 text-brand-deep/85">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* Demo testimonials */}
      <section aria-labelledby="voices-title" className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            id="voices-title"
            eyebrow="Student voices"
            title="What our students say"
            intro="These are demo testimonials written for this fictional school, not real reviews."
          />
          <ul className="mt-10 grid gap-5 lg:grid-cols-3">
            {testimonials.map((t) => (
              <li key={t.name} className="reveal">
                <figure className="flex h-full flex-col rounded-[var(--radius-card)] border border-brand-line bg-white p-6 sm:p-7">
                  <Quote className="size-8 text-brand/25" aria-hidden="true" />
                  <blockquote className="mt-3 flex-1 text-lg leading-relaxed text-brand-deep">
                    <p>“{t.quote}”</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center justify-between gap-3 border-t border-brand-line pt-4">
                    <span>
                      <span className="block font-bold text-brand">{t.name}</span>
                      <span className="text-[0.9375rem] text-slate">{t.course}</span>
                    </span>
                    <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand">
                      Demo
                    </span>
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}

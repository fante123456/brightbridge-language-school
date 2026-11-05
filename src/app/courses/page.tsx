import type { Metadata } from "next";
import { BookOpen, ClipboardCheck, FileText, Headphones } from "lucide-react";
import { CourseFilters } from "@/components/CourseFilters";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Container, SectionHeading } from "@/components/Section";
import { courses } from "@/lib/courses";
import { ogImage } from "@/lib/site";

const description =
  "Compare English, Business English, IELTS Preparation, Spanish, French and German courses in Manchester and online. Filter by language and CEFR level A1 to C1.";

export const metadata: Metadata = {
  title: "Language Courses in Manchester",
  description,
  alternates: { canonical: "/courses" },
  openGraph: { url: "/courses", title: "Language Courses | BrightBridge Language School", description, images: [ogImage] },
};

const levels = [
  { code: "A1", name: "Beginner", text: "Understand and use everyday phrases, introduce yourself and ask simple questions." },
  { code: "A2", name: "Elementary", text: "Handle routine tasks like shopping, directions and talking about your day." },
  { code: "B1", name: "Intermediate", text: "Deal with most travel situations and talk about work, interests and plans." },
  { code: "B2", name: "Upper intermediate", text: "Join discussions with ease and understand the main ideas of complex texts." },
  { code: "C1", name: "Advanced", text: "Express yourself fluently and flexibly for study, work and social life." },
];

const included = [
  { icon: ClipboardCheck, title: "Free level check", text: "Before you start, so you join the right group." },
  { icon: BookOpen, title: "Course materials", text: "Digital course book and worksheets for every lesson." },
  { icon: Headphones, title: "Online practice", text: "Listening tasks and lesson notes to review at home." },
  { icon: FileText, title: "Progress reports", text: "Written feedback every four weeks and a certificate of attendance." },
];

export default function CoursesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our courses"
        title="Language courses for every level"
        intro={
          <p>
            {courses.length} courses in English, Spanish, French and German, from complete beginner (A1) to
            advanced (C1). Every course shows its level, length and format, so you can choose with confidence.
          </p>
        }
        photo="courses"
      />

      <section aria-labelledby="finder-title" className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            id="finder-title"
            eyebrow="Course finder"
            title="Find your course"
            intro="Choose a language and your current level. Not sure of your level? Pick “Any” and ask us for a free level check."
          />
          <div className="mt-10">
            <CourseFilters />
          </div>
          <p className="mt-6 text-[0.9375rem] text-slate">
            *Fictional example prices in GBP for this demo website. Timetables are examples.
          </p>
        </Container>
      </section>

      <section aria-labelledby="levels-title" className="bg-brand-soft py-16 sm:py-24">
        <Container>
          <SectionHeading
            id="levels-title"
            eyebrow="How levels work"
            title="CEFR levels, explained simply"
            intro="We use the Common European Framework of Reference (CEFR), the scale most schools and employers recognise."
          />
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {levels.map((l, i) => (
              <li key={l.code} className="reveal rounded-[var(--radius-card)] bg-white p-5">
                <div className="flex items-center gap-3">
                  <span className="grid size-12 place-items-center rounded-xl bg-brand font-display text-lg font-extrabold text-white">
                    {l.code}
                  </span>
                  <h3 className="text-lg font-extrabold leading-tight">{l.name}</h3>
                </div>
                <div className="mt-4 grid grid-cols-5 gap-1" aria-hidden="true">
                  {levels.map((_, j) => (
                    <span key={j} className={`h-1.5 rounded-full ${j <= i ? "bg-brand" : "bg-brand-line"}`} />
                  ))}
                </div>
                <p className="mt-4 text-brand-deep/85">{l.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section aria-labelledby="included-title" className="py-16 sm:py-24">
        <Container>
          <SectionHeading id="included-title" eyebrow="Included in every course" title="Everything you need to keep going" />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {included.map((x) => (
              <li key={x.title} className="reveal flex gap-4 rounded-[var(--radius-card)] border border-brand-line bg-white p-5">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-sun text-brand-deep">
                  <x.icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-extrabold">{x.title}</h3>
                  <p className="mt-1 text-brand-deep/85">{x.text}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl text-brand-deep/85">
            Our certificates confirm attendance and the level you studied. They are not official exam
            certificates, and we never promise exam results: we help you prepare as well as you can.
          </p>
        </Container>
      </section>

      <CtaBand
        title="Not sure which course is right?"
        text="Book a free level check and trial lesson. A teacher will help you choose the right group."
      />
    </>
  );
}

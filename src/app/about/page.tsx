import type { Metadata } from "next";
import { Compass, Ear, HeartHandshake, MessageCircle, Sparkles, Target } from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import { Container, SectionHeading } from "@/components/Section";
import { ogImage } from "@/lib/site";

const description =
  "Meet BrightBridge Language School in Manchester: our fictional story, our teaching philosophy, our friendly teachers and the values behind every lesson.";

export const metadata: Metadata = {
  title: "About Our School",
  description,
  alternates: { canonical: "/about" },
  openGraph: { url: "/about", title: "About BrightBridge Language School", description, images: [ogImage] },
};

const timeline = [
  { year: "2014", text: "Two teachers start an evening English class for six adults in a borrowed room on Oxford Road." },
  { year: "2017", text: "Spanish and French join the timetable, and Saturday classes for teenagers begin." },
  { year: "2020", text: "Live online classes launch, so learners can join from home or from work." },
  { year: "Today", text: "Eight courses in four languages, still in small groups and still on Oxford Road." },
];

const philosophy = [
  {
    icon: MessageCircle,
    title: "Speak from the first lesson",
    text: "We use a communicative approach: you practise real conversations early, and grammar supports what you want to say.",
  },
  {
    icon: Target,
    title: "Tasks from real life",
    text: "Booking a doctor, leading a meeting, writing an essay: lessons are built around things you will actually do.",
  },
  {
    icon: Ear,
    title: "Kind, clear feedback",
    text: "Teachers correct in a way that builds confidence, and you get written feedback on your progress every four weeks.",
  },
];

const teachers = [
  {
    name: "Hannah Clarke",
    initials: "HC",
    role: "Head of English & IELTS",
    langs: "Teaches English, IELTS",
    bio: "Loves turning nervous speakers into confident ones, one small conversation at a time.",
  },
  {
    name: "Mateo Ruiz",
    initials: "MR",
    role: "Spanish teacher",
    langs: "Teaches Spanish",
    bio: "Brings music, food and stories into class so new words are easy to remember.",
  },
  {
    name: "Camille Laurent",
    initials: "CL",
    role: "French teacher",
    langs: "Teaches French",
    bio: "Known for clear grammar explanations and patient help with pronunciation.",
  },
  {
    name: "Lena Hoffmann",
    initials: "LH",
    role: "German & online learning lead",
    langs: "Teaches German",
    bio: "Makes online lessons feel as warm and lively as a real classroom.",
  },
];

const values = [
  { icon: Sparkles, title: "Confidence before perfection", text: "Mistakes are part of learning. We celebrate every attempt to speak." },
  { icon: Compass, title: "Clear progress", text: "You always know your level, your next goal and how to get there." },
  { icon: HeartHandshake, title: "Respect for everyone", text: "Our classrooms welcome every background, age and accent." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About BrightBridge"
        title="A small school with a big welcome"
        intro={
          <p>
            Since our first evening class, we have helped adults and teenagers in Manchester build a bridge to a
            new language. Our story and team are fictional, created for this demo website.
          </p>
        }
        photo="teacher"
        photoPosition="object-[80%_center]"
      />

      {/* Story */}
      <section aria-labelledby="story-title" className="py-16 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div className="reveal">
            <SectionHeading
              id="story-title"
              eyebrow="Our story"
              title="From one evening class to four languages"
            />
            <div className="mt-5 space-y-4 text-lg text-brand-deep/85">
              <p>
                BrightBridge began with a simple idea: language lessons should feel friendly, practical and
                easy to fit around a busy life. Our founders wanted a school where learners could ask any
                question without feeling embarrassed.
              </p>
              <p>
                We have grown since then, but we have kept what matters: small groups, teachers who listen, and
                a calm, encouraging classroom.
              </p>
            </div>
          </div>
          <ol className="reveal relative space-y-6 border-l-2 border-brand-line pl-8">
            {timeline.map((t) => (
              <li key={t.year} className="relative">
                <span
                  className="absolute -left-[41px] top-1 size-4 rounded-full border-4 border-paper bg-brand"
                  aria-hidden="true"
                />
                <p className="font-display text-xl font-extrabold text-brand">{t.year}</p>
                <p className="mt-1 text-brand-deep/85">{t.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Philosophy */}
      <section aria-labelledby="philosophy-title" className="bg-brand-soft py-16 sm:py-24">
        <Container>
          <SectionHeading
            id="philosophy-title"
            eyebrow="Teaching philosophy"
            title="We teach people, not just grammar"
            intro="Every lesson is planned around three simple ideas."
          />
          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {philosophy.map((p) => (
              <li key={p.title} className="reveal rounded-[var(--radius-card)] bg-white p-6 sm:p-7">
                <span className="grid size-12 place-items-center rounded-xl bg-brand text-white">
                  <p.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-extrabold">{p.title}</h3>
                <p className="mt-2 text-brand-deep/85">{p.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Teachers */}
      <section aria-labelledby="teachers-title" className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            id="teachers-title"
            eyebrow="Meet the teachers"
            title="Friendly faces at the front of the class"
            intro="Our teachers are fictional characters for this demo. Every real class would be led by a qualified, experienced teacher."
          />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {teachers.map((t) => (
              <li key={t.name} className="reveal flex flex-col rounded-[var(--radius-card)] border border-brand-line bg-white p-6">
                <span
                  className="grid size-16 place-items-center rounded-2xl bg-brand font-display text-xl font-extrabold text-white"
                  aria-hidden="true"
                >
                  {t.initials}
                </span>
                <h3 className="mt-5 text-xl font-extrabold">{t.name}</h3>
                <p className="font-bold text-brand-deep">{t.role}</p>
                <p className="mt-3 flex-1 text-brand-deep/85">{t.bio}</p>
                <p className="mt-4 inline-flex self-start rounded-full bg-brand-soft px-3 py-1 text-sm font-bold text-brand">
                  {t.langs}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Classroom image + values */}
      <section aria-labelledby="values-title" className="pb-16 sm:pb-24">
        <Container className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <figure className="reveal">
            <Photo
              name="classroom"
              sizes="(min-width: 1200px) 600px, (min-width: 1024px) 50vw, 100vw"
              className="aspect-[4/3] rounded-[var(--radius-card)]"
            />
            <figcaption className="mt-3 text-[0.9375rem] text-slate">
              Small groups mean every learner gets time to speak and ask questions.
            </figcaption>
          </figure>
          <div className="reveal">
            <SectionHeading id="values-title" eyebrow="Learning values" title="What you can expect from us" />
            <ul className="mt-8 space-y-6">
              {values.map((v) => (
                <li key={v.title} className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-sun text-brand-deep">
                    <v.icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-xl font-extrabold">{v.title}</h3>
                    <p className="mt-1 text-brand-deep/85">{v.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}

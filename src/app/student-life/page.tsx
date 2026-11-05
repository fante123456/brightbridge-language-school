import type { Metadata } from "next";
import {
  BookMarked,
  Clapperboard,
  Coffee,
  Laptop,
  LifeBuoy,
  Map,
  MessagesSquare,
  Video,
  CheckCircle2,
} from "lucide-react";
import { CtaBand } from "@/components/CtaBand";
import { PageHero } from "@/components/PageHero";
import { Photo } from "@/components/Photo";
import type { PhotoKey } from "@/lib/photos";
import { Container, SectionHeading } from "@/components/Section";
import { ogImage } from "@/lib/site";

const description =
  "Discover student life at BrightBridge Language School: friendly classrooms, live online learning, group activities, student support and learning resources.";

export const metadata: Metadata = {
  title: "Student Life",
  description,
  alternates: { canonical: "/student-life" },
  openGraph: { url: "/student-life", title: "Student Life | BrightBridge Language School", description, images: [ogImage] },
};

const activities = [
  { icon: Coffee, title: "Conversation café", text: "Every Thursday evening: relaxed chat in your new language over tea and biscuits." },
  { icon: Clapperboard, title: "Film nights", text: "A monthly film with subtitles, followed by an easy group discussion." },
  { icon: Map, title: "City walks", text: "Explore Manchester with your class and practise asking for directions on the way." },
  { icon: MessagesSquare, title: "Language exchange", text: "Meet learners of other languages and swap practice time." },
];

function Feature({
  id,
  eyebrow,
  title,
  photo,
  points,
  children,
  flip = false,
}: {
  id: string;
  eyebrow: string;
  title: string;
  photo: PhotoKey;
  points: string[];
  children: React.ReactNode;
  flip?: boolean;
}) {
  return (
    <section aria-labelledby={id} className="py-12 sm:py-16">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Photo
          name={photo}
          sizes="(min-width: 1200px) 560px, (min-width: 1024px) 46vw, 100vw"
          className={`reveal aspect-[4/3] rounded-[var(--radius-card)] ${flip ? "lg:order-2" : ""}`}
        />
        <div className="reveal">
          <SectionHeading id={id} eyebrow={eyebrow} title={title} />
          <div className="mt-5 text-lg text-brand-deep/85">{children}</div>
          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-leaf" aria-hidden="true" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default function StudentLifePage() {
  return (
    <>
      <PageHero
        eyebrow="Student life"
        title="Learning is better together"
        intro={
          <p>
            At BrightBridge you are part of a friendly community. Practise in class, online and out in the city,
            with help whenever you need it.
          </p>
        }
        photo="conversation"
      />

      <div className="pt-4 sm:pt-8">
        <Feature
          id="classroom-title"
          eyebrow="Classroom atmosphere"
          title="Bright rooms, small groups, lots of talking"
          photo="handUp"
          points={[
            "Groups of 10 students or fewer, so everyone speaks every lesson",
            "Pair and group work, not hours of listening to the teacher",
            "A calm space where questions are always welcome",
          ]}
        >
          <p>
            Our classrooms on Oxford Road are light, modern and quiet. Lessons mix speaking games, short
            explanations and real tasks, so the time passes quickly.
          </p>
        </Feature>

        <Feature
          id="online-title"
          eyebrow="Online learning"
          title="Live classes from your kitchen table"
          photo="online"
          flip
          points={[
            "Live video lessons with the same teachers and small groups",
            "Breakout rooms for pair practice",
            "Lesson recordings and notes in your student portal",
          ]}
        >
          <p>
            Can&apos;t get to Manchester? Join live online classes from home or work. All you need is a laptop or
            tablet, headphones and a steady internet connection.
          </p>
        </Feature>
      </div>

      <section aria-labelledby="activities-title" className="bg-brand-soft py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <SectionHeading
              id="activities-title"
              eyebrow="Group activities"
              title="Practise outside the classroom"
              intro="Free social events help you use your new language in real life and make friends along the way."
            />
            <Photo
              name="group"
              sizes="(min-width: 1200px) 480px, (min-width: 1024px) 40vw, 100vw"
              className="reveal mt-8 aspect-[4/3] rounded-[var(--radius-card)]"
            />
          </div>
          <ul className="grid content-start gap-4 sm:grid-cols-2">
            {activities.map((a) => (
              <li key={a.title} className="reveal rounded-[var(--radius-card)] bg-white p-6">
                <span className="grid size-12 place-items-center rounded-xl bg-brand text-white">
                  <a.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-extrabold">{a.title}</h3>
                <p className="mt-2 text-brand-deep/85">{a.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <Feature
        id="support-title"
        eyebrow="Student support"
        title="Help is always a question away"
        photo="support"
        points={[
          "Free level check and a progress review every four weeks",
          "Weekly drop-in study advice with a teacher",
          "Tell us what you need: we adapt materials and seating for accessibility",
          "Parents of teen learners receive a short termly update",
        ]}
      >
        <p>
          Learning a language has ups and downs. Our team helps you plan, stay motivated and choose your next
          step.
        </p>
      </Feature>

      <Feature
        id="resources-title"
        eyebrow="Learning resources"
        title="Tools to keep learning between lessons"
        photo="resources"
        flip
        points={[
          "Quiet self-study room with computers, open during school hours",
          "Library of graded readers and audio books",
          "Weekly homework packs and vocabulary lists",
          "Student portal with lesson notes and listening practice",
        ]}
      >
        <p>
          Short, regular practice makes a big difference. We give you simple materials that fit into ten
          minutes on the bus or a quiet evening at home.
        </p>
      </Feature>

      <section aria-label="Key facts" className="pb-16 pt-4 sm:pb-24">
        <Container>
          <ul className="grid gap-4 rounded-[var(--radius-card)] border border-brand-line bg-white p-6 sm:grid-cols-2 sm:p-8 lg:grid-cols-4">
            {[
              { icon: LifeBuoy, text: "Support desk during opening hours" },
              { icon: Video, text: "Online classes on any laptop" },
              { icon: BookMarked, text: "Course materials included" },
              { icon: Laptop, text: "Free Wi-Fi and study computers" },
            ].map((f) => (
                <li key={f.text} className="flex items-center gap-3 font-bold">
                  <f.icon className="size-6 shrink-0 text-brand" aria-hidden="true" />
                  {f.text}
                </li>
              ))}
          </ul>
        </Container>
      </section>

      <CtaBand title="Come and see us in action" text="Book a free trial lesson and meet our teachers and students." />
    </>
  );
}

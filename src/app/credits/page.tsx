import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Section";
import { photos } from "@/lib/photos";

export const metadata: Metadata = {
  title: "Photo Credits",
  description: "Credits for the Unsplash photographers whose free-licence photos appear on the BrightBridge demo website.",
  alternates: { canonical: "/credits" },
};

export default function CreditsPage() {
  const list = Object.values(photos);
  return (
    <>
      <PageHero
        eyebrow="Credits"
        title="Photo credits"
        intro={
          <p>
            All photos are free-licence images from Unsplash. Thank you to the photographers below. BrightBridge
            is a fictional school; the people shown are not our students or teachers.
          </p>
        }
        photo="resources"
      />
      <section aria-label="Photographers" className="py-16 sm:py-20">
        <Container>
          <ul className="grid gap-4 md:grid-cols-2">
            {list.map((p) => (
              <li key={p.id} className="rounded-[var(--radius-card)] border border-brand-line bg-white p-5">
                <p className="text-brand-deep/90">{p.alt}</p>
                <p className="mt-2 font-bold">
                  Photo by{" "}
                  <a
                    href={`https://unsplash.com/@${p.username}?utm_source=brightbridge_demo&utm_medium=referral`}
                    className="text-brand underline underline-offset-4"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {p.author}
                  </a>{" "}
                  on{" "}
                  <a
                    href="https://unsplash.com/?utm_source=brightbridge_demo&utm_medium=referral"
                    className="text-brand underline underline-offset-4"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Unsplash
                  </a>
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}

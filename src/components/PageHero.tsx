import type { ReactNode } from "react";
import { ArcEdge } from "./ArcEdge";
import { Photo } from "./Photo";
import { Container, Eyebrow } from "./Section";
import type { PhotoKey } from "@/lib/photos";

/** Blue page header for inner pages, closed by the bridge arc. */
export function PageHero({
  eyebrow,
  title,
  intro,
  photo,
  photoPosition = "",
  children,
}: {
  eyebrow: string;
  title: string;
  intro: ReactNode;
  photo: PhotoKey;
  /** Tailwind object-position class to keep the subject in frame. */
  photoPosition?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-brand pb-16 text-white sm:pb-24 lg:pb-32">
      <Container className="grid items-center gap-10 pt-10 sm:pt-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:pt-16">
        <div className="rise">
          <Eyebrow light>{eyebrow}</Eyebrow>
          <h1 className="mt-4 text-[2.5rem] font-extrabold leading-[1.06] text-white sm:text-[3.25rem]">
            {title}
          </h1>
          <div className="mt-5 max-w-xl text-lg text-white/90 sm:text-xl">{intro}</div>
          {children}
        </div>
        <Photo
          name={photo}
          sizes="(min-width: 1200px) 500px, (min-width: 1024px) 42vw, 100vw"
          imgClassName={photoPosition}
          preload
          className="rise rise-2 aspect-[4/3] rounded-[var(--radius-card)] ring-4 ring-white/10 sm:aspect-[16/9] lg:aspect-[5/4]"
        />
      </Container>
      <ArcEdge edge="bottom" />
    </section>
  );
}

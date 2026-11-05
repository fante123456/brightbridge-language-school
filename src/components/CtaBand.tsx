import Link from "next/link";
import { Phone } from "lucide-react";
import { ArcEdge } from "./ArcEdge";
import { buttonClass } from "./Button";
import { Container } from "./Section";
import { site, trialHref } from "@/lib/site";

/** Closing call to action shown above the footer on every page. */
export function CtaBand({
  title = "Try a free 45-minute trial lesson",
  text = "Meet a teacher, check your level and see how our classes feel. No payment details needed.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section aria-labelledby="cta-title" className="relative overflow-hidden bg-brand pb-16 pt-24 text-white sm:pb-20 sm:pt-32 lg:pt-40">
      <ArcEdge edge="top" />
      <Container className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="reveal max-w-2xl">
          <h2 id="cta-title" className="text-[2rem] font-extrabold leading-[1.12] text-white sm:text-[2.5rem]">
            {title}
          </h2>
          <p className="mt-4 text-lg text-white/90">{text}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Link href={trialHref} className={buttonClass("sun")}>
            Book a free trial lesson
          </Link>
          <a href={site.phoneHref} className={buttonClass("outline-light")}>
            <Phone className="size-4" aria-hidden="true" />
            {site.phone}
          </a>
        </div>
      </Container>
    </section>
  );
}

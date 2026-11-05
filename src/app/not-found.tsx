import Link from "next/link";
import { buttonClass } from "@/components/Button";
import { Container, Eyebrow } from "@/components/Section";

export default function NotFound() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="max-w-2xl text-center [&_p:first-child]:justify-center">
        <Eyebrow>Page not found</Eyebrow>
        <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">This page took a wrong turn</h1>
        <p className="mt-5 text-lg text-brand-deep/85">
          The page you are looking for does not exist or has moved. Let&apos;s get you back on the right road.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className={buttonClass("brand")}>
            Back to home
          </Link>
          <Link href="/courses" className={buttonClass("outline")}>
            Browse courses
          </Link>
        </div>
      </Container>
    </section>
  );
}

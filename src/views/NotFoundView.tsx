import Link from "next/link";
import { buttonClass } from "@/components/Button";
import { Container, Eyebrow } from "@/components/Section";

/** Bilingual 404: French first, with a short English line and link. */
export function NotFoundView() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="max-w-2xl text-center [&_p:first-child]:justify-center">
        <Eyebrow>Page introuvable</Eyebrow>
        <h1 className="mt-4 text-4xl font-extrabold sm:text-5xl">Oups, cette page n&apos;existe pas</h1>
        <p className="mt-5 text-lg text-brand-deep/85">
          La page que vous cherchez n&apos;existe pas ou a été déplacée.
        </p>
        <p lang="en" className="mt-2 text-brand-deep/75">
          This page does not exist or has moved.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className={buttonClass("brand")}>
            Retour à l&apos;accueil
          </Link>
          <Link href="/courses" className={buttonClass("outline")}>
            Voir les cours
          </Link>
          <Link href="/en" lang="en" hrefLang="en" className={buttonClass("outline")}>
            English home page
          </Link>
        </div>
      </Container>
    </section>
  );
}

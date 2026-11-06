import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Section";
import { pageMeta, type Locale } from "@/lib/i18n";
import { photos } from "@/lib/photos";

const text = {
  fr: {
    metaTitle: "Crédits photos",
    metaDescription: "Crédits des photographes Unsplash dont les photos libres de droits illustrent cette démo.",
    eyebrow: "Crédits",
    title: "Crédits photos",
    intro:
      "Toutes les photos sont des images libres de droits d'Unsplash, utilisées à titre d'illustration. Les personnes photographiées ne sont pas des élèves ni des enseignants de Let's Go English. Merci aux photographes ci-dessous.",
    by: "Photo de",
    on: "sur",
    newTab: "(nouvel onglet)",
    list: "Photographes",
  },
  en: {
    metaTitle: "Photo Credits",
    metaDescription: "Credits for the Unsplash photographers whose free-licence photos illustrate this demo.",
    eyebrow: "Credits",
    title: "Photo credits",
    intro:
      "All photos are free-licence images from Unsplash, used as illustrations. The people shown are not Let's Go English students or teachers. Thank you to the photographers below.",
    by: "Photo by",
    on: "on",
    newTab: "(opens in a new tab)",
    list: "Photographers",
  },
};

export function creditsMeta(locale: Locale) {
  const t = text[locale];
  return pageMeta({ locale, path: "/credits", title: t.metaTitle, description: t.metaDescription });
}

export function CreditsView({ locale }: { locale: Locale }) {
  const t = text[locale];
  const list = Object.values(photos);
  return (
    <>
      <PageHero locale={locale} eyebrow={t.eyebrow} title={t.title} intro={<p>{t.intro}</p>} photo="resources" />
      <section aria-label={t.list} className="py-16 sm:py-20">
        <Container>
          <ul className="grid gap-4 md:grid-cols-2">
            {list.map((p) => (
              <li key={p.id} className="rounded-[var(--radius-card)] border border-brand-line bg-white p-5">
                <p className="text-brand-deep/90">{p.alt[locale]}</p>
                <p className="mt-2 font-bold">
                  {t.by}{" "}
                  <a
                    href={`https://unsplash.com/@${p.username}?utm_source=letsgoenglish_demo&utm_medium=referral`}
                    className="text-brand underline underline-offset-4"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {p.author}
                    <span className="sr-only"> {t.newTab}</span>
                  </a>{" "}
                  {t.on}{" "}
                  <a
                    href="https://unsplash.com/?utm_source=letsgoenglish_demo&utm_medium=referral"
                    className="text-brand underline underline-offset-4"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Unsplash
                    <span className="sr-only"> {t.newTab}</span>
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

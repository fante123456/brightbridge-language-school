import type { Metadata } from "next";
import { Suspense } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import { ContactFormFromUrl } from "@/components/ContactFormFromUrl";
import { MapCard } from "@/components/MapCard";
import { PageHero } from "@/components/PageHero";
import { Container, SectionHeading } from "@/components/Section";
import { hours, ogImage, site } from "@/lib/site";

const description =
  "Contact BrightBridge Language School at 42 Oxford Road, Manchester. Call 0161 555 6841, email study@brightbridge.co.uk or book a free trial lesson online.";

export const metadata: Metadata = {
  title: "Contact & Free Trial Lesson",
  description,
  alternates: { canonical: "/contact" },
  openGraph: { url: "/contact", title: "Contact | BrightBridge Language School", description, images: [ogImage] },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's find your perfect class"
        intro={
          <p>
            Book a free trial lesson, ask about a course or request a free level check. We reply within one
            working day.
          </p>
        }
        photo="welcome"
      >
        <a
          href="#enquiry"
          className="mt-8 inline-flex min-h-12 items-center rounded-full bg-sun px-6 font-bold text-brand-deep transition-colors hover:bg-sun-deep focus-on-sun"
        >
          Book a free trial lesson
        </a>
      </PageHero>

      <section aria-labelledby="details-title" className="py-16 sm:py-20">
        <Container>
          <h2 id="details-title" className="sr-only">
            Contact details
          </h2>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <li className="rounded-[var(--radius-card)] border border-brand-line bg-white p-6">
              <MapPin className="size-6 text-brand" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-extrabold">Address</h3>
              <address className="mt-1 not-italic text-brand-deep/90">
                {site.address.street}
                <br />
                {site.address.city} {site.address.postcode}
                <br />
                {site.address.country}
              </address>
            </li>
            <li className="rounded-[var(--radius-card)] border border-brand-line bg-white p-6">
              <Phone className="size-6 text-brand" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-extrabold">Phone</h3>
              <a href={site.phoneHref} className="mt-1 block font-bold text-brand underline-offset-4 hover:underline">
                {site.phone}
              </a>
              <p className="text-[0.9375rem] text-slate">During opening hours</p>
            </li>
            <li className="rounded-[var(--radius-card)] border border-brand-line bg-white p-6">
              <Mail className="size-6 text-brand" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-extrabold">Email</h3>
              <a
                href={`mailto:${site.email}`}
                className="mt-1 block break-all font-bold text-brand underline-offset-4 hover:underline"
              >
                {site.email}
              </a>
              <p className="text-[0.9375rem] text-slate">Reply within one working day</p>
            </li>
            <li className="rounded-[var(--radius-card)] border border-brand-line bg-white p-6">
              <Clock className="size-6 text-brand" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-extrabold">Opening hours</h3>
              <dl className="mt-1 space-y-1 text-[0.9375rem]">
                {hours.map((h) => (
                  <div key={h.days} className="flex justify-between gap-3">
                    <dt>{h.days}</dt>
                    <dd className="font-bold">{h.time}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-2 text-sm text-slate">Fictional hours for this demo.</p>
            </li>
          </ul>
        </Container>
      </section>

      <section id="enquiry" aria-labelledby="enquiry-title" className="scroll-mt-24 bg-brand-soft py-16 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <SectionHeading
              id="enquiry-title"
              eyebrow="Free trial lesson"
              title="Book a free trial lesson"
              intro="Tell us a little about yourself and the course you are interested in. A teacher will suggest a trial class at your level."
            />
            <ul className="mt-8 space-y-4">
              {[
                "45 minutes in a real class, in person or online",
                "Free level check included",
                "No payment details needed",
              ].map((x) => (
                <li key={x} className="flex items-center gap-3 font-bold">
                  <span className="size-2.5 shrink-0 rounded-full bg-leaf" aria-hidden="true" />
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-[var(--radius-card)] bg-white p-6 shadow-[0_20px_50px_-30px_rgb(23_37_84/0.45)] sm:p-8">
            <Suspense fallback={<ContactForm />}>
              <ContactFormFromUrl />
            </Suspense>
          </div>
        </Container>
      </section>

      <section aria-labelledby="find-title" className="py-16 sm:py-24">
        <Container>
          <SectionHeading
            id="find-title"
            eyebrow="Find us"
            title="In the heart of Manchester"
            intro="Our school is on Oxford Road, close to the tram, trains and many bus routes."
          />
          <div className="mt-10">
            <MapCard />
          </div>
        </Container>
      </section>
    </>
  );
}

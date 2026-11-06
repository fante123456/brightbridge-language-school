"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { AlertCircle, Info, Phone, Send } from "lucide-react";
import { buttonClass } from "./Button";
import { courses } from "@/lib/courses";
import type { Locale } from "@/lib/i18n";
import { site } from "@/lib/site";

type Fields = {
  name: string;
  email: string;
  phone: string;
  enquiry: string;
  course: string;
  learner: string;
  message: string;
  consent: boolean;
};

type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = {
  name: "",
  email: "",
  phone: "",
  enquiry: "info",
  course: "",
  learner: "",
  message: "",
  consent: false,
};

const text = {
  fr: {
    enquiryLegend: "Votre demande",
    enquiryTypes: [
      { value: "info", label: "Tarifs et plannings" },
      { value: "signup", label: "Inscription 2026-2027" },
      { value: "other", label: "Autre question" },
    ],
    name: "Nom et prénom",
    email: "E-mail",
    phone: "Téléphone",
    required: "(obligatoire)",
    optional: "(facultatif)",
    course: "Cours ou atelier",
    chooseCourse: "Choisir un cours ou un atelier",
    unsure: "Je ne sais pas encore",
    learner: "Pour qui ?",
    chooseLearner: "Choisir",
    learners: [
      { value: "child", label: "Pour mon enfant" },
      { value: "teen", label: "Pour mon ado" },
      { value: "me", label: "Pour moi (adulte)" },
    ],
    message: "Message",
    messageHint: (n: number) => `Âge de l'enfant, jours qui vous conviennent… ${n}/1000`,
    consent: "J'accepte d'être recontacté(e) au sujet de ma demande.",
    send: "Envoyer la demande",
    errors: {
      name: "Indiquez votre nom.",
      emailEmpty: "Indiquez votre adresse e-mail.",
      email: "Indiquez un e-mail valide, par exemple nom@exemple.fr.",
      phone: "Indiquez un numéro valide, ou laissez ce champ vide.",
      course: "Choisissez un cours, ou « Je ne sais pas encore ».",
      learner: "Indiquez pour qui est la demande.",
      message: "Votre message doit faire moins de 1 000 caractères.",
      consent: "Cochez cette case pour continuer.",
    },
    check: (n: number) => `Vérifiez ${n === 1 ? "1 champ" : `${n} champs`} :`,
    demoTitle: `Formulaire de démonstration – appelez le ${site.phone}`,
    demoText:
      "Ce site est un projet d'entraînement non officiel : rien n'a été envoyé à Let's Go English et rien n'a été enregistré. Pour toute demande, appelez l'école ou passez à l'accueil.",
    call: `Appeler le ${site.phone}`,
    back: "Revenir au formulaire",
  },
  en: {
    enquiryLegend: "Your enquiry",
    enquiryTypes: [
      { value: "info", label: "Prices and timetables" },
      { value: "signup", label: "Enrolment 2026-2027" },
      { value: "other", label: "Another question" },
    ],
    name: "Full name",
    email: "Email",
    phone: "Phone",
    required: "(required)",
    optional: "(optional)",
    course: "Class or workshop",
    chooseCourse: "Choose a class or workshop",
    unsure: "Not sure yet",
    learner: "Who is it for?",
    chooseLearner: "Choose",
    learners: [
      { value: "child", label: "For my child" },
      { value: "teen", label: "For my teenager" },
      { value: "me", label: "For me (adult)" },
    ],
    message: "Message",
    messageHint: (n: number) => `Your child's age, the days that suit you… ${n}/1000`,
    consent: "I agree to be contacted about my enquiry.",
    send: "Send enquiry",
    errors: {
      name: "Please enter your name.",
      emailEmpty: "Please enter your email address.",
      email: "Please enter a valid email, like name@example.com.",
      phone: "Please enter a valid phone number, or leave this empty.",
      course: "Please choose a class, or “Not sure yet”.",
      learner: "Please tell us who the enquiry is for.",
      message: "Please keep your message under 1,000 characters.",
      consent: "Please tick this box to continue.",
    },
    check: (n: number) => `Please check ${n === 1 ? "1 field" : `${n} fields`}:`,
    demoTitle: `Demo form – please call ${site.phone}`,
    demoText:
      "This website is an unofficial practice project: nothing was sent to Let's Go English and nothing was saved. For any enquiry, please call the school or drop by the reception.",
    call: `Call ${site.phone}`,
    back: "Back to the form",
  },
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phoneRe = /^[+()\d\s.-]{10,20}$/;

function validate(f: Fields, e: (typeof text)["fr"]["errors"]): Errors {
  const out: Errors = {};
  if (f.name.trim().length < 2) out.name = e.name;
  if (!f.email.trim()) out.email = e.emailEmpty;
  else if (!emailRe.test(f.email.trim())) out.email = e.email;
  if (f.phone.trim() && !phoneRe.test(f.phone.trim())) out.phone = e.phone;
  if (!f.course) out.course = e.course;
  if (!f.learner) out.learner = e.learner;
  if (f.message.length > 1000) out.message = e.message;
  if (!f.consent) out.consent = e.consent;
  return out;
}

const order: (keyof Fields)[] = ["name", "email", "phone", "course", "learner", "message", "consent"];

const inputClass =
  "mt-2 block min-h-12 w-full rounded-xl border-2 border-brand-line bg-white px-4 text-base text-brand-deep transition-colors placeholder:text-slate hover:border-brand/40 focus:border-brand aria-[invalid=true]:border-red-700";

function FieldError({ id, msg }: { id: string; msg?: string }) {
  if (!msg) return null;
  return (
    <p id={id} className="mt-2 flex items-start gap-1.5 text-[0.9375rem] font-bold text-red-700">
      <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
      {msg}
    </p>
  );
}

export function ContactForm({ locale, initialCourse }: { locale: Locale; initialCourse?: string }) {
  const t = text[locale];
  const [f, setF] = useState<Fields>(() =>
    initialCourse && courses.some((c) => c.slug === initialCourse) ? { ...empty, course: initialCourse } : empty,
  );
  const [errors, setErrors] = useState<Errors>({});
  const [demo, setDemo] = useState(false);
  const [tried, setTried] = useState(false);
  const summaryRef = useRef<HTMLDivElement>(null);
  const doneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (demo) doneRef.current?.focus();
  }, [demo]);

  const set = <K extends keyof Fields>(key: K, value: Fields[K]) => {
    const next = { ...f, [key]: value };
    setF(next);
    // After a first submit, update messages live as the visitor fixes them.
    if (tried) setErrors(validate(next, t.errors));
  };

  const onSubmit = (e: FormEvent) => {
    // Practice demo: the form never sends anything to the business.
    e.preventDefault();
    setTried(true);
    const found = validate(f, t.errors);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    setDemo(true);
  };

  if (demo) {
    return (
      <div
        ref={doneRef}
        tabIndex={-1}
        role="status"
        className="rounded-[var(--radius-card)] border-2 border-brand/30 bg-white p-8 focus:outline-none"
      >
        <Info className="size-10 text-brand" aria-hidden="true" />
        <h3 className="mt-4 text-2xl font-extrabold">{t.demoTitle}</h3>
        <p className="mt-3 text-brand-deep/90">{t.demoText}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a href={site.phoneHref} className={buttonClass("sun")}>
            <Phone className="size-4" aria-hidden="true" />
            {t.call}
          </a>
          <button type="button" onClick={() => setDemo(false)} className={buttonClass("outline")}>
            {t.back}
          </button>
        </div>
      </div>
    );
  }

  const errorList = order.filter((k) => errors[k]);
  const describe = (k: keyof Fields, hint?: string) =>
    [hint, errors[k] ? `${k}-error` : undefined].filter(Boolean).join(" ") || undefined;

  return (
    <form noValidate onSubmit={onSubmit} className="space-y-6" aria-describedby="form-note">
      {errorList.length > 0 && (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          className="rounded-xl border-2 border-red-700 bg-white p-5 focus:outline-none"
        >
          <p className="font-bold text-red-700">{t.check(errorList.length)}</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {errorList.map((k) => (
              <li key={k}>
                <a href={`#f-${k}`} className="text-brand-deep underline underline-offset-2">
                  {errors[k]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <fieldset>
        <legend className="font-bold">{t.enquiryLegend}</legend>
        <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
          {t.enquiryTypes.map((o) => (
            <label
              key={o.value}
              className="flex min-h-12 cursor-pointer items-center gap-3 whitespace-nowrap rounded-xl border-2 border-brand-line bg-white px-4 font-bold transition-colors hover:border-brand/40 has-[:checked]:border-brand has-[:checked]:bg-brand-soft has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-brand sm:flex-auto"
            >
              <input
                type="radio"
                name="enquiry"
                value={o.value}
                checked={f.enquiry === o.value}
                onChange={() => set("enquiry", o.value)}
                className="size-4 accent-brand focus:outline-none"
              />
              {o.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="f-name" className="font-bold">
            {t.name} <span className="font-normal text-slate">{t.required}</span>
          </label>
          <input
            id="f-name"
            name="name"
            autoComplete="name"
            value={f.name}
            onChange={(e) => set("name", e.target.value)}
            aria-invalid={!!errors.name}
            aria-describedby={describe("name")}
            className={inputClass}
          />
          <FieldError id="name-error" msg={errors.name} />
        </div>
        <div>
          <label htmlFor="f-email" className="font-bold">
            {t.email} <span className="font-normal text-slate">{t.required}</span>
          </label>
          <input
            id="f-email"
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            value={f.email}
            onChange={(e) => set("email", e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={describe("email")}
            className={inputClass}
          />
          <FieldError id="email-error" msg={errors.email} />
        </div>
      </div>

      <div>
        <label htmlFor="f-phone" className="font-bold">
          {t.phone} <span className="font-normal text-slate">{t.optional}</span>
        </label>
        <input
          id="f-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          inputMode="tel"
          value={f.phone}
          onChange={(e) => set("phone", e.target.value)}
          aria-invalid={!!errors.phone}
          aria-describedby={describe("phone")}
          className={`${inputClass} sm:max-w-sm`}
        />
        <FieldError id="phone-error" msg={errors.phone} />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="f-course" className="font-bold">
            {t.course} <span className="font-normal text-slate">{t.required}</span>
          </label>
          <select
            id="f-course"
            name="course"
            value={f.course}
            onChange={(e) => set("course", e.target.value)}
            aria-invalid={!!errors.course}
            aria-describedby={describe("course")}
            className={`${inputClass} appearance-auto`}
          >
            <option value="">{t.chooseCourse}</option>
            {courses.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.title[locale]} ({c.age[locale]})
              </option>
            ))}
            <option value="unsure">{t.unsure}</option>
          </select>
          <FieldError id="course-error" msg={errors.course} />
        </div>
        <div>
          <label htmlFor="f-learner" className="font-bold">
            {t.learner} <span className="font-normal text-slate">{t.required}</span>
          </label>
          <select
            id="f-learner"
            name="learner"
            value={f.learner}
            onChange={(e) => set("learner", e.target.value)}
            aria-invalid={!!errors.learner}
            aria-describedby={describe("learner")}
            className={`${inputClass} appearance-auto`}
          >
            <option value="">{t.chooseLearner}</option>
            {t.learners.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
          <FieldError id="learner-error" msg={errors.learner} />
        </div>
      </div>

      <div>
        <label htmlFor="f-message" className="font-bold">
          {t.message} <span className="font-normal text-slate">{t.optional}</span>
        </label>
        <textarea
          id="f-message"
          name="message"
          rows={4}
          value={f.message}
          onChange={(e) => set("message", e.target.value)}
          aria-invalid={!!errors.message}
          aria-describedby={describe("message", "message-hint")}
          className={`${inputClass} py-3`}
        />
        <p id="message-hint" className="mt-2 text-[0.9375rem] text-slate">
          {t.messageHint(f.message.length)}
        </p>
        <FieldError id="message-error" msg={errors.message} />
      </div>

      <div>
        <label htmlFor="f-consent" className="flex cursor-pointer items-start gap-3">
          <input
            id="f-consent"
            name="consent"
            type="checkbox"
            checked={f.consent}
            onChange={(e) => set("consent", e.target.checked)}
            aria-invalid={!!errors.consent}
            aria-describedby={describe("consent")}
            className="mt-1 size-5 shrink-0 accent-brand"
          />
          <span>{t.consent}</span>
        </label>
        <FieldError id="consent-error" msg={errors.consent} />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
        <button type="submit" className={buttonClass("sun", "sm:px-8")}>
          <Send className="size-4" aria-hidden="true" />
          {t.send}
        </button>
        <p id="form-note" className="text-[0.9375rem] font-bold text-brand-deep">
          {t.demoTitle.split(site.phone)[0]}
          <a href={site.phoneHref} className="num text-brand underline underline-offset-4">
            {site.phone}
          </a>
        </p>
      </div>
    </form>
  );
}

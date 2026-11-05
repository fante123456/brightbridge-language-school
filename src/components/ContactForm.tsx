"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { AlertCircle, CheckCircle2, Send } from "lucide-react";
import { buttonClass } from "./Button";
import { courses, LEVELS } from "@/lib/courses";

type Fields = {
  name: string;
  email: string;
  phone: string;
  enquiry: string;
  course: string;
  level: string;
  message: string;
  consent: boolean;
};

type Errors = Partial<Record<keyof Fields, string>>;

const empty: Fields = {
  name: "",
  email: "",
  phone: "",
  enquiry: "trial",
  course: "",
  level: "",
  message: "",
  consent: false,
};

const enquiryTypes = [
  { value: "trial", label: "Free trial lesson" },
  { value: "info", label: "Course information" },
  { value: "level", label: "Free level check" },
];

const levelOptions = [
  { value: "beginner", label: "Complete beginner" },
  ...LEVELS.map((l) => ({ value: l, label: `${l}` })),
  { value: "unsure", label: "Not sure – I'd like a level check" },
];

const levelHints: Record<string, string> = {
  A1: "A1 – I know a few words and phrases",
  A2: "A2 – I can handle simple everyday situations",
  B1: "B1 – I can talk about familiar topics",
  B2: "B2 – I can discuss most topics with some effort",
  C1: "C1 – I speak fluently and want to polish",
};

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phoneRe = /^[+()\d\s-]{10,20}$/;

function validate(f: Fields): Errors {
  const e: Errors = {};
  if (f.name.trim().length < 2) e.name = "Please enter your name.";
  if (!f.email.trim()) e.email = "Please enter your email address.";
  else if (!emailRe.test(f.email.trim())) e.email = "Please enter a valid email, like name@example.com.";
  if (f.phone.trim() && !phoneRe.test(f.phone.trim()))
    e.phone = "Please enter a valid phone number, or leave this empty.";
  if (!f.course) e.course = "Please choose a course, or “Not sure yet”.";
  if (!f.level) e.level = "Please choose your current level, or “Not sure”.";
  if (f.message.length > 1000) e.message = "Please keep your message under 1,000 characters.";
  if (!f.consent) e.consent = "Please confirm we may contact you about your enquiry.";
  return e;
}

const order: (keyof Fields)[] = ["name", "email", "phone", "course", "level", "message", "consent"];

const inputClass =
  "mt-2 block min-h-12 w-full rounded-xl border-2 border-brand-line bg-white px-4 text-base text-brand-deep transition-colors placeholder:text-slate hover:border-brand/40 focus:border-brand focus:outline-none focus-visible:outline-3 focus-visible:outline-offset-2 aria-[invalid=true]:border-red-700";

function FieldError({ id, msg }: { id: string; msg?: string }) {
  if (!msg) return null;
  return (
    <p id={id} className="mt-2 flex items-start gap-1.5 text-[0.9375rem] font-bold text-red-700">
      <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
      {msg}
    </p>
  );
}

export function ContactForm({ initialCourse }: { initialCourse?: string }) {
  const [f, setF] = useState<Fields>(() =>
    initialCourse && courses.some((c) => c.slug === initialCourse)
      ? { ...empty, course: initialCourse, enquiry: "info" }
      : empty,
  );
  const [errors, setErrors] = useState<Errors>({});
  const [sentName, setSentName] = useState<string | null>(null);
  const [tried, setTried] = useState(false);
  const summaryRef = useRef<HTMLDivElement>(null);
  const doneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sentName) doneRef.current?.focus();
  }, [sentName]);

  const set = <K extends keyof Fields>(key: K, value: Fields[K]) => {
    const next = { ...f, [key]: value };
    setF(next);
    // After a first submit, update messages live as the visitor fixes them.
    if (tried) setErrors(validate(next));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setTried(true);
    const found = validate(f);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }
    // Demo only: nothing is sent or stored.
    setSentName(f.name.trim().split(" ")[0]);
    setF(empty);
    setTried(false);
  };

  if (sentName) {
    return (
      <div
        ref={doneRef}
        tabIndex={-1}
        role="status"
        className="rounded-[var(--radius-card)] border-2 border-leaf/50 bg-white p-8 focus:outline-none"
      >
        <CheckCircle2 className="size-10 text-leaf" aria-hidden="true" />
        <h3 className="mt-4 text-2xl font-extrabold">Thank you, {sentName}!</h3>
        <p className="mt-3 text-brand-deep/90">
          In a real school, a member of our team would reply within one working day to arrange your trial
          lesson or level check.
        </p>
        <p className="mt-3 rounded-xl bg-brand-soft px-4 py-3 text-[0.9375rem] font-bold text-brand-deep">
          This is a demo form for a fictional school, so nothing was sent or saved.
        </p>
        <button type="button" onClick={() => setSentName(null)} className={buttonClass("outline", "mt-6")}>
          Send another enquiry
        </button>
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
          <p className="font-bold text-red-700">
            Please check {errorList.length === 1 ? "1 field" : `${errorList.length} fields`}:
          </p>
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
        <legend className="font-bold">What would you like?</legend>
        <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
          {enquiryTypes.map((t) => (
            <label
              key={t.value}
              className="flex min-h-12 cursor-pointer items-center gap-3 whitespace-nowrap rounded-xl sm:flex-auto border-2 border-brand-line bg-white px-4 font-bold transition-colors hover:border-brand/40 has-[:checked]:border-brand has-[:checked]:bg-brand-soft has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-sun"
            >
              <input
                type="radio"
                name="enquiry"
                value={t.value}
                checked={f.enquiry === t.value}
                onChange={() => set("enquiry", t.value)}
                className="size-4 accent-brand focus:outline-none"
              />
              {t.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="f-name" className="font-bold">
            Full name <span className="font-normal text-slate">(required)</span>
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
            Email <span className="font-normal text-slate">(required)</span>
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
          Phone <span className="font-normal text-slate">(optional)</span>
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
            Course of interest <span className="font-normal text-slate">(required)</span>
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
            <option value="">Choose a course</option>
            {courses.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.title} ({c.levelFrom}–{c.levelTo})
              </option>
            ))}
            <option value="unsure">Not sure yet</option>
          </select>
          <FieldError id="course-error" msg={errors.course} />
        </div>
        <div>
          <label htmlFor="f-level" className="font-bold">
            Current level <span className="font-normal text-slate">(required)</span>
          </label>
          <select
            id="f-level"
            name="level"
            value={f.level}
            onChange={(e) => set("level", e.target.value)}
            aria-invalid={!!errors.level}
            aria-describedby={describe("level", "level-hint")}
            className={`${inputClass} appearance-auto`}
          >
            <option value="">Choose your level</option>
            {levelOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {levelHints[o.value] ?? o.label}
              </option>
            ))}
          </select>
          <p id="level-hint" className="mt-2 text-[0.9375rem] text-slate">
            CEFR levels go from A1 (beginner) to C1 (advanced).
          </p>
          <FieldError id="level-error" msg={errors.level} />
        </div>
      </div>

      <div>
        <label htmlFor="f-message" className="font-bold">
          Message <span className="font-normal text-slate">(optional)</span>
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
          Tell us your goals or the days that suit you. {f.message.length}/1000
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
          <span>I agree that BrightBridge may contact me about this enquiry. We never share your details.</span>
        </label>
        <FieldError id="consent-error" msg={errors.consent} />
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
        <button type="submit" className={buttonClass("sun", "sm:px-8")}>
          <Send className="size-4" aria-hidden="true" />
          Send enquiry
        </button>
        <p id="form-note" className="text-[0.9375rem] text-slate">
          Demo form: nothing is sent or stored.
        </p>
      </div>
    </form>
  );
}

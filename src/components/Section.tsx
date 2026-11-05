import type { ReactNode } from "react";

/** Small label above a heading, with a short yellow bar. */
export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p
      className={`flex items-center gap-2.5 text-sm font-bold uppercase tracking-[0.14em] ${
        light ? "text-white/85" : "text-brand"
      }`}
    >
      <span className="h-1 w-6 rounded-full bg-sun" aria-hidden="true" />
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  id,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  id?: string;
  align?: "left" | "center";
}) {
  const center = align === "center";
  return (
    <div className={center ? "mx-auto max-w-2xl text-center [&>p:first-child]:justify-center" : "max-w-2xl"}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 id={id} className="mt-3 text-[2rem] font-extrabold leading-[1.12] sm:text-[2.5rem]">
        {title}
      </h2>
      {intro && <p className="mt-4 text-lg text-brand-deep/80">{intro}</p>}
    </div>
  );
}

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-[1200px] px-5 sm:px-8 ${className}`}>{children}</div>;
}

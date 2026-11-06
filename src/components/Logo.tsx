import Image from "next/image";

/**
 * The real Let's Go English logo as a rounded square, next to the name.
 * `compact` (header) shrinks it on phones and keeps only the logo image
 * below 360px, where the logo itself still reads "Let's Go English".
 */
export function Logo({
  tone = "dark",
  place = "Le Havre",
  compact = false,
}: {
  tone?: "dark" | "light";
  place?: string;
  compact?: boolean;
}) {
  const name = tone === "dark" ? "text-brand" : "text-white";
  const sub = tone === "dark" ? "text-brand-deep/75" : "text-white/80";
  return (
    <span className={`flex items-center ${compact ? "gap-2 sm:gap-3" : "gap-3"}`}>
      <Image
        src="/logo/letsgoenglish-logo-160.webp"
        alt="Let's Go English"
        width={48}
        height={48}
        unoptimized
        className={`shrink-0 rounded-xl ${compact ? "size-11 sm:size-12" : "size-12"} ${tone === "light" ? "ring-2 ring-white/20" : ""}`}
      />
      <span className={`flex-col leading-none ${compact ? "hidden min-[360px]:flex" : "flex"}`} aria-hidden="true">
        <span
          className={`font-display font-extrabold tracking-tight ${name} ${compact ? "text-[1.1rem] sm:text-[1.3rem]" : "text-[1.3rem]"}`}
        >
          Let&apos;s Go English
        </span>
        <span className={`mt-1 text-[0.75rem] font-bold uppercase tracking-[0.14em] ${sub}`}>{place}</span>
      </span>
    </span>
  );
}

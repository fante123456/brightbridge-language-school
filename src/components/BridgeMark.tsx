/** The BrightBridge mark: a bridge arc spanning a yellow deck, on royal blue. */
export function BridgeMark({ className = "size-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true" focusable="false">
      <rect width="40" height="40" rx="11" fill="#1E3A8A" />
      <path
        d="M9 27.5C9 18 14 12 20 12s11 6 11 15.5"
        fill="none"
        stroke="#F9FAFB"
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <path d="M6.5 28h27" stroke="#FACC15" strokeWidth="3.4" strokeLinecap="round" />
    </svg>
  );
}

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const name = tone === "dark" ? "text-brand" : "text-white";
  const sub = tone === "dark" ? "text-brand-deep/75" : "text-white/80";
  return (
    <span className="flex items-center gap-3">
      <BridgeMark className="size-10 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className={`font-display text-[1.3rem] font-extrabold tracking-tight ${name}`}>
          BrightBridge
        </span>
        <span className={`mt-1 text-[0.75rem] font-bold uppercase tracking-[0.14em] ${sub}`}>
          Language School
        </span>
      </span>
    </span>
  );
}

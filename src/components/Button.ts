type Variant = "sun" | "brand" | "outline" | "outline-light";

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-base font-bold transition-[background-color,color,border-color,transform] duration-200 active:translate-y-px";

const variants: Record<Variant, string> = {
  // Yellow fill with dark blue text: the one highlight colour.
  sun: "bg-sun text-brand-deep hover:bg-sun-deep",
  brand: "bg-brand text-white hover:bg-brand-deep",
  outline: "border-2 border-brand/25 text-brand hover:border-brand hover:bg-white",
  "outline-light": "border-2 border-white/40 text-white hover:border-white hover:bg-white/10",
};

export function buttonClass(variant: Variant = "brand", extra = "") {
  return `${base} ${variants[variant]} ${extra}`;
}

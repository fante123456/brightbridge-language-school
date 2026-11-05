/**
 * The signature "bridge arc": a wide, shallow span that closes the blue
 * hero band (edge="bottom") or opens the blue CTA band (edge="top").
 * It is painted in the colour of the section next to it.
 */
export function ArcEdge({
  edge,
  className = "text-paper",
}: {
  edge: "top" | "bottom";
  className?: string;
}) {
  const d =
    edge === "bottom"
      ? "M0 120V64C360 8 1080 8 1440 64v56Z" // paper rises into the blue as an arch
      : "M0 0v56C360 112 1080 112 1440 56V0Z"; // paper hangs over the blue like a bridge deck
  return (
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
      className={`pointer-events-none absolute inset-x-0 block h-10 w-full sm:h-16 lg:h-24 ${
        edge === "bottom" ? "bottom-[-1px]" : "top-[-1px]"
      } ${className}`}
    >
      <path d={d} fill="currentColor" />
    </svg>
  );
}

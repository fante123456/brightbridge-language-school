// next/image loader for the static export (o2switch has no Next.js image server).
// Unsplash's CDN resizes and converts each image itself (auto=format serves
// AVIF or WebP), so every srcset entry is still a small, correctly sized file.
export default function unsplashLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  const url = new URL(src);
  url.searchParams.set("auto", "format");
  url.searchParams.set("fit", "crop");
  url.searchParams.set("w", String(width));
  url.searchParams.set("q", String(quality ?? 70));
  return url.toString();
}

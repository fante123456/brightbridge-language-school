import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { photos, photoSrc, type PhotoKey } from "@/lib/photos";

type Props = {
  name: PhotoKey;
  locale: Locale;
  /** Real rendered widths, so next/image picks a small file on phones. */
  sizes: string;
  className?: string;
  imgClassName?: string;
  /** Only the home hero is preloaded. */
  preload?: boolean;
  alt?: string;
};

/** A next/image `fill` photo. Set the aspect ratio on `className`. */
export function Photo({ name, locale, sizes, className = "", imgClassName = "", preload, alt }: Props) {
  const p = photos[name];
  return (
    <div className={`relative overflow-hidden bg-brand-soft ${className}`}>
      <Image
        src={photoSrc(p.id)}
        alt={alt ?? p.alt[locale]}
        fill
        sizes={sizes}
        preload={preload}
        fetchPriority={preload ? "high" : undefined}
        quality={70}
        className={`object-cover ${imgClassName}`}
      />
    </div>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "./Logo";
import { buttonClass } from "./Button";
import { localePath, switchPath, type Locale } from "@/lib/i18n";
import { contactAnchor, navFor, site } from "@/lib/site";

const text = {
  fr: {
    home: " – page d'accueil",
    main: "Navigation principale",
    mobile: "Navigation mobile",
    cta: "Nous contacter",
    call: "Appeler le",
    open: "Ouvrir le menu",
    close: "Fermer le menu",
    lang: "Langue",
  },
  en: {
    home: " – home page",
    main: "Main",
    mobile: "Mobile",
    cta: "Contact us",
    call: "Call",
    open: "Open menu",
    close: "Close menu",
    lang: "Language",
  },
};

/** FR | EN switch: links to the same page in each language. */
function LanguageSwitch({ locale, pathname, label }: { locale: Locale; pathname: string; label: string }) {
  return (
    <nav aria-label={label} className="flex items-center rounded-full border-2 border-brand/15 p-0.5 font-display text-sm font-extrabold">
      {(["fr", "en"] as const).map((l) => (
        <Link
          key={l}
          href={switchPath(pathname, l)}
          hrefLang={l}
          lang={l}
          aria-current={l === locale ? "true" : undefined}
          className="grid min-h-9 min-w-9 place-items-center rounded-full px-1.5 sm:min-w-10 sm:px-2 text-brand-deep/75 transition-colors hover:text-brand aria-[current=true]:bg-brand aria-[current=true]:text-white"
        >
          <span aria-hidden="true">{l.toUpperCase()}</span>
          <span className="sr-only">{l === "fr" ? "Français" : "English"}</span>
        </Link>
      ))}
    </nav>
  );
}

export function Header({ locale }: { locale: Locale }) {
  const t = text[locale];
  const nav = navFor(locale);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lastPath, setLastPath] = useState(pathname);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // Close the mobile menu after navigating.
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const current = pathname.replace(/\/+$/, "") || "/";
  const isActive = (path: string) => {
    const href = localePath(locale, path);
    return href === "/" || href === "/en" ? current === href : current.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-brand/10 bg-paper/95 backdrop-blur-md supports-[backdrop-filter]:bg-paper/85">
      <div className="mx-auto flex h-[4.5rem] max-w-[1200px] items-center justify-between gap-2 px-4 sm:gap-4 sm:px-8">
        <Link href={localePath(locale, "/")} className="shrink-0">
          <Logo compact />
          <span className="sr-only">{t.home}</span>
        </Link>

        <nav aria-label={t.main} className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.path}>
                <Link
                  href={localePath(locale, item.path)}
                  aria-current={isActive(item.path) ? "page" : undefined}
                  className="relative block whitespace-nowrap rounded-full px-3.5 py-2 font-bold text-brand-deep/80 transition-colors hover:bg-brand-soft hover:text-brand aria-[current=page]:bg-brand-soft aria-[current=page]:text-brand"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-4 xl:flex">
          <LanguageSwitch locale={locale} pathname={pathname} label={t.lang} />
          <a href={site.phoneHref} className={buttonClass("sun", "num min-h-11 whitespace-nowrap px-5")}>
            <Phone className="size-4" aria-hidden="true" />
            <span className="sr-only">{t.call} </span>
            {site.phone}
          </a>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2 xl:hidden">
          <LanguageSwitch locale={locale} pathname={pathname} label={t.lang} />
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border-2 border-brand/15 text-brand sm:size-12"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            <span className="sr-only">{open ? t.close : t.open}</span>
          </button>
        </div>
      </div>

      <div id="mobile-menu" hidden={!open} className="border-t border-brand/10 bg-paper xl:hidden">
        <nav aria-label={t.mobile} className="mx-auto max-w-[1200px] px-5 pb-8 pt-3 sm:px-8">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.path} className="border-b border-brand/10">
                <Link
                  href={localePath(locale, item.path)}
                  aria-current={isActive(item.path) ? "page" : undefined}
                  className="flex min-h-14 items-center justify-between font-display text-xl font-bold text-brand-deep aria-[current=page]:text-brand"
                >
                  {item.label}
                  {isActive(item.path) && <span className="size-2.5 rounded-full bg-sun" aria-hidden="true" />}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <Link href={localePath(locale, contactAnchor)} className={buttonClass("sun")}>
              {t.cta}
            </Link>
            <a href={site.phoneHref} className={buttonClass("outline")}>
              <Phone className="size-4" aria-hidden="true" />
              {t.call} {site.phone}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

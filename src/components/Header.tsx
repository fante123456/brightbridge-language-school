"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { Logo } from "./BridgeMark";
import { buttonClass } from "./Button";
import { nav, site, trialHref } from "@/lib/site";

export function Header() {
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

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="sticky top-0 z-50 border-b border-brand/10 bg-paper/95 backdrop-blur-md supports-[backdrop-filter]:bg-paper/85">
      <div className="mx-auto flex h-[4.5rem] max-w-[1200px] items-center justify-between gap-6 px-5 sm:px-8">
        <Link href="/" className="shrink-0">
          <Logo />
          <span className="sr-only"> – home page</span>
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="relative block rounded-full px-4 py-2 font-bold text-brand-deep/80 transition-colors hover:bg-brand-soft hover:text-brand aria-[current=page]:bg-brand-soft aria-[current=page]:text-brand"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 font-bold text-brand hover:underline"
          >
            <Phone className="size-4" aria-hidden="true" />
            {site.phone}
          </a>
          <Link href={trialHref} className={buttonClass("sun", "min-h-11 px-5")}>
            Free trial lesson
          </Link>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="inline-flex size-12 items-center justify-center rounded-full border-2 border-brand/15 text-brand lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      <div id="mobile-menu" hidden={!open} className="border-t border-brand/10 bg-paper lg:hidden">
        <nav aria-label="Mobile" className="mx-auto max-w-[1200px] px-5 pb-8 pt-3 sm:px-8">
          <ul className="flex flex-col">
            {nav.map((item) => (
              <li key={item.href} className="border-b border-brand/10">
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className="flex min-h-14 items-center justify-between font-display text-xl font-bold text-brand-deep aria-[current=page]:text-brand"
                >
                  {item.label}
                  {isActive(item.href) && (
                    <span className="size-2.5 rounded-full bg-sun" aria-hidden="true" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <Link href={trialHref} className={buttonClass("sun")}>
              Book a free trial lesson
            </Link>
            <a href={site.phoneHref} className={buttonClass("outline")}>
              <Phone className="size-4" aria-hidden="true" />
              Call {site.phone}
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

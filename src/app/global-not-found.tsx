import type { Metadata } from "next";
import { SiteDocument } from "@/components/SiteDocument";
import { site } from "@/lib/site";
import { NotFoundView } from "@/views/NotFoundView";
import "./globals.css";

// One 404 page for the whole site (needed because FR and EN have separate root layouts).
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "Page introuvable | Let's Go English Le Havre",
  robots: { index: false, follow: false },
};

export default function GlobalNotFound() {
  return (
    <SiteDocument locale="fr">
      <NotFoundView />
    </SiteDocument>
  );
}

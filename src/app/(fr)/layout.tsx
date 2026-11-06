import type { Metadata, Viewport } from "next";
import { SiteDocument } from "@/components/SiteDocument";
import { ogImage, site } from "@/lib/site";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Let's Go English | École d'anglais au Havre",
    template: "%s | Let's Go English Le Havre",
  },
  description:
    "Let's Go English, le spécialiste de l'anglais au Havre : éveil dès 12 mois, ateliers enfants, collégiens et lycéens, stages de vacances et cours à domicile.",
  applicationName: site.name,
  // Practice demo: keep it out of search engines.
  robots: { index: false, follow: false },
  openGraph: { type: "website", locale: "fr_FR", siteName: site.name, images: [ogImage] },
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = { themeColor: "#1E3A8A" };

export default function FrenchLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument locale="fr">{children}</SiteDocument>;
}

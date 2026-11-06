import type { Metadata, Viewport } from "next";
import { SiteDocument } from "@/components/SiteDocument";
import { ogImage, site } from "@/lib/site";
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Let's Go English | English School in Le Havre",
    template: "%s | Let's Go English Le Havre",
  },
  description:
    "Let's Go English, the English specialist in Le Havre: classes from 12 months, workshops for children and teenagers, holiday courses and home tutoring.",
  applicationName: site.name,
  // Practice demo: keep it out of search engines.
  robots: { index: false, follow: false },
  openGraph: { type: "website", locale: "en_GB", siteName: site.name, images: [ogImage] },
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = { themeColor: "#1E3A8A" };

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <SiteDocument locale="en">{children}</SiteDocument>;
}

import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Pre-rendered at build time for the static export.
export const dynamic = "force-static";

// Trailing slashes match the real page addresses (trailingSlash: true).
const routes = [
  { path: "/", priority: 1 },
  { path: "/courses/", priority: 0.9 },
  { path: "/about/", priority: 0.7 },
  { path: "/student-life/", priority: 0.7 },
  { path: "/contact/", priority: 0.8 },
  { path: "/credits/", priority: 0.2 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${site.url}${r.path}`,
    changeFrequency: "monthly",
    priority: r.priority,
  }));
}

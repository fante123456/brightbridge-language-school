import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Pre-rendered at build time for the static export.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}

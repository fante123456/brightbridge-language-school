import type { NextConfig } from "next";

// Static export for shared hosting (o2switch / Apache) and Vercel alike.
// `npm run build` writes a plain HTML/CSS/JS site to ./out
// Security headers live in public/.htaccess (next.config headers are not
// applied to a static export).
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  poweredByHeader: false,
  images: {
    // There is no Next.js image server on static hosting: Unsplash's CDN
    // resizes and converts to AVIF/WebP instead (see src/lib/unsplash-loader.ts).
    loader: "custom",
    loaderFile: "./src/lib/unsplash-loader.ts",
    qualities: [70],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;

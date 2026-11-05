import { ImageResponse } from "next/og";

// Pre-rendered at build time for the static export.
export const dynamic = "force-static";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#1E3A8A" }}>
        <svg width="180" height="180" viewBox="0 0 40 40">
          <path d="M9 27.5C9 18 14 12 20 12s11 6 11 15.5" fill="none" stroke="#F9FAFB" strokeWidth="3.4" strokeLinecap="round" />
          <path d="M6.5 28h27" stroke="#FACC15" strokeWidth="3.4" strokeLinecap="round" />
        </svg>
      </div>
    ),
    size,
  );
}

import { ImageResponse } from "next/og";

// Pre-rendered at build time for the static export.
export const dynamic = "force-static";

export const alt = "BrightBridge Language School: learn languages with confidence, Manchester";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 80px 0",
          background: "#1E3A8A",
          color: "#FFFFFF",
          position: "relative",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="76" height="76" viewBox="0 0 40 40">
            <rect width="40" height="40" rx="11" fill="#172554" />
            <path d="M9 27.5C9 18 14 12 20 12s11 6 11 15.5" fill="none" stroke="#F9FAFB" strokeWidth="3.4" strokeLinecap="round" />
            <path d="M6.5 28h27" stroke="#FACC15" strokeWidth="3.4" strokeLinecap="round" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 40, fontWeight: 800 }}>BrightBridge</div>
            <div style={{ fontSize: 18, letterSpacing: 4, color: "#E2E8F0" }}>LANGUAGE SCHOOL</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
          <div style={{ fontSize: 80, lineHeight: 1.05, fontWeight: 800 }}>Learn languages with confidence</div>
          <div style={{ marginTop: 24, fontSize: 30, color: "#E2E8F0" }}>
            English · IELTS · Spanish · French · German · Manchester & online
          </div>
        </div>
        <svg width="1200" height="120" viewBox="0 0 1440 120" style={{ marginLeft: -80 }}>
          <path d="M0 120V64C360 8 1080 8 1440 64v56Z" fill="#F9FAFB" />
          <rect x="560" y="44" width="320" height="14" rx="7" fill="#FACC15" />
        </svg>
      </div>
    ),
    size,
  );
}

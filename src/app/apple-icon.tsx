import { ImageResponse } from "next/og";

// Pre-rendered at build time for the static export.
export const dynamic = "force-static";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** "LG" monogram on the navy of the Let's Go English logo. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#25395A",
          color: "#FFFFFF",
          fontSize: 92,
          fontWeight: 700,
          letterSpacing: -2,
        }}
      >
        LG
      </div>
    ),
    size,
  );
}

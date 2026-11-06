import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Pre-rendered at build time for the static export.
export const dynamic = "force-static";

export const alt = "Let's Go English, le spécialiste de l'anglais au Havre";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public/logo/letsgoenglish-logo-512.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: "0 80px",
          background: "#1E3A8A",
          color: "#FFFFFF",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={380} height={380} alt="" style={{ borderRadius: 48 }} />
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 620 }}>
          <div style={{ fontSize: 30, letterSpacing: 2, color: "#FACC15", fontWeight: 700 }}>LE HAVRE</div>
          <div style={{ marginTop: 16, fontSize: 68, lineHeight: 1.05, fontWeight: 800 }}>
            Le spécialiste de l&apos;anglais au Havre
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#E2E8F0" }}>
            Dès 12 mois · Enfants · Ados · Adultes
          </div>
          <div style={{ marginTop: 40, fontSize: 22, color: "#CBD5E1" }}>
            Projet d&apos;entraînement – site non officiel
          </div>
        </div>
      </div>
    ),
    size,
  );
}

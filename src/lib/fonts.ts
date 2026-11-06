import { Atkinson_Hyperlegible, Nunito } from "next/font/google";

// Friendly rounded display face for headings.
export const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

// Body face designed for maximum legibility.
export const atkinson = Atkinson_Hyperlegible({
  weight: ["400", "700"],
  variable: "--font-atkinson",
  subsets: ["latin"],
  display: "swap",
});

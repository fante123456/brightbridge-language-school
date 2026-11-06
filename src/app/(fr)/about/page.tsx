import { AboutView, aboutMeta } from "@/views/AboutView";

export const metadata = aboutMeta("fr");

export default function Page() {
  return <AboutView locale="fr" />;
}

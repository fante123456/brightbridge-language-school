import { HomeView, homeMeta } from "@/views/HomeView";

export const metadata = homeMeta("fr");

export default function Page() {
  return <HomeView locale="fr" />;
}

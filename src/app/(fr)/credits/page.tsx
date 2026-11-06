import { CreditsView, creditsMeta } from "@/views/CreditsView";

export const metadata = creditsMeta("fr");

export default function Page() {
  return <CreditsView locale="fr" />;
}

import { CreditsView, creditsMeta } from "@/views/CreditsView";

export const metadata = creditsMeta("en");

export default function Page() {
  return <CreditsView locale="en" />;
}

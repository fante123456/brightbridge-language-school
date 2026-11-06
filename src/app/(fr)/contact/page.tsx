import { ContactView, contactMeta } from "@/views/ContactView";

export const metadata = contactMeta("fr");

export default function Page() {
  return <ContactView locale="fr" />;
}

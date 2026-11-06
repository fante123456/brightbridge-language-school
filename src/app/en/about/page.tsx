import { AboutView, aboutMeta } from "@/views/AboutView";

export const metadata = aboutMeta("en");

export default function Page() {
  return <AboutView locale="en" />;
}

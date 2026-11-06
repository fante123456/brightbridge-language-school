import { CoursesView, coursesMeta } from "@/views/CoursesView";

export const metadata = coursesMeta("fr");

export default function Page() {
  return <CoursesView locale="fr" />;
}

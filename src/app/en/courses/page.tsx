import { CoursesView, coursesMeta } from "@/views/CoursesView";

export const metadata = coursesMeta("en");

export default function Page() {
  return <CoursesView locale="en" />;
}

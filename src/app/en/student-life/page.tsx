import { StudentLifeView, studentLifeMeta } from "@/views/StudentLifeView";

export const metadata = studentLifeMeta("en");

export default function Page() {
  return <StudentLifeView locale="en" />;
}

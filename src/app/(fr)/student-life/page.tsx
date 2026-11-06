import { StudentLifeView, studentLifeMeta } from "@/views/StudentLifeView";

export const metadata = studentLifeMeta("fr");

export default function Page() {
  return <StudentLifeView locale="fr" />;
}

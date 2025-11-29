import Case from "@/components/Case";
import { TABLE_CONTENT, SECTIONS } from "@/content/savings";

export default function SavingPage() {
  return <Case sections={SECTIONS} tableContent={TABLE_CONTENT} />;
}


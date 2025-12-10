import Case from "@/components/Case";
import { TABLE_CONTENT, SECTIONS } from "@/content/system";

export default function DesignSystem() {
  return <Case sections={SECTIONS} tableContent={TABLE_CONTENT} />;
}

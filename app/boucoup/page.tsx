import Case from "@/components/Case";
import { TABLE_CONTENT, SECTIONS } from "@/content/boucoup";

export default function Boucoup() {
  return <Case sections={SECTIONS} tableContent={TABLE_CONTENT} />;
}


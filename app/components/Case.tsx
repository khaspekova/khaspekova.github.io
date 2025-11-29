import FeatureDescription from "@/components/UI/FeatureDescription";
import FeatureTable from "@/components/UI/FeatureTable";

interface Row {
  title: string;
  paragraph?: (string | null)[];
  list?: string[];
  link?: string;
}

interface Image {
  src: string;
  className?: string;
  isFullWidth?: boolean;
  fillContainer?: boolean;
  alt?: string;
}

interface Section {
  rows: Row[];
  image?: Image;
}

interface CaseProps {
  sections: Section[];
  tableContent: string[];
}

export default function Case({ sections, tableContent }: CaseProps) {
  return (
    <>
      <FeatureDescription isTitle {...sections[0]} />
      <FeatureTable content={tableContent} />
      {sections.slice(1).map((item) => (
        <FeatureDescription key={item.rows[0].title} {...item} />
      ))}
    </>
  );
}

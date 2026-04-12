import PublicityRow from "@/components/UI/PublicityRow";
import classes from "@/styles/Publicity.module.css";

const PUBLICITY_ITEMS = [
  {
    firstColumn: {
      firstLine: "Research work",
      secondLine: "St.Petersburg Polytechnic University",
    },
    secondColumn: {
      firstLine: "Applied aspects of 3D space in the web environment ",
      span: "(publication)",
    },
    year: "2011",
  },
  {
    firstColumn: {
      firstLine: "Lecture",
      secondLine: "CHE design school",
    },
    secondColumn: {
      firstLine:
        "Interface design — what is it, what is it for, who and how creates it",
      span: null,
    },
    year: "2023",
  },
  {
    firstColumn: {
      firstLine: "Volunteering",
      secondLine: "BenevolentAI",
    },
    secondColumn: {
      firstLine: "Neurodiversity in IT",
      span: null,
    },
    year: "2024",
  },
];

export default function Publicity() {
  return (
    <div className={classes.publicitySection}>
      <h3 className="text-[40px] leading-[31px]">Publicity</h3>
      {PUBLICITY_ITEMS.map((item, i) => (
        <PublicityRow
          key={i}
          {...item}
          firstRow={i === 0}
          lastRow={i === PUBLICITY_ITEMS.length - 1}
        />
      ))}
    </div>
  );
}

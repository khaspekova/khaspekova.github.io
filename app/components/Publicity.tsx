import PublicityRow from "@/components/UI/PublicityRow";

const PUBLICITY_ITEMS = [
  {
    description: {
      lines: ["Applied aspects of 3D space in the web environment"],
      span: "(publication)",
    },
    where: `St.Petersburg Polytechnic University / 2011`,
  },
  {
    description: {
      lines: [`Interface design — `, `why, what, who, when and how`],
      span: "(lecture)",
    },
    where: `CHE design school / 2023`,
  },
  {
    description: {
      lines: [`Neurodiversity in IT`],
      span: "(volunteering)",
    },
    where: `BenevolentAI / 2024`,
  },
];

export default function Publicity() {
  return (
    <div>
      {PUBLICITY_ITEMS.map((item, i) => (
        <PublicityRow key={i} {...item} firstRow={i === 0} />
      ))}
    </div>
  );
}

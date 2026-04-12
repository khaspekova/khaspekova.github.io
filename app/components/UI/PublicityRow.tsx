import classes from "@/styles/PublicityRow.module.css";

interface PublicityRowProps {
  firstColumn: {
    firstLine: string;
    secondLine: string;
  };
  secondColumn: {
    firstLine: string;
    span: string | null;
  };
  year: string;
  firstRow?: boolean;
  lastRow?: boolean;
}

export default function PublicityRow({
  firstColumn,
  secondColumn,
  year,
  firstRow,
  lastRow,
}: PublicityRowProps) {
  return (
    <div
      className={`${classes.row} ${firstRow ? classes.firstRow : ""} ${
        lastRow ? classes.lastRow : ""
      }`}
    >
      <div className={`${classes.firstCol} font-base`}>
        <p>{firstColumn.firstLine}</p>
        <p>{firstColumn.secondLine}</p>
      </div>
      <div className={`${classes.secondCol} font-base`}>
        <p>
          {secondColumn.firstLine}
          <span>{secondColumn.span ?? ""}</span>
        </p>
      </div>
      <div className={`${classes.thirdCol} font-base`}>
        <p>{year}</p>
      </div>
    </div>
  );
}

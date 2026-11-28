import classes from "@/styles/PublicityRow.module.css";

interface PublicityRowProps {
  description: {
    lines: Array<string>;
    span?: string;
  };
  where: string;
  firstRow?: boolean;
}

export default function PublicityRow({
  description,
  where,
  firstRow,
}: PublicityRowProps) {
  return (
    <div className={`${classes.row} ${firstRow ? classes.firstRow : ""}`}>
      <div className={classes.rowContent}>
        <div>
          {description.lines.map((line, i) => (
            <p key={i} className="text-lg md:text-[20px] leading-[140%] font-medium">
              {line}
              {i === description.lines.length - 1 && description.span && (
                <span className="text-gray-publicity">{` ${description.span}`}</span>
              )}
            </p>
          ))}
        </div>
        <p className="text-gray-publicity text-sm font-medium font-family-jbmono">
          {where}
        </p>
      </div>
    </div>
  );
}

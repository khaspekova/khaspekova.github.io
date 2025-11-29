import { Fragment } from "react";
import classes from "./FeatureTable.module.css";

interface FeatureTableProps {
  content: string[];
}

export default function FeatureTable({ content }: FeatureTableProps) {
  const headers = ["Type", "My Role", "Team", "Overview"];

  return (
    <div className={`${classes.container} overflowComponent`}>
      <div className={`${classes.row} ${classes.headers}`}>
        {headers.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
      <div className={`${classes.row} ${classes.content}`}>
        {content.map((item, i) => {
          return (
            <div key={i + item.slice(0, 5)}>
              {item.split("\n").map((line, j) => (
                <p key={`${i}${j}`}>{line}</p>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}


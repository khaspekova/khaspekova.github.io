"use client";

import classes from "@/styles/FeatureTable.module.css";

import { useMediaQuery, BREAKPOINTS } from "@/hooks/useMediaQuery";

interface FeatureTableProps {
  content: string[];
}

export default function FeatureTable({ content }: FeatureTableProps) {
  const headers = ["Type", "My Role", "Team", "Overview"];

  const isMobile = useMediaQuery(BREAKPOINTS.mobile);

  if (isMobile) {
    return (
      <div className={`${classes.container} overflowComponent`}>
        <div className={`${classes.row} ${classes.headers}`}>
          {headers.slice(0, 3).map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <div className={`${classes.row} ${classes.content}`}>
          {content.slice(0, 3).map((item, i) => {
            return (
              <div key={i + item.slice(0, 5)}>
                {item.split("\n").map((line, j) => (
                  <p key={`${i}${j}`}>{line}</p>
                ))}
              </div>
            );
          })}
        </div>
        <div className={`${classes.headers} ${classes.row}`}>
          <p>{headers.at(-1)}</p>
        </div>
        <div
          className={`${classes.content} ${classes.row} ${classes.overview}`}
        >
          <p>{content.at(-1)}</p>
        </div>
      </div>
    );
  }

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

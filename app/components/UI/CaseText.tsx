import classes from "./CaseText.module.css";

interface CaseTextProps {
  title: string;
  isTitle?: boolean;
  paragraph?: (string | null)[];
  list?: string[];
  link?: string;
}

export default function CaseText({
  title,
  isTitle,
  paragraph,
  list,
  link,
}: CaseTextProps) {
  const titleComponent = (
    <div className="col-start-2 !mr-12">
      {isTitle ? <h1>{title}</h1> : <h2>{title}</h2>}
    </div>
  );

  return (
    <div className={`${classes.textContainer} ${isTitle ? classes.title : ""}`}>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="col-start-2"
        >
          {titleComponent}
        </a>
      ) : (
        titleComponent
      )}
      <div className={classes.content}>
        {paragraph &&
          paragraph.map((par, i) =>
            par !== null ? (
              <p key={i + par.slice(0, 3)}>{par}</p>
            ) : (
              <br key={`br-${i}`} />
            )
          )}
        {list && (
          <ul>
            {list.map((item, i) => (
              <li key={i + item.slice(0, 3)}>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

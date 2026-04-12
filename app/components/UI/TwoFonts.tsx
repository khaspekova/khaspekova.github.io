import classes from "@/styles/TwoFonts.module.css";

interface TwoFontsProps {
  firstLine: string;
  secondLine: string;
  className?: string;
}

export default function TwoFonts({
  firstLine,
  secondLine,
  className = "",
}: TwoFontsProps) {
  return (
    <div className={`font-base-narrow ${classes.container} ${className}`}>
      <p className={classes.firstLine}>{firstLine}</p>
      <p className={classes.secondLine}>{secondLine}</p>
    </div>
  );
}

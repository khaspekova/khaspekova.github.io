import classes from "./MainNavigation.module.css";

interface BurgerButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

export default function BurgerButton({ onClick, isOpen }: BurgerButtonProps) {
  return (
    <button onClick={onClick}>
      <div className={`${classes.burgerIcon} ${isOpen ? classes.open : ""}`}>
        <span className={classes.burgerLine}></span>
        <span className={classes.burgerLine}></span>
        <span className={classes.burgerLine}></span>
      </div>
    </button>
  );
}


import { NAV_ITEMS } from "@/content/navigation";
import NavItem from "@/components/navigation/NavItem";
import classes from "./MobileMenu.module.css";

interface MobMenuProps {
  isOpen: boolean;
}

export default function MobMenu({ isOpen }: MobMenuProps) {
  return (
    <div
      className={`${classes.wrapper} ${isOpen ? classes.open : classes.closed}`}
    >
      <div className={classes.innerWrap}>
        <ul className={classes.mobMenu}>
          {NAV_ITEMS.slice(1).map((item) => (
            <li key={item.title}>
              <NavItem {...item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


import { NAV_ITEMS } from "@/content/navigation";
import NavItem from "@/components/navigation/NavItem";
import classes from "@/styles/MobileMenu.module.css";

interface MobMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobMenu({ isOpen, onClose }: MobMenuProps) {
  return (
    <div
      className={`${classes.wrapper} ${isOpen ? classes.open : classes.closed}`}
    >
      <div className={classes.innerWrap}>
        <ul className={classes.mobMenu}>
          {NAV_ITEMS.slice(1).map((item) => (
            <li key={item.title}>
              <NavItem {...item} onNavigation={onClose} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

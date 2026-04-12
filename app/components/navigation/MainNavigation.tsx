"use client";

import classes from "@/styles/MainNavigation.module.css";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useMediaQuery, BREAKPOINTS } from "@/hooks/useMediaQuery";
import { useScrollContext } from "@/hooks/useScrollContext";
import BurgerButton from "@/components/navigation/BurgerButton";
import MobMenu from "@/components/navigation/MobMenu";
import NavItem from "@/components/navigation/NavItem";
import { NAV_ITEMS } from "@/content/navigation";

export default function MainNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { setActiveSection } = useScrollContext();
  const pathname = usePathname();

  const isMobile = useMediaQuery(BREAKPOINTS.mobile);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(null);
    }
  }, [pathname, setActiveSection]);

  const switchMenu = () => {
    setIsOpen((curState) => !curState);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (isMobile) {
    return (
      <>
        <nav
          className={`${classes.nav} ${
            isOpen ? classes.open : undefined
          } overflowComponent`}
        >
          <NavItem {...NAV_ITEMS[0]} onNavigation={() => setIsOpen(false)} />
          <BurgerButton onClick={switchMenu} isOpen={isOpen} />
        </nav>
        <MobMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </>
    );
  }

  return (
    // <nav className={`${classes.nav} overflowComponent`}>
    //   <ul>
    //     {NAV_ITEMS.map((item, i) => (
    //       <li key={item.id} className={classes[`column-${i}`]}>
    //         <NavItem {...item} />
    //       </li>
    //     ))}
    //   </ul>
    // </nav>

    <nav className={`${classes.nav}`}>
      <div>
        <NavItem {...NAV_ITEMS[0]} />
      </div>
      <ul>
        {NAV_ITEMS.slice(1).map((item, i) => (
          <li key={item.id} className={classes[`column-${i}`]}>
            <NavItem {...item} />
          </li>
        ))}
      </ul>
    </nav>
  );
}

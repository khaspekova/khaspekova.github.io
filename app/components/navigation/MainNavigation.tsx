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

  // close the mobile menu if the screen becomes wide (rotation / resize)
  useEffect(() => {
    if (!isMobile) setIsOpen(false);
  }, [isMobile]);

  // Desktop list and burger are both rendered; CSS decides which one is visible,
  // so there is no flash of the wrong menu before JS loads.
  return (
    <>
      <nav
        className={`${classes.nav} ${
          isOpen ? classes.open : ""
        } overflowComponent`}
      >
        <NavItem {...NAV_ITEMS[0]} onNavigation={() => setIsOpen(false)} />

        <ul className={classes.desktopList}>
          {NAV_ITEMS.slice(1).map((item) => (
            <li key={item.id}>
              <NavItem {...item} />
            </li>
          ))}
        </ul>

        <div className={classes.burger}>
          <BurgerButton onClick={switchMenu} isOpen={isOpen} />
        </div>
      </nav>
      <MobMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

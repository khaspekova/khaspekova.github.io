"use client";

import { usePathname } from "next/navigation";

import VectorEmail from "@/components/UI/VectorEmail";
import classes from "@/styles/Footer.module.css";

export default function Footer() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  if (isHomePage) {
    return (
      <footer className={classes.footer}>
        <div>
          <VectorEmail />
          <div className={`${classes.bottom} font-large`}>
            <div className={classes.bottomLeft}>
              <p>©2025</p>
            </div>
            <p className={classes.woof}>woofty doofty ⌾︎︎︎</p>
          </div>
        </div>
      </footer>
    );
  }
}

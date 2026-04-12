"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useScrollContext } from "@/hooks/useScrollContext";
import classes from "@/styles/NavItem.module.css";

interface NavItemProps {
  id: string;
  title: string;
  subtitle: string;
  href?: string;
  onNavigation?: () => void;
}

export default function NavItem({
  id,
  title,
  subtitle,
  href = "",
  onNavigation,
}: NavItemProps) {
  const { scrollToRef, activeSection, setActiveSection } = useScrollContext();
  const pathname = usePathname();
  const router = useRouter();

  const getClassNames = () =>
    `${classes.navItem} ${
      activeSection === id ? classes.active : classes.default
    }`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (pathname !== "/") {
      router.push("/");
      setTimeout(() => {
        scrollToRef(id as "home" | "works" | "publicity" | "about" | "contact");
        setActiveSection(id);
      }, 100);
    } else {
      scrollToRef(id as "home" | "works" | "publicity" | "about" | "contact");
      setActiveSection(id);
    }
    if (onNavigation) {
      onNavigation();
    }
  };

  return (
    <Link href={href} className={getClassNames()} onClick={handleClick}>
      <p>{title}</p>
      <p>{subtitle}</p>
    </Link>
  );
}

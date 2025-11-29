"use client";

import Link from "next/link";
import Image from "next/image";
import PictureContainer from "@/components/UI/PictureContainer";
import TwoFonts from "@/components/UI/TwoFonts";
import { useMediaQuery, BREAKPOINTS } from "@/hooks/useMediaQuery";
import classes from "./HomeItem.module.css";
import { IPictureContainerImage } from "@/content/home";

interface HomeItemProps {
  title: string;
  role: string;
  scope: string;
  href: string;
  img?: IPictureContainerImage;
  showPicture?: boolean;
  children?: React.ReactNode;
}

export default function HomeItem({
  title,
  role,
  scope,
  href,
  img,
  showPicture = true,
  children,
}: HomeItemProps) {
  const isMobile = useMediaQuery(BREAKPOINTS.mobile);

  const viewButton = (
    <Link className={classes.viewButton} href={href}>
      <div className={classes.viewButtonContainer}>
        <p className="font-small">View</p>
        <Image
          className={classes.icon}
          src="/icons/icon-down.svg"
          alt=""
          width={18}
          height={18}
        />
      </div>
    </Link>
  );

  return (
    <div className={classes.homeItem}>
      <Link href={href}>
        {showPicture && img && <PictureContainer {...img} />}
        {!showPicture && children}
      </Link>

      <div className={classes.featureInfo}>
        <div className={`${classes.left}`}>
          <p className={`font-large`}>{title}</p>
          {!isMobile && viewButton}
        </div>

        <TwoFonts
          firstLine={role}
          secondLine="Role"
          className={`${classes.rightColOne}`}
        />

        <TwoFonts firstLine={scope} secondLine="Scope" />

        {isMobile && viewButton}
      </div>
    </div>
  );
}

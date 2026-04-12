"use client";

import Link from "next/link";
// import Image from "next/image";

import classes from "@/styles/HomeItem.module.css";

import PictureContainer from "@/components/UI/PictureContainer";
import TwoFonts from "@/components/UI/TwoFonts";
import { IPictureContainerImage } from "@/content/home";
// import { useMediaQuery, BREAKPOINTS } from "@/hooks/useMediaQuery";
import { useCursorContext } from "@/hooks/useCursorContext";

interface HomeItemProps {
  title: string;
  role: string;
  scope: string;
  href: string;
  img?: IPictureContainerImage;
  showPicture?: boolean;
  children?: React.ReactNode;
  cursorText?: string;
}

export default function HomeItemOld({
  title,
  role,
  scope,
  href,
  img,
  showPicture = true,
  children,
  cursorText,
}: HomeItemProps) {
  // const isMobile = useMediaQuery(BREAKPOINTS.mobile);
  const { setCursorText } = useCursorContext();

  const handleMouseEnter = () => {
    setCursorText(cursorText || "");
  };

  const handleMouseLeave = () => {
    setCursorText("");
  };

  // const viewButton = (
  //   <Link className={classes.viewButton} href={href}>
  //     <div className={classes.viewButtonContainer}>
  //       <p className="font-small">View</p>
  //       <Image
  //         className={classes.icon}
  //         src="/icons/icon-down.svg"
  //         alt=""
  //         width={18}
  //         height={18}
  //       />
  //     </div>
  //   </Link>
  // );

  return (
    <div
      className={classes.homeItem}
      onMouseEnter={cursorText ? handleMouseEnter : undefined}
      onMouseLeave={cursorText ? handleMouseLeave : undefined}
    >
      <Link href={href} className="w-full inline-block">
        {showPicture && img && <PictureContainer {...img} />}
        {!showPicture && children}
      </Link>

      <div className={classes.featureInfo}>
        <div className={`${classes.left}`}>
          <p className={`font-large`}>{title}</p>
          {/* {!isMobile && viewButton} */}
        </div>

        <TwoFonts
          firstLine={role}
          secondLine="Role"
          className={`${classes.rightColOne}`}
        />

        <TwoFonts firstLine={scope} secondLine="Scope" />

        {/* {isMobile && viewButton} */}
      </div>
    </div>
  );
}

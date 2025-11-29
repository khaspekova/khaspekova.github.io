import classes from "./contentClasses.module.css";
import { ReactNode } from "react";
import Image from "next/image";

export interface IPictureContainerImage {
  src: string;
  pictureClassName?: string;
  containerClassName?: string;
  fillContainer?: boolean;
  width?: number;
  height?: number;
  isPriorityImage?: boolean;
}

export interface HomeSection {
  title: string;
  img?: IPictureContainerImage;
  role: string;
  scope: string;
  href: string;
  showPicture?: boolean;
  childComponent?: ReactNode;
}

const boucoup_image_components = [
  { bgColor: "#D9FCFF", src: "/images/home/boucoup1.webp" },
  { bgColor: "#E0E8FD", src: "/images/home/boucoup2.webp" },
  { bgColor: "#E6D4FF", src: "/images/home/boucoup3.webp" },
  { bgColor: "#FFD0AE", src: "/images/home/boucoup4.webp" },
];

const boucoup_image = (
  <div className={classes.homeBoucoupImage}>
    {boucoup_image_components.map((item, i) => (
      <div
        key={i}
        style={{ backgroundColor: item.bgColor }}
        className={classes.homeImageContainer}
      >
        <Image
          src={item.src}
          alt=""
          width={612}
          height={1255}
          className={classes.image90}
          quality={95}
          sizes="(max-width: 480px) 25vw, (max-width: 768px) 25vw, 300px"
        />
      </div>
    ))}
  </div>
);

export const HOME_SECTIONS: HomeSection[] = [
  {
    title: "Saving feature",
    role: "UX Design, UI Design, Prototyping, Research",
    scope: "Mobile, B2B2C, Saas",
    href: "/saving-feature",
    img: {
      src: "/images/home/savings.webp",
      pictureClassName: classes.imageHeight95,
      containerClassName: classes.homeSavingsImage,
      fillContainer: false,
      width: 1227,
      height: 1702,
      isPriorityImage: true,
    },
  },
  {
    title: "Boucoup",
    role: "UX Design, UI Design, Prototyping",
    scope: "Mobile, B2B2C, Saas",
    href: "/boucoup",
    showPicture: false,
    childComponent: boucoup_image,
  },
  {
    title: "Stratus platform",
    role: "UX Design, UI Design, Prototyping, Design System, Research",
    scope: "Web, Mobile, B2B,Saas",
    href: "/",
    img: {
      src: "/images/home/stratus.webp",
      fillContainer: true,
      width: 4960,
      height: 2416,
    },
  },
  {
    title: "Lebard app",
    role: "Product Strategy, UI/UX/IxD, Prototyping, Research",
    scope: "Web",
    href: "/",
    img: {
      src: "/images/home/lebard.webp",
      fillContainer: true,
      width: 4956,
      height: 2416,
    },
  },
];

import Image from "next/image";
import { ReactNode } from "react";

import classes from "@/styles/contentClasses.module.css";

import { IPictureContainerImage } from "@/components/UI/PictureContainer";

export interface HomeSection {
  title: string;
  img: IPictureContainerImage;
  href: string;
  description: string;
  externalUrl?: string;
  childComponent?: ReactNode;
  cursorText?: string;
}

export const HOME_SECTIONS: HomeSection[] = [
  {
    title: "Boucoup",
    href: "/boucoup",
    description:
      "— white label banking platform that helps credit unions and banks offer a mobile app where parents can teach teens money management.",
    externalUrl: "https://google.com",
    img: {
      src: "/images/home/new.png",
      isPriorityImage: true,
    },
  },
  {
    title: "Saving feature",
    href: "/saving-feature",
    description:
      "— a tool that incentivises the child to save money and allows the parents teach them be less wasteful.",
    externalUrl: "https://google.com",
    img: {
      src: "/images/home/new.png",
      isPriorityImage: true,
    },
  },
  {
    title: "Design system",
    href: "/design-system",
    description:
      "— a tool that incentivises the child to save money and allows the parвтитents teach them be less wasteful.",
    img: {
      src: "/images/home/new.png",
      isPriorityImage: true,
    },
  },
  {
    title: "Lebard app",
    href: "/",
    description:
      "— a tool that incentivises the child to save money and allows the parвтитents teach them be less wasteful.",
    img: {
      src: "/images/home/new.png",
      isPriorityImage: true,
    },
    cursorText: "coming soon",
  },
];

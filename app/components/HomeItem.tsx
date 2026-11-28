"use client";

import Link from "next/link";
import Image from "next/image";

import classes from "@/styles/HomeItem.module.css";

import PictureContainer from "@/components/UI/PictureContainer";
import { HomeSection } from "@/content/home";
import { useCursorContext } from "@/hooks/useCursorContext";

import SectionNumber from "@/components/UI/SectionNumber";

interface HomeItemProps extends HomeSection {
  children?: React.ReactNode;
}

export default function HomeItem({
  title,
  href,
  img,
  description,
  externalUrl,
  cursorText,
  children,
}: HomeItemProps) {
  const { setCursorText } = useCursorContext();

  const handleMouseEnter = () => {
    setCursorText(cursorText || "");
  };

  const handleMouseLeave = () => {
    setCursorText("");
  };

  return (
    <div
      className={classes.homeItem}
      onMouseEnter={cursorText ? handleMouseEnter : undefined}
      onMouseLeave={cursorText ? handleMouseLeave : undefined}
    >
      <SectionNumber num={2} />
      <div className={`${classes.info} flex flex-col justify-between`}>
        <h2 className="text-2xl leading-8 text-black font-medium">{title}</h2>
        <div className={`${classes.infoBottom} flex flex-col`}>
          <p className="font-book text-base leading-5 text-black">
            {description}
          </p>
          {externalUrl && (
            <a href={externalUrl} className="flex gap-[6px]" target="_blank">
              <p className="underline! font-family-jbmono text-sm leading-[140%] tracking-[0px] font-light!">
                visit site
              </p>
              <Image
                src="/icons/icon-outside-link-thin.svg"
                alt=""
                width={10}
                height={10}
              />
            </a>
          )}
        </div>
      </div>
      <Link href={href} className={classes.image}>
        <Image
          src={img.src}
          alt=""
          width={820}
          height={521}
          loading={img.isPriorityImage ? "eager" : "lazy"}
          priority={img.isPriorityImage}
          className="w-full h-auto aspect-3/2"
        />
      </Link>
    </div>
  );
}

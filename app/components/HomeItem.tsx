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
      <div className="flex flex-col justify-between pr-5">
        <h2 className="text-2xl leading-8 text-black font-medium">{title}</h2>
        <div className="flex flex-col gap-11">
          <p className="font-book text-base leading-5 text-black">
            {description}
          </p>
          {externalUrl && (
            <div>
              <Link href={externalUrl} target="_blank" className="underline!">
                visit site
              </Link>
            </div>
          )}
        </div>
      </div>
      <Link href={href}>
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

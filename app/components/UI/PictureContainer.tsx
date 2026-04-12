import Image from "next/image";

import classes from "@/styles/PictureContainer.module.css";

export interface IPictureContainerImage {
  src: string;
  pictureClassName?: string;
  containerClassName?: string;
  fillContainer?: boolean;
  width?: number;
  height?: number;
  isPriorityImage?: boolean;
  isDarkBg?: boolean;
}

export default function PictureContainer({
  src,
  pictureClassName = "",
  containerClassName = "",
  fillContainer = false,
  width = 800,
  height = 600,
  isPriorityImage = false,
  isDarkBg = false,
}: IPictureContainerImage) {
  return (
    <div
      className={`${classes.pictureContainer} ${containerClassName} ${
        fillContainer ? classes.fillContainer : undefined
      } ${isDarkBg ? classes.dark : undefined}`}
    >
      <Image
        src={src}
        alt=""
        width={width}
        height={height}
        className={pictureClassName}
        loading={isPriorityImage ? "eager" : "lazy"}
        priority={isPriorityImage}
        quality={95}
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw"
      />
    </div>
  );
}

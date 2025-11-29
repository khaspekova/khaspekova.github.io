import Image from "next/image";
import { IPictureContainerImage } from "@/content/home";

interface PictureContainerProps extends IPictureContainerImage {}

export default function PictureContainer({
  src,
  pictureClassName = "",
  containerClassName = "",
  fillContainer = false,
  width = 800,
  height = 600,
  isPriorityImage = false,
}: PictureContainerProps) {
  return (
    <div
      className={`w-full h-[604px] rounded-[10px] flex items-center justify-center ${containerClassName} ${
        fillContainer ? "overflow-hidden !h-auto" : undefined
      }`}
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

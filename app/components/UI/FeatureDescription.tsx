import Image from "next/image";

import classes from "@/styles/FeatureDescription.module.css";

import CaseText from "@/components/UI/CaseText";
import PictureContainer from "@/components/UI/PictureContainer";
import { IPictureContainerImage } from "@/components/UI/PictureContainer";

interface IFeatureDescriptionRow {
  title: string;
  paragraph?: (string | null)[];
  list?: string[];
  link?: string;
}

interface IFeatureDescriptionImage extends IPictureContainerImage {
  isFullWidth?: boolean;
}

interface IFeatureDescriptionProps {
  isTitle?: boolean;
  rows: IFeatureDescriptionRow[];
  className?: string;
  image?: IFeatureDescriptionImage;
}

export default function FeatureDescription({
  isTitle,
  rows,
  className = "",
  image,
}: IFeatureDescriptionProps) {
  return (
    <div className={`${className} ${classes.container}`}>
      <div className={classes.rows}>
        {rows.map((row) => (
          <CaseText key={row.title} {...row} isTitle={isTitle} />
        ))}
      </div>
      {image &&
        (image.isFullWidth ? (
          <div
            className={`overflowComponent ${classes.imageContainer} ${
              image.containerClassName ?? ""
            }`}
          >
            <Image
              src={image.src}
              alt=""
              width={image.width ?? 1200}
              height={image.height ?? 800}
              className={image.pictureClassName}
              quality={95}
              sizes="100vw"
            />
          </div>
        ) : (
          <PictureContainer
            {...image}
            containerClassName={`${classes.imageContainer} ${
              image.containerClassName ?? ""
            }`}
          />
        ))}
    </div>
  );
}

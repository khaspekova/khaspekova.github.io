import classes from "./LogoSection.module.css";
import Image from "next/image";

export default function LogoSection() {
  const firstText = (
    <div className={`${classes.firstText}`}>
      <p>Product Designer passionate</p>
      <p>about crafting digital experiences that solve real user problems.</p>
    </div>
  );

  const secondText = (
    <div className={classes.secondText}>
      <p>Keep building and never stop playing.</p>
    </div>
  );

  const image = (
    <div className="flex flex-col justify-end">
      <Image
        src="/images/initials.svg"
        alt="Initials"
        width={200}
        height={200}
        className={classes.image}
        loading="eager"
        priority
        quality={95}
        sizes="(max-width: 768px) 150px, 200px"
      />
    </div>
  );

  return (
    <div className={`${classes.logoSection} font-large`}>
      {firstText}
      {image}
      {secondText}
    </div>
  );
}

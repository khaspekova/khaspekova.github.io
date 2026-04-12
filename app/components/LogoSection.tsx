"use client";

import classes from "@/styles/LogoSection.module.css";
import Image from "next/image";

import SectionNumber from "@/components/UI/SectionNumber";
import { useMediaQuery, BREAKPOINTS } from "@/hooks/useMediaQuery";

export default function LogoSection() {
  const isTablet = useMediaQuery(BREAKPOINTS.tablet);

  return (
    <div className="flex flex-col gap-20 mt-[88px]! items-start w-full sm:w-2/3">
      <div className="flex justify-start sm:justify-end w-full">
        <Image
          src="/images/k_logo_1.svg"
          alt="Initials"
          width={200}
          height={200}
          className="w-full xs:w-3/4  h-auto aspect-[9/4] min-w-[250px] sm:min-w-[320px]"
          loading="eager"
          priority
          quality={95}
        />
      </div>
      <div className={classes.logoSectionGrid}>
        <SectionNumber num={1} color="gray" />
        <div className="flex flex-col justify-between h-full">
          {Array.from({ length: 3 }, (_, i) => (
            <Image
              key={i}
              src="/icons/chevron_down.svg"
              alt=""
              width={22}
              height={15}
              className="my-2!"
            />
          ))}
        </div>
        <p className="font-medium text-black-default text-[22px] leading-[26px] tracking-normal">
          A selected set of projects I've built with individuals and teams. Keep
          building and {!isTablet && <br />}
          never stop playing.
        </p>
      </div>
    </div>
  );
}

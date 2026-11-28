import classes from "@/styles/AboutSection.module.css";

import SectionNumber from "@/components/UI/SectionNumber";
import Publicity from "@/components/Publicity";

const aboutText = [
  `Hi, I'm Kristina and I've been in design since university, with a background that blends design and coding. In my career i focus  on customer acquisition and retention, and set skills i’ve developed are centred around solving this problems and turning complex issue into simple user experiences. Also I have neorodiversety and i always advocate about inclusive design.`,
  `As for my free time, I like to spend it on reading, sports, baking and theatre. I also have an amazing dog that will steal your heart.`,
];

export default function AboutSection() {
  return (
    <>
      <div className={`${classes.aboutSectionGrid} w-full sm:w-2/3 mb-[60px]`}>
        <SectionNumber num={3} />
        <h2 className="text-[44px] leading-11 font-medium">About</h2>
        <div className="text-[22px] leading-[26px] font-medium">
          <p>{aboutText[0]}</p>
          <br />
          <p>{aboutText[1]}</p>
        </div>
      </div>
      <Publicity />
    </>
  );
}

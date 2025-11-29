import { Fragment } from "react";
import classes from "./AboutSection.module.css";

const aboutText = [
  `Hi, I'm Kristina and I love design! I graduated with a bachelor's degree in interactive design in 2012.
   For several years I tried working in different design fields:
    illustration, publishing, typography, graphic and digital design,
     but my love for logic won out and I focused on UX/UI. `,

  `I have worked with various products,
   both simple ones for internal company systems and complex integrated financial ones. 
   Experience in designing complex workflows and automation.
    My favourite part of product design is researching and testing the product in different ways.
     I also want to expand the requirements for accessibility for 
neurodiverse people.`,

  `As for my free time, I like to spend it on reading,
   sports, baking and theatre.
    I also have an amazing dog that will steal your heart.
`,
];

export default function AboutSection() {
  return (
    <div className={`${classes.aboutSection} overflowComponent`}>
      <h3 className="font-large-narrow">About</h3>
      <div className={classes.text}>
        {aboutText.map((item, i) => (
          <Fragment key={i + item.slice(0, 5)}>
            {i !== 0 ? <br /> : null}
            <p className="font-base">{item}</p>
          </Fragment>
        ))}
      </div>
    </div>
  );
}


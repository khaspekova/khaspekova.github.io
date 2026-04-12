import classes from "@/styles/contentClasses.module.css";

export const TABLE_CONTENT = [
  "Mobile & Web system",
  "UI design, accessibility, usability testing, design system",
  "Product Manager, Engineering team, UX Copywriter",
  `During the strategic planning phase of the Boucoup project, I identified a critical 
  need for a scalable design foundation. The project requirements revealed that 
  success would depend on creating an intuitive, adaptable design system capable 
  of supporting white-label customization while maintaining seamless 
  design-to-code consistency.`,
];

export const SECTIONS = [
  {
    rows: [
      {
        title: "Building a design system",
        paragraph: ["Creating a simple yet impactful design system"],
      },
    ],
  },
  {
    rows: [
      {
        title: "Challenge",
        paragraph: [
          `The roadmap analysis highlighted the necessity for a design system that could serve dual purposes: delivering exceptional user experience while providing the flexibility required for white-label product variations. Adding complexity to this challenge was the tight timeline—the design system needed to be built rapidly to support the project's accelerated development schedule.`,
        ],
      },
      {
        title: "Solution",
        paragraph: [
          `I developed a comprehensive design system that prioritized user-friendliness and adaptability, ensuring that design specifications translated directly into development implementation. This approach eliminated the typical disconnect between design vision and final product execution.
          Wins:`,
        ],
        list: [
          "Less time spent on coding new components",
          "Less back and forth during QA",
          "Coded design is a lot more consistent",
          "Handoff is a lot more efficient (less explanation needed to describe elements)",
        ],
      },
    ],
    image: {
      src: "/images/system/solution.webp",
      width: 5120,
      height: 2880,
      containerClassName: classes.systemSolutionImageContainer,
      isPriorityImage: true,
      isFullWidth: true,
    },
  },
  {
    rows: [
      {
        title: "Keeping it simple yet scalable",
        paragraph: [
          `Given the content-heavy nature of the platform, I designed a restrained visual system. For a new product, my priority was reducing friction through consistent, familiar patterns rather than bold visual statements — letting users focus on their tasks, not the interface.`,
        ],
      },
      {
        title: "Design System Journey |",
        paragraph: [
          `I studied industry-leading design systems from Shopify, Apple, and Google, drawing inspiration from their approaches to scalability and consistency. While these systems provided valuable insights, their complexity and enterprise scope made them challenging to adapt for smaller-scale projects.`,
        ],
      },
    ],
    image: {
      src: "/images/system/guidelines.webp",
      containerClassName: classes.systemJourneyOneImageContainer,
      width: 5120,
      height: 3312,
      isFullWidth: true,
    },
  },
  {
    rows: [
      {
        title: "Design System Journey ||",
        paragraph: [
          `The breakthrough came when I discovered Atomic Design principles. This methodology provided the organizational framework I needed, teaching me to think hierarchically about design components — from basic atoms to complex organisms. By applying these principles, I transformed my approach from ad-hoc component creation to systematic, scalable design architecture.`,
        ],
      },
      {
        title: "Accessibility",
        paragraph: [
          `Accessibility is a big topic of conversation actually, especially considering it's entirely on the design side.`,
        ],
        list: [
          "Designing components taking into WCAG principles,",
          "I checked contrast, readability, and navigation.",
          "Using semantic markup and correct HTML elements.",
        ],
      },
    ],
    image: {
      src: "/images/system/checklist.webp",
      containerClassName: classes.systemJourneyTwoImageContainer,
      width: 5100,
      height: 2936,
      isFullWidth: true,
    },
  },
  {
    rows: [
      {
        title: "Delivering",
        paragraph: [
          `I noticed our design-to-development handoff was causing delays and misunderstandings.I  need provide tokens and variables. I got a front-end dev to collaborate with me. With her help, we could included tokens, CSS class, and code snippets directly to the Figma file. `,
        ],
      },
      {
        title: "Impact",
        paragraph: [
          `The resulting design system became the foundation for consistent, scalable product development, enabling efficient white-label customization while maintaining design integrity across all implementations. This systematic approach now informs all my design system work, ensuring both efficiency and scalability.`,
        ],
      },
    ],
    image: {
      src: "/images/system/final.webp",
      containerClassName: classes.systemImpactImageContainer,
      width: 5120,
      height: 2880,
      isFullWidth: true,
    },
  },
];

import classes from "@/Savings.module.css";

export const TABLE_CONTENT = [
  "Mobile app",
  "Interaction, UI design, user research, facilitation, prototyping, usability testing, project scoping",
  "Product Manager\nEngineering team UX\nCopywriter",
  "At BankingOn, I led the design of a youth savings feature for our B2B white-label banking app for credit unions. The interface balances engaging visuals for children with trust-building controls for parents, promoting financial literacy through goal-based saving.",
];

export const SECTIONS = [
  {
    rows: [
      {
        title: "Saving Feature",
        paragraph: [
          "— a tool that incentivises the child to save money and allows the parent to work with the teenager to create a savings goal.",
        ],
      },
    ],
  },
  {
    rows: [
      {
        title: "Challenge",
        paragraph: [
          "After launching our MVP, user research revealed a critical gap: children had no structured way to save money, and parents lacked tools to teach responsible financial habits. This limitation was affecting both user satisfaction and our business metrics.",
        ],
      },
      {
        title: "Solution",
        paragraph: ["I designed a dual-interface youth banking solution with:"],
        list: [
          "Child-friendly visuals alongside parental controls",
          "Visual goal-based savings trackers",
          "Parental oversight with notifications",
        ],
      },
    ],
    image: {
      src: "/images/savings/solution.webp",
      containerClassName: "items-end h-auto",
      pictureClassName: classes.solutionImage,
      width: 4956,
      height: 1936,
    },
  },
  {
    rows: [
      {
        title: "Understanding the Problem",
        paragraph: [
          "User research revealed children lacked structured savings capabilities in our app. This presented an opportunity to design an engaging feature appealing to young users while giving parents tools to teach financial responsibility. Through competitive analysis and family interviews, I found competing apps either had adult-oriented interfaces or inadequate children's savings features. Research showed children respond best to visual goal representations, while parents prioritize transparency and control over their children's financial activities.",
        ],
      },
    ],
    image: {
      src: "/images/savings/understanding.webp",
      pictureClassName: classes.image90,
      width: 3974,
      height: 2084,
    },
  },
  {
    rows: [
      {
        title: "Concept Development",
        paragraph: [
          'I partnered with our product manager to develop the "Goals" feature, allowing children to set specific savings targets while giving parents the ability to suggest goals and monitor progress. Additional functionality like subgoals and rewards was documented for potential future implementation based on testing results.',
        ],
      },
      {
        title: "Design Challenges",
        paragraph: [
          "I addressed a key technical constraint by designing a solution that nested multiple banking system accounts within the Goals feature, maintaining a clean main interface. The design progressed from initial wireframes focusing on core flows (goal setup, tracking, and achievement) to detailed screens covering goal creation, image selection, progress visualization, and dashboard integration.",
        ],
      },
    ],
    image: {
      src: "/images/savings/challenges.webp",
      containerClassName: classes.challengesImageContainer,
      pictureClassName: classes.image90,
      width: 4328,
      height: 2892,
    },
  },
  {
    rows: [
      {
        title: "Collaboration & Implementation",
        paragraph: [
          "Throughout development, I collaborated closely with our engineering team to address technical constraints. As parallel changes were being introduced to other parts of the product, I needed to rapidly adapt designs while maintaining consistency. This required creating new components for our design library that would support both the Goals feature and future product evolution.",
        ],
      },
      {
        title: "Testing & Refinement",
        paragraph: [
          "I validated our design through usability testing with nine parent-child pairs. Results showed children were motivated by goal imagery but sometimes struggled to locate progress information. In response, I enhanced the visual prominence of goal images and streamlined navigation between dashboard and goal details. This iterative design process continued until we achieved a solution that satisfied both user needs and business requirements.",
        ],
      },
    ],
    image: {
      src: "/images/savings/testing.webp",
      pictureClassName: classes.image90,
      width: 4132,
      height: 2100,
    },
  },
  {
    rows: [
      {
        title: "Results",
        paragraph: [
          `Business Impact: Demo requests increased from 5 to 20 per week`,
          null,
          `User Impact:`,
        ],
        list: [
          "User Engagement: 4% increase in app openings within the first month",
          "User Satisfaction: 97% positive feedback",
          "Performance: 3% error rate, with task completion times meeting benchmarks",
        ],
      },
    ],
    image: {
      src: "/images/savings/results.webp",
      containerClassName: "overflow-visible justify-start",
      pictureClassName: classes.resultsImage,
      width: 4968,
      height: 1684,
    },
  },
  {
    rows: [
      {
        title: "Key Learnings",
        paragraph: [
          "Early corridor testing would have saved development time, but our close collaboration with engineers throughout the process helped us move efficiently despite this limitation. Involving technical stakeholders early in the design process was crucial for addressing implementation challenges.",
        ],
      },
    ],
    image: {
      src: "/images/savings/schema.webp",
      isFullWidth: true,
      pictureClassName: classes.schemaImage,
      width: 5120,
      height: 3228,
    },
  },
];

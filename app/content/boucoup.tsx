import classes from "./contentClasses.module.css";

export const TABLE_CONTENT = [
  "Mobile app, Web admin panel",
  "Interaction, UI design, prototyping, user testing, project scoping",
  "Product Manager,\nEngineering team,\nUX Copywriter,\nUX Research,\n2 Product Designers",
  `Led the UX design for MVP app, redesigned the system, and established the
   foundation for the admin panel, which increased user engagement and streamlined the core
    wireframing process, win Award in Innovations in Digital 2025 (creditunions.com),
     as well as increased session length and user engagement.`,
];

export const SECTIONS = [
  {
    rows: [
      {
        title: "Boucoup",
        link: "https://www.bankingon.io/boucoup",
        paragraph: [
          "— White Label Family Banking Platform. that helps credit unions and banks offer a mobile app where parents can teach teens money management through interactive features like allowances, chore rewards, educational videos, and real-time notifications.",
        ],
      },
    ],
  },
  {
    rows: [
      {
        title: "Challenge",
        paragraph: [
          `Our primary goal was to rapidly enter the market and build a customer base for this new product. We needed to create a highly adaptable, visually appealing system that could:`,
        ],
        list: [
          "Seamlessly integrate with diverse brand identities",
          "Provide an intuitive experience for both parents and teenagers",
          "Handle complex feature requests and hidden functions",
          "Support flexible color schemes",
        ],
      },
    ],
    image: {
      src: "/images/boucoup/challenge.webp",
      pictureClassName: classes.image90,
      width: 4064,
      height: 1960,
      isPriorityImage: true,
      isDarkBg: true,
    },
  },
  {
    rows: [
      {
        title: "Solution",
        paragraph: [
          "Create a mobile application (for a parent, for a child) that is platform-adaptable for any client. To work with the application from the client side, we also developed an admin panel.",
        ],
      },
      {
        title: "Research & Discovery",
        paragraph: [
          `We conducted extensive research to ensure our solutions were tailored to user needs:`,
        ],
        list: [
          "Created customer journey maps and user personas",
          "Conducted approximately 15 interviews with power users",
          "Consulted with 3 key customers",
          "Analyzed our existing product to identify reusable elements",
        ],
      },
    ],
    image: {
      src: "/images/boucoup/research.webp",
      isFullWidth: true,
      width: 5120,
      height: 2952,
    },
  },
  {
    rows: [
      {
        title: "Design Process",
        paragraph: [`To optimize development time while ensuring quality:`],
        list: [
          "Reused applicable components from our existing product",
          "Conducted comprehensive technical and visual research focused on the teenage demographic",
          "Created custom color palettes based on principles from 'Refactoring UI' by Adam Wathan",
          "Developed and tested components for the design library",
          "Performed accessibility testing",
          "Maintained regular communication with the development team for seamless integration",
        ],
      },
    ],
    image: {
      src: "/images/boucoup/designProcess.webp",
      width: 4956,
      height: 1232,
    },
  },
  {
    rows: [
      {
        title: "User Testing & Validation",
        paragraph: [`We validated our concepts through:`],
        list: [
          "Selecting 6 current users for interviews and prototype testing",
          "Having participants navigate through interactive prototypes",
          "Gathering feedback through group discussions",
          "Making key design decisions based on user input (avoiding overly bright colors, standardizing icon rotation angles)",
        ],
      },
      {
        title: "Implementation & Results",
        paragraph: [`The final implementation exceeded expectations:`],
        list: [
          "Created a test version centered around our designs",
          "Received outstanding feedback, particularly from dashboard administrators",
          "Established a design system that streamlined workflows",
          "Achieved smooth implementation without significant issues",
        ],
      },
    ],
    image: {
      src: "/images/boucoup/results.webp",
      pictureClassName: classes.image95,
      width: 4776,
      height: 1900,
    },
  },
  {
    rows: [
      {
        title: "Business Impact",
        paragraph: [`Our product launch was highly successful:`],
        list: [
          "Generated approximately 87 demo requests from potential customers",
          "Created a system with low implementation barriers for clients",
          "Developed easily adaptable color schemes",
          "Built a solution that integrated smoothly with various banking systems",
          "Completed 5 successful client integrations",
          "Received positive feedback from teenage users who found the application convenient and engaging",
        ],
      },
    ],
    image: {
      src: "/images/boucoup/business.webp",
      containerClassName: classes.boucoupBusinessImage,
      pictureClassName: classes.image95,
      width: 4780,
      height: 3052,
      isDarkBg: true,
    },
  },
  {
    rows: [
      {
        title: "Results",
        paragraph: [
          `Business Impact: Demo requests increased from 5 to 20 per week`,
        ],
        list: [
          "User Engagement: 4% increase in app openings within the first month",
          "User Satisfaction: 97% positive feedback",
          "Performance: 3% error rate, with task completion times meeting benchmarks",
        ],
      },
      {
        title: "Key Learnings",
        paragraph: [
          `Despite tight deadlines that prevented polishing some additional materials like the landing page and marketing resources, I successfully managed illustrators through detailed technical assignments and guidance, delivering a user-friendly and effective interface that balanced design quality with business objectives.`,
        ],
      },
    ],
    image: {
      src: "/images/boucoup/learnings_dark.webp",
      fillContainer: true,
      width: 4956,
      height: 2972,
    },
  },
];

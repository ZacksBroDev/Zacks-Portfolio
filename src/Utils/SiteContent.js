export const RESUME_LINK =
  "https://drive.google.com/file/d/1kkvc8CpPhsCAmPWMNQBovybQLpii8imD/view?usp=drive_link";

export const SITE_PROFILE = {
  name: "Zackary Brown",
  title: "Frontend Engineer",
  aboutTitle: "A Frontend Engineer",
  email: "zackaryzbrown@gmail.com",
  emailHref: "mailto:zackaryzbrown@gmail.com",
  phoneDisplay: "+1 505 358 8607",
  phoneHref: "tel:+1505358607",
  location: "Denver, Colorado",
  websiteLabel: "zackarybrown.net",
  websiteUrl: "https://zackarybrown.net",
  githubLabel: "zackaryzbrown",
  githubUrl: "https://github.com/zackaryzbrown",
  linkedinUrl: "https://www.linkedin.com/in/zackaryzbrown",
  xUrl: "https://x.com/bmxbro01",
  aboutImage:
    "https://res.cloudinary.com/djnazqqgr/image/upload/v1766927361/IMG_7605_hkqdbu.jpg",
  resumeImage:
    "https://res.cloudinary.com/djnazqqgr/image/upload/v1766927366/28067_SA2_npgzze.jpg",
};

export const HERO_CONTENT = {
  eyebrow: "Denver-based frontend engineer",
  headline: "Clean frontend interfaces that ship fast.",
  intro: "Hello, I'm",
  summary:
    "I build responsive React interfaces with a strong focus on clarity, performance, accessibility, and maintainable frontend code. My work spans client sites, product UI, deployment, and delivery.",
  availability: "Open to frontend engineering opportunities.",
  techStack: [
    "React",
    "JavaScript",
    "CSS",
    "Tailwind",
    "Accessibility",
    "Performance",
  ],
};

export const HERO_PROOF_POINTS = [
  {
    label: "Shipped",
    title: "Production Client Work",
    description:
      "Real websites and applications built and deployed for actual clients.",
  },
  {
    label: "Engineering",
    title: "React + TypeScript",
    description:
      "Responsive component-driven interfaces and maintainable frontend architecture.",
  },
  {
    label: "Quality",
    title: "Performance & Accessibility",
    description:
      "Semantic UI, responsive validation, and performance-conscious implementation.",
  },
  {
    label: "Delivery",
    title: "Build → Test → Deploy",
    description:
      "Implementation through validation, production builds, and cloud deployment.",
  },
];

export const ENGINEERING_PRACTICES = [
  {
    label: "Component architecture",
    description:
      "Reusable React components with clear responsibilities, shared content data, and maintainable composition.",
  },
  {
    label: "Testing",
    description:
      "Automated validation for route rendering and regression-prone portfolio behavior where coverage is practical.",
  },
  {
    label: "Accessibility",
    description:
      "Semantic markup, keyboard-accessible links and controls, visible focus states, readable contrast, and responsive UI.",
  },
  {
    label: "Performance",
    description:
      "Optimized Cloudinary image delivery, reserved media space, production builds, and restrained transform-based motion.",
  },
  {
    label: "Delivery",
    description:
      "Git-based iteration, deploy-ready builds, hosting setup, and post-launch adjustments based on real project needs.",
  },
];

export const HOME_FEATURED_PROJECT_IDS = [2, 1, 4];

export const HERO_SHOWCASE_PROJECT_IDS = [2, 3, 1];

export const ABOUT_CONTENT = {
  paragraphs: [
    "I build frontend experiences that are meant to be used in the real world, not just shown in screenshots. My strongest work lives at the intersection of clear interface design, practical implementation, and fast iteration with real client needs.",
    "Most of my day-to-day focus is React and TypeScript, backed by strong HTML/CSS fundamentals and a product mindset around responsive behavior, accessibility, and conversion-friendly UX.",
    "Outside of shipping client work, I build personal product experiments to keep sharpening architecture, interaction patterns, and implementation quality.",
  ],
  highlights: [
    "I optimize for clarity first: users should understand what to do within seconds.",
    "I build maintainable UI systems teams can extend without rewrites.",
    "I care about implementation quality as much as visual polish.",
  ],
};

export const RESUME_HEADER_LINKS = [
  {
    type: "email",
    href: SITE_PROFILE.emailHref,
    label: SITE_PROFILE.email,
  },
  {
    type: "website",
    href: SITE_PROFILE.websiteUrl,
    label: SITE_PROFILE.websiteLabel,
  },
  {
    type: "github",
    href: SITE_PROFILE.githubUrl,
    label: SITE_PROFILE.githubLabel,
  },
];

export const RESUME_SUMMARY =
  "Frontend developer focused on React, TypeScript, and production-ready UI implementation. I build responsive interfaces with strong accessibility, performance, and conversion-minded UX, and I collaborate comfortably across APIs, deployment, and client delivery.";

export const SOCIAL_LINKS = [
  {
    key: "linkedin",
    label: "LinkedIn",
    href: SITE_PROFILE.linkedinUrl,
    ariaLabel: `Visit ${SITE_PROFILE.name} on LinkedIn`,
    footerIconClassName: "text-3xl text-blue-400",
  },
  {
    key: "github",
    label: "GitHub",
    href: SITE_PROFILE.githubUrl,
    ariaLabel: `Visit ${SITE_PROFILE.name} on GitHub`,
    footerIconClassName: "text-3xl text-black",
  },
  {
    key: "x",
    label: "X",
    href: SITE_PROFILE.xUrl,
    ariaLabel: `Visit ${SITE_PROFILE.name} on X`,
    footerIconClassName: "text-3xl text-blue-600",
  },
];

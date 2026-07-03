export const RESUME_LINK =
  "https://drive.google.com/file/d/1qSTzEZW7JKXDqjVx9NmH4-X3MNYEvJd-/view?usp=sharing";

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
  headline: "Frontend engineer building fast, clean product interfaces.",
  intro: "Hello, I'm",
  summary:
    "I build responsive React interfaces with a strong focus on clarity, performance, accessibility, and maintainable frontend code. My work spans client sites and product UI, with enough cross-stack experience to collaborate well on APIs, deployment, and product delivery.",
  availability:
    "Open to frontend engineer and junior frontend developer roles.",
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
    label: "Focus",
    value: "Product UI, performance, accessibility",
  },
  {
    label: "Work",
    value: "Client builds and responsive web apps",
  },
  {
    label: "Approach",
    value: "Clear interfaces, reliable delivery",
  },
];

export const HOME_FEATURED_PROJECT_IDS = [2, 1, 4];

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

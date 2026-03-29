export const RESUME_LINK =
  "https://drive.google.com/file/d/1d5lHNZpsbS5rCdfgRnPoDB-jtsKIL_sc/view?usp=sharing";

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
  githubLabel: "ZacksBroDev",
  githubUrl: "https://github.com/ZacksBroDev",
  linkedinUrl: "https://www.linkedin.com/in/zackaryzbrown",
  xUrl: "https://x.com/bmxbro01",
  aboutImage:
    "https://res.cloudinary.com/djnazqqgr/image/upload/v1766927361/IMG_7605_hkqdbu.jpg",
  resumeImage:
    "https://res.cloudinary.com/djnazqqgr/image/upload/v1766927366/28067_SA2_npgzze.jpg",
};

export const HERO_CONTENT = {
  intro: "Hello, I'm",
  summary:
    "I build fast, responsive web interfaces with React, JavaScript, CSS, and Tailwind. My focus is shipping clean user-facing features, improving performance, and writing maintainable frontend code that works reliably in production. I've worked across the stack too, which helps me build interfaces with a strong understanding of APIs, deployment, and the bigger product.",
  techStack: [
    "React",
    "JavaScript",
    "CSS",
    "Tailwind",
    "Accessibility",
    "Performance",
  ],
};

export const ABOUT_CONTENT = {
  paragraphs: [
    "My strongest work is on the frontend: building practical web applications that feel clear, fast, and polished in real use. I work primarily with React, JavaScript, CSS, and Tailwind, with a focus on responsive UI, accessibility, performance, and maintainable component structure.",
    "Recent projects include a centralized React training platform for a martial arts school serving 100+ students and a promotional site where I improved frontend performance with lazy loading and progressive image rendering for an image-heavy gallery experience.",
    "I studied Computer Science at Western Colorado University, where I built a strong foundation in software development and problem-solving. Since then, I've built and deployed web applications from concept to production. While I can work across the stack, the role I am intentionally pursuing is frontend engineering: turning requirements into polished user-facing features that teams can understand, maintain, and trust.",
  ],
  highlights: [
    "Built a centralized React training platform serving 100+ students with lessons, schedules, and resources in one responsive interface.",
    "Improved frontend performance on a content-heavy band site with lazy loading and progressive image rendering.",
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
  "Frontend engineer building responsive, production-ready interfaces with React, JavaScript, CSS, and Tailwind. I focus on accessibility, performance, and clean user-facing implementation, with cross-stack experience that helps me collaborate effectively on APIs, deployment, and product delivery.";

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

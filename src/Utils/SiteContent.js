export const RESUME_LINK =
  "https://drive.google.com/file/d/1d5lHNZpsbS5rCdfgRnPoDB-jtsKIL_sc/view?usp=sharing";

export const SITE_PROFILE = {
  name: "Zackary Brown",
  title: "Frontend Engineer",
  animatedTitle: "A Frontend Engineer",
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
    "I'm a frontend engineer focused on building polished, production-ready interfaces with React and modern frontend tooling. I care about responsive layout, accessible interactions, clean component architecture, and performance so products feel fast, intuitive, and dependable.",
};

export const ABOUT_CONTENT = {
  paragraphs: [
    "I'm a frontend engineer with a strong focus on building practical, production-ready web applications. I specialize in responsive user interfaces, reusable components, and product experiences that feel clear, polished, and easy to use across devices.",
    "I studied Computer Science at Western Colorado University, where I built a solid foundation in software development and problem-solving. Since then, I've applied those fundamentals to client and personal projects, turning business needs into maintainable frontend solutions with thoughtful UX, clean implementation, and reliable delivery.",
    "While I understand the broader product stack, the work I am intentionally pursuing is frontend engineering: interface quality, accessibility, performance, and shipping experiences that users genuinely enjoy.",
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
  "I'm a frontend engineer focused on building practical, production-ready web applications. I specialize in responsive user interfaces, reusable component architecture, accessibility, and performance-minded implementation. I enjoy translating business needs into polished product experiences, and I am seeking a frontend engineering role where I can keep growing in UI quality, product thinking, and modern frontend development.";

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

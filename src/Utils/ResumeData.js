import {
  RESUME_HEADER_LINKS,
  RESUME_SUMMARY,
  SITE_PROFILE,
} from "./SiteContent";

export const resumeData = {
  profile: {
    name: SITE_PROFILE.name,
    title: SITE_PROFILE.title,
    image: SITE_PROFILE.resumeImage,
    links: RESUME_HEADER_LINKS,
  },
  summary: RESUME_SUMMARY,
  education: [
    {
      title: "Western Colorado University",
      subtitle: "Computer Science",
      location: "Gunnison, CO",
      date: "August 2022 - March 2024",
    },
    {
      title: "Sandra Day O'Connor High School",
      location: "Phoenix, AZ",
      date: "August 2018 - May 2022",
      bullets: ["AP Computer Science & Robotic Courses"],
    },
  ],
  featuredExperience: [
    {
      role: "Frontend Engineer",
      companyLine: "Self-employed, Erie, CO",
      projects: [
        {
          title: "JustMalikBeats",
          href: "https://malikbeats.com",
          ariaLabel: "Visit the JustMalikBeats website",
          date: "October 2025 - January 2026",
          bullets: [
            "Designed and developed a responsive e-commerce experience for an independent music producer, organizing 50+ digital products into a clear browsing, preview, and checkout flow that supported direct-to-consumer sales.",
            "Built polished account, storefront, and admin-facing interfaces while integrating secure payments, authentication, and content management into one maintainable React application.",
          ],
        },
        {
          title: "Mile High Karate",
          href: "https://mhktraining.com",
          ariaLabel: "Visit the Mile High Karate website",
          date: "August 2025 - October 2025",
          bullets: [
            "Built a centralized React training platform for a martial arts school serving 100+ students, consolidating schedules, instructional videos, and resources into one responsive interface and reducing manual coordination by about 50%.",
          ],
        },
        {
          title: "The Futons",
          href: "https://thefutons.net",
          ariaLabel: "Visit The Futons website",
          date: "June 2025 - August 2025",
          bullets: [
            "Developed a performance-optimized promotional website for a local band, featuring a responsive photo gallery with 60+ concert images and a frontend-focused performance strategy using lazy loading and progressive image rendering.",
          ],
        },
      ],
    },
  ],
  workExperience: [
    {
      title: "Full-Time C Technician",
      company: "Firestone Complete Autocare",
      location: "Westminster, CO",
      date: "March 2024 - Present",
      bullets: [
        "Diagnose and repair automotive systems, including brakes, alignments, suspension, cooling, and electrical systems. Change oil, transmission fluid, and filters.",
        "Install and perform tire maintenance. Install batteries, shock absorbers, and exhaust systems, and check electrical systems.",
      ],
    },
    {
      title: "Deli & Seafood Clerk",
      company: "Kroger City Market",
      location: "Gunnison, CO",
      date: "September 2023 - March 2024",
      bullets: [
        "Ensure that all deli items are labeled, dated, covered, rotated, and monitored for quality and freshness.",
        "Provide excellent customer service, address the needs of customers in a timely and effective manner, and model suggestive selling techniques. Adhere to all food safety regulations and guidelines.",
      ],
    },
    {
      title: "Courtesy Clerk",
      company: "Kroger Fry's",
      location: "Phoenix, AZ",
      date: "May 2023 - August 2023",
      bullets: [
        "Bagged groceries at checkout for customers.",
        "Maintained good customer service by offering to help load groceries in cars, gather baskets, answer questions, and create an environment that enables customers to feel welcome and appreciated.",
      ],
    },
    {
      title: "Heavy Diesel Mechanic",
      company: "Par Five LLC",
      location: "Artesia, NM",
      date: "May 2022 - August 2022",
      bullets: [
        "Completed tire changes, oil and filter changes, and welding on diesel engines and semi-trucks.",
      ],
    },
    {
      title: "Maintenance Technician",
      company: "Firestone Complete Autocare",
      location: "Phoenix, AZ",
      date: "August 2021 - May 2022",
      bullets: [
        "Diagnose and repair automotive systems, including brakes, tires, and change oil and filters.",
      ],
    },
    {
      title: "Lubrication Technician",
      company: "Fenney's Automotive",
      location: "Phoenix, AZ",
      date: "May 2021 - August 2021",
      bullets: [
        "Diagnose and repair automotive systems, including brakes, tires, and change oil and filters.",
      ],
    },
    {
      title: "Facilities Maintenance Technician",
      company: "Best Western",
      location: "Artesia, NM",
      date: "May 2019 - August 2019",
      bullets: [
        "Assisted with facility projects, including painting, changing lights, cleaning, fixing appliances, and assisting guests with questions.",
      ],
    },
    {
      title: "Office Assistant",
      company: "Chamber of Commerce",
      location: "Artesia, NM",
      date: "May 2018 - August 2018",
      bullets: [
        "Assist staff with administrative duties, including preparing information packets, cleaning lobby areas, and other office tasks as needed.",
      ],
    },
  ],
  selfDevelopment: [
    {
      title: "100devs Training Agency",
      location: "Remote",
      date: "November 2025 - Present",
      bullets: [
        "Training program to practice and improve frontend engineering skills through structured coursework, projects, and community engagement.",
        "Interact with community members and contribute to open-source projects with teams across the nation.",
        "Ask and answer questions about frontend development and attend tech meetups in local cities.",
      ],
    },
  ],
  certifications: [
    {
      type: "certificate",
      title: "EPA 609 Certification",
      issuer: "ESCO Institute",
      detail: "Issued: April 25, 2025",
    },
    {
      type: "award",
      title: "Area Top Performer",
      issuer: "Firestone Complete Autocare",
      detail: "Q1 2025, Q2 2025, Q4 2024, Q4 2022",
    },
  ],
  skills: [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "Tailwind CSS",
    "Vite",
    "Responsive Design",
    "Accessibility",
    "Component Architecture",
    "API Integration",
    "Performance Optimization",
    "Technical SEO",
    "Git",
    "GitHub",
    "VS Code",
    "AWS Amplify",
    "Debugging",
  ],
};

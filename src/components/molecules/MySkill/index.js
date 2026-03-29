import React from "react";
import Lottie from "react-lottie";
import { FaHtml5, FaCss3Alt, FaReact, FaGithub, FaAws } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import man from "../../../assets/man.json";

const MySkill = () => {
  const frontendSkills = [
    {
      title: "HTML5",
      icon: <FaHtml5 className="text-orange-600" />,
      hasIcon: true,
    },
    {
      title: "CSS3",
      icon: <FaCss3Alt className="text-blue-400" />,
      hasIcon: true,
    },
    {
      title: "JavaScript (ES6+)",
      icon: <SiJavascript className="text-yellow-500 rounded" />,
      hasIcon: true,
    },
    {
      title: "React",
      icon: <FaReact className="text-cyan-400" />,
      hasIcon: true,
    },
    { title: "Tailwind CSS", hasIcon: false },
    { title: "Responsive Design", hasIcon: false },
    { title: "Component-Based Architecture", hasIcon: false },
  ];

  const uiSkills = [
    { title: "Accessible UI", hasIcon: false },
    { title: "Reusable Components", hasIcon: false },
    { title: "Forms & Validation", hasIcon: false },
    { title: "Content-Driven Interfaces", hasIcon: false },
    { title: "API Integration", hasIcon: false },
  ];

  const qualitySkills = [
    { title: "Performance Optimization", hasIcon: false },
    { title: "Core Web Vitals", hasIcon: false },
    { title: "Technical SEO", hasIcon: false },
    { title: "Debugging", hasIcon: false },
    { title: "Refactoring", hasIcon: false },
    { title: "Cross-Browser QA", hasIcon: false },
  ];

  const toolsSkills = [
    {
      title: "Git & GitHub",
      icon: <FaGithub className="text-black" />,
      hasIcon: true,
    },
    {
      title: "AWS",
      icon: <FaAws className="text-orange-400" />,
      hasIcon: true,
    },
    { title: "Vercel / Netlify", hasIcon: false },
    { title: "VS Code", hasIcon: false },
    { title: "Deployment Basics", hasIcon: false },
    { title: "Production Support", hasIcon: false },
  ];

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: man,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const SkillCategory = ({ title, subtitle, skills }) => (
    <div className="mb-8">
      <h2 className="text-primary text-2xl font-semibold mb-2">{title}</h2>
      {subtitle ? (
        <p className="text-neutral text-sm mb-4 italic">{subtitle}</p>
      ) : null}
      <div className="flex flex-wrap gap-3">
        {skills?.map((skill) => (
          <div key={skill.title} className="text-center">
            {skill.hasIcon ? (
              <div
                className="rounded-lg h-12 w-12 hover:-translate-y-2 duration-300 flex items-center justify-center text-3xl cursor-pointer shadow-lg hover:shadow-xl bg-[#313131] hover:bg-[#262626]"
                title={skill.title}
              >
                {skill?.icon}
              </div>
            ) : (
              <div className="px-4 py-2 rounded-lg bg-[#313131] hover:bg-[#262626] duration-300 text-neutral text-sm hover:text-white cursor-default shadow-md hover:shadow-lg">
                {skill.title}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="pt-24 parent">
      <h1 className="text-4xl font-semibold drop-shadow-md text-center mb-8">
        Frontend <span className="text-primary">Skillset</span>
      </h1>
      <div className="flex flex-col lg:flex-row items-start justify-between gap-8 my-8">
        <div className="flex-1">
          <SkillCategory
            title="Frontend Engineering"
            subtitle="Core technologies I use to build polished, responsive interfaces."
            skills={frontendSkills}
          />
          <SkillCategory
            title="UI Architecture & Experience"
            subtitle="How I shape maintainable interfaces that are easy to use and easy to extend."
            skills={uiSkills}
          />
          <SkillCategory
            title="Performance & Quality"
            subtitle="Practices I rely on to keep frontend work fast, stable, and search-friendly."
            skills={qualitySkills}
          />
          <SkillCategory
            title="Tools & Workflow"
            subtitle="Tooling that supports day-to-day frontend delivery and maintenance."
            skills={toolsSkills}
          />
        </div>
        <div className="flex-shrink-0">
          <Lottie options={defaultOptions} height={400} width={360} />
        </div>
      </div>
    </div>
  );
};

export default MySkill;

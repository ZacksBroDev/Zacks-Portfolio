import React from "react";
import Lottie from "react-lottie";
import {
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaReact,
  FaGithub,
  FaAws,
} from "react-icons/fa";
import {
  SiJavascript,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import man from "../../../assets/man.json";

const MySkill = () => {
  const frontendSkills = [
    { title: "HTML5", icon: <FaHtml5 className="text-orange-600" />, hasIcon: true },
    { title: "CSS3", icon: <FaCss3Alt className="text-blue-400" />, hasIcon: true },
    { title: "JavaScript (ES6+)", icon: <SiJavascript className="text-yellow-500 rounded" />, hasIcon: true },
    { title: "React", icon: <FaReact className="text-cyan-400" />, hasIcon: true },
    { title: "Responsive Design", hasIcon: false },
    { title: "Component-Based Architecture", hasIcon: false },
  ];

  const backendSkills = [
    { title: "Node.js", icon: <FaNodeJs className="text-green-600" />, hasIcon: true },
    { title: "Express.js", icon: <SiExpress className="text-neutral" />, hasIcon: true },
    { title: "REST APIs", hasIcon: false },
    { title: "Authentication (JWT)", hasIcon: false },
    { title: "API Integration", hasIcon: false },
  ];

  const databaseSkills = [
    { title: "MongoDB", icon: <SiMongodb className="text-green-500" />, hasIcon: true },
    { title: "Mongoose", hasIcon: false },
    { title: "Schema Design", hasIcon: false },
    { title: "Data Modeling", hasIcon: false },
  ];

  const toolsSkills = [
    { title: "Git & GitHub", icon: <FaGithub className="text-black" />, hasIcon: true },
    { title: "AWS", icon: <FaAws className="text-orange-400" />, hasIcon: true },
    { title: "Vercel / Netlify", hasIcon: false },
    { title: "CI/CD basics", hasIcon: false },
    { title: "Performance Optimization", hasIcon: false },
    { title: "Technical SEO", hasIcon: false },
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
      <p className="text-neutral text-sm mb-4 italic">{subtitle}</p>
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
        My <span className="text-primary">Skills</span>
      </h1>
      <div className="flex flex-col lg:flex-row items-start justify-between gap-8 my-8">
        <div className="flex-1">
          <SkillCategory
            title="Frontend Engineering"
            skills={frontendSkills}
          />
          <SkillCategory
            title="Backend & APIs"
            skills={backendSkills}
          />
          <SkillCategory
            title="Databases & Data"
            skills={databaseSkills}
          />
          <SkillCategory
            title="Tools, Deployment & Workflow"
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

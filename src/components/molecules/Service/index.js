import React from "react";
import {
  FiCode,
  FiCloud,
  FiTool,
  FiZap,
  FiDatabase,
  FiFileText,
} from "react-icons/fi";
import { BottomLine } from "../../../components";

const Service = () => {
  const services = [
    {
      id: 1,
      title: "Full Stack Engineer",
      icon: <FiCode />,
      description:
        "Design and build end-to-end web applications from system architecture and backend APIs to responsive, high-performance frontends. Deliver production-ready software built to scale.",
    },
    {
      id: 2,
      title: "Cloud Deployment & Maintenance",
      icon: <FiCloud />,
      description:
        "Deploy and maintain applications in production environments, handling hosting setup, CI/CD pipelines, monitoring, updates, and security to keep systems fast, reliable, and online.",
    },
    {
      id: 3,
      title: "Web Management & Ongoing Support",
      icon: <FiTool />,
      description:
        "Provide ongoing support for existing websites and applications, including updates, content changes, feature improvements, and technical upkeup—so products stay stable and current.",
    },
    {
      id: 4,
      title: "Performance & Optimization",
      icon: <FiZap />,
      description:
        "Audit and optimize applications to improve load times, reliability, and user experience through performance tuning, image optimization, Core Web Vitals, and targeted refactoring.",
    },
    {
      id: 5,
      title: "Backend & API Engineering",
      icon: <FiDatabase />,
      description:
        "Build secure, scalable backends and APIs that power real business logic, including authentication, databases, integrations, and clean data flows with security and maintainability prioritized.",
    },
    {
      id: 6,
      title: "Technical Consulting & Audits",
      icon: <FiFileText />,
      description:
        "Advise teams and founders through architecture reviews, code audits, and MVP planning—helping reduce risk, avoid technical debt, and make informed technical decisions.",
    },
  ];
  return (
    <div
      className="py-20 parent"
      // style={{ backgroundColor: "#313131" }}
    >
      <div className="mb-12">
        <h1 className="text-4xl font-semibold text-center">
          My <span className="text-primary">Services</span>
        </h1>
        <BottomLine />
        <p className="text-center text-neutral mt-4 max-w-2xl mx-auto">
          I build, optimize, and maintain production-ready web applications for
          real businesses. From architecture and APIs to deployment and
          long-term support.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services?.map((service) => (
          <div
            key={service.id}
            className={`${
              service.id % 2 === 0
                ? "bg-accent shadow-lg"
                : "bg-[#313131] shadow-md"
            } rounded-lg p-6 hover:shadow-primary cursor-pointer duration-300`}
          >
            <div className="mb-4 text-center">
              <span className="inline-block text-5xl text-primary">
                {service.icon}
              </span>
            </div>
            <h2 className="mb-4 text-2xl font-semibold text-center">
              {service.title}
            </h2>
            <p className="text-neutral">{service.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="max-w-3xl mx-auto p-8 bg-[#313131] rounded-lg shadow-lg">
          <p className="text-xl text-neutral mb-6">
            Have a project, problem, or idea you want to ship?
          </p>
          <a
            href="/contact"
            className="primary-button inline-flex items-center justify-center text-sm px-6 py-2 w-[200px] mx-auto"
          >
            <span>Let's talk.</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Service;

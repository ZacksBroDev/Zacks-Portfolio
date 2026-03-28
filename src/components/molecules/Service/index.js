import React from "react";
import { Link } from "react-router-dom";
import {
  FiCode,
  FiCloud,
  FiTool,
  FiZap,
  FiDatabase,
  FiFileText,
} from "react-icons/fi";
import { BottomLine, PrimaryBtn } from "../../../components";

const Service = () => {
  const services = [
    {
      id: 1,
      title: "Frontend Engineering",
      icon: <FiCode />,
      description:
        "Design and build responsive, high-performance user interfaces for modern web applications. Deliver polished frontends with clean architecture, accessible interaction patterns, and a strong focus on usability.",
    },
    {
      id: 2,
      title: "Frontend Delivery & Launch Support",
      icon: <FiCloud />,
      description:
        "Ship frontend projects to production with dependable hosting, environment setup, deploy previews, and release support across platforms like Vercel, Netlify, and Amplify.",
    },
    {
      id: 3,
      title: "Website Management & Ongoing Support",
      icon: <FiTool />,
      description:
        "Maintain existing websites and frontend applications with content updates, bug fixes, feature refinements, and technical upkeep so products stay current and reliable.",
    },
    {
      id: 4,
      title: "Performance & Accessibility Optimization",
      icon: <FiZap />,
      description:
        "Audit and improve load times, Core Web Vitals, accessibility, and overall usability through refactoring, responsive cleanup, image optimization, and targeted frontend tuning.",
    },
    {
      id: 5,
      title: "API Integration & Dynamic Interfaces",
      icon: <FiDatabase />,
      description:
        "Build dashboards, storefronts, forms, and customer-facing flows that connect cleanly to existing APIs and services while keeping the interface intuitive, responsive, and maintainable.",
    },
    {
      id: 6,
      title: "Frontend Audits & Technical Consulting",
      icon: <FiFileText />,
      description:
        "Review UI architecture, frontend code quality, and product friction points to help teams prioritize improvements, reduce maintenance risk, and ship cleaner user experiences.",
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
          I design, ship, and refine frontend experiences for real businesses,
          from polished marketing pages and responsive product interfaces to
          performance work, launch support, and long-term maintenance.
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
          <PrimaryBtn
            as={Link}
            to="/contact"
            className="text-sm px-6 py-2 w-[200px] mx-auto"
          >
            <span>Let's talk.</span>
          </PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

export default Service;

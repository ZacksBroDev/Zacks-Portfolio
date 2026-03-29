import React from "react";
import "./About.css";
import "../shared/Shared.css";
import { MySkill, Education, PrimaryBtn } from "../../components";
import { FaDownload } from "react-icons/fa";
import {
  ABOUT_CONTENT,
  RESUME_LINK,
  SITE_PROFILE,
} from "../../Utils/SiteContent";

const About = () => {
  return (
    <div className="parent pt-16 my-16">
      <div className="">
        <div className="mb-10">
          <h1 className="text-4xl font-semibold drop-shadow-md text-center">
            About <span className="text-primary">Me</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img
              src={SITE_PROFILE.aboutImage}
              alt={SITE_PROFILE.name}
              className="p-4 w-70 h-70"
              title={SITE_PROFILE.name}
              style={{ borderRadius: "25%" }}
            />
          </div>
          <div>
            <h2 className="text-4xl font-semibold mb-4 text-left sm:text-3xl sm:mb-2">
              {SITE_PROFILE.name}
            </h2>
            <div className="my-8">
              <p className="text-2xl text-primary font-bold text-left sm:text-2xl sm:mb-2">
                {SITE_PROFILE.aboutTitle}
              </p>
            </div>
            {ABOUT_CONTENT.paragraphs.map((paragraph, index) => (
              <React.Fragment key={paragraph}>
                <p className="text-neutral font-medium text-left sm:mb-2">
                  {paragraph}
                </p>
                {index < ABOUT_CONTENT.paragraphs.length - 1 ? <br /> : null}
              </React.Fragment>
            ))}
            <div className="rounded-xl border border-primary/20 bg-[#313131] p-5 mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                Recent Frontend Proof
              </h3>
              <ul className="list-disc list-inside space-y-2 text-neutral font-medium">
                {ABOUT_CONTENT.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 mt-4 text-left sm:mb-2">
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Name : </span>
                {SITE_PROFILE.name}
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Phone : </span>
                {SITE_PROFILE.phoneDisplay}
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Email : </span>
                {SITE_PROFILE.email}
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Address : </span>
                {SITE_PROFILE.location}
              </h2>
              <PrimaryBtn
                as="a"
                href={RESUME_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-fit"
                aria-label="Open resume in a new tab"
              >
                <span>My Resume</span>
                <span>
                  <FaDownload />
                </span>
              </PrimaryBtn>
            </div>
          </div>
        </div>
      </div>

      {/* My Skill */}
      <MySkill />

      {/* Education */}
      <Education />
    </div>
  );
};

export default About;

import React from "react";
import TypeAnimation from "react-type-animation";
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
              <TypeAnimation
                className="text-2xl text-primary font-bold text-left sm:text-2xl sm:mb-2"
                cursor={true}
                sequence={[SITE_PROFILE.animatedTitle, 2000]}
                wrapper="div"
                repeat={Infinity}
              />
            </div>
            <p className="text-neutral font-medium text-left sm:mb-2">
              {ABOUT_CONTENT.paragraphs[0]}
            </p>
            <br />
            <p className="text-neutral font-medium text-left sm:mb-2">
              {ABOUT_CONTENT.paragraphs[1]}
            </p>

            <br />
            <p className="text-neutral font-medium text-left sm:mb-2">
              {ABOUT_CONTENT.paragraphs[2]}
            </p>
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

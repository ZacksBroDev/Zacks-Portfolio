import React from "react";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import { RiFolderInfoFill } from "react-icons/ri";
import "../../../pages/shared/Shared.css";
import { PrimaryBtn, SecondaryBtn } from "../../../components";
import {
  HERO_CONTENT,
  RESUME_LINK,
  SITE_PROFILE,
} from "../../../Utils/SiteContent";
import HeroUtilityBar from "../HeroUtilityBar";

const Banner = () => {
  return (
    <>
      <HeroUtilityBar />
      <div className="parent py-16 flex flex-col-reverse lg:flex-row items-center justify-between">
        <div>
          <h2 className="text-neutral text-xl font-medium translate-y-[-90%] sm:translate-y-[-0%]">
            {HERO_CONTENT.intro}
          </h2>
          <h1 className="text-4xl font-semibold mb-0 translate-y-[-50%] sm:translate-y-[-0%]">
            {SITE_PROFILE.name}
          </h1>
          <div className="my-4">
            <p className="text-2xl text-primary font-bold translate-y-[-80%] sm:translate-y-[-0%]">
              {SITE_PROFILE.title}
            </p>
          </div>
          <p className="text-neutral max-w-xl mb-6 font-medium translate-y-[-20%] sm:translate-y-[-0%]">
            {HERO_CONTENT.summary}
          </p>
          <div className="flex flex-wrap gap-2 mb-6 translate-y-[-20%] sm:translate-y-[-0%]">
            {HERO_CONTENT.techStack.map((item) => (
              <span
                key={item}
                className="rounded-full border border-primary/40 bg-[#313131] px-3 py-1 text-sm font-medium text-neutral"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-4 translate-y-[-60%] sm:translate-y-[-0%]">
            <PrimaryBtn
              as="a"
              href={RESUME_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open resume in a new tab"
            >
              <span>My Resume</span>
              <span>
                <FaDownload />
              </span>
            </PrimaryBtn>
            <SecondaryBtn as={Link} to="/about">
              <span>About Me</span>
              <span>
                <RiFolderInfoFill />
              </span>
            </SecondaryBtn>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="https://res.cloudinary.com/djnazqqgr/image/upload/q_auto/f_auto/v1775241541/IMG_7401_lrflk7.jpg"
            alt={SITE_PROFILE.name}
            className="rounded-full w-72 h-72 md:w-96 md:h-96 object-cover shadow-lg border-4 border-primary/40"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;

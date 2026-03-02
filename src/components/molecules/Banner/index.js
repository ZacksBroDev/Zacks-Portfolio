import React from "react";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import { RiFolderInfoFill } from "react-icons/ri";
import TypeAnimation from "react-type-animation";
import Lottie from "react-lottie";
import coding from "../../../assets/coding.json";
import "../../../pages/shared/Shared.css";
import { PrimaryBtn, SecondaryBtn } from "../../../components";
import { HERO_CONTENT, RESUME_LINK, SITE_PROFILE } from "../../../Utils/SiteContent";

const Banner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: coding,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="parent min-h-[100vh] flex flex-col-reverse lg:flex-row items-center justify-between">
      <div>
        <h2 className="text-neutral text-xl font-medium translate-y-[-90%] sm:translate-y-[-0%]">
          {HERO_CONTENT.intro}
        </h2>
        <h1 className="text-4xl font-semibold mb-0 translate-y-[-50%] sm:translate-y-[-0%]">
          {SITE_PROFILE.name}
        </h1>
        <div className="my-4">
          <TypeAnimation
            className="text-2xl text-primary font-bold translate-y-[-80%] sm:translate-y-[-0%]"
            cursor={true}
            sequence={[SITE_PROFILE.animatedTitle, 2000]}
            wrapper="div"
            repeat={Infinity}
          />
        </div>
        <p className="text-neutral max-w-xl mb-6 font-medium translate-y-[-20%] sm:translate-y-[-0%]">
          {HERO_CONTENT.summary}
        </p>

        <div className="flex items-center translate-y-[-60%] sm:translate-y-[-0%]">
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
          <SecondaryBtn as={Link} to="/about" className="ml-4">
            <span>About Me</span>
            <span>
              <RiFolderInfoFill />
            </span>
          </SecondaryBtn>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <Lottie options={defaultOptions} height="90%" width="90%" />
      </div>
    </div>
  );
};

export default Banner;

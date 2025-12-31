import React from "react";
import TypeAnimation from "react-type-animation";
import "./About.css";
import "../../components/atoms/PrimaryBtn/PrimaryBtn.css";
import "../shared/Shared.css";
import { MySkill, Education } from "../../components";
import { FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <div className="parent pt-16 my-16">
      <div className="">
        <div className="mb-10">
          <h1 className="text-4xl font-semibold drop-shadow-md text-center">
            About <span className="text-primary">Me</span>
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <img
              src="https://res.cloudinary.com/djnazqqgr/image/upload/v1766927361/IMG_7605_hkqdbu.jpg"
              alt="Zackary Brown"
              className="p-12 w-70 h-70 transform translate-y-[-12%]"
              title="Zackary Brown"
              style={{ borderRadius: "25%" }}
            />
          </div>
          <div>
            <h1 className="text-4xl font-semibold mb-4 text-center translate-y-[-380%] sm:translate-y-[-0%] sm:text-3xl sm:mb-2 md:text-left">
              Zackary Brown
            </h1>
            <div className="my-8">
              <TypeAnimation
                className="text-2xl text-primary font-bold text-center translate-y-[-500%] sm:translate-y-[-0%]  sm:text-2xl sm:mb-2 md:text-left"
                cursor={true}
                sequence={["A Full-stack Developer", 2000]}
                wrapper="div"
                repeat={Infinity}
              />
            </div>
            <p className="text-neutral font-medium text-center translate-y-[-100%] sm:translate-y-[-0%] sm:mb-2 md:text-left">
              I'm a full-stack developer with a strong focus on building
              practical, production-ready web applications. I work across the
              stack from frontend interfaces to backend APIs and cloud
              deployment and take responsibility for the entire build process,
              not just isolated features. My approach prioritizes clarity,
              maintainability, and performance, so projects remain stable and
              easy to evolve over time.
            </p>
            <br />
            <p className="text-neutral font-medium text-center translate-y-[-150%] sm:translate-y-[-0%] sm:mb-2 md:text-left">
              I studied Computer Science at Western Colorado University, where I
              built a solid foundation in software development and
              problem-solving. Since then, I've applied those fundamentals to
              real projects, collaborating with clients and teams to deliver
              solutions that meet actual business needs. I value clear
              communication, thoughtful architecture, and shipping software that
              works reliably in production not over-engineered demos.
            </p>

            <br />
            <p className="text-neutral font-medium text-center translate-y-[-150%] sm:translate-y-[-0%] sm:mb-2 md:text-left">
              I'm always refining my skills and tools, but I'm equally focused
              on writing code that others can understand, maintain, and trust.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 mt-4 text-center translate-y-[-50%] sm:translate-y-[-0%] sm:mb-2 md:text-left ">
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Name : </span>Zackary Brown
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Phone : </span>+1 505 358
                8607
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Email : </span>
                zackaryzbrown@gmail.com
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Address : </span>
                Denver, Colorado
              </h2>
              <a
                href="https://drive.google.com/file/d/1d7ZrNKfz9dViJ7IJ8ExJAR7fuOTYcT80/view?usp=drive_link"
                target="blank"
              >
                <div className="flex justify-center md:justify-start translate-y-[60%] sm:translate-y-[-0%]">
                  <button className="primary-button">
                    <span>My Resume</span>
                    <span>
                      <FaDownload />
                    </span>
                  </button>
                </div>
              </a>
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

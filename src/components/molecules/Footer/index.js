import React from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const year = new Date();

  return (
    <>
      <footer
        className="w-full text-center p-6 bg-accent"
        style={{ backgroundColor: "#313131" }}
      >
        <div className="flex items-center justify-center mb-6">
          <a
            className="inline-block mx-2"
            href="https://x.com/bmxbro01"
            target="_blank"
            rel="X Zackary Brown"
          >
            <FaTwitter className="text-2xl text-blue-600" />
          </a>
          <a
            className="inline-block mx-2"
            href="https://www.linkedin.com/in/zackaryzbrown"
            target="_blank"
            rel="Linkedin Zackary Brown"
          >
            <FaLinkedin className="text-2xl text-blue-400" />
          </a>
          <a
            className="inline-block mx-2"
            href="https://github.com/ZacksBroDev"
            target="_blank"
            rel="Github Link"
          >
            <FaGithub className="text-2xl text-black" />
          </a>
          <a
            className="inline-block mx-2"
            href="https://www.instagram.com/zackarybroski/"
            target="_blank"
            rel="Instagram Link"
          >
            <FaInstagram className="text-2xl text-pink-500" />
          </a>
        </div>

        <div className="w-full h-[2px] bg-gray-600"></div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-4">
          <p>&copy; Copyright All Rights Reserved {year.getFullYear()}</p>
          <p>
            Built by{" "}
            <a
              href="https://www.linkedin.com/in/zackaryzbrown"
              className="text-primary hover:underline"
              target="blank"
            >
              Zackary Brown
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

import React from "react";
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { SITE_PROFILE, SOCIAL_LINKS } from "../../../Utils/SiteContent";

const socialIcons = {
  linkedin: FaLinkedin,
  github: FaGithub,
  x: FaTwitter,
  instagram: FaInstagram,
};

const Footer = () => {
  const year = new Date();

  return (
    <>
      <footer
        className="w-full text-center p-6 bg-accent"
        style={{ backgroundColor: "#313131" }}
      >
        <div className="flex items-center justify-center mb-6">
          {SOCIAL_LINKS.map((link) => {
            const Icon = socialIcons[link.key];

            return (
              <a
                key={link.key}
                className="inline-block mx-2"
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.ariaLabel}
              >
                <Icon className={link.footerIconClassName} />
              </a>
            );
          })}
        </div>

        <div className="w-full h-[2px] bg-gray-600"></div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-4">
          <p>&copy; Copyright All Rights Reserved {year.getFullYear()}</p>
          <p>
            Built by{" "}
            <a
              href={SITE_PROFILE.linkedinUrl}
              className="text-primary hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {SITE_PROFILE.name}
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

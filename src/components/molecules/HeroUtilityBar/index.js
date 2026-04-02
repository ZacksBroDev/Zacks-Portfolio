import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SITE_PROFILE } from "../../../Utils/SiteContent";

const HeroUtilityBar = () => {
  const socialLinks = [
    {
      id: "github",
      label: "GitHub",
      href: SITE_PROFILE.githubUrl,
      icon: <FaGithub className="w-4 h-4" />,
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      href: SITE_PROFILE.linkedinUrl,
      icon: <FaLinkedin className="w-4 h-4" />,
    },
    {
      id: "email",
      label: "Email",
      href: SITE_PROFILE.emailHref,
      icon: <FaEnvelope className="w-4 h-4" />,
    },
  ];

  return (
    <div className="w-full border-b border-primary/20 bg-[#212121]">
      <div className="parent py-3">
        <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/40 hover:border-primary hover:text-primary text-neutral transition-all duration-300 text-sm font-medium whitespace-nowrap"
            >
              {link.icon}
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroUtilityBar;

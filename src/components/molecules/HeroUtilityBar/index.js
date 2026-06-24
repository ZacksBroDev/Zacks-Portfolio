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
    <div className="hero-utility" aria-label="Direct links">
      {socialLinks.map((link) => (
        <a
          key={link.id}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.label}
          className="hero-utility__link"
        >
          {link.icon}
          <span>{link.label}</span>
        </a>
      ))}
    </div>
  );
};

export default HeroUtilityBar;

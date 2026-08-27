import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { SITE_PROFILE } from "../../../Utils/SiteContent";
import { optimizeCloudinaryImage } from "../../../Utils/imageUtils";

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
      <div className="hero-utility__profile">
        <img
          src={optimizeCloudinaryImage(
            "https://res.cloudinary.com/djnazqqgr/image/upload/q_auto/f_auto/v1775241541/IMG_7401_lrflk7.jpg",
            "f_auto,q_auto,w_320,c_fill,g_auto",
          )}
          alt={SITE_PROFILE.name}
        />
        <div>
          <h2>{SITE_PROFILE.name}</h2>
          <p>{SITE_PROFILE.title}</p>
        </div>
      </div>

      <p className="hero-utility__bio">
        Frontend developer focused on responsive, accessible React interfaces
        and polished product experiences.
      </p>

      <div className="hero-utility__meta">
        <span>
          <FaMapMarkerAlt />
          {SITE_PROFILE.location}
        </span>
        <span>
          <span className="hero-utility__status-dot"></span>
          Open to frontend engineering opportunities.
        </span>
      </div>

      <div className="hero-utility__links">
        {socialLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="hero-utility__link"
          >
            <span className="hero-utility__link-main">
              {link.icon}
              <span>
                <strong>{link.label}</strong>
                {link.id === "github" && (
                  <small>{SITE_PROFILE.githubLabel}</small>
                )}
              </span>
            </span>
            <FiArrowUpRight className="hero-utility__arrow" />
          </a>
        ))}
      </div>

      <p className="hero-utility__stack">React · TypeScript · CSS</p>
    </div>
  );
};

export default HeroUtilityBar;

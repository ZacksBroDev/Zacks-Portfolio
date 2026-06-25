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
    <footer
      className="mt-20 border-t border-white/10 bg-[rgba(18,17,15,0.68)] backdrop-blur-md"
      aria-label="Site footer"
    >
      <div className="parent py-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-md">
            <p className="font-['JetBrains_Mono'] text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-soft)]">
              Zackary Brown
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-white">
              Frontend Engineer
            </h2>
            <p className="mt-3 text-sm leading-7 text-[var(--text-muted)]">
              Built with React, Vite, and Tailwind. Designed to show thoughtful,
              modern frontend work without overcomplicating the experience.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:items-end">
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((link) => {
                const Icon = socialIcons[link.key];

                return (
                  <a
                    key={link.key}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[var(--text-muted)] transition hover:-translate-y-0.5 hover:border-[rgba(255,106,26,0.36)] hover:text-[var(--accent-soft)]"
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.ariaLabel}
                  >
                    <Icon className="text-lg" />
                  </a>
                );
              })}
            </div>

            <div className="text-sm text-[var(--text-soft)] md:text-right">
              <p>&copy; {year.getFullYear()} {SITE_PROFILE.name}</p>
              <p className="mt-1">
                Built by{" "}
                <a
                  href={SITE_PROFILE.linkedinUrl}
                  className="text-[var(--accent-soft)] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {SITE_PROFILE.name}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

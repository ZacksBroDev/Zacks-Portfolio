import React from "react";
import { Link } from "react-router-dom";
import {
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaGlobe,
  FaLinkedin,
} from "react-icons/fa";
import { PrimaryBtn, SecondaryBtn } from "../../components";
import { RESUME_LINK, SITE_PROFILE } from "../../Utils/SiteContent";
import { resumeData } from "../../Utils/ResumeData";
import { optimizeCloudinaryImage } from "../../Utils/imageUtils";
import "./Resume.css";
import "../shared/Shared.css";

const contactIcons = {
  email: FaEnvelope,
  linkedin: FaLinkedin,
  website: FaGlobe,
  github: FaGithub,
};

const recruiterNotes = [
  "Frontend-first portfolio with recent client work and product UI examples.",
  "Comfortable collaborating across APIs, deployment, and user-facing delivery.",
  "Production mindset shaped by client deadlines and technical operations work.",
];

const SKILL_GROUPS = [
  {
    label: "Frontend",
    match: [
      "typescript",
      "next",
      "html",
      "css",
      "javascript",
      "react",
      "tailwind",
      "component",
      "responsive",
    ],
  },
  {
    label: "Backend / APIs",
    match: [
      "api",
      "node",
      "express",
      "mongodb",
      "postgresql",
      "stripe",
      "auth",
      "jwt",
    ],
  },
  {
    label: "Cloud / Deployment",
    match: ["aws", "amplify", "deployment", "hosting", "netlify", "vercel"],
  },
  {
    label: "Tools",
    match: ["git", "github", "vite", "vs code", "debug"],
  },
  {
    label: "Design / Accessibility",
    match: ["accessibility", "seo", "performance", "design", "ux", "ui"],
  },
];

const groupSkills = (skills) => {
  const groups = SKILL_GROUPS.map((group) => ({ ...group, items: [] }));
  const unmatched = [];

  skills.forEach((skill) => {
    const normalized = skill.toLowerCase();
    const group = groups.find((entry) =>
      entry.match.some((term) => normalized.includes(term)),
    );

    if (group) {
      group.items.push(skill);
      return;
    }

    unmatched.push(skill);
  });

  if (unmatched.length > 0) {
    groups[3].items.push(...unmatched);
  }

  return groups.filter((group) => group.items.length > 0);
};

const ResumeTimelineItem = ({
  title,
  company,
  location,
  date,
  type,
  href,
  ariaLabel,
  ctaLabel,
  bullets = [],
  compact = false,
}) => (
  <article
    className={`resume-timeline-item ${compact ? "resume-timeline-item--compact" : ""}`}
  >
    <div className="resume-timeline-item__top">
      <div>
        <h3>{title}</h3>
        {company ? (
          <p className="resume-timeline-item__subhead">{company}</p>
        ) : null}
        {location ? (
          <p className="resume-timeline-item__meta">{location}</p>
        ) : null}
      </div>
      <span className="resume-date-pill">{date}</span>
    </div>

    {type && (
      <div className="resume-meta-pill-row" aria-label="Role metadata">
        <span className="resume-meta-pill">{type}</span>
      </div>
    )}

    {href ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="resume-inline-link"
        aria-label={ariaLabel}
      >
        {ctaLabel || "View project ->"}
      </a>
    ) : null}

    {bullets.length > 0 ? (
      <ul className="resume-bullet-list">
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    ) : null}
  </article>
);

const ResumeProjectCard = ({ project }) => (
  <article className="resume-project-card">
    <div className="resume-project-card__top">
      <div>
        <p className="resume-project-card__eyebrow">Case study</p>
        <h4>{project.title}</h4>
      </div>
      <span className="resume-date-pill">{project.date}</span>
    </div>

    {(project.type || project.location) && (
      <div className="resume-meta-pill-row" aria-label="Project metadata">
        {project.type ? (
          <span className="resume-meta-pill">{project.type}</span>
        ) : null}
        {project.location ? (
          <span className="resume-meta-pill">{project.location}</span>
        ) : null}
      </div>
    )}

    {project.stack?.length > 0 ? (
      <div className="resume-stack-pill-row" aria-label="Project stack">
        {project.stack.map((tech) => (
          <span key={tech} className="resume-stack-pill">
            {tech}
          </span>
        ))}
      </div>
    ) : null}

    {project.href ? (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="resume-inline-link"
        aria-label={project.ariaLabel}
      >
        {project.ctaLabel || "View case study ->"}
      </a>
    ) : null}

    <ul className="resume-bullet-list">
      {project.bullets.map((bullet) => (
        <li key={bullet}>{bullet}</li>
      ))}
    </ul>
  </article>
);

const ResumeSkillGroup = ({ label, items }) => (
  <article className="resume-skill-group">
    <p>{label}</p>
    <div className="resume-tag-group">
      {items.map((item) => (
        <span key={item}>{item}</span>
      ))}
    </div>
  </article>
);

const Resume = () => {
  const {
    profile,
    summary,
    education,
    featuredExperience,
    workExperience,
    selfDevelopment,
    skills,
  } = resumeData;

  const groupedSkills = groupSkills(skills);

  return (
    <div className="resume-page pt-16">
      <section className="parent resume-shell">
        <div className="resume-hero">
          <div className="resume-hero__identity">
            <div className="resume-hero__image-wrap">
              <img
                src={optimizeCloudinaryImage(
                  profile.image,
                  "f_auto,q_auto,w_640,h_800,c_fill,g_face",
                )}
                srcSet={`${optimizeCloudinaryImage(profile.image, "f_auto,q_auto,w_320,h_400,c_fill,g_face")} 320w, ${optimizeCloudinaryImage(profile.image, "f_auto,q_auto,w_480,h_600,c_fill,g_face")} 480w, ${optimizeCloudinaryImage(profile.image, "f_auto,q_auto,w_640,h_800,c_fill,g_face")} 640w`}
                sizes="(max-width: 768px) 180px, 230px"
                width="640"
                height="800"
                alt={profile.name}
                className="resume-hero__image"
                decoding="async"
              />
            </div>

            <div className="resume-hero__copy">
              <p className="section-kicker">Professional profile</p>
              <h1>{profile.name}</h1>
              <p className="resume-hero__title">{profile.title}</p>
            </div>

            <div className="resume-hero__details">
              <p className="resume-hero__summary">{summary}</p>

              <div className="resume-contact-list">
                {profile.links.map((link) => {
                  const Icon = contactIcons[link.type];
                  const isExternal = link.href.startsWith("http");

                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      className="resume-contact-pill"
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                    >
                      <Icon />
                      <span>{link.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <aside className="resume-brief-card">
            <p className="resume-panel__kicker">Positioning summary</p>
            <h2>
              Frontend roles where product polish and UI reliability matter.
            </h2>
            <ul className="resume-bullet-list">
              {recruiterNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>

            <div className="resume-brief-card__actions">
              <PrimaryBtn
                as="a"
                href={RESUME_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open resume in a new tab"
                className="w-fit"
              >
                <span>Download resume</span>
                <span>
                  <FaDownload />
                </span>
              </PrimaryBtn>

              <SecondaryBtn as={Link} to="/contact" className="w-fit">
                <span>Contact me</span>
              </SecondaryBtn>
            </div>
          </aside>
        </div>

        <div className="resume-layout">
          <div className="resume-main">
            <section className="resume-panel">
              <div className="resume-panel__header">
                <p className="resume-panel__kicker">Featured experience</p>
                <h2>Frontend and product delivery</h2>
                <p>
                  Recruiter-priority work that shows production frontend
                  implementation, client delivery, and technical execution.
                </p>
              </div>

              {featuredExperience.map((entry) => (
                <div key={entry.role} className="resume-project-group">
                  <div className="resume-project-group__header">
                    <div>
                      <h3>{entry.role}</h3>
                      <p>{entry.companyLine}</p>
                    </div>
                  </div>

                  <div className="resume-project-list">
                    {entry.projects.map((project) => (
                      <ResumeProjectCard
                        key={project.title}
                        project={project}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </section>

            <section className="resume-panel">
              <div className="resume-panel__header">
                <p className="resume-panel__kicker">Additional experience</p>
                <h2>Technical operations and team training</h2>
                <p>
                  Recent professional experience demonstrating structured
                  troubleshooting, documentation, training, and reliable
                  execution under pressure.
                </p>
              </div>

              <div className="resume-timeline">
                {workExperience.map((entry) => (
                  <ResumeTimelineItem
                    key={`${entry.title}-${entry.date}`}
                    title={entry.title}
                    company={entry.company}
                    location={entry.location}
                    date={entry.date}
                    type={entry.type}
                    bullets={entry.bullets}
                    compact={Boolean(entry.compact)}
                  />
                ))}
              </div>
            </section>
          </div>

          <aside className="resume-sidebar">
            <section className="resume-panel">
              <p className="resume-panel__kicker">Skills</p>
              <div className="resume-skill-groups">
                {groupedSkills.map((group) => (
                  <ResumeSkillGroup
                    key={group.label}
                    label={group.label}
                    items={group.items}
                  />
                ))}
              </div>
            </section>

            <section className="resume-panel">
              <div className="resume-panel__header">
                <p className="resume-panel__kicker">Education</p>
                <h2>Academic background</h2>
              </div>

              <div className="resume-timeline">
                {education.map((entry) => (
                  <ResumeTimelineItem
                    key={`${entry.title}-${entry.date}`}
                    title={entry.title}
                    company={entry.subtitle}
                    location={entry.location}
                    date={entry.date}
                    bullets={entry.bullets}
                  />
                ))}
              </div>
            </section>

            <section className="resume-panel">
              <div className="resume-panel__header">
                <p className="resume-panel__kicker">Technical development</p>
                <h2>Training and hands-on foundation</h2>
              </div>

              <div className="resume-timeline">
                {selfDevelopment.map((entry) => (
                  <ResumeTimelineItem
                    key={`${entry.title}-${entry.date}`}
                    title={entry.title}
                    location={entry.location}
                    date={entry.date}
                    href={entry.href}
                    ariaLabel={entry.ariaLabel}
                    ctaLabel={entry.ctaLabel}
                    bullets={entry.bullets}
                  />
                ))}
              </div>
            </section>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default Resume;

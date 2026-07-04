import React from "react";
import { Link } from "react-router-dom";
import {
  FaAward,
  FaCertificate,
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaGlobe,
} from "react-icons/fa";
import { PrimaryBtn, SecondaryBtn } from "../../components";
import { RESUME_LINK, SITE_PROFILE } from "../../Utils/SiteContent";
import { resumeData } from "../../Utils/ResumeData";
import "./Resume.css";
import "../shared/Shared.css";

const contactIcons = {
  email: FaEnvelope,
  website: FaGlobe,
  github: FaGithub,
};

const certificationIcons = {
  certificate: FaCertificate,
  award: FaAward,
};

const resumeSignals = [
  {
    label: "Target",
    value: "Frontend Engineer / Junior Frontend Developer",
  },
  {
    label: "Location",
    value: SITE_PROFILE.location,
  },
  {
    label: "Primary focus",
    value: "Responsive UI, product frontend systems, and user experience",
  },
];

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

    {(type || location) && (
      <div className="resume-meta-pill-row" aria-label="Role metadata">
        {type ? <span className="resume-meta-pill">{type}</span> : null}
        {location ? <span className="resume-meta-pill">{location}</span> : null}
      </div>
    )}

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
    certifications,
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
                src={profile.image}
                alt={profile.name}
                className="resume-hero__image"
              />
            </div>

            <div className="resume-hero__copy">
              <p className="section-kicker">Professional profile</p>
              <h1>{profile.name}</h1>
              <p className="resume-hero__title">{profile.title}</p>
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

        <div className="resume-signal-grid">
          {resumeSignals.map((signal) => (
            <article key={signal.label} className="resume-signal-card">
              <p>{signal.label}</p>
              <h2>{signal.value}</h2>
            </article>
          ))}
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
                <p className="resume-panel__kicker">
                  Other technical background
                </p>
                <h2>Transferable work experience</h2>
                <p>
                  Previous operations-focused roles that shaped troubleshooting,
                  communication, reliability, and execution under pressure.
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
              <p className="resume-panel__kicker">Quick view</p>
              <div className="resume-quick-list">
                <div>
                  <span>Target role</span>
                  <strong>Frontend Engineer</strong>
                </div>
                <div>
                  <span>Location</span>
                  <strong>{SITE_PROFILE.location}</strong>
                </div>
                <div>
                  <span>Portfolio</span>
                  <strong>{SITE_PROFILE.websiteLabel}</strong>
                </div>
                <div>
                  <span>Current lane</span>
                  <strong>Client delivery and frontend product work</strong>
                </div>
              </div>
            </section>

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
              <p className="resume-panel__kicker">Recognition</p>
              <div className="resume-cert-list">
                {certifications.map((item) => {
                  const Icon = certificationIcons[item.type];

                  return (
                    <article key={item.title} className="resume-cert-card">
                      <Icon />
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.issuer}</p>
                        <span>{item.detail}</span>
                      </div>
                    </article>
                  );
                })}
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
                <p className="resume-panel__kicker">Self-development</p>
                <h2>Ongoing training</h2>
              </div>

              <div className="resume-timeline">
                {selfDevelopment.map((entry) => (
                  <ResumeTimelineItem
                    key={`${entry.title}-${entry.date}`}
                    title={entry.title}
                    location={entry.location}
                    date={entry.date}
                    bullets={entry.bullets}
                  />
                ))}
              </div>
            </section>

            <section className="resume-panel">
              <div className="resume-panel__header">
                <p className="resume-panel__kicker">Contact</p>
                <h2>Reach out</h2>
              </div>

              <div className="resume-contact-stack">
                {profile.links.map((link) => {
                  const Icon = contactIcons[link.type];
                  const isExternal = link.href.startsWith("http");

                  return (
                    <a
                      key={`sidebar-${link.href}`}
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
            </section>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default Resume;

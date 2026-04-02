import React from "react";
import "./Resume.css";
import "../shared/Shared.css";
import { RESUME_LINK } from "../../Utils/Constants";
import { PrimaryBtn } from "../../components";
import { resumeData } from "../../Utils/ResumeData";
import {
  FaDownload,
  FaEnvelope,
  FaGlobe,
  FaGithub,
  FaExternalLinkAlt,
  FaAward,
  FaCertificate,
} from "react-icons/fa";

const contactIcons = {
  email: FaEnvelope,
  website: FaGlobe,
  github: FaGithub,
};

const certificationIcons = {
  certificate: FaCertificate,
  award: FaAward,
};

const ExperienceItem = ({ title, company, location, date, bullets = [] }) => (
  <div className="experience-item">
    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
      <div>
        <h4 className="text-xl font-semibold text-white">{title}</h4>
        {company && <p className="text-primary font-medium">{company}</p>}
        {location && <p className="text-neutral text-sm">{location}</p>}
      </div>
      <span className="date-badge">{date}</span>
    </div>
    {bullets.length > 0 && (
      <ul className="list-disc list-inside text-neutral ml-4 space-y-2">
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    )}
  </div>
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

  return (
    <div className="parent pt-16 my-16">
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-semibold drop-shadow-md text-center">
          My <span className="text-primary">Resume</span>
        </h1>
      </div>

      <div className="resume-container">
        {/* Profile Header */}
        <div className="resume-header mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Placeholder for photo */}
            <div className="flex justify-center lg:justify-start">
              <div className="profile-image-container">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="profile-image"
                />
              </div>
            </div>

            {/* Name and Title */}
            <div className="text-center lg:col-span-2">
              <h2 className="text-4xl font-bold text-white mb-2">
                {profile.name}
              </h2>
              <p className="text-xl text-primary font-semibold mb-4">
                {profile.title}
              </p>

              {/* Contact Links */}
              <div className="flex flex-wrap justify-center gap-4 mb-4">
                {profile.links.map((link) => {
                  const Icon = contactIcons[link.type];
                  const isExternal = link.href.startsWith("http");

                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      className="contact-link"
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                    >
                      <Icon className="mr-2" />
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Profile/Summary Section */}
        <div className="resume-section">
          <h3 className="section-title">Profile</h3>
          <div className="section-content">
            <p className="text-neutral leading-relaxed">{summary}</p>
          </div>
        </div>

        {/* Education Section */}
        <div className="resume-section">
          <h3 className="section-title">Education</h3>
          <div className="section-content">
            {education.map((entry) => (
              <ExperienceItem
                key={`${entry.title}-${entry.date}`}
                title={entry.title}
                company={entry.subtitle}
                location={entry.location}
                date={entry.date}
                bullets={entry.bullets}
              />
            ))}
          </div>
        </div>

        {/* Experience & Projects Section */}
        <div className="resume-section">
          <h3 className="section-title">Experience & Projects</h3>
          <div className="section-content">
            {featuredExperience.map((entry) => (
              <div key={entry.role} className="mb-6">
                <h4 className="text-xl font-semibold text-white">{entry.role}</h4>
                <p className="text-neutral text-sm mb-4">{entry.companyLine}</p>

                {entry.projects.map((project) => (
                  <div key={`${project.title}-${project.date}`} className="experience-item">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <div className="flex items-center gap-2">
                        <h5 className="text-lg font-semibold text-primary">
                          {project.title}
                        </h5>
                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-white transition-colors"
                          aria-label={project.ariaLabel}
                        >
                          <FaExternalLinkAlt className="text-sm" />
                        </a>
                      </div>
                      <span className="date-badge">{project.date}</span>
                    </div>
                    <ul className="list-disc list-inside text-neutral ml-4 space-y-2">
                      {project.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Other Work Experience Section */}
        <div className="resume-section">
          <h3 className="section-title">Other Work Experience</h3>
          <div className="section-content">
            {workExperience.map((entry) => (
              <ExperienceItem
                key={`${entry.title}-${entry.date}`}
                title={entry.title}
                company={entry.company}
                location={entry.location}
                date={entry.date}
                bullets={entry.bullets}
              />
            ))}
          </div>
        </div>

        {/* Interests/Self Development Section */}
        <div className="resume-section">
          <h3 className="section-title">Interests / Self Development</h3>
          <div className="section-content">
            {selfDevelopment.map((entry) => (
              <ExperienceItem
                key={`${entry.title}-${entry.date}`}
                title={entry.title}
                location={entry.location}
                date={entry.date}
                bullets={entry.bullets}
              />
            ))}
          </div>
        </div>

        {/* Certifications & Awards Section */}
        <div className="resume-section">
          <h3 className="section-title">Certifications & Awards</h3>
          <div className="section-content">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((item) => {
                const Icon = certificationIcons[item.type];

                return (
                  <div key={item.title} className="certification-card">
                    <div className="flex items-start gap-3">
                      <Icon className="text-primary text-2xl mt-1" />
                      <div>
                        <h4 className="text-lg font-semibold text-white">
                          {item.title}
                        </h4>
                        <p className="text-primary font-medium">{item.issuer}</p>
                        <p className="text-neutral text-sm">{item.detail}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="resume-section">
          <h3 className="section-title">Skills</h3>
          <div className="section-content">
            <div className="skills-grid">
              {skills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Download Resume Button */}
        <div className="flex justify-center mt-12">
          <PrimaryBtn
            as="a"
            href={RESUME_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open resume in a new tab"
          >
            <span>Resume</span>
            <span>
              <FaDownload />
            </span>
          </PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

export default Resume;

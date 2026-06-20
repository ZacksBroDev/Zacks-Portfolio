import React from "react";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { PrimaryBtn, SecondaryBtn } from "../../components";
import {
  ABOUT_CONTENT,
  RESUME_LINK,
  SITE_PROFILE,
} from "../../Utils/SiteContent";
import { resumeData } from "../../Utils/ResumeData";
import "./About.css";
import "../shared/Shared.css";

const skillBuckets = [
  {
    title: "Frontend foundations",
    items: ["React", "JavaScript", "CSS", "Tailwind CSS", "Responsive Design"],
  },
  {
    title: "Interface quality",
    items: ["Accessibility", "Performance Optimization", "Technical SEO", "Debugging"],
  },
  {
    title: "Delivery workflow",
    items: ["Git", "GitHub", "AWS Amplify", "API Integration", "Component Architecture"],
  },
];

const workPrinciples = [
  "I care about interfaces feeling clear and trustworthy in real use, not just in screenshots.",
  "I prefer maintainable component structure and practical implementation over clever complexity.",
  "I like collaborating closely with product needs, content, and layout decisions until the UI feels intentional.",
];

const About = () => {
  const { education, selfDevelopment, certifications } = resumeData;

  return (
    <div className="about-page pt-16">
      <section className="parent about-shell">
        <div className="about-hero">
          <div className="about-hero__media">
            <img
              src={SITE_PROFILE.aboutImage}
              alt={SITE_PROFILE.name}
              className="about-hero__image"
            />
          </div>

          <div className="about-hero__content">
            <p className="section-kicker">About Zackary Brown</p>
            <h1 className="section-heading">
              Frontend perspective shaped by real delivery, not just coursework.
            </h1>

            <div className="about-copy">
              {ABOUT_CONTENT.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="about-hero__actions">
              <PrimaryBtn
                as="a"
                href={RESUME_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit"
                aria-label="Open resume in a new tab"
              >
                <span>Open resume</span>
                <span>
                  <FaDownload />
                </span>
              </PrimaryBtn>

              <SecondaryBtn as={Link} to="/contact" className="w-fit">
                <span>Contact me</span>
                <span>
                  <FiArrowRight />
                </span>
              </SecondaryBtn>
            </div>
          </div>
        </div>

        <div className="about-proof-grid">
          <article className="about-proof-card">
            <p className="about-proof-card__eyebrow">Frontend proof</p>
            <ul className="about-list">
              {ABOUT_CONTENT.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>

          <article className="about-proof-card">
            <p className="about-proof-card__eyebrow">What teams get</p>
            <ul className="about-list">
              {workPrinciples.map((principle) => (
                <li key={principle}>{principle}</li>
              ))}
            </ul>
          </article>
        </div>

        <div className="about-grid">
          <section className="about-panel">
            <div className="about-panel__header">
              <p className="about-panel__kicker">Frontend coverage</p>
              <h2>How I work across the stack</h2>
            </div>

            <div className="about-skill-groups">
              {skillBuckets.map((bucket) => (
                <div key={bucket.title} className="about-skill-group">
                  <h3>{bucket.title}</h3>
                  <div className="about-tag-group">
                    {bucket.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="about-panel">
            <div className="about-panel__header">
              <p className="about-panel__kicker">Education</p>
              <h2>Academic background</h2>
            </div>

            <div className="about-timeline">
              {education.map((entry) => (
                <article key={`${entry.title}-${entry.date}`} className="about-timeline-item">
                  <div className="about-timeline-item__top">
                    <div>
                      <h3>{entry.title}</h3>
                      {entry.subtitle ? <p>{entry.subtitle}</p> : null}
                      {entry.location ? (
                        <span className="about-timeline-item__meta">{entry.location}</span>
                      ) : null}
                    </div>
                    <span className="about-date-pill">{entry.date}</span>
                  </div>

                  {entry.bullets?.length ? (
                    <ul className="about-list">
                      {entry.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              ))}
            </div>
          </section>

          <section className="about-panel">
            <div className="about-panel__header">
              <p className="about-panel__kicker">Ongoing development</p>
              <h2>Training and community growth</h2>
            </div>

            <div className="about-timeline">
              {selfDevelopment.map((entry) => (
                <article key={`${entry.title}-${entry.date}`} className="about-timeline-item">
                  <div className="about-timeline-item__top">
                    <div>
                      <h3>{entry.title}</h3>
                      {entry.location ? (
                        <span className="about-timeline-item__meta">{entry.location}</span>
                      ) : null}
                    </div>
                    <span className="about-date-pill">{entry.date}</span>
                  </div>

                  <ul className="about-list">
                    {entry.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="about-panel">
            <div className="about-panel__header">
              <p className="about-panel__kicker">Recognition</p>
              <h2>Certifications and awards</h2>
            </div>

            <div className="about-recognition-grid">
              {certifications.map((item) => (
                <article key={item.title} className="about-recognition-card">
                  <h3>{item.title}</h3>
                  <p>{item.issuer}</p>
                  <span>{item.detail}</span>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default About;

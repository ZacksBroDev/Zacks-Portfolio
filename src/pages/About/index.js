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
import "./About.css";
import "../shared/Shared.css";

const skillBuckets = [
  {
    title: "Frontend foundations",
    items: ["React", "JavaScript", "CSS", "Tailwind CSS", "Responsive Design"],
  },
  {
    title: "Interface quality",
    items: [
      "Accessibility",
      "Performance Optimization",
      "Technical SEO",
      "Debugging",
    ],
  },
  {
    title: "Delivery workflow",
    items: [
      "Git",
      "GitHub",
      "AWS Amplify",
      "API Integration",
      "Component Architecture",
    ],
  },
];

const workPrinciples = [
  "I ask what users are trying to do first, then design and build around that flow.",
  "I document key UI decisions so handoffs and future updates stay predictable.",
  "I balance polish with speed so teams can ship improvements consistently.",
];

const buildWorkflow = [
  "Define the core page goal and primary action before touching implementation.",
  "Build responsive layout and content hierarchy first, then tune interactions.",
  "Run accessibility and performance checks before final QA and launch.",
];

const outsideWork = [
  "I enjoy robotics and hands-on technical problem solving beyond web work.",
  "I stay active with BMX, mountain biking, and snow sports, which keeps my process disciplined and consistent.",
  "I use personal projects to try new frontend patterns before introducing them to client work.",
];

const About = () => {
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
            <p className="about-proof-card__eyebrow">
              What drives my frontend work
            </p>
            <ul className="about-list">
              {ABOUT_CONTENT.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>

          <article className="about-proof-card">
            <p className="about-proof-card__eyebrow">What teams can expect</p>
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
              <p className="about-panel__kicker">Technical toolkit</p>
              <h2>How I build and ship frontend work</h2>
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
              <p className="about-panel__kicker">Process</p>
              <h2>Build rhythm and collaboration style</h2>
            </div>

            <div className="about-dual-list">
              <div>
                <p className="about-panel__kicker">Build workflow</p>
                <ul className="about-list about-list--tight">
                  {buildWorkflow.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="about-panel__kicker">Team collaboration</p>
                <ul className="about-list about-list--tight">
                  {workPrinciples.map((principle) => (
                    <li key={`principle-${principle}`}>{principle}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="about-panel">
            <div className="about-panel__header">
              <p className="about-panel__kicker">Outside of client work</p>
              <h2>What keeps me learning</h2>
            </div>

            <ul className="about-list">
              {outsideWork.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      </section>
    </div>
  );
};

export default About;

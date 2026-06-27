import React from "react";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import "../../../pages/shared/Shared.css";
import { PrimaryBtn, SecondaryBtn } from "../../../components";
import {
  HERO_PROOF_POINTS,
  HERO_CONTENT,
  HOME_FEATURED_PROJECT_IDS,
  RESUME_LINK,
  SITE_PROFILE,
} from "../../../Utils/SiteContent";
import HeroUtilityBar from "../HeroUtilityBar";
import Items from "../../../Utils/Items";
import { optimizeCloudinaryImage } from "../../../Utils/imageUtils";

const Banner = () => {
  const previewProjects = HOME_FEATURED_PROJECT_IDS.map((id) =>
    Items.find((item) => item.id === id)
  ).filter(Boolean);
  const [leadPreview, supportingPreview] = previewProjects;

  const previewAddress = (project) => {
    if (!project?.liveLink) {
      return `${project?.title?.toLowerCase().replace(/\s+/g, "-")}.case-study`;
    }

    try {
      return new URL(project.liveLink).hostname;
    } catch {
      return project.liveLink;
    }
  };

  return (
    <section
      className="home-section hero-section parent"
      aria-labelledby="home-hero-heading"
    >
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="section-kicker">{HERO_CONTENT.eyebrow}</p>
          <p className="hero-intro">
            {HERO_CONTENT.intro} <span>{SITE_PROFILE.name}</span>
          </p>
          <h1 id="home-hero-heading" className="hero-title">
            {HERO_CONTENT.headline}
          </h1>
          <p className="hero-summary">{HERO_CONTENT.summary}</p>
          <p className="hero-availability">{HERO_CONTENT.availability}</p>

          <div className="hero-tech-stack" aria-label="Core frontend skills">
            {HERO_CONTENT.techStack.map((item) => (
              <span key={item} className="hero-tech-chip">
                {item}
              </span>
            ))}
          </div>

          <div className="hero-actions">
            <PrimaryBtn
              as="a"
              href={RESUME_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open resume in a new tab"
              className="w-fit"
            >
              <span>View resume</span>
              <span>
                <FaDownload />
              </span>
            </PrimaryBtn>
            <SecondaryBtn as={Link} to="/project" className="w-fit">
              <span>View work</span>
              <span>
                <FiArrowRight />
              </span>
            </SecondaryBtn>
          </div>

          <HeroUtilityBar />
        </div>

        <div className="hero-visual">
          <div className="hero-visual__glow"></div>

          {supportingPreview && (
            <article className="browser-card browser-card--back">
              <div className="browser-card__toolbar">
                <div className="browser-card__dots" aria-hidden="true">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <p className="browser-card__address">
                  {previewAddress(supportingPreview)}
                </p>
              </div>

              <div className="browser-card__screen">
                <img
                  src={optimizeCloudinaryImage(
                    supportingPreview.mainImage,
                    "f_auto,q_auto,w_1000,c_limit"
                  )}
                  alt={`${supportingPreview.title} preview`}
                  loading="lazy"
                />
              </div>

              <div className="browser-card__meta">
                <p>{supportingPreview.title}</p>
                <span>
                  {supportingPreview.category === "business"
                    ? "Client platform"
                    : "Product UI"}
                </span>
              </div>
            </article>
          )}

          {leadPreview && (
            <article className="browser-card browser-card--front">
              <div className="browser-card__toolbar">
                <div className="browser-card__dots" aria-hidden="true">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <p className="browser-card__address">
                  {previewAddress(leadPreview)}
                </p>
              </div>

              <div className="browser-card__screen">
                <img
                  src={optimizeCloudinaryImage(
                    leadPreview.mainImage,
                    "f_auto,q_auto,w_1200,c_limit"
                  )}
                  alt={`${leadPreview.title} preview`}
                />
              </div>

              <div className="browser-card__meta">
                <p>{leadPreview.title}</p>
                <span>Selected case study</span>
              </div>
            </article>
          )}

          <div className="hero-profile-card">
            <img
              src={optimizeCloudinaryImage(
                "https://res.cloudinary.com/djnazqqgr/image/upload/q_auto/f_auto/v1775241541/IMG_7401_lrflk7.jpg",
                "f_auto,q_auto,w_640,c_fill,g_auto"
              )}
              alt={SITE_PROFILE.name}
            />
            <div>
              <p className="hero-profile-card__label">Frontend Engineer</p>
              <h2>{SITE_PROFILE.name}</h2>
              <p className="hero-profile-card__copy">
                React, CSS, and polished product UI.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-proof-strip">
        {HERO_PROOF_POINTS.map((point) => (
          <article key={point.label} className="hero-proof-card">
            <p className="hero-proof-card__label">{point.label}</p>
            <p className="hero-proof-card__value">{point.value}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Banner;

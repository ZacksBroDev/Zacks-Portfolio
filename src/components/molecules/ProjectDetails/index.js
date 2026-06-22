import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { FaCode, FaLink } from "react-icons/fa";
import { PrimaryBtn, SecondaryBtn } from "../../../components";
import Items from "../../../Utils/Items";
import { optimizeCloudinaryImage } from "../../../Utils/imageUtils";
import {
  getProjectCaseLabel,
  getProjectFocusPoints,
  getProjectKindLabel,
  getProjectMediaVars,
} from "../../../Utils/projectPresentation";
import "./ProjectDetails.css";

const ProjectImage = ({ src, alt, transform, className = "" }) => {
  const [hasError, setHasError] = useState(!src);

  if (hasError) {
    return (
      <div
        className={`project-detail-image-fallback ${className}`.trim()}
        role="img"
        aria-label={`${alt} unavailable`}
      >
        <p>Preview unavailable</p>
        <span>Image not available for this project yet.</span>
      </div>
    );
  }

  return (
    <img
      src={optimizeCloudinaryImage(src, transform)}
      alt={alt}
      loading="lazy"
      onError={() => setHasError(true)}
    />
  );
};

const getRoleSummary = (item) => {
  if (item.category === "business") {
    return "Frontend engineer focused on building and shipping responsive, client-facing interfaces from implementation through deployment.";
  }

  if (item.category === "personal") {
    return "Frontend product builder responsible for UI architecture, interaction patterns, and production-ready implementation details.";
  }

  return "Frontend-focused builder of interactive web experiences with emphasis on clarity, feedback loops, and usability.";
};

const getProblemGoal = (item) => {
  if (item.category === "business") {
    return "Create a clear, trustworthy web experience that helps real users navigate quickly, understand value fast, and complete key actions without friction.";
  }

  if (item.category === "personal") {
    return "Design and build a product interface that handles complexity without overwhelming users, while keeping performance and readability strong.";
  }

  return "Build an interactive browser experience where users can learn or act quickly through clear visual feedback and responsive controls.";
};

const getDecisionPoints = (item) => {
  const allFeatures = (item.features || []).join(" ").toLowerCase();
  const allTech = (item.technologies || []).join(" ").toLowerCase();
  const decisions = [];

  if (allFeatures.includes("responsive") || allTech.includes("tailwind")) {
    decisions.push(
      "Prioritized responsive layout behavior so the core flow stays usable across mobile, tablet, and desktop.",
    );
  }

  if (
    allFeatures.includes("login") ||
    allFeatures.includes("auth") ||
    allTech.includes("jwt")
  ) {
    decisions.push(
      "Structured authenticated user flows to keep navigation and permissions predictable once users sign in.",
    );
  }

  if (
    allFeatures.includes("checkout") ||
    allFeatures.includes("payment") ||
    allTech.includes("stripe")
  ) {
    decisions.push(
      "Designed purchase and conversion paths to reduce friction from discovery to completion.",
    );
  }

  if (allFeatures.includes("gallery") || allTech.includes("cloudinary")) {
    decisions.push(
      "Used media optimization and progressive image handling to keep visual content rich without slowing the page.",
    );
  }

  if (allFeatures.includes("dashboard") || allFeatures.includes("admin")) {
    decisions.push(
      "Separated information and controls into clearer sections so high-density interfaces remain scannable.",
    );
  }

  if (decisions.length === 0) {
    decisions.push(
      "Focused on straightforward UI structure, clear hierarchy, and maintainable frontend patterns for long-term iteration.",
    );
  }

  return decisions.slice(0, 4);
};

const getOutcomeStatus = (item) => {
  if (item.liveLink) {
    return "Live and publicly accessible.";
  }

  if (item.codeLink) {
    return "Case-study project with source available in the repository.";
  }

  return "Project snapshot documented in this portfolio.";
};

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = Items.find((entry) => entry.id === Number.parseInt(id, 10));

  useEffect(() => {
    if (!item) {
      navigate("/project", { replace: true });
    }
  }, [item, navigate]);

  if (!item) {
    return null;
  }

  const galleryImages = [item.mainImage, ...(item.img || [])].filter(
    (image, index, arr) => image && arr.indexOf(image) === index,
  );
  const [leadImage, ...supportingImages] = galleryImages;
  const focusPoints = getProjectFocusPoints(item, 4);
  const techStack = item.technologies || [];
  const problemGoal = useMemo(() => getProblemGoal(item), [item]);
  const roleSummary = useMemo(() => getRoleSummary(item), [item]);
  const decisionPoints = useMemo(() => getDecisionPoints(item), [item]);
  const outcomeStatus = useMemo(() => getOutcomeStatus(item), [item]);
  const buildItems = useMemo(
    () => (item.features || []).slice(0, 6),
    [item.features],
  );

  return (
    <div className="project-detail-page pt-16">
      <div className="parent project-detail-shell">
        <Link to="/project" className="project-detail-back">
          <FiArrowLeft />
          <span>Back to project archive</span>
        </Link>

        <section className="project-detail-hero">
          <div className="project-detail-hero__content">
            <p className="project-detail-kicker">{getProjectKindLabel(item)}</p>
            <h1>{item.title}</h1>
            <p className="project-detail-summary">{item.description}</p>

            <div
              className="project-detail-meta-pills"
              role="list"
              aria-label="Project metadata"
            >
              <span role="listitem" className="project-detail-meta-pill">
                {getProjectCaseLabel(item)}
              </span>
              <span role="listitem" className="project-detail-meta-pill">
                {item.liveLink ? "Live project" : "Portfolio case study"}
              </span>
              <span role="listitem" className="project-detail-meta-pill">
                {techStack.length} technologies
              </span>
            </div>

            <div className="project-detail-stack">
              {techStack.slice(0, 8).map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>

            <div className="project-detail-actions">
              {item.liveLink && (
                <PrimaryBtn
                  as="a"
                  href={item.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${item.title}`}
                  className="w-fit"
                >
                  <span>Visit live project</span>
                  <span>
                    <FaLink />
                  </span>
                </PrimaryBtn>
              )}

              {item.codeLink && (
                <SecondaryBtn
                  as="a"
                  href={item.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View source code for ${item.title}`}
                  className="w-fit"
                >
                  <span>Source Code</span>
                  <span>
                    <FaCode />
                  </span>
                </SecondaryBtn>
              )}
            </div>
          </div>

          <aside className="project-detail-overview">
            <div className="project-detail-overview__row">
              <span>Project type</span>
              <strong>{getProjectCaseLabel(item)}</strong>
            </div>
            <div className="project-detail-overview__row">
              <span>Gallery</span>
              <strong>{galleryImages.length} screens</strong>
            </div>
            <div className="project-detail-overview__row">
              <span>Status</span>
              <strong>{item.liveLink ? "Live" : "Case study"}</strong>
            </div>

            {focusPoints.length > 0 && (
              <div className="project-detail-overview__focus">
                <p className="project-detail-overview__label">What it shows</p>
                <ul>
                  {focusPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </section>

        {leadImage && (
          <section className="project-detail-gallery">
            <div
              className="project-detail-gallery__lead"
              style={getProjectMediaVars(item.id, "featured")}
            >
              <ProjectImage
                src={leadImage}
                alt={`${item.title} main preview`}
                transform="f_auto,q_auto,w_1600,c_limit"
              />
            </div>

            {supportingImages.length > 0 && (
              <div className="project-detail-gallery__grid">
                {supportingImages.map((image, index) => (
                  <div
                    key={image}
                    className="project-detail-gallery__card"
                    style={getProjectMediaVars(item.id, "supporting")}
                  >
                    <ProjectImage
                      src={image}
                      alt={`${item.title} supporting preview ${index + 1}`}
                      transform="f_auto,q_auto,w_1200,c_limit"
                    />
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        <div className="project-detail-case-grid">
          <section className="project-detail-panel project-detail-panel--main">
            <div className="project-detail-panel__header">
              <p className="project-detail-panel__kicker">Case study</p>
              <h2>Overview</h2>
            </div>
            <p className="project-detail-body-copy">{item.description}</p>

            <div className="project-detail-copy-block">
              <h3>My role</h3>
              <p>{roleSummary}</p>
            </div>

            <div className="project-detail-copy-block">
              <h3>Problem / goal</h3>
              <p>{problemGoal}</p>
            </div>

            {buildItems.length > 0 && (
              <div className="project-detail-copy-block">
                <h3>What I built</h3>
                <ul className="project-detail-list">
                  {buildItems.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {decisionPoints.length > 0 && (
              <div className="project-detail-copy-block">
                <h3>Design and engineering decisions</h3>
                <ul className="project-detail-list">
                  {decisionPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            )}

            <div className="project-detail-copy-block">
              <h3>Outcome / current status</h3>
              <p>{outcomeStatus}</p>
            </div>
          </section>

          <aside className="project-detail-side">
            {focusPoints.length > 0 && (
              <section className="project-detail-panel">
                <div className="project-detail-panel__header">
                  <p className="project-detail-panel__kicker">At a glance</p>
                  <h2>Key project themes</h2>
                </div>
                <ul className="project-detail-list">
                  {focusPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </section>
            )}

            {techStack.length > 0 && (
              <section className="project-detail-panel">
                <div className="project-detail-panel__header">
                  <p className="project-detail-panel__kicker">Implementation</p>
                  <h2>Tech stack</h2>
                </div>

                <div className="project-detail-stack project-detail-stack--dense">
                  {techStack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </section>
            )}

            {item.features?.length > 0 && (
              <section className="project-detail-panel">
                <div className="project-detail-panel__header">
                  <p className="project-detail-panel__kicker">Product scope</p>
                  <h2>Key features</h2>
                </div>

                <ul className="project-detail-list">
                  {item.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </section>
            )}

            {(item.liveLink || item.codeLink) && (
              <section className="project-detail-panel">
                <div className="project-detail-panel__header">
                  <p className="project-detail-panel__kicker">Links</p>
                  <h2>Project links</h2>
                </div>

                <div className="project-detail-actions project-detail-actions--stack">
                  {item.liveLink && (
                    <PrimaryBtn
                      as="a"
                      href={item.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${item.title}`}
                      className="w-fit"
                    >
                      <span>Visit live project</span>
                      <span>
                        <FaLink />
                      </span>
                    </PrimaryBtn>
                  )}

                  {item.codeLink && (
                    <SecondaryBtn
                      as="a"
                      href={item.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View source code for ${item.title}`}
                      className="w-fit"
                    >
                      <span>View source</span>
                      <span>
                        <FaCode />
                      </span>
                    </SecondaryBtn>
                  )}
                </div>
              </section>
            )}
          </aside>
        </div>

        <div className="project-detail-footer">
          <SecondaryBtn as={Link} to="/project" className="w-fit">
            <span>Back to projects</span>
            <span>
              <FiArrowRight />
            </span>
          </SecondaryBtn>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;

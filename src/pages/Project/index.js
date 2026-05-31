import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import { FaCode, FaLink } from "react-icons/fa";
import { PrimaryBtn, SecondaryBtn } from "../../components";
import Items from "../../Utils/Items";
import { optimizeCloudinaryImage } from "../../Utils/imageUtils";
import {
  HOME_FEATURED_PROJECT_IDS,
  RESUME_LINK,
} from "../../Utils/SiteContent";
import {
  getProjectArchiveNote,
  getProjectCaseLabel,
  getProjectFocusPoints,
  getProjectKindLabel,
  getProjectMediaVars,
} from "../../Utils/projectPresentation";
import "./Project.css";

const FILTER_OPTIONS = [
  {
    key: "all",
    label: "All builds",
    description: "Every client site, product build, and interactive experiment.",
  },
  {
    key: "business",
    label: "Client work",
    description: "Production work built for businesses, creators, and real users.",
  },
  {
    key: "personal",
    label: "Product builds",
    description: "Personal products that show product thinking and UI systems.",
  },
  {
    key: "game",
    label: "Interactive builds",
    description: "Training tools and browser experiments with tighter feedback loops.",
  },
];

const ARCHIVE_REVIEW_POINTS = [
  "Client work that had to ship clearly and work across screen sizes.",
  "Frontend decisions centered on responsiveness, IA, and usability.",
  "Enough backend and deployment context to collaborate beyond the UI layer.",
];

const ARCHIVE_FEATURED_PROJECT_IDS = [2, 1, 3];

const homeFeaturedProjects = HOME_FEATURED_PROJECT_IDS.map((id) =>
  Items.find((item) => item.id === id)
).filter(Boolean);

const ProjectArchiveCard = ({ item }) => {
  const highlights = getProjectFocusPoints(item, 2);

  return (
    <article className="project-collection-card">
      <div
        className="project-collection-card__media"
        style={getProjectMediaVars(item.id, "collection")}
      >
        <span className="project-badge">{getProjectKindLabel(item)}</span>
        <img
          className="project-collection-card__image"
          src={optimizeCloudinaryImage(
            item.mainImage,
            "f_auto,q_auto,w_1200,c_limit"
          )}
          alt={`${item.title} preview`}
          loading="lazy"
        />
      </div>

      <div className="project-collection-card__body">
        <div className="project-collection-card__header">
          <div>
            <p className="project-collection-card__eyebrow">
              {getProjectCaseLabel(item)}
            </p>
            <h2>{item.title}</h2>
          </div>
          <span className="project-collection-card__arrow" aria-hidden="true">
            <FiArrowRight />
          </span>
        </div>

        <p className="project-collection-card__meta">
          {getProjectKindLabel(item)} • {item.liveLink ? "Live deployment" : "Case study"}
        </p>

        <p className="project-collection-card__summary">{item.description}</p>

        {highlights.length > 0 && (
          <ul className="project-collection-card__highlights">
            {highlights.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        )}

        <div className="project-collection-card__tags">
          {item.technologies?.slice(0, 5).map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="project-collection-card__actions">
          <PrimaryBtn as={Link} to={`/project/${item.id}`} className="w-fit">
            <span>Read case study</span>
            <span>
              <FiArrowRight />
            </span>
          </PrimaryBtn>

          {item.liveLink && (
            <SecondaryBtn
              as="a"
              href={item.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit"
            >
              <span>View live</span>
              <span>
                <FaLink />
              </span>
            </SecondaryBtn>
          )}

          {item.codeLink && (
            <SecondaryBtn
              as="a"
              href={item.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit"
            >
              <span>Source code</span>
              <span>
                <FaCode />
              </span>
            </SecondaryBtn>
          )}
        </div>
      </div>
    </article>
  );
};

const ArchiveFeaturedCard = ({ item, isLead = false }) => {
  const highlights = getProjectFocusPoints(item, isLead ? 3 : 2);

  return (
    <article
      className={`archive-featured-card ${isLead ? "archive-featured-card--lead" : ""}`}
    >
      <div
        className="archive-featured-card__media"
        style={getProjectMediaVars(item.id, "featured")}
      >
        <span className="project-badge">{getProjectKindLabel(item)}</span>
        <img
          src={optimizeCloudinaryImage(item.mainImage, "f_auto,q_auto,w_1400,c_limit")}
          alt={`${item.title} featured preview`}
          loading="lazy"
        />
      </div>

      <div className="archive-featured-card__body">
        <p className="archive-featured-card__eyebrow">{getProjectCaseLabel(item)}</p>
        <h3>{item.title}</h3>
        <p>{item.description}</p>

        {highlights.length > 0 && (
          <ul className="archive-featured-card__highlights">
            {highlights.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        )}

        <div className="archive-featured-card__stack">
          {item.technologies?.slice(0, 6).map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="archive-featured-card__actions">
          <PrimaryBtn as={Link} to={`/project/${item.id}`} className="w-fit">
            <span>Read case study</span>
            <span>
              <FiArrowRight />
            </span>
          </PrimaryBtn>

          {item.liveLink && (
            <SecondaryBtn
              as="a"
              href={item.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit"
            >
              <span>View live</span>
              <span>
                <FaLink />
              </span>
            </SecondaryBtn>
          )}
        </div>
      </div>
    </article>
  );
};

const Project = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const filteredItems =
    activeFilter === "all"
      ? Items
      : Items.filter((item) => item.category === activeFilter);
  const archiveLeadProject = homeFeaturedProjects[0];
  const archiveCounts = {
    all: Items.length,
    business: Items.filter((item) => item.category === "business").length,
    personal: Items.filter((item) => item.category === "personal").length,
    game: Items.filter((item) => item.category === "game").length,
  };
  const featuredArchiveProjects = ARCHIVE_FEATURED_PROJECT_IDS.map((projectId) =>
    Items.find((item) => item.id === projectId)
  ).filter(Boolean);
  const featuredArchiveIds = new Set(featuredArchiveProjects.map((item) => item.id));
  const archiveCollectionItems = filteredItems.filter(
    (item) => !featuredArchiveIds.has(item.id)
  );

  if (isHomePage) {
    const [featuredProject, ...secondaryProjects] = homeFeaturedProjects;
    const featuredHighlights = getProjectFocusPoints(featuredProject, 3);

    return (
      <section
        className="home-section parent project-section"
        aria-labelledby="featured-projects-heading"
      >
        <div className="section-heading-row">
          <p className="section-kicker">Selected work</p>
          <h2 id="featured-projects-heading" className="section-heading">
            Featured <span>Projects</span>
          </h2>
          <p className="section-copy">
            A small selection of projects that best represent my frontend work:
            real client outcomes, polished interfaces, and product-minded
            implementation.
          </p>
        </div>

        {featuredProject && (
          <article className="featured-case-study">
            <div
              className="featured-case-study__media"
              style={getProjectMediaVars(featuredProject.id, "featured")}
            >
              <img
                src={optimizeCloudinaryImage(
                  featuredProject.mainImage,
                  "f_auto,q_auto,w_1400,c_limit"
                )}
                alt={`${featuredProject.title} preview`}
              />
            </div>

            <div className="featured-case-study__body">
              <p className="featured-case-study__kicker">
                {getProjectCaseLabel(featuredProject)}
              </p>
              <h3>{featuredProject.title}</h3>
              <p className="featured-case-study__summary">
                {featuredProject.description}
              </p>

              {featuredHighlights.length > 0 && (
                <ul className="featured-case-study__highlights">
                  {featuredHighlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}

              <div className="featured-case-study__stack">
                {featuredProject.technologies?.slice(0, 6).map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="featured-case-study__actions">
                <PrimaryBtn
                  as={Link}
                  to={`/project/${featuredProject.id}`}
                  className="w-fit"
                >
                  <span>Read case study</span>
                  <span>
                    <FiArrowRight />
                  </span>
                </PrimaryBtn>

                {featuredProject.liveLink && (
                  <SecondaryBtn
                    as="a"
                    href={featuredProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit"
                  >
                    <span>View live</span>
                    <span>
                      <FaLink />
                    </span>
                  </SecondaryBtn>
                )}

                {featuredProject.codeLink && (
                  <SecondaryBtn
                    as="a"
                    href={featuredProject.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit"
                  >
                    <span>Source</span>
                    <span>
                      <FaCode />
                    </span>
                  </SecondaryBtn>
                )}
              </div>
            </div>
          </article>
        )}

        <div className="supporting-project-grid">
          {secondaryProjects.map((item) => (
            <article key={item.id} className="supporting-project-card">
              <div
                className="supporting-project-card__media"
                style={getProjectMediaVars(item.id, "supporting")}
              >
                <span className="project-badge">{getProjectKindLabel(item)}</span>
                <img
                  src={optimizeCloudinaryImage(
                    item.mainImage,
                    "f_auto,q_auto,w_900,c_limit"
                  )}
                  alt={`${item.title} preview`}
                  loading="lazy"
                />
              </div>

              <div className="supporting-project-card__body">
                <p className="supporting-project-card__kicker">
                  {getProjectCaseLabel(item)}
                </p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="supporting-project-card__tags">
                  {item.technologies?.slice(0, 4).map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="supporting-project-card__actions">
                  <SecondaryBtn
                    as={Link}
                    to={`/project/${item.id}`}
                    className="w-fit"
                  >
                    <span>View project</span>
                    <span>
                      <FiArrowRight />
                    </span>
                  </SecondaryBtn>

                  {item.liveLink && (
                    <SecondaryBtn
                      as="a"
                      href={item.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-fit"
                    >
                      <span>Live</span>
                      <span>
                        <FaLink />
                      </span>
                    </SecondaryBtn>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="project-section__footer">
          <PrimaryBtn as={Link} to="/project" className="w-fit">
            <span>See all projects</span>
            <span>
              <FiArrowRight />
            </span>
          </PrimaryBtn>
        </div>
      </section>
    );
  }

  const activeFilterMeta =
    FILTER_OPTIONS.find((option) => option.key === activeFilter) ||
    FILTER_OPTIONS[0];
  const archiveHighlights = archiveLeadProject
    ? getProjectFocusPoints(archiveLeadProject, 3)
    : [];

  return (
    <div className="project-archive-page pt-16">
      <section className="parent project-archive-shell">
        <div className="project-archive-hero">
          <div className="project-archive-hero__content">
            <p className="section-kicker">Project archive</p>
            <h1 className="section-heading">
              Frontend work built for real use, not just demos.
            </h1>
            <p className="section-copy">
              This archive is meant to make recruiter review easy: client work,
              product builds, and interactive experiments presented as clear
              case studies with live links and source when available.
            </p>

            <ul className="project-archive-review-list">
              {ARCHIVE_REVIEW_POINTS.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <div className="project-archive-hero__actions">
              <PrimaryBtn
                as="a"
                href={RESUME_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit"
              >
                <span>View resume</span>
                <span>
                  <FaLink />
                </span>
              </PrimaryBtn>

              <SecondaryBtn as={Link} to="/contact" className="w-fit">
                <span>Contact me</span>
                <span>
                  <FiArrowRight />
                </span>
              </SecondaryBtn>
            </div>

            <div className="project-archive-stats">
              <article className="project-archive-stat">
                <span>Client builds</span>
                <strong>{archiveCounts.business}</strong>
              </article>
              <article className="project-archive-stat">
                <span>Live launches</span>
                <strong>{Items.filter((item) => item.liveLink).length}</strong>
              </article>
              <article className="project-archive-stat">
                <span>Total projects</span>
                <strong>{archiveCounts.all}</strong>
              </article>
            </div>
          </div>

          {archiveLeadProject && (
            <article className="project-archive-spotlight">
              <p className="project-archive-spotlight__eyebrow">
                Current lead case study
              </p>

              <div
                className="project-archive-spotlight__media"
                style={getProjectMediaVars(archiveLeadProject.id, "featured")}
              >
                <img
                  src={optimizeCloudinaryImage(
                    archiveLeadProject.mainImage,
                    "f_auto,q_auto,w_1200,c_limit"
                  )}
                  alt={`${archiveLeadProject.title} spotlight`}
                />
              </div>

              <div className="project-archive-spotlight__body">
                <p className="project-archive-spotlight__label">
                  {getProjectCaseLabel(archiveLeadProject)}
                </p>
                <h2>{archiveLeadProject.title}</h2>
                <p>{getProjectArchiveNote(archiveLeadProject)}</p>

                <ul className="project-archive-spotlight__list">
                  {archiveHighlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

                <SecondaryBtn
                  as={Link}
                  to={`/project/${archiveLeadProject.id}`}
                  className="w-fit"
                >
                  <span>Open case study</span>
                  <span>
                    <FiArrowRight />
                  </span>
                </SecondaryBtn>
              </div>
            </article>
          )}
        </div>

        <section className="project-filter-panel" aria-labelledby="project-filter-heading">
          <div className="project-filter-panel__header">
            <div>
              <p className="section-kicker">Browse by work type</p>
              <h2 id="project-filter-heading">Projects sorted for quick review</h2>
            </div>
            <p>{activeFilterMeta.description}</p>
          </div>

          <div
            className="project-filter-group"
            role="group"
            aria-label="Project filters"
          >
            {FILTER_OPTIONS.map((option) => (
              <button
                key={option.key}
                className={`project-filter-chip ${
                  activeFilter === option.key ? "project-filter-chip--active" : ""
                }`}
                onClick={() => setActiveFilter(option.key)}
                aria-pressed={activeFilter === option.key}
              >
                <span>{option.label}</span>
                <strong className="project-filter-chip__count">
                  {archiveCounts[option.key]}
                </strong>
              </button>
            ))}
          </div>
        </section>

        {featuredArchiveProjects.length > 0 && (
          <section
            className="archive-featured-section"
            aria-labelledby="featured-case-studies-heading"
          >
            <div className="archive-featured-section__header">
              <p className="section-kicker">Featured case studies</p>
              <h2 id="featured-case-studies-heading" className="section-heading">
                Recruiter-priority project work
              </h2>
              <p className="section-copy">
                The strongest examples of client-facing frontend delivery, from IA and
                responsive implementation to integration and production launch.
              </p>
            </div>

            <div className="archive-featured-grid">
              {featuredArchiveProjects.map((item, index) => (
                <ArchiveFeaturedCard
                  key={item.id}
                  item={item}
                  isLead={index === 0}
                />
              ))}
            </div>
          </section>
        )}

        <div className="project-collection-grid">
          {archiveCollectionItems.map((item) => (
            <ProjectArchiveCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Project;

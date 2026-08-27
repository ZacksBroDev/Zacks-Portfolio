import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaDownload } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import "../../../pages/shared/Shared.css";
import { PrimaryBtn } from "../../../components";
import {
  HERO_PROOF_POINTS,
  HERO_CONTENT,
  HERO_SHOWCASE_PROJECT_IDS,
  RESUME_LINK,
  SITE_PROFILE,
} from "../../../Utils/SiteContent";
import Items from "../../../Utils/Items";
import { optimizeCloudinaryImage } from "../../../Utils/imageUtils";

const showcaseProjects = HERO_SHOWCASE_PROJECT_IDS.map((id) =>
  Items.find((item) => item.id === id),
).filter(Boolean);

const ROTATION_INTERVAL = 6000;
const ROTATION_RESUME_DELAY = 1400;

const Banner = () => {
  const heroRef = useRef(null);
  const frameRef = useRef(null);
  const rotationIntervalRef = useRef(null);
  const resumeTimeoutRef = useRef(null);
  const shouldReduceMotionRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const advanceProject = () => {
    if (document.activeElement?.closest(".hero-visual__stage")) {
      return;
    }

    setActiveIndex(
      (currentIndex) => (currentIndex + 1) % showcaseProjects.length,
    );
  };

  useEffect(() => {
    showcaseProjects.forEach((project) => {
      const image = new Image();
      image.src = optimizeCloudinaryImage(
        project.mainImage,
        "f_auto,q_auto,w_1200,c_limit",
      );
    });
  }, []);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    shouldReduceMotionRef.current = motionQuery.matches;

    const clearRotation = () => {
      if (rotationIntervalRef.current) {
        clearInterval(rotationIntervalRef.current);
        rotationIntervalRef.current = null;
      }

      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
        resumeTimeoutRef.current = null;
      }
    };

    const startRotation = () => {
      if (shouldReduceMotionRef.current || document.hidden) {
        return;
      }

      if (rotationIntervalRef.current) {
        clearInterval(rotationIntervalRef.current);
      }

      rotationIntervalRef.current = setInterval(
        advanceProject,
        ROTATION_INTERVAL,
      );
    };

    const handleMotionChange = (event) => {
      shouldReduceMotionRef.current = event.matches;
      clearRotation();

      if (!event.matches) {
        startRotation();
      }
    };

    const handleVisibilityChange = () => {
      clearRotation();

      if (!document.hidden) {
        startRotation();
      }
    };

    if (motionQuery.addEventListener) {
      motionQuery.addEventListener("change", handleMotionChange);
    } else {
      motionQuery.addListener(handleMotionChange);
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);
    startRotation();

    return () => {
      clearRotation();
      document.removeEventListener("visibilitychange", handleVisibilityChange);

      if (motionQuery.removeEventListener) {
        motionQuery.removeEventListener("change", handleMotionChange);
      } else {
        motionQuery.removeListener(handleMotionChange);
      }
    };
  }, []);

  const pauseRotation = () => {
    if (rotationIntervalRef.current) {
      clearInterval(rotationIntervalRef.current);
      rotationIntervalRef.current = null;
    }

    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = null;
    }
  };

  const resumeRotation = () => {
    if (shouldReduceMotionRef.current || document.hidden) {
      return;
    }

    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }

    resumeTimeoutRef.current = setTimeout(() => {
      if (rotationIntervalRef.current) {
        clearInterval(rotationIntervalRef.current);
      }

      rotationIntervalRef.current = setInterval(
        advanceProject,
        ROTATION_INTERVAL,
      );
    }, ROTATION_RESUME_DELAY);
  };

  const handleHeroPointerMove = (event) => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !window.matchMedia("(hover: hover) and (pointer: fine)").matches
    ) {
      return;
    }

    const target = heroRef.current;

    if (!target) {
      return;
    }

    const bounds = target.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
    }

    frameRef.current = requestAnimationFrame(() => {
      target.style.setProperty("--grid-x", `${x * -12}px`);
      target.style.setProperty("--grid-y", `${y * -12}px`);
      target.style.setProperty("--active-x", `${x * 10}px`);
      target.style.setProperty("--active-y", `${y * 12}px`);
      target.style.setProperty("--active-rotate-x", `${y * -6}deg`);
      target.style.setProperty("--active-rotate-y", `${x * 10}deg`);
      target.style.setProperty("--middle-x", `${x * -13}px`);
      target.style.setProperty("--middle-y", `${y * -9}px`);
      target.style.setProperty("--back-x", `${x * 7}px`);
      target.style.setProperty("--back-y", `${y * 5}px`);
    });
  };

  const handleHeroPointerLeave = (event) => {
    const target = heroRef.current || event.currentTarget;

    target.style.setProperty("--grid-x", "0px");
    target.style.setProperty("--grid-y", "0px");
    target.style.setProperty("--active-x", "0px");
    target.style.setProperty("--active-y", "0px");
    target.style.setProperty("--active-rotate-x", "0deg");
    target.style.setProperty("--active-rotate-y", "0deg");
    target.style.setProperty("--middle-x", "0px");
    target.style.setProperty("--middle-y", "0px");
    target.style.setProperty("--back-x", "0px");
    target.style.setProperty("--back-y", "0px");
  };

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

  const projectLabel = (project) =>
    project.id === 2 ? "Selected case study" : "Client project";

  return (
    <section
      ref={heroRef}
      className="home-section hero-section parent"
      aria-labelledby="home-hero-heading"
      onPointerMove={handleHeroPointerMove}
      onPointerLeave={handleHeroPointerLeave}
    >
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="section-kicker">{HERO_CONTENT.eyebrow}</p>
          <p className="hero-intro">
            {HERO_CONTENT.intro} <span>{SITE_PROFILE.name}</span>
          </p>
          <h1
            id="home-hero-heading"
            className="hero-title"
            aria-label={HERO_CONTENT.headline}
          >
            {HERO_CONTENT.headline.split(" ").map((word, index) => (
              <span
                key={`${word}-${index}`}
                className="hero-title__word"
                style={{ "--word-index": index }}
              >
                {word}
              </span>
            ))}
          </h1>
          <p className="hero-summary">{HERO_CONTENT.summary}</p>
          <p className="hero-availability">{HERO_CONTENT.availability}</p>

          <div className="hero-actions">
            <PrimaryBtn as={Link} to="/project" className="w-fit">
              <span>View projects</span>
              <span>
                <FiArrowRight />
              </span>
            </PrimaryBtn>
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
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-visual__glow"></div>
          <div className="hero-visual__grid" aria-hidden="true"></div>

          <div
            className="hero-visual__stage"
            onPointerEnter={pauseRotation}
            onPointerLeave={resumeRotation}
            onFocus={pauseRotation}
            onBlur={resumeRotation}
          >
            {showcaseProjects.map((project, projectIndex) => {
              const offset =
                (projectIndex - activeIndex + showcaseProjects.length) %
                showcaseProjects.length;
              const position =
                offset === 0 ? "active" : offset === 1 ? "middle" : "back";
              const CardComponent = position === "active" ? Link : "article";
              const cardProps =
                position === "active"
                  ? {
                      to: `/project/${project.id}`,
                      "aria-label": `View ${project.title} case study`,
                      onFocus: pauseRotation,
                      onBlur: resumeRotation,
                    }
                  : { "aria-hidden": true };

              return (
                <CardComponent
                  key={project.id}
                  className="browser-card hero-project-card"
                  data-position={position}
                  {...cardProps}
                >
                  <div className="browser-card__toolbar">
                    <div className="browser-card__dots" aria-hidden="true">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                    <p className="browser-card__address">
                      {previewAddress(project)}
                    </p>
                  </div>

                  <div className="browser-card__screen">
                    <img
                      src={optimizeCloudinaryImage(
                        project.mainImage,
                        position === "active"
                          ? "f_auto,q_auto,w_1200,c_limit"
                          : "f_auto,q_auto,w_900,c_limit",
                      )}
                      alt={`${project.title} preview`}
                      loading={position === "active" ? "eager" : "lazy"}
                    />
                  </div>

                  <div className="browser-card__meta">
                    <p>{project.title}</p>
                    <span>{projectLabel(project)}</span>
                  </div>
                </CardComponent>
              );
            })}
          </div>
        </div>
      </div>

      <div className="hero-proof-strip">
        {HERO_PROOF_POINTS.map((point) => (
          <article key={point.label} className="hero-proof-item">
            <p className="hero-proof-card__label">{point.label}</p>
            <h2 className="hero-proof-card__title">{point.title}</h2>
            <p className="hero-proof-card__value">{point.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Banner;

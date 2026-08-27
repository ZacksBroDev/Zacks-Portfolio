import React from "react";

const proofCards = [
  {
    id: 1,
    label: "Production experience",
    layout: "wide",
    title: "Real Client Work",
    description:
      "Built and shipped client-facing websites and applications through requirements, iteration, deployment, and delivery.",
  },
  {
    id: 2,
    label: "Frontend engineering",
    layout: "compact",
    title: "Frontend-First, Full-Stack Capable",
    description:
      "Frontend-focused engineering with the ability to work across APIs, backend logic, integrations, and deployment when required.",
  },
  {
    id: 3,
    label: "Problem solving",
    layout: "wide",
    title: "Technical Problem-Solving",
    description:
      "Hands-on troubleshooting experience combined with software engineering, rapid iteration, and practical delivery.",
  },
];

const ExperienceSnapshot = () => {
  return (
    <section
      className="home-section parent experience-section"
      aria-labelledby="experience-snapshot-heading"
    >
      <div className="section-heading-row section-heading-row--center">
        <p className="section-kicker">Why teams trust me</p>
        <h2
          id="experience-snapshot-heading"
          className="section-heading section-heading--center"
        >
          What I bring
        </h2>
        <p className="section-copy section-copy--center">
          Evidence of how I approach frontend work, collaboration, and delivery.
        </p>
      </div>

      <div className="experience-grid">
        {proofCards.map((card) => (
          <article
            key={card.id}
            className={`experience-card experience-card--${card.layout}`}
          >
            <p className="experience-card__label">{card.label}</p>
            <h3 className="experience-card__title">{card.title}</h3>
            <p className="experience-card__copy">{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSnapshot;

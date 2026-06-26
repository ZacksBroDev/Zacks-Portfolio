import React from "react";

const proofCards = [
  {
    id: 1,
    label: "Client work",
    layout: "wide",
    title: "Real Client Work",
    description:
      "Built and shipped production websites and frontend features for real clients, with a focus on clean UX, responsive layouts, and reliable delivery.",
  },
  {
    id: 2,
    label: "Scope",
    layout: "compact",
    title: "Frontend-First, Full-Stack Capable",
    description:
      "Strong in React, JavaScript, CSS, and Tailwind, with the ability to work across APIs, backend logic, and deployment when the product needs it.",
  },
  {
    id: 3,
    label: "Quality",
    layout: "compact",
    title: "Performance & Usability Focus",
    description:
      "Prioritize responsive interfaces, accessibility, maintainable code, and practical frontend decisions that improve speed, clarity, and user experience.",
  },
  {
    id: 4,
    label: "Mindset",
    layout: "wide",
    title: "Technical Operations Background",
    description:
      "Bring a hands-on troubleshooting mindset, fast iteration under pressure, and strong production awareness from years in technical, high-accountability environments.",
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

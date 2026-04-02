import React from "react";

const proofCards = [
  {
    id: 1,
    title: "Real Client Work",
    description:
      "Built and shipped production websites and frontend features for real clients, with a focus on clean UX, responsive layouts, and reliable delivery.",
  },
  {
    id: 2,
    title: "Frontend-First, Full-Stack Capable",
    description:
      "Strong in React, JavaScript, CSS, and Tailwind, with the ability to work across APIs, backend logic, and deployment when the product needs it.",
  },
  {
    id: 3,
    title: "Performance & Usability Focus",
    description:
      "Prioritize responsive interfaces, accessibility, maintainable code, and practical frontend decisions that improve speed, clarity, and user experience.",
  },
  {
    id: 4,
    title: "Technical Operations Background",
    description:
      "Bring a hands-on troubleshooting mindset, fast iteration under pressure, and strong production awareness from years in technical, high-accountability environments.",
  },
];

const ExperienceSnapshot = () => {
  return (
    <section className="parent py-10 md:py-12" aria-labelledby="experience-snapshot-heading">
      <div className="mb-8 md:mb-10">
        <h2 id="experience-snapshot-heading" className="text-3xl md:text-4xl font-semibold text-center">
          Experience <span className="text-primary">Snapshot</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
        {proofCards.map((card) => (
          <article
            key={card.id}
            className="rounded-lg border border-primary/20 bg-[#2a2a2a] px-5 py-5 md:px-6 md:py-6 shadow-md hover:shadow-primary/30 transition-shadow duration-300"
          >
            <h3 className="text-lg md:text-xl font-semibold text-white mb-2">{card.title}</h3>
            <p className="text-neutral leading-relaxed text-sm md:text-base">{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSnapshot;
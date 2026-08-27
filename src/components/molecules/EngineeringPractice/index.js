import React from "react";
import { ENGINEERING_PRACTICES } from "../../../Utils/SiteContent";

const EngineeringPractice = () => {
  return (
    <section
      className="home-section parent engineering-practice-section"
      aria-labelledby="engineering-practice-heading"
    >
      <div className="engineering-practice-layout">
        <div className="engineering-practice-intro">
          <p className="section-kicker">Engineering practice</p>
          <h2 id="engineering-practice-heading" className="section-heading">
            How I <span>build</span>
          </h2>
          <p className="section-copy">
            The engineering practices I use to turn interfaces into maintainable
            production software.
          </p>
        </div>

        <div className="engineering-practice-list">
          {ENGINEERING_PRACTICES.map((practice, index) => (
            <article key={practice.label} className="engineering-practice-row">
              <span className="engineering-practice-row__index">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3>{practice.label}</h3>
                <p>{practice.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringPractice;

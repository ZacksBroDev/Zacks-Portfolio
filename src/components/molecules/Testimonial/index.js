import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import "./Testimonial.css";
import Reviews from "../../../Utils/Reviews";
import { useLocation } from "react-router-dom";

const Testimonial = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const HeadingTag = isHomePage ? "h2" : "h1";

  return (
    <section className="home-section py-12 parent testimonial-section" aria-labelledby="testimonial-heading">
      <div className="section-heading-row section-heading-row--center">
        <p className="section-kicker">Client feedback</p>
        <HeadingTag
          id="testimonial-heading"
          className="section-heading section-heading--center"
        >
          What collaborators <span>say</span>
        </HeadingTag>
        <p className="section-copy section-copy--center">
          Feedback from people I have built with, supported, or delivered work
          for.
        </p>
      </div>

      <div className="testimonial-grid">
        {Reviews.map((review) => (
          <article key={review.id} className="testimonial-card">
            <FaQuoteLeft className="testimonial-card__quote" aria-hidden="true" />
            <p className="testimonial-card__copy">{review.description}</p>
            <div className="testimonial-card__footer">
              <h3>{review.name}</h3>
              <p>{review.bio}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;

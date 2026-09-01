import React from "react";
import Project from "../Project";
import Contact from "../Contact";
import {
  Banner,
  EngineeringPractice,
  ExperienceSnapshot,
  HeroUtilityBar,
  Testimonial,
} from "../../components";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page pt-20">
      <div className="home-shell parent">
        <aside
          className="home-profile-rail"
          aria-label="Profile and direct links"
        >
          <HeroUtilityBar />
        </aside>

        <div className="home-main-content">
          <Banner />
          <ExperienceSnapshot />
          <Project />
          <EngineeringPractice />
          <Testimonial />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import Project from "../Project";
import Contact from "../Contact";
import { Banner, ExperienceSnapshot, Testimonial } from "../../components";

const Home = () => {
  return (
    <div className="pt-16">
      <Banner />
      <ExperienceSnapshot />
      <Project />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default Home;

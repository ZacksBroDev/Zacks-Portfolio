import React from "react";
import Project from "../Project";
import Contact from "../Contact";
import { Banner, ExperienceSnapshot, Testimonial } from "../../components";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page pt-20">
      <Banner />
      <ExperienceSnapshot />
      <Project />
      <Testimonial />
      <Contact />
    </div>
  );
};

export default Home;

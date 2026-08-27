import React, { useEffect, useRef } from "react";
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
  const pageRef = useRef(null);

  useEffect(() => {
    const page = pageRef.current;
    const pointerQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    );
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!page || !pointerQuery.matches || motionQuery.matches) {
      return undefined;
    }

    let frameId;
    let targetX = window.innerWidth * 0.68;
    let targetY = window.innerHeight * 0.22;
    let currentX = targetX;
    let currentY = targetY;

    const render = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;

      page.style.setProperty("--ambient-x", `${currentX}px`);
      page.style.setProperty("--ambient-y", `${currentY}px`);
      frameId = requestAnimationFrame(render);
    };

    const handlePointerMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    frameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div ref={pageRef} className="home-page pt-20">
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

import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import React, { Suspense, useEffect, useRef } from "react";
import {
  NotFound,
  Loader,
  ScrollToTop,
  ProjectDetails,
  Navbar,
  Footer,
} from "./components";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Resume from "./pages/Resume";
const Home = React.lazy(() => import("./pages/Home"));
const Project = React.lazy(() => import("./pages/Project"));

function App() {
  const appRef = useRef(null);
  const location = useLocation();
  const isFalse = location.pathname.includes("404");

  useEffect(() => {
    const app = appRef.current;
    const pointerQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine)",
    );
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!app || !pointerQuery.matches || motionQuery.matches) {
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

      app.style.setProperty("--ambient-x", `${currentX}px`);
      app.style.setProperty("--ambient-y", `${currentY}px`);
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
    <div ref={appRef} className="site-app flex flex-col min-h-screen">
      <ScrollToTop />
      {isFalse || <Navbar />}
      <main className="flex-1">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/project" element={<Project />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate replace to="/404" />}></Route>
          </Routes>
        </Suspense>
      </main>
      {isFalse || <Footer />}
    </div>
  );
}

export default App;

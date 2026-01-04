import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import React, { Suspense } from "react";
import {
  NotFound,
  Loader,
  ScrollToTop,
  ProjectDetails,
  Navbar,
  Footer,
  MernBlogRepair,
  EmployeeSalaryManagementRepair,
} from "./components";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Resume from "./pages/Resume";
const Home = React.lazy(() => import("./pages/Home"));
const Project = React.lazy(() => import("./pages/Project"));

function App() {
  const location = useLocation();
  const isFalse = location.pathname.includes("404");
  return (
    <div className="flex flex-col min-h-screen">
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
            <Route path="/mern-blog" element={<MernBlogRepair />} />
            <Route
              path="/employee-salary-management"
              element={<EmployeeSalaryManagementRepair />}
            />
          </Routes>
        </Suspense>
      </main>
      {isFalse || <Footer />}
    </div>
  );
}

export default App;

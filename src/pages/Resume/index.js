import React from "react";
import "./Resume.css";
import "../../components/atoms/PrimaryBtn/PrimaryBtn.css";
import "../shared/Shared.css";
import {
  FaDownload,
  FaEnvelope,
  FaGlobe,
  FaGithub,
  FaExternalLinkAlt,
  FaAward,
  FaCertificate,
} from "react-icons/fa";

const Resume = () => {
  return (
    <div className="parent pt-16 my-16">
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-semibold drop-shadow-md text-center">
          My <span className="text-primary">Resume</span>
        </h1>
      </div>

      <div className="resume-container">
        {/* Profile Header */}
        <div className="resume-header mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Placeholder for photo */}
            <div className="flex justify-center lg:justify-start">
              <div className="profile-image-container">
                <img
                  src="https://res.cloudinary.com/djnazqqgr/image/upload/v1766927366/28067_SA2_npgzze.jpg"
                  alt="Zackary Brown"
                  className="profile-image"
                />
              </div>
            </div>

            {/* Name and Title */}
            <div className="text-center lg:col-span-2">
              <h2 className="text-4xl font-bold text-white mb-2">
                Zackary Brown
              </h2>
              <p className="text-xl text-primary font-semibold mb-4">
                Full-Stack Developer
              </p>

              {/* Contact Links */}
              <div className="flex flex-wrap justify-center gap-4 mb-4">
                <a
                  href="mailto:zackaryzbrown@gmail.com"
                  className="contact-link"
                >
                  <FaEnvelope className="mr-2" />
                  zackaryzbrown@gmail.com
                </a>
                <a
                  href="https://zackarybrown.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <FaGlobe className="mr-2" />
                  zackarybrown.net
                </a>
                <a
                  href="https://github.com/ZacksBroDev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <FaGithub className="mr-2" />
                  ZacksBroDev
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Profile/Summary Section */}
        <div className="resume-section">
          <h3 className="section-title">Profile</h3>
          <div className="section-content">
            <p className="text-neutral leading-relaxed">
              I'm a full-stack developer focused on building practical,
              production-ready web applications. I work on frontend interfaces
              to backend APIs and cloud deployments and take responsibility for
              the entire build process. I prioritize clarity, maintainability,
              and performance, so projects remain stable and easy to evolve. I
              am seeking a new role in software engineering to continue
              developing and expanding my skills.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div className="resume-section">
          <h3 className="section-title">Education</h3>
          <div className="section-content">
            <div className="experience-item">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h4 className="text-xl font-semibold text-white">
                    Western Colorado University
                  </h4>
                  <p className="text-primary font-medium">Computer Science</p>
                  <p className="text-neutral text-sm">Gunnison, CO</p>
                </div>
                <span className="date-badge">August 2022 – March 2024</span>
              </div>
            </div>

            <div className="experience-item">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h4 className="text-xl font-semibold text-white">
                    Sandra Day O'Connor High School
                  </h4>
                  <p className="text-neutral text-sm">Phoenix, AZ</p>
                </div>
                <span className="date-badge">August 2018 – May 2022</span>
              </div>
              <ul className="list-disc list-inside text-neutral ml-4">
                <li>AP Computer Science & Robotic Courses</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Experience & Projects Section */}
        <div className="resume-section">
          <h3 className="section-title">Experience & Projects</h3>
          <div className="section-content">
            <div className="mb-4">
              <h4 className="text-xl font-semibold text-white">
                Full Stack Engineer
              </h4>
              <p className="text-neutral text-sm mb-4">
                Self-employed, Erie, CO
              </p>
            </div>

            {/* Mile High Karate */}
            <div className="experience-item">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div className="flex items-center gap-2">
                  <h5 className="text-lg font-semibold text-primary">
                    Mile High Karate
                  </h5>
                  <a
                    href="https://mhktraining.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-white transition-colors"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                  </a>
                </div>
                <span className="date-badge">November 2025 - Present</span>
              </div>
              <ul className="list-disc list-inside text-neutral ml-4 space-y-2">
                <li>
                  Built a centralized training platform for a martial arts
                  school serving 100+ students, consolidating schedules,
                  instructional videos, and resources into one system and
                  reducing manual coordination by ~50%. Built using React 19,
                  Vite, and AWS Amplify.
                </li>
              </ul>
            </div>

            {/* The Futons */}
            <div className="experience-item">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div className="flex items-center gap-2">
                  <h5 className="text-lg font-semibold text-primary">
                    The Futons
                  </h5>
                  <a
                    href="https://thefutons.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-white transition-colors"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                  </a>
                </div>
                <span className="date-badge">June 2025 - Present</span>
              </div>
              <ul className="list-disc list-inside text-neutral ml-4 space-y-2">
                <li>
                  Developed a performance-optimized static website for a local
                  band featuring media assets and releases, a responsive photo
                  gallery system with 60+ concert images, lazy loading, and
                  progressive image rendering using Cloudinary, JavaScript,
                  HTML5, and CSS3.
                </li>
              </ul>
            </div>

            {/* Just Malik Beats */}
            <div className="experience-item">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div className="flex items-center gap-2">
                  <h5 className="text-lg font-semibold text-primary">
                    Just Malik Beats
                  </h5>
                  <a
                    href="https://main.d2l99u51v53uvg.amplifyapp.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-white transition-colors"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                  </a>
                </div>
                <span className="date-badge">May 2025 - Present</span>
              </div>
              <ul className="list-disc list-inside text-neutral ml-4 space-y-2">
                <li>
                  Developed a responsive e-commerce website for an independent
                  music producer with 50+ digital assets, enabling
                  direct-to-consumer sales as a Saas platform with JWT
                  authentication and MongoDB.
                </li>
                <li>
                  Implemented comprehensive security measures, including rate
                  limiting, CSRF protection, input validation, and role-based
                  access control for admin/user management.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Other Work Experience Section */}
        <div className="resume-section">
          <h3 className="section-title">Other Work Experience</h3>
          <div className="section-content">
            {/* Firestone - Current */}
            <div className="experience-item">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h4 className="text-xl font-semibold text-white">
                    Full-Time C Technician
                  </h4>
                  <p className="text-primary font-medium">
                    Firestone Complete Autocare
                  </p>
                  <p className="text-neutral text-sm">Westminster, CO</p>
                </div>
                <span className="date-badge">March 2024 - Present</span>
              </div>
              <ul className="list-disc list-inside text-neutral ml-4 space-y-2">
                <li>
                  Diagnose and repair automotive systems, including brakes,
                  alignments, suspension, cooling, and electrical systems.
                  Change oil, transmission fluid, and filters.
                </li>
                <li>
                  Install and perform tire maintenance. Install batteries, shock
                  absorbers, and exhaust systems, and check electrical systems.
                </li>
              </ul>
            </div>

            {/* Kroger City Market */}
            <div className="experience-item">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h4 className="text-xl font-semibold text-white">
                    Deli & Seafood Clerk
                  </h4>
                  <p className="text-primary font-medium">Kroger City Market</p>
                  <p className="text-neutral text-sm">Gunnison, CO</p>
                </div>
                <span className="date-badge">September 2023 – March 2024</span>
              </div>
              <ul className="list-disc list-inside text-neutral ml-4 space-y-2">
                <li>
                  Ensure that all deli items are labeled, dated, covered,
                  rotated, and monitored for quality and freshness.
                </li>
                <li>
                  Provide excellent customer service, address the needs of
                  customers in a timely and effective manner, and model
                  suggestive selling techniques. Adhere to all food safety
                  regulations and guidelines.
                </li>
              </ul>
            </div>

            {/* Kroger Fry's */}
            <div className="experience-item">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h4 className="text-xl font-semibold text-white">
                    Courtesy Clerk
                  </h4>
                  <p className="text-primary font-medium">Kroger Fry's</p>
                  <p className="text-neutral text-sm">Phoenix, AZ</p>
                </div>
                <span className="date-badge">May 2023 – August 2023</span>
              </div>
              <ul className="list-disc list-inside text-neutral ml-4 space-y-2">
                <li>Bagged groceries at checkout for customers.</li>
                <li>
                  Maintained good customer service by offering to help load
                  groceries in cars, gather baskets, answer questions, and
                  create an environment that enables customers to feel welcome
                  and appreciated.
                </li>
              </ul>
            </div>

            {/* Par Five LLC */}
            <div className="experience-item">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h4 className="text-xl font-semibold text-white">
                    Heavy Diesel Mechanic
                  </h4>
                  <p className="text-primary font-medium">Par Five LLC</p>
                  <p className="text-neutral text-sm">Artesia, NM</p>
                </div>
                <span className="date-badge">May 2022 – August 2022</span>
              </div>
              <ul className="list-disc list-inside text-neutral ml-4 space-y-2">
                <li>
                  Completed tire changes, oil and filter changes, and welding on
                  diesel engines and semi-trucks.
                </li>
              </ul>
            </div>

            {/* Firestone Phoenix */}
            <div className="experience-item">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h4 className="text-xl font-semibold text-white">
                    Maintenance Technician
                  </h4>
                  <p className="text-primary font-medium">
                    Firestone Complete Autocare
                  </p>
                  <p className="text-neutral text-sm">Phoenix, AZ</p>
                </div>
                <span className="date-badge">August 2021 – May 2022</span>
              </div>
              <ul className="list-disc list-inside text-neutral ml-4 space-y-2">
                <li>
                  Diagnose and repair automotive systems, including brakes,
                  tires, and change oil and filters.
                </li>
              </ul>
            </div>

            {/* Fenney's Automotive */}
            <div className="experience-item">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h4 className="text-xl font-semibold text-white">
                    Lubrication Technician
                  </h4>
                  <p className="text-primary font-medium">
                    Fenney's Automotive
                  </p>
                  <p className="text-neutral text-sm">Phoenix, AZ</p>
                </div>
                <span className="date-badge">May 2021 – August 2021</span>
              </div>
              <ul className="list-disc list-inside text-neutral ml-4 space-y-2">
                <li>
                  Diagnose and repair automotive systems, including brakes,
                  tires, and change oil and filters.
                </li>
              </ul>
            </div>

            {/* Best Western */}
            <div className="experience-item">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h4 className="text-xl font-semibold text-white">
                    Facilities Maintenance Technician
                  </h4>
                  <p className="text-primary font-medium">Best Western</p>
                  <p className="text-neutral text-sm">Artesia, NM</p>
                </div>
                <span className="date-badge">May 2019 – August 2019</span>
              </div>
              <ul className="list-disc list-inside text-neutral ml-4 space-y-2">
                <li>
                  Assisted with facility projects, including painting, changing
                  lights, cleaning, fixing appliances, and assisting guests with
                  questions.
                </li>
              </ul>
            </div>

            {/* Chamber of Commerce */}
            <div className="experience-item">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h4 className="text-xl font-semibold text-white">
                    Office Assistant
                  </h4>
                  <p className="text-primary font-medium">
                    Chamber of Commerce
                  </p>
                  <p className="text-neutral text-sm">Artesia, NM</p>
                </div>
                <span className="date-badge">May 2018 – August 2018</span>
              </div>
              <ul className="list-disc list-inside text-neutral ml-4 space-y-2">
                <li>
                  Assist staff with administrative duties, including preparing
                  information packets, cleaning lobby areas, and other office
                  tasks as needed.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Interests/Self Development Section */}
        <div className="resume-section">
          <h3 className="section-title">Interests / Self Development</h3>
          <div className="section-content">
            <div className="experience-item">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h4 className="text-xl font-semibold text-white">
                    100devs Training Agency
                  </h4>
                  <p className="text-neutral text-sm">Remote</p>
                </div>
                <span className="date-badge">November 2025 – Present</span>
              </div>
              <ul className="list-disc list-inside text-neutral ml-4 space-y-2">
                <li>
                  Training program to practice and improve software engineering
                  skills through structured coursework, projects, and community
                  engagement.
                </li>
                <li>
                  Interact with community members and contribute to open-source
                  projects with teams across the nation.
                </li>
                <li>
                  Ask and answer questions about software engineering and attend
                  tech meetups in local cities.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Certifications & Awards Section */}
        <div className="resume-section">
          <h3 className="section-title">Certifications & Awards</h3>
          <div className="section-content">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* EPA 609 Certification */}
              <div className="certification-card">
                <div className="flex items-start gap-3">
                  <FaCertificate className="text-primary text-2xl mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      EPA 609 Certification
                    </h4>
                    <p className="text-primary font-medium">ESCO Institute</p>
                    <p className="text-neutral text-sm">
                      Issued: April 25, 2025
                    </p>
                  </div>
                </div>
              </div>

              {/* Area Top Performer */}
              <div className="certification-card">
                <div className="flex items-start gap-3">
                  <FaAward className="text-primary text-2xl mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">
                      Area Top Performer
                    </h4>
                    <p className="text-primary font-medium">
                      Firestone Complete Autocare
                    </p>
                    <p className="text-neutral text-sm">
                      Q1 2025, Q2 2025, Q4 2024, Q4 2022
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="resume-section">
          <h3 className="section-title">Skills</h3>
          <div className="section-content">
            <div className="skills-grid">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">HTML5</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">CSS3</span>
              <span className="skill-tag">Git</span>
              <span className="skill-tag">GitHub</span>
              <span className="skill-tag">VS Code</span>
              <span className="skill-tag">Responsive Design</span>
              <span className="skill-tag">AWS</span>
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">Express.js</span>
              <span className="skill-tag">React.js</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Object-Oriented Programming</span>
              <span className="skill-tag">Debugging</span>
            </div>
          </div>
        </div>

        {/* Download Resume Button */}
        <div className="flex justify-center mt-12">
          <a
            href="https://drive.google.com/file/d/1BulV1W3IalA_ZuuXDkKFl04Hcd_g6wQq/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="primary-button">
              <span>Download PDF Resume</span>
              <span>
                <FaDownload />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;

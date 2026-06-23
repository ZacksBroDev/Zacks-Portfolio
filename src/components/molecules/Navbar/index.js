import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  RiMenu3Fill,
  RiContactsBook2Fill,
  RiFolderInfoFill,
} from "react-icons/ri";
import { GiCrossMark } from "react-icons/gi";
import { FaHome, FaDownload } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import "../../../pages/shared/Shared.css";
import { PrimaryBtn } from "../../../components";
import { RESUME_LINK, SITE_PROFILE } from "../../../Utils/SiteContent";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const year = new Date().getFullYear();

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const navLinks = [
    { title: "Home", link: "/", icon: <FaHome /> },
    { title: "About", link: "/about", icon: <RiFolderInfoFill /> },
    { title: "Resume", link: "/resume", icon: <RiFolderInfoFill /> },
    { title: "Projects", link: "/project", icon: <MdWork /> },
    { title: "Contact", link: "/contact", icon: <RiContactsBook2Fill /> },
  ];
  const linkClassName = ({ isActive }) =>
    ["site-nav__link", isActive && "site-nav__link--active"]
      .filter(Boolean)
      .join(" ");

  // Show Navbar on Scroll UP
  const [show, setShow] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      setShow(currentScrollY > lastScrollY);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", controlNavbar, { passive: true });

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <header className={`visible ${show ? "nav-hidden" : ""}`}>
      <div className="parent site-nav">
        <Link to="/" className="site-brand" aria-label="Go to the homepage">
          <span className="site-brand__mark">ZB</span>
          <span className="site-brand__text">
            <strong>{SITE_PROFILE.name}</strong>
            <span>{SITE_PROFILE.title}</span>
          </span>
        </Link>

        <div className="site-nav__desktop">
          <nav aria-label="Primary">
            <ul className="site-nav__links">
              {navLinks.map((navItem) => (
                <li key={navItem.title}>
                  <NavLink to={navItem.link} className={linkClassName}>
                    {navItem.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-nav__actions">
            <span className="site-nav__status">Open to frontend roles</span>
            <PrimaryBtn
              as="a"
              href={RESUME_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="site-nav__resume"
              aria-label="Open resume in a new tab"
            >
              <span>View resume</span>
              <span>
                <FaDownload />
              </span>
            </PrimaryBtn>
          </div>
        </div>

        <div className="block lg:hidden">
          <button
            onClick={toggleDrawer}
            className="site-nav__menu"
            aria-label="Open navigation menu"
            aria-expanded={isOpen}
          >
            <RiMenu3Fill />
          </button>
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="right"
            style={{ backgroundColor: "#171716" }}
            className="site-drawer"
          >
            <div className="site-drawer__inner">
              <div className="site-drawer__header">
                <div>
                  <p className="site-drawer__eyebrow">{SITE_PROFILE.title}</p>
                  <h2 className="site-drawer__name">{SITE_PROFILE.name}</h2>
                </div>
                <button
                  type="button"
                  className="site-drawer__close"
                  onClick={toggleDrawer}
                  aria-label="Close navigation menu"
                >
                  <GiCrossMark />
                </button>
              </div>

              <ul className="site-drawer__links">
                {navLinks.map((navItem) => (
                  <li
                    key={navItem.title}
                    onClick={() => setIsOpen(false)}
                    className="site-drawer__item"
                  >
                    <NavLink to={navItem.link} className={linkClassName}>
                      <span className="site-drawer__icon">{navItem.icon}</span>
                      <span>{navItem.title}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>

              <div className="site-drawer__footer">
                <p className="site-nav__status site-nav__status--mobile">
                  Open to frontend roles
                </p>
                <PrimaryBtn
                  as="a"
                  href={RESUME_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                  aria-label="Open resume in a new tab"
                >
                  <span>View resume</span>
                  <span>
                    <FaDownload />
                  </span>
                </PrimaryBtn>
                <p className="site-drawer__copyright">
                  &copy; {year} {SITE_PROFILE.name}
                </p>
              </div>
            </div>
          </Drawer>
        </div>
      </div>
    </header>
  );
}

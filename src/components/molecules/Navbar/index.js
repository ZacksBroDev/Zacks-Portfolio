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
  const activeLink = ({ isActive }) => {
    return {
      fontWeight: 500,
      color: isActive && "#FF651C",
    };
  };

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
    <div
      className={`visible ${show && "nav-hidden"} shadow-lg bg-[#313131] 
     z-50`}
    >
      <div className="w-full flex items-center justify-between px-3 md:px-24 py-3">
        <div>
          <Link to="/">
            <h1 className="text-2xl text-primary font-lobster">
              {SITE_PROFILE.name}
            </h1>
          </Link>
        </div>
        <div>
          <ul className="lg:flex items-center hidden">
            {navLinks.map((navItem) => (
              <li className="mx-4" key={navItem.title}>
                <NavLink
                  to={navItem.link}
                  style={activeLink}
                  className="text-white hover:text-primary duration-300"
                >
                  {navItem.title}
                </NavLink>
              </li>
            ))}

            <PrimaryBtn
              as="a"
              href={RESUME_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4"
              aria-label="Open resume in a new tab"
            >
              <span>Resume</span>
              <span>
                <FaDownload />
              </span>
            </PrimaryBtn>
          </ul>
          <div className="block lg:hidden">
            <button
              onClick={toggleDrawer}
              className="btn btn-ghost text-white"
              aria-label="Open navigation menu"
            >
              <RiMenu3Fill></RiMenu3Fill>
            </button>
            <Drawer
              open={isOpen}
              onClose={toggleDrawer}
              direction="right"
              style={{ backgroundColor: "#212121" }}
              className="flex flex-col justify-between pb-4"
            >
              <ul className="">
                <li className="mt-6 mb-10 ml-4">
                  <GiCrossMark
                    className="cursor-pointer hover:text-primary duration-300"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Close navigation menu"
                  ></GiCrossMark>
                </li>
                {navLinks.map((navItem) => (
                  <li
                    className="m-4"
                    key={navItem.title}
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <NavLink
                      to={navItem.link}
                      style={activeLink}
                      className="flex items-center text-white hover:text-primary duration-300"
                    >
                      <span className="mr-3">{navItem.icon}</span>
                      <span>{navItem.title}</span>
                    </NavLink>
                  </li>
                ))}
                <li className="text-center m-4">
                  <PrimaryBtn
                    as="a"
                    href={RESUME_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                    aria-label="Open resume in a new tab"
                  >
                    <span>Resume</span>
                    <span>
                      <FaDownload />
                    </span>
                  </PrimaryBtn>
                </li>
              </ul>
              <div className="text-center">
                <p className="text-neutral">
                  &copy; Copyright {year}, {SITE_PROFILE.name}.
                </p>
              </div>
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
}

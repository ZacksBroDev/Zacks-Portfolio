import React, { useRef } from "react";
import "./Contact.css";
import "../../components/atoms/PrimaryBtn/PrimaryBtn.css";
import "../shared/Shared.css";
import {
  FaUserAlt,
  FaPhoneAlt,
  FaLocationArrow,
  FaLinkedin,
  FaGithubSquare,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { MdEmail, MdSend } from "react-icons/md";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();
  const form = useRef();

  const handleSend = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_6c0815l",
        "template_h2hlo5p",
        form.current,
        "EMwkxIv3aeYn-64Um"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          e.target.reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Message has been sent",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        },
        (error) => {
          console.error("FAILED...", error);
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Failed to send message: " + error.text,
            showConfirmButton: true,
          });
        }
      );
  };
  return (
    <div className="parent py-24 mt-4">
      <div>
        <h1 className="text-4xl font-semibold drop-shadow-md text-center">
          Get In <span className="text-primary">Touch</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div>
          <h2 className="text-2xl font-medium">Contact Me</h2>
          <form ref={form} onSubmit={handleSend}>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6">
              <input
                className="input-field"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
              />
              <input
                className="input-field"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <input
              className="input-field"
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              required
            />
            <textarea
              className="input-field"
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder="Message"
              required
            ></textarea>
            <button
              type="submit"
              value="Send Message"
              className="primary-button"
            >
              <span>Send</span>
              <span>
                <MdSend />
              </span>
            </button>
          </form>
        </div>
        <div className="mx-auto md:ml-64">
          <h2 className="text-2xl font-medium">Contact Info</h2>
          <div className="flex items-center my-6">
            <FaUserAlt className="text-2xl mr-8 hover:text-primary cursor-pointer duration-300"></FaUserAlt>
            <h3 className="font-medium text-primary">Zackary Brown</h3>
          </div>
          <div className="flex items-center my-6">
            <FaPhoneAlt className="text-2xl mr-8 hover:text-primary cursor-pointer duration-300"></FaPhoneAlt>
            <h3 className="font-medium text-primary">505 358-8607</h3>
          </div>
          <div className="flex items-center my-6">
            <MdEmail className="text-3xl mr-8 hover:text-primary cursor-pointer duration-300"></MdEmail>
            <h3 className="font-medium text-primary">zackaryzbrown@gmail.com</h3>
          </div>
          <div className="flex items-center my-6">
            <FaLocationArrow className="text-2xl mr-8 hover:text-primary cursor-pointer duration-300"></FaLocationArrow>

            <h3 className="font-medium text-primary">Denver, Colorado</h3>
          </div>
          <div className="mt-8 flex items-center">
            <h3 className="text-xl text-neutral">Socials</h3>
            <div className="bg-gray-400 w-10 h-[2px] mx-4"></div>
            <a
              href="https://linkedin.com/in/zackaryzbrown"
              target="blank"
              className="text-3xl text-neutral hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
            >
              <FaLinkedin></FaLinkedin>
            </a>
            <a
              href="https://github.com/ZacksBroDev"
              target="blank"
              className="text-3xl text-neutral hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
            >
              <FaGithubSquare></FaGithubSquare>
            </a>
            <a
              href="https://x.com/bmxbro01"
              target="blank"
              className="text-3xl text-neutral hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
            >
              <FaTwitterSquare></FaTwitterSquare>
            </a>
            <a
              href="https://www.instagram.com/zackfullstack/"
              target="blank"
              className="text-3xl text-neutral hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
            >
              <FaInstagramSquare></FaInstagramSquare>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

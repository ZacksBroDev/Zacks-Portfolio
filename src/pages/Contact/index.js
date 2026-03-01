import React, { useRef, useState } from "react";
import "./Contact.css";
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
import { PrimaryBtn } from "../../components";
import { SITE_PROFILE, SOCIAL_LINKS } from "../../Utils/SiteContent";

const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

const SUBMIT_COOLDOWN_MS = 10000;

const socialIcons = {
  linkedin: FaLinkedin,
  github: FaGithubSquare,
  x: FaTwitterSquare,
  instagram: FaInstagramSquare,
};

const Contact = () => {
  const form = useRef();
  const lastSubmittedAtRef = useRef(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState({
    type: "idle",
    message: "",
  });
  const isEmailConfigured = Object.values(EMAILJS_CONFIG).every(Boolean);

  const handleSend = async (e) => {
    e.preventDefault();

    if (!form.current) {
      return;
    }

    const formData = new FormData(form.current);
    const honeypotValue = formData.get("company");

    if (honeypotValue) {
      form.current.reset();
      setFormStatus({
        type: "success",
        message: "Thanks for reaching out. Your message has been received.",
      });
      return;
    }

    if (!isEmailConfigured) {
      setFormStatus({
        type: "error",
        message:
          "The contact form is not configured yet. Please reach out by email or LinkedIn for now.",
      });
      return;
    }

    if (Date.now() - lastSubmittedAtRef.current < SUBMIT_COOLDOWN_MS) {
      setFormStatus({
        type: "error",
        message: "Please wait a few seconds before sending another message.",
      });
      return;
    }

    setIsSubmitting(true);
    setFormStatus({ type: "idle", message: "" });

    try {
      await emailjs.sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        form.current,
        EMAILJS_CONFIG.publicKey
      );

      lastSubmittedAtRef.current = Date.now();
      form.current.reset();
      setFormStatus({
        type: "success",
        message: "Thanks for reaching out. Your message has been sent.",
      });
    } catch {
      setFormStatus({
        type: "error",
        message:
          `Something went wrong while sending your message. Please email me directly at ${SITE_PROFILE.email}.`,
      });
    } finally {
      setIsSubmitting(false);
    }
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
            <div className="honeypot-field" aria-hidden="true">
              <label htmlFor="company">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                tabIndex="-1"
                autoComplete="off"
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6">
              <div>
                <label className="input-label" htmlFor="name">
                  Name
                </label>
                <input
                  className="input-field"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                  autoComplete="name"
                  required
                />
              </div>
              <div>
                <label className="input-label" htmlFor="email">
                  Email
                </label>
                <input
                  className="input-field"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  autoComplete="email"
                  required
                />
              </div>
            </div>
            <label className="input-label" htmlFor="subject">
              Subject
            </label>
            <input
              className="input-field"
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              autoComplete="off"
              required
            />
            <label className="input-label" htmlFor="message">
              Message
            </label>
            <textarea
              className="input-field"
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder="Message"
              required
            ></textarea>
            <PrimaryBtn
              type="submit"
              disabled={isSubmitting || !isEmailConfigured}
              aria-disabled={isSubmitting || !isEmailConfigured}
            >
              <span>{isSubmitting ? "Sending..." : "Send Message"}</span>
              <span>
                <MdSend />
              </span>
            </PrimaryBtn>
            {formStatus.message && (
              <p
                className={`form-status ${
                  formStatus.type === "error"
                    ? "form-status--error"
                    : "form-status--success"
                }`}
                role="status"
                aria-live="polite"
              >
                {formStatus.message}
              </p>
            )}
            {!isEmailConfigured && (
              <p className="text-sm text-neutral mt-4">
                The form is awaiting EmailJS environment variables. In the
                meantime, email{" "}
                <a
                  href={SITE_PROFILE.emailHref}
                  className="text-primary hover:underline"
                >
                  {SITE_PROFILE.email}
                </a>
                .
              </p>
            )}
          </form>
        </div>
        <div className="mx-auto md:ml-64">
          <h2 className="text-2xl font-medium">Contact Info</h2>
          <div className="flex items-center my-6">
            <FaUserAlt className="text-2xl mr-8 hover:text-primary cursor-pointer duration-300"></FaUserAlt>
            <h3 className="font-medium text-primary">{SITE_PROFILE.name}</h3>
          </div>
          <div className="flex items-center my-6">
            <FaPhoneAlt className="text-2xl mr-8 hover:text-primary cursor-pointer duration-300"></FaPhoneAlt>
            <a href={SITE_PROFILE.phoneHref} className="font-medium text-primary hover:underline">
              {SITE_PROFILE.phoneDisplay}
            </a>
          </div>
          <div className="flex items-center my-6">
            <MdEmail className="text-3xl mr-8 hover:text-primary cursor-pointer duration-300"></MdEmail>
            <a href={SITE_PROFILE.emailHref} className="font-medium text-primary hover:underline">
              {SITE_PROFILE.email}
            </a>
          </div>
          <div className="flex items-center my-6">
            <FaLocationArrow className="text-2xl mr-8 hover:text-primary cursor-pointer duration-300"></FaLocationArrow>

            <h3 className="font-medium text-primary">{SITE_PROFILE.location}</h3>
          </div>
          <div className="mt-8 flex items-center">
            <h3 className="text-xl text-neutral">Socials</h3>
            <div className="bg-gray-400 w-10 h-[2px] mx-4"></div>
            {SOCIAL_LINKS.map((link) => {
              const Icon = socialIcons[link.key];

              return (
                <a
                  key={link.key}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel}
                  className="text-3xl text-neutral hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
                >
                  <Icon></Icon>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

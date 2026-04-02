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
          `The form is temporarily unavailable. Prefer email directly? ${SITE_PROFILE.email}`,
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
    <section className="parent py-16 md:py-20 mt-2 contact-section" aria-labelledby="contact-heading">
      <div className="max-w-5xl mx-auto">
        <h1 id="contact-heading" className="text-4xl font-semibold drop-shadow-md text-center">
          Contact <span className="text-primary">Me</span>
        </h1>
        <p className="contact-intro text-center mt-4 max-w-3xl mx-auto">
          Have a frontend role, project, or collaboration in mind? Send a message and I&apos;ll get back to you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mt-10 max-w-5xl mx-auto">
        <div className="contact-panel contact-panel--info">
          <h2 className="text-2xl font-semibold">Let&apos;s Connect</h2>
          <p className="contact-support-text mt-3">
            Open to frontend and software engineering opportunities. I&apos;m happy to discuss role fit, project impact, and how I work.
          </p>

          <div className="mt-6 space-y-5">
            <div className="flex items-center">
              <FaUserAlt className="text-xl mr-5 text-primary"></FaUserAlt>
              <h3 className="font-medium text-white">{SITE_PROFILE.name}</h3>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt className="text-xl mr-5 text-primary"></FaPhoneAlt>
              <a href={SITE_PROFILE.phoneHref} className="font-medium text-white hover:text-primary duration-300">
                {SITE_PROFILE.phoneDisplay}
              </a>
            </div>
            <div className="flex items-center">
              <MdEmail className="text-2xl mr-5 text-primary"></MdEmail>
              <a href={SITE_PROFILE.emailHref} className="font-medium text-white hover:text-primary duration-300">
                {SITE_PROFILE.email}
              </a>
            </div>
            <div className="flex items-center">
              <FaLocationArrow className="text-xl mr-5 text-primary"></FaLocationArrow>
              <h3 className="font-medium text-white">{SITE_PROFILE.location}</h3>
            </div>
          </div>

          <div className="mt-8 flex items-center flex-wrap gap-3">
            <h3 className="text-base text-neutral w-full">Socials</h3>
            {SOCIAL_LINKS.map((link) => {
              const Icon = socialIcons[link.key];

              return (
                <a
                  key={link.key}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel}
                  className="contact-social-chip"
                >
                  <Icon></Icon>
                </a>
              );
            })}
          </div>
        </div>

        <div className="contact-panel contact-panel--form">
          <h2 className="text-2xl font-semibold">Send a Message</h2>
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

            <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-4 mt-2">
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
              className="mt-4"
              disabled={isSubmitting}
              aria-disabled={isSubmitting}
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

            <p className="contact-support-text mt-4">
              Prefer email directly?{" "}
              <a href={SITE_PROFILE.emailHref} className="text-primary hover:underline">
                {SITE_PROFILE.email}
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

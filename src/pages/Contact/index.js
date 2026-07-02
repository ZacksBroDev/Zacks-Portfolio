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
import { PrimaryBtn } from "../../components";
import { SITE_PROFILE, SOCIAL_LINKS } from "../../Utils/SiteContent";
import { useLocation } from "react-router-dom";

const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

const SUBMIT_COOLDOWN_MS = 10000;

const socialIcons = {
  linkedin: FaLinkedin,
  github: FaGithubSquare,
  x: FaTwitterSquare,
  instagram: FaInstagramSquare,
};

const Contact = () => {
  const location = useLocation();
  const form = useRef();
  const lastSubmittedAtRef = useRef(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState({
    type: "idle",
    message: "",
  });
  const isFormConfigured = Boolean(WEB3FORMS_ACCESS_KEY);
  const isHomePage = location.pathname === "/";
  const HeadingTag = isHomePage ? "h2" : "h1";
  const PanelHeadingTag = isHomePage ? "h3" : "h2";

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

    if (!isFormConfigured) {
      setFormStatus({
        type: "error",
        message: `The form is temporarily unavailable. Prefer email directly? ${SITE_PROFILE.email}`,
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
      const payload = {
        access_key: WEB3FORMS_ACCESS_KEY,
        name: String(formData.get("name") || "").trim(),
        email: String(formData.get("email") || "").trim(),
        subject: String(formData.get("subject") || "").trim(),
        message: String(formData.get("message") || "").trim(),
        from_name: "Portfolio Contact Form",
      };

      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Unable to send message");
      }

      lastSubmittedAtRef.current = Date.now();
      form.current.reset();
      setFormStatus({
        type: "success",
        message: "Thanks for reaching out. Your message has been sent.",
      });
    } catch {
      setFormStatus({
        type: "error",
        message: `Something went wrong while sending your message. Please email me directly at ${SITE_PROFILE.email}.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="parent py-16 md:py-20 mt-2 contact-section"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-5xl mx-auto">
        <div className="section-heading-row section-heading-row--center">
          <p className="section-kicker">Get in touch</p>
          <HeadingTag
            id="contact-heading"
            className="section-heading section-heading--center"
          >
            Contact <span>Me</span>
          </HeadingTag>
          <p className="section-copy section-copy--center contact-intro">
            Open to frontend engineer and junior frontend developer roles.
            Recruiters, hiring managers, and collaborators are all welcome to
            reach out.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mt-10 max-w-5xl mx-auto">
        <div className="contact-panel contact-panel--info">
          <p className="contact-status-pill">
            Best first contact: email or LinkedIn
          </p>
          <PanelHeadingTag className="text-2xl font-semibold">
            Let&apos;s Connect
          </PanelHeadingTag>
          <p className="contact-support-text mt-3">
            Have a frontend role, project, or collaboration in mind? I&apos;m
            happy to talk through role fit, project goals, and how I approach
            product UI work.
          </p>

          <div className="contact-quick-links">
            <a href={SITE_PROFILE.emailHref} className="contact-quick-link">
              Email
            </a>
            <a
              href={SITE_PROFILE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-quick-link"
            >
              LinkedIn
            </a>
            <a href={SITE_PROFILE.phoneHref} className="contact-quick-link">
              Call
            </a>
          </div>

          <div className="mt-6 space-y-5">
            <div className="flex items-center">
              <FaUserAlt className="text-xl mr-5 text-primary"></FaUserAlt>
              <p className="font-medium text-white">{SITE_PROFILE.name}</p>
            </div>
            <div className="flex items-center">
              <FaPhoneAlt className="text-xl mr-5 text-primary"></FaPhoneAlt>
              <a
                href={SITE_PROFILE.phoneHref}
                className="font-medium text-white hover:text-primary duration-300"
              >
                {SITE_PROFILE.phoneDisplay}
              </a>
            </div>
            <div className="flex items-center">
              <MdEmail className="text-2xl mr-5 text-primary"></MdEmail>
              <a
                href={SITE_PROFILE.emailHref}
                className="font-medium text-white hover:text-primary duration-300"
              >
                {SITE_PROFILE.email}
              </a>
            </div>
            <div className="flex items-center">
              <FaLocationArrow className="text-xl mr-5 text-primary"></FaLocationArrow>
              <p className="font-medium text-white">{SITE_PROFILE.location}</p>
            </div>
          </div>

          <div className="mt-8 flex items-center flex-wrap gap-3">
            <p className="text-base text-neutral w-full">Socials</p>
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
          <PanelHeadingTag className="text-2xl font-semibold">
            Send a Message
          </PanelHeadingTag>
          <form ref={form} onSubmit={handleSend} className="contact-form">
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
              <a
                href={SITE_PROFILE.emailHref}
                className="text-primary hover:underline"
              >
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

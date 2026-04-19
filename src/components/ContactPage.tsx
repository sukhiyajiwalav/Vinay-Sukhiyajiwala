import { FormEvent, useEffect, useMemo, useState } from "react";
import PageBackLink from "./PageBackLink";
import "./styles/ContactPage.css";

const ENQUIRY_OPTIONS = [
  { value: "general", label: "General enquiry" },
  { value: "commissions", label: "Commissions / original works" },
  { value: "exhibitions", label: "Exhibitions" },
  { value: "poetry", label: "Poetry & book" },
  { value: "website", label: "This website" },
  { value: "other", label: "Other" },
];

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [enquiry, setEnquiry] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );
  const [statusText, setStatusText] = useState("");

  const enquiryLabel = useMemo(
    () => ENQUIRY_OPTIONS.find((o) => o.value === enquiry)?.label ?? "",
    [enquiry]
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setStatusText("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          enquiry: enquiryLabel || enquiry,
          message,
        }),
      });

      const data = (await res.json().catch(() => null)) as
        | { ok?: boolean; error?: string }
        | null;

      if (!res.ok || !data?.ok) {
        throw new Error(
          data?.error || "Sorry — something went wrong while sending your message."
        );
      }

      setStatus("success");
      setStatusText("Thank you for reaching out to us.");
      setName("");
      setEmail("");
      setEnquiry("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setStatusText(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <div className="contact-page">
      <PageBackLink variant="onLight" />
      <div className="contact-page-wrap section-container">
        <h1 className="contact-page-title">Contact</h1>

        <div className="contact-page-split">
          <div className="contact-page-form-block">
            <h2 className="contact-page-subtitle">Get in touch</h2>
            <p className="contact-page-intro">
              We welcome your comments and suggestions about this website and any
              other questions you wish to raise about paintings, poetry, or
              exhibitions.
            </p>

            <form className="contact-page-form" onSubmit={onSubmit} noValidate>
              <div className="contact-page-field">
                <label className="contact-page-label" htmlFor="contact-name">
                  Your name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  className="contact-page-input"
                  placeholder="Enter your name"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="contact-page-field">
                <label className="contact-page-label" htmlFor="contact-email">
                  Your email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  className="contact-page-input"
                  placeholder="Enter your email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="contact-page-field">
                <label className="contact-page-label" htmlFor="contact-enquiry">
                  I have an enquiry about:
                </label>
                <select
                  id="contact-enquiry"
                  name="enquiry"
                  className="contact-page-input contact-page-select"
                  value={enquiry}
                  onChange={(e) => setEnquiry(e.target.value)}
                  required
                >
                  <option value="" disabled>
                    Select a topic
                  </option>
                  {ENQUIRY_OPTIONS.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="contact-page-field">
                <label className="contact-page-label" htmlFor="contact-message">
                  Your message (optional)
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="contact-page-input contact-page-textarea"
                  placeholder="Type your message here"
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="contact-page-submit"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending..." : "Submit"}
              </button>
              {status !== "idle" ? (
                <p
                  className={`contact-page-note ${
                    status === "success"
                      ? "contact-page-note--success"
                      : "contact-page-note--error"
                  }`}
                  role={status === "error" ? "alert" : "status"}
                  aria-live="polite"
                >
                  {statusText}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

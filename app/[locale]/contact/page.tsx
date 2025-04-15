import React from "react";
import Link from "next/link";
import Footer from "@/components/footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Inner State RAG Consulting",
  description:
    "Get in touch with our team of RAG and Inner State AI experts. We're here to help with your enterprise AI knowledge integration needs.",
  url: "https://innerstaterag.com/contact",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "imanaparviz@gmail.com",
    availableLanguage: ["English", "German", "Swedish"],
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "GRAZ",
    postalCode: "8020",
    addressCountry: "Austria",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://innerstaterag.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        <header className="header">
          <div className="container">
            <div className="header-content">
              <Link href="/" className="logo">
                RAG Consulting
              </Link>
              <nav className="navigation">
                <ul>
                  <li>
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/inner-state-rag">Inner State RAG</Link>
                  </li>
                  <li>
                    <Link href="/inner-state">Inner State</Link>
                  </li>
                  <li>
                    <Link href="/rag">RAG</Link>
                  </li>
                  <li>
                    <Link href="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link href="/contact">Contact Us</Link>
                  </li>
                </ul>
              </nav>
              <button className="mobile-menu-button">☰</button>
            </div>
          </div>
        </header>

        <main className="main-content" id="main-content">
          <div className="container">
            <div className="breadcrumbs">
              <span>
                <Link href="/">Home</Link>
              </span>
              <span>Contact Us</span>
            </div>

            <div className="hero">
              <h1>Contact Us</h1>
              <p>
                Have questions about RAG or Inner State technology? Ready to
                transform your knowledge systems? Our team of experts is here to
                help.
              </p>
            </div>

            <div className="content-section">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "30px",
                  maxWidth: "1000px",
                  margin: "0 auto",
                }}
              >
                <div style={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
                  {/* Contact Form */}
                  <div style={{ flex: "1 1 500px" }}>
                    <h2>Send Us a Message</h2>
                    <form style={{ marginTop: "20px" }}>
                      <div style={{ marginBottom: "15px" }}>
                        <label
                          htmlFor="name"
                          style={{
                            display: "block",
                            marginBottom: "5px",
                            fontWeight: "bold",
                            color: "var(--text-color)",
                          }}
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          placeholder="Enter your full name"
                          style={{
                            width: "100%",
                            padding: "10px 15px",
                            borderRadius: "4px",
                            border: "1px solid var(--gray-300)",
                            backgroundColor: "var(--white)",
                            color: "var(--text-color)",
                          }}
                        />
                      </div>

                      <div style={{ marginBottom: "15px" }}>
                        <label
                          htmlFor="email"
                          style={{
                            display: "block",
                            marginBottom: "5px",
                            fontWeight: "bold",
                            color: "var(--text-color)",
                          }}
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          placeholder="Enter your email address"
                          style={{
                            width: "100%",
                            padding: "10px 15px",
                            borderRadius: "4px",
                            border: "1px solid var(--gray-300)",
                            backgroundColor: "var(--white)",
                            color: "var(--text-color)",
                          }}
                        />
                      </div>

                      <div style={{ marginBottom: "15px" }}>
                        <label
                          htmlFor="topic"
                          style={{
                            display: "block",
                            marginBottom: "5px",
                            fontWeight: "bold",
                            color: "var(--text-color)",
                          }}
                        >
                          Topic
                        </label>
                        <select
                          id="topic"
                          style={{
                            width: "100%",
                            padding: "10px 15px",
                            borderRadius: "4px",
                            border: "1px solid var(--gray-300)",
                            backgroundColor: "var(--white)",
                            color: "var(--text-color)",
                          }}
                        >
                          <option value="">Select a topic</option>
                          <option value="rag-implementation">
                            RAG Implementation
                          </option>
                          <option value="inner-state">
                            Inner State Technology
                          </option>
                          <option value="consulting">General Consulting</option>
                          <option value="training">Training & Workshops</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div style={{ marginBottom: "15px" }}>
                        <label
                          htmlFor="message"
                          style={{
                            display: "block",
                            marginBottom: "5px",
                            fontWeight: "bold",
                            color: "var(--text-color)",
                          }}
                        >
                          Your Message
                        </label>
                        <textarea
                          id="message"
                          rows={5}
                          placeholder="How can we help you?"
                          style={{
                            width: "100%",
                            padding: "10px 15px",
                            borderRadius: "4px",
                            border: "1px solid var(--gray-300)",
                            backgroundColor: "var(--white)",
                            color: "var(--text-color)",
                            resize: "vertical",
                          }}
                        ></textarea>
                      </div>

                      <button className="btn" style={{ marginTop: "10px" }}>
                        Send Message
                      </button>
                    </form>
                  </div>

                  {/* Contact Information */}
                  <div style={{ flex: "1 1 300px" }}>
                    <h2>Contact Information</h2>
                    <div style={{ marginTop: "20px" }}>
                      <div style={{ marginBottom: "20px" }}>
                        <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>
                          Email Us
                        </h3>
                        <p style={{ color: "var(--text-color)" }}>
                          <a
                            href="mailto:imanaparviz@gmail.com"
                            style={{
                              color: "var(--secondary-color)",
                              textDecoration: "none",
                            }}
                          >
                            imanaparviz@gmail.com
                          </a>
                        </p>
                      </div>

                      <div style={{ marginBottom: "20px" }}>
                        <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>
                          Visit Us
                        </h3>
                        <address
                          style={{
                            fontStyle: "normal",
                            color: "var(--text-color)",
                          }}
                        >
                          GRAZ 8020
                          <br />
                          Austria
                        </address>
                      </div>

                      <div>
                        <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>
                          Business Hours
                        </h3>
                        <p style={{ color: "var(--text-color)" }}>
                          Monday - Friday: 9:00 AM - 6:00 PM (EST)
                          <br />
                          Saturday - Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ Section */}
                <div style={{ marginTop: "30px" }}>
                  <h2>Frequently Asked Questions</h2>
                  <div style={{ marginTop: "20px" }}>
                    <div
                      style={{
                        marginBottom: "15px",
                        padding: "15px",
                        backgroundColor: "var(--gray-100)",
                        borderRadius: "var(--border-radius)",
                      }}
                    >
                      <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>
                        How quickly can you implement a RAG solution?
                      </h3>
                      <p style={{ color: "var(--text-color)" }}>
                        Implementation timelines vary based on the complexity of
                        your knowledge base and specific requirements. Most
                        projects can be delivered within 4-12 weeks, with
                        initial prototypes often available much sooner.
                      </p>
                    </div>

                    <div
                      style={{
                        marginBottom: "15px",
                        padding: "15px",
                        backgroundColor: "var(--gray-100)",
                        borderRadius: "var(--border-radius)",
                      }}
                    >
                      <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>
                        Do you offer training for our team?
                      </h3>
                      <p style={{ color: "var(--text-color)" }}>
                        Yes, we provide comprehensive training programs tailored
                        to your team's needs. From basic RAG concepts to
                        advanced Inner State implementation, we ensure your team
                        has the knowledge to maintain and evolve your systems.
                      </p>
                    </div>

                    <div
                      style={{
                        padding: "15px",
                        backgroundColor: "var(--gray-100)",
                        borderRadius: "var(--border-radius)",
                      }}
                    >
                      <h3 style={{ fontSize: "18px", marginBottom: "8px" }}>
                        What industries do you work with?
                      </h3>
                      <p style={{ color: "var(--text-color)" }}>
                        We work with a wide range of industries including
                        finance, healthcare, legal, manufacturing, and
                        technology. Our RAG and Inner State solutions can be
                        adapted to any domain with valuable knowledge assets.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

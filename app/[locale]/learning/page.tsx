import React from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LearningResource",
  name: "RAG Consulting Learning Hub",
  description:
    "Comprehensive educational resources on Retrieval Augmented Generation (RAG) and Inner State methodologies. Tutorials, guides, and best practices for AI implementations.",
  provider: {
    "@type": "Organization",
    name: "Inner State RAG Consulting",
    url: "https://innerstaterag.com",
  },
  audience: {
    "@type": "Audience",
    audienceType: "AI Developers, Data Scientists, Enterprise Architects",
  },
  educationalLevel: "Advanced",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://innerstaterag.com/learning",
  },
};

// Sample learning resource categories
const learningCategories = [
  {
    id: "basics",
    title: "RAG & Inner State Fundamentals",
    description:
      "Essential concepts and foundational knowledge to understand RAG and Inner State technology.",
    resources: [
      {
        title: "Introduction to Retrieval Augmented Generation",
        type: "Guide",
        url: "/learning/intro-to-rag",
      },
      {
        title: "Understanding Vector Embeddings",
        type: "Tutorial",
        url: "/learning/vector-embeddings",
      },
      {
        title: "Inner State Methodology Explained",
        type: "Guide",
        url: "/learning/inner-state-explained",
      },
      {
        title: "Common RAG Architectures",
        type: "Guide",
        url: "/learning/rag-architectures",
      },
    ],
  },
  {
    id: "implementation",
    title: "Implementation Strategies",
    description:
      "Practical guides and tutorials for implementing RAG and Inner State in your AI systems.",
    resources: [
      {
        title: "Building Your First RAG System",
        type: "Tutorial",
        url: "/learning/first-rag-system",
      },
      {
        title: "Integrating Inner State with LLMs",
        type: "Tutorial",
        url: "/learning/inner-state-llm-integration",
      },
      {
        title: "Document Chunking Strategies",
        type: "Guide",
        url: "/learning/document-chunking",
      },
      {
        title: "Retrieval Optimization Techniques",
        type: "Guide",
        url: "/learning/retrieval-optimization",
      },
    ],
  },
  {
    id: "advanced",
    title: "Advanced Topics",
    description:
      "Deeper exploration of advanced concepts and cutting-edge techniques in RAG and Inner State.",
    resources: [
      {
        title: "Multi-modal RAG Systems",
        type: "White Paper",
        url: "/learning/multimodal-rag",
      },
      {
        title: "Conversational State Tracking",
        type: "Tutorial",
        url: "/learning/conversational-state",
      },
      {
        title: "Reducing Hallucinations in Production",
        type: "Case Study",
        url: "/learning/reducing-hallucinations",
      },
      {
        title: "RAG for Regulatory Compliance",
        type: "Guide",
        url: "/learning/rag-compliance",
      },
    ],
  },
];

export default function LearningHubPage() {
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
              <span>Learning Hub</span>
            </div>

            <div className="hero">
              <h1>RAG Learning Hub</h1>
              <p>
                Comprehensive educational resources to help you understand,
                implement, and optimize Retrieval Augmented Generation and Inner
                State technologies.
              </p>
            </div>

            {/* Learning paths */}
            <div className="content-section">
              <h2>Learning Paths</h2>
              <div className="feature-grid">
                <div className="feature-card">
                  <h3>Beginner Path</h3>
                  <p>
                    New to RAG and Inner State technology? Start here to build a
                    solid foundation.
                  </p>
                  <ul
                    style={{
                      paddingLeft: "20px",
                      marginTop: "15px",
                      color: "var(--text-color)",
                    }}
                  >
                    <li>RAG fundamentals</li>
                    <li>Vector databases basics</li>
                    <li>Context integration principles</li>
                  </ul>
                  <Link
                    href="/learning/paths/beginner"
                    className="btn"
                    style={{ display: "inline-block", marginTop: "15px" }}
                  >
                    Start Learning
                  </Link>
                </div>
                <div className="feature-card">
                  <h3>Practitioner Path</h3>
                  <p>
                    For developers and engineers looking to implement RAG in
                    production systems.
                  </p>
                  <ul
                    style={{
                      paddingLeft: "20px",
                      marginTop: "15px",
                      color: "var(--text-color)",
                    }}
                  >
                    <li>Advanced retrieval techniques</li>
                    <li>LLM integration strategies</li>
                    <li>Evaluation and testing</li>
                  </ul>
                  <Link
                    href="/learning/paths/practitioner"
                    className="btn"
                    style={{ display: "inline-block", marginTop: "15px" }}
                  >
                    Start Learning
                  </Link>
                </div>
                <div className="feature-card">
                  <h3>Expert Path</h3>
                  <p>
                    Advanced techniques and innovations in RAG and Inner State
                    technology.
                  </p>
                  <ul
                    style={{
                      paddingLeft: "20px",
                      marginTop: "15px",
                      color: "var(--text-color)",
                    }}
                  >
                    <li>Inner State enhancements</li>
                    <li>Multi-modal RAG</li>
                    <li>Cutting-edge research</li>
                  </ul>
                  <Link
                    href="/learning/paths/expert"
                    className="btn"
                    style={{ display: "inline-block", marginTop: "15px" }}
                  >
                    Start Learning
                  </Link>
                </div>
              </div>
            </div>

            {/* Featured resources */}
            <div className="content-section">
              <h2>Featured Resources</h2>
              <div
                style={{
                  marginBottom: "30px",
                  padding: "20px",
                  backgroundColor: "var(--gray-100)",
                  borderRadius: "var(--border-radius)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                      backgroundColor: "var(--white)",
                      padding: "15px",
                      borderRadius: "var(--border-radius)",
                    }}
                  >
                    <div
                      style={{
                        width: "80px",
                        height: "80px",
                        background: "var(--primary-color)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                        flexShrink: 0,
                      }}
                    >
                      <span style={{ color: "white", fontSize: "40px" }}>
                        📊
                      </span>
                    </div>
                    <div>
                      <h3 style={{ marginBottom: "5px" }}>
                        RAG Implementation Guidebook
                      </h3>
                      <p
                        style={{
                          color: "var(--text-color)",
                          marginBottom: "10px",
                        }}
                      >
                        Comprehensive guide covering all aspects of implementing
                        RAG systems in enterprise environments.
                      </p>
                      <Link
                        href="/learning/rag-implementation-guide"
                        style={{
                          color: "var(--secondary-color)",
                          textDecoration: "none",
                          fontWeight: "bold",
                        }}
                      >
                        Read the guide →
                      </Link>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                      backgroundColor: "var(--white)",
                      padding: "15px",
                      borderRadius: "var(--border-radius)",
                    }}
                  >
                    <div
                      style={{
                        width: "80px",
                        height: "80px",
                        background: "var(--secondary-color)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                        flexShrink: 0,
                      }}
                    >
                      <span style={{ color: "white", fontSize: "40px" }}>
                        🎓
                      </span>
                    </div>
                    <div>
                      <h3 style={{ marginBottom: "5px" }}>
                        Inner State Masterclass
                      </h3>
                      <p
                        style={{
                          color: "var(--text-color)",
                          marginBottom: "10px",
                        }}
                      >
                        In-depth video series on implementing and optimizing
                        Inner State methodology in RAG systems.
                      </p>
                      <Link
                        href="/learning/inner-state-masterclass"
                        style={{
                          color: "var(--secondary-color)",
                          textDecoration: "none",
                          fontWeight: "bold",
                        }}
                      >
                        Watch the series →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Resource categories */}
            {learningCategories.map((category) => (
              <div key={category.id} className="content-section">
                <h2>{category.title}</h2>
                <p>{category.description}</p>
                <div style={{ marginTop: "20px" }}>
                  <table style={{ width: "100%" }}>
                    <thead>
                      <tr>
                        <th>Resource</th>
                        <th>Type</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.resources.map((resource, index) => (
                        <tr key={index}>
                          <td>{resource.title}</td>
                          <td>{resource.type}</td>
                          <td>
                            <Link
                              href={resource.url}
                              className="btn btn-outline"
                              style={{ padding: "5px 10px", fontSize: "14px" }}
                            >
                              View
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}

            <div className="cta">
              <h2>Ready to Accelerate Your Learning?</h2>
              <p>
                Join our expert-led workshops and training sessions to master
                RAG and Inner State technologies.
              </p>
              <Link href="/workshops" className="btn">
                Explore Workshops
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Request Custom Training
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

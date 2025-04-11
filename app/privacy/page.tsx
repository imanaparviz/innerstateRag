import React from "react";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import type { Metadata } from "next";

// SEO Metadata for the Privacy Policy page (RAG Focused)
export const metadata: Metadata = {
  title: "Privacy Policy for RAG Consulting | Data Security & Confidentiality",
  description:
    "Understand how RAG Consulting Services handles your data, especially proprietary knowledge bases and AI interactions, with utmost confidentiality and security. Our commitment to privacy in RAG implementations.",
  keywords:
    "RAG privacy policy, AI data security, knowledge base privacy, LLM data protection, enterprise AI confidentiality, RAG consulting privacy, data handling AI, secure AI implementation, GDPR AI, CCPA AI, datenschutz RAG beratung",
  openGraph: {
    title:
      "Privacy Policy for RAG Consulting | Data Security & Confidentiality",
    description:
      "Learn about our commitment to data privacy and security in the context of Retrieval Augmented Generation (RAG) consulting.",
    url: "https://innerstaterag.com/privacy",
    siteName: "RAG Consulting Services",
    images: [
      {
        url: "/og-image.png", // Use your main OG image
        width: 1200,
        height: 630,
        alt: "RAG Consulting Services Privacy Policy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Privacy Policy for RAG Consulting | Data Security & Confidentiality",
    description:
      "Data privacy and security are paramount in our RAG consulting services. Read our policy.",
    images: ["/twitter-image.png"], // Use your main Twitter image
  },
};

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow py-12 md:py-20">
        {" "}
        {/* Consistent background */}
        <div className="container mx-auto max-w-4xl px-4">
          <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Privacy Policy for RAG Consulting Services
            </h1>
            <p className="text-sm text-gray-500 mb-8">
              Last Updated: April 11, 2025
            </p>

            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-lg font-semibold text-gray-800">
                Introduction & Our Commitment to RAG Privacy
              </p>
              <p>
                Welcome to RAG Consulting Services. We understand the critical
                importance of data privacy and security, especially when dealing
                with proprietary knowledge bases and advanced AI technologies
                like Retrieval Augmented Generation (RAG). This Privacy Policy
                outlines our commitment to protecting your information and
                details how we collect, use, secure, and disclose data in the
                context of our RAG consulting services.
                <strong className="block mt-2">
                  Note: This policy is currently a template and requires legal
                  review before finalization.
                </strong>
              </p>

              <h2 className="!text-xl !font-semibold !mt-8">
                1. Information We Handle in RAG Context
              </h2>
              <p>
                In providing RAG consulting services, we may handle various
                types of information, potentially including:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Client-Provided Knowledge Base Data:</strong>{" "}
                  Documents, databases, or other data sources you provide for
                  indexing and retrieval within the RAG system. This is treated
                  as highly confidential client proprietary information.
                </li>
                <li>
                  <strong>Query Data:</strong> Questions or prompts submitted to
                  the RAG system during testing, development, or operation
                  (potentially including end-user queries if applicable to the
                  service scope).
                </li>
                <li>
                  <strong>System Configuration Data:</strong> Information about
                  your technical environment, chosen LLMs, vector databases, and
                  other components relevant to the RAG implementation.
                </li>
                <li>
                  <strong>Interaction Metadata:</strong> Logs related to system
                  performance, query latency, retrieval effectiveness, etc.,
                  used for optimization and troubleshooting (typically
                  anonymized or aggregated where possible).
                </li>
                <li>
                  <strong>Standard Business Contact Information:</strong> Names,
                  email addresses, phone numbers, job titles of client
                  representatives involved in the project.
                </li>
              </ul>

              <h2 className="!text-xl !font-semibold">
                2. How We Use Information in RAG Projects
              </h2>
              <p>
                Your information, particularly sensitive knowledge base and
                query data, is used strictly for the following purposes related
                to the agreed-upon RAG consulting services:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>RAG System Implementation:</strong> Indexing provided
                  data, configuring retrieval mechanisms, integrating with LLMs.
                </li>
                <li>
                  <strong>System Testing & Optimization:</strong> Evaluating
                  retrieval accuracy, response quality, and system performance
                  using provided data and sample queries.
                </li>
                <li>
                  <strong>Troubleshooting & Support:</strong> Diagnosing and
                  resolving issues within the RAG system.
                </li>
                <li>
                  <strong>Service Delivery & Communication:</strong> Managing
                  the project, communicating with your team, providing
                  deliverables.
                </li>
                <li>
                  <strong>Anonymized Analytics (Optional/Aggregated):</strong>{" "}
                  Potentially using anonymized or aggregated interaction
                  metadata to improve our general RAG methodologies (never
                  sharing client-specific proprietary data).
                </li>
              </ul>

              <h2 className="!text-xl !font-semibold">
                3. Data Security & Confidentiality Measures for RAG
              </h2>
              <p>
                Protecting your proprietary knowledge is paramount. We implement
                robust security measures, including:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Strict Access Controls:</strong> Limiting access to
                  your data only to personnel directly involved in your project.
                </li>
                <li>
                  <strong>Confidentiality Agreements (NDAs):</strong> Formal
                  agreements reinforcing the confidential nature of your data.
                </li>
                <li>
                  <strong>Secure Infrastructure:</strong> Utilizing secure
                  development environments and potentially client-specified
                  infrastructure where applicable.
                </li>
                <li>
                  <strong>Data Minimization:</strong> Handling only the data
                  necessary for the specific RAG task.
                </li>
                <li>
                  <strong>Secure Data Handling Procedures:</strong> Protocols
                  for secure transfer, storage, and deletion of client data upon
                  project completion or as agreed.
                </li>
                <li>
                  <strong>Third-Party LLM/Service Considerations:</strong>{" "}
                  Clearly outlining the data handling practices of any
                  third-party AI models or cloud services used in the
                  implementation and seeking client approval where necessary.
                </li>
              </ul>

              <h2 className="!text-xl !font-semibold">
                4. Data Sharing and Disclosure
              </h2>
              <p>
                We do not sell or rent your personal or proprietary business
                information. We will not disclose your confidential knowledge
                base or query data except:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>With your explicit consent.</li>
                <li>
                  To comply with legal obligations or valid governmental
                  requests.
                </li>
                <li>
                  To trusted third-party service providers (e.g., cloud hosting,
                  specific AI model providers) necessary for the RAG
                  implementation, subject to strict confidentiality agreements
                  and your approval where applicable.
                </li>
              </ul>

              <h2 className="!text-xl !font-semibold">
                5. Data Retention and Deletion
              </h2>
              <p>
                Client-provided knowledge base data, query data, and specific
                project configurations are retained only as long as necessary to
                fulfill the service agreement or as required by law. We adhere
                to agreed-upon data deletion protocols upon project completion
                or termination. Standard business contact information may be
                retained longer for relationship management purposes.
              </p>

              <h2 className="!text-xl !font-semibold">
                6. Your Rights (e.g., GDPR/CCPA Context)
              </h2>
              <p>
                Depending on your jurisdiction, you may have rights regarding
                your personal data (primarily business contact information in
                our context), such as the right to access, correct, or delete.
                Specific handling of proprietary knowledge base data rights will
                be governed by the main service agreement and NDAs. Contact us
                to inquire about your rights.
              </p>

              <h2 className="!text-xl !font-semibold">
                7. Cookies and Website Tracking
              </h2>
              <p>
                Our website ([your-rag-consulting-domain.com]) may use standard
                cookies for functionality and analytics (e.g., Google Analytics)
                to understand website traffic. This data is typically aggregated
                and does not identify individual users in the context of project
                data. Refer to a separate Cookie Policy (if applicable) for
                details.
              </p>

              <h2 className="!text-xl !font-semibold">8. Policy Updates</h2>
              <p>
                We may update this Privacy Policy periodically. We will notify
                clients of significant changes. The "Last Updated" date at the
                top indicates the latest revision.
              </p>

              <h2 className="!text-xl !font-semibold">9. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or our data
                handling practices, especially concerning your RAG projects,
                please contact us at: [Your Contact Email/Link to Contact
                Form/Address]
              </p>

              <p className="mt-8 italic">
                <strong>Disclaimer:</strong> This is a template Privacy Policy
                for informational purposes and requires review and customization
                by qualified legal counsel to ensure compliance with all
                applicable laws and regulations and to accurately reflect your
                specific data processing activities.
              </p>
            </div>

            <div className="mt-10 text-center">
              <a
                href="/"
                className="inline-block text-blue-600 hover:underline"
              >
                &larr; Back to Homepage
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

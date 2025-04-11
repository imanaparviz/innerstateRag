import React from "react";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import type { Metadata } from "next";

// SEO Metadata for the API page
export const metadata: Metadata = {
  title: "RAG Consulting API (Coming Soon) | Integrate RAG Capabilities",
  description:
    "Access RAG Consulting Services programmatically via our upcoming API. Integrate advanced Retrieval Augmented Generation capabilities into your applications. Documentation and endpoints coming soon!",
  keywords:
    "RAG API, RAG integration, Retrieval Augmented Generation API, enterprise AI API, LLM API, semantic search API, AI development, RAG consulting",
  openGraph: {
    title: "RAG Consulting API (Coming Soon) | Integrate RAG Capabilities",
    description:
      "Integrate the power of RAG into your applications with our upcoming API. Access features programmatically.",
    url: "https://innerstaterag.com/api",
    siteName: "RAG Consulting Services",
    images: [
      {
        url: "/og-image.png", // Use your main OG image
        width: 1200,
        height: 630,
        alt: "RAG Consulting Services API",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RAG Consulting API (Coming Soon) | Integrate RAG Capabilities",
    description:
      "Get ready to integrate RAG functionalities directly into your apps with the upcoming API from RAG Consulting Services.",
    images: ["/twitter-image.png"], // Use your main Twitter image
  },
};

export default function ApiPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12 md:py-24">
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            RAG Consulting API
          </h1>

          <p className="text-lg text-gray-700 mb-6 text-center">
            Unlock the power of Retrieval Augmented Generation programmatically.
            Our developer API is under construction and will soon allow you to
            integrate advanced RAG capabilities directly into your applications
            and workflows.
          </p>

          <div className="border-t border-gray-200 my-8"></div>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Potential API Features:
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-600 mb-8">
            <li>
              <strong>Document Indexing:</strong> Programmatically upload,
              chunk, and index your proprietary documents into a secure vector
              store.
            </li>
            <li>
              <strong>Semantic Search:</strong> Perform advanced searches over
              your indexed knowledge base to retrieve the most relevant context
              for your queries.
            </li>
            <li>
              <strong>RAG Queries:</strong> Send user queries along with
              retrieved context to supported Large Language Models (LLMs) for
              accurate, context-aware responses.
            </li>
            <li>
              <strong>Knowledge Base Management:</strong> Manage your indexed
              documents, update content, and monitor indexing status via API
              endpoints.
            </li>
            <li>
              <strong>Usage Monitoring:</strong> Track your API usage and costs
              programmatically.
            </li>
          </ul>

          <p className="text-center text-xl text-gray-800 font-medium mb-4">
            API Documentation & Access Coming Soon!
          </p>
          <p className="text-center text-gray-500 mb-8">
            We are working hard to provide a robust and easy-to-use API. Stay
            tuned for documentation, client libraries, and access details.
            Consider subscribing to our newsletter (link coming soon!) for
            launch announcements.
          </p>

          <div className="text-center">
            <a
              href="/"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors text-lg font-medium"
            >
              &larr; Return to Homepage
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import React from "react";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import type { Metadata } from "next";

// SEO Metadata for the Learning Hub page
export const metadata: Metadata = {
  title:
    "RAG Learning Hub: Tutorials & Guides (Coming Soon) | RAG Consulting Services",
  description:
    "Explore upcoming tutorials, practical guides, and best practices on Retrieval Augmented Generation (RAG) from RAG Consulting Services. Learn how to implement RAG, reduce AI hallucinations, and leverage your knowledge base effectively. Check back soon!",
  keywords:
    "RAG learning, RAG tutorials, RAG guides, Retrieval Augmented Generation, AI knowledge base, reduce AI hallucinations, enterprise AI, LLM optimization, RAG implementation, RAG consulting",
  openGraph: {
    title:
      "RAG Learning Hub: Tutorials & Guides (Coming Soon) | RAG Consulting Services",
    description:
      "Your go-to resource for RAG knowledge is coming soon. Learn about RAG implementation, optimization, and best practices.",
    url: "https://innerstaterag.com/learning",
    siteName: "RAG Consulting Services",
    images: [
      {
        url: "/og-image.png", // Use your main OG image
        width: 1200,
        height: 630,
        alt: "RAG Consulting Services Learning Hub",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "RAG Learning Hub: Tutorials & Guides (Coming Soon) | RAG Consulting Services",
    description:
      "Learn all about Retrieval Augmented Generation (RAG). Tutorials, guides, and best practices coming soon from RAG Consulting Services.",
    images: ["/twitter-image.png"], // Use your main Twitter image
  },
};

export default function LearningHubPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow container mx-auto px-4 py-12 md:py-24">
        <div className="bg-white rounded-lg shadow-md p-8 md:p-12 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            RAG Learning Hub
          </h1>

          <p className="text-lg text-gray-700 mb-6 text-center">
            Welcome to the future home of our comprehensive Learning Hub
            dedicated to Retrieval Augmented Generation (RAG). We're currently
            curating valuable resources to help you master RAG and transform
            your AI applications.
          </p>

          <div className="border-t border-gray-200 my-8"></div>

          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            What to Expect:
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-600 mb-8">
            <li>
              <strong>In-Depth Tutorials:</strong> Step-by-step guides on
              implementing RAG pipelines, from data preparation and embedding to
              vector database setup and LLM integration.
            </li>
            <li>
              <strong>Practical Guides:</strong> Best practices for optimizing
              RAG systems for accuracy, latency, and relevance, including
              strategies for chunking and embedding.
            </li>
            <li>
              <strong>Use Case Explorations:</strong> Detailed examples of how
              RAG can be applied across various industries to solve real-world
              problems like customer support enhancement and internal knowledge
              management.
            </li>
            <li>
              <strong>Expert Insights:</strong> Articles and tips from our RAG
              consultants on tackling common challenges, such as reducing AI
              hallucinations and evaluating system performance.
            </li>
            <li>
              <strong>Tooling & Technology Breakdowns:</strong> Comparisons and
              guides on choosing the right vector databases, embedding models,
              and LLMs for your RAG projects.
            </li>
          </ul>

          <p className="text-center text-xl text-gray-800 font-medium mb-4">
            This section is launching soon!
          </p>
          <p className="text-center text-gray-500 mb-8">
            Check back regularly for updates, or subscribe to our newsletter
            (link coming soon!) to be notified when the Learning Hub goes live.
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

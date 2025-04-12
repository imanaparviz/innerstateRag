import React from "react";
import { Metadata } from "next";
import { Navbar, NavbarSpacer } from "@/components/navbar";
import Footer from "@/components/footer";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title:
    "RAG Technology | Retrieval Augmented Generation | Inner State RAG Consulting",
  description:
    "Learn about Retrieval Augmented Generation (RAG) technology and how it enhances AI systems by combining information retrieval with generative AI to improve accuracy and reduce hallucinations.",
  keywords: [
    "RAG",
    "Retrieval Augmented Generation",
    "AI technology",
    "LLM",
    "knowledge retrieval",
  ],
  alternates: {
    canonical: "https://innerstaterag.com/rag",
  },
  openGraph: {
    title: "RAG Technology | Retrieval Augmented Generation",
    description:
      "Learn about Retrieval Augmented Generation (RAG) technology and how it enhances AI systems by combining information retrieval with generative AI.",
    url: "https://innerstaterag.com/rag",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TechArticle",
  headline: "Understanding Retrieval Augmented Generation (RAG) Technology",
  description:
    "A comprehensive guide to RAG technology, how it works, and its applications in modern AI systems.",
  author: {
    "@type": "Organization",
    name: "Inner State RAG Consulting",
  },
  publisher: {
    "@type": "Organization",
    name: "Inner State RAG Consulting",
    logo: {
      "@type": "ImageObject",
      url: "https://innerstaterag.com/logo.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://innerstaterag.com/rag",
  },
};

export default function RAGPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex min-h-screen flex-col">
        <Navbar />
        <NavbarSpacer />

        <section className="container mx-auto px-4 py-8 md:py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            Retrieval Augmented Generation (RAG) Technology
          </h1>

          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-2xl font-semibold mt-8 mb-4">What is RAG?</h2>
            <p>
              Retrieval Augmented Generation (RAG) is a hybrid AI architecture
              that combines information retrieval systems with generative AI
              models. RAG enhances the capabilities of Large Language Models
              (LLMs) by grounding them in factual, up-to-date information from
              external knowledge sources.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">How RAG Works</h2>
            <p>The RAG process involves two main components:</p>
            <ol>
              <li>
                <strong>Retrieval:</strong> When a query is received, the system
                searches a knowledge base to find relevant information.
              </li>
              <li>
                <strong>Generation:</strong> The retrieved information is
                provided as context to the LLM, which then generates a response
                based on both its training and the retrieved context.
              </li>
            </ol>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              Benefits of RAG
            </h2>
            <ul>
              <li>
                <strong>Reduced Hallucinations:</strong> By grounding responses
                in factual information, RAG significantly reduces the likelihood
                of AI hallucinations or fabrications.
              </li>
              <li>
                <strong>Up-to-date Information:</strong> RAG allows AI systems
                to access current information beyond their training cutoff.
              </li>
              <li>
                <strong>Domain Expertise:</strong> RAG enables LLMs to become
                domain experts by connecting them to specialized knowledge
                bases.
              </li>
              <li>
                <strong>Transparency:</strong> The retrieval process creates a
                clear trail of where information comes from, improving
                accountability.
              </li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">
              RAG Applications
            </h2>
            <p>RAG technology is revolutionizing various fields:</p>
            <ul>
              <li>
                <strong>Enterprise Knowledge Management:</strong> Connecting
                corporate knowledge bases to AI assistants
              </li>
              <li>
                <strong>Customer Support:</strong> Creating support systems that
                provide accurate, consistent information
              </li>
              <li>
                <strong>Research Assistants:</strong> Helping researchers
                navigate and synthesize vast amounts of literature
              </li>
              <li>
                <strong>Legal and Compliance:</strong> Ensuring AI systems
                provide responses consistent with laws and regulations
              </li>
              <li>
                <strong>Healthcare:</strong> Providing medical professionals
                with AI that's grounded in up-to-date medical knowledge
              </li>
            </ul>
          </div>
        </section>

        <CtaSection />
        <Footer />
      </main>
    </>
  );
}

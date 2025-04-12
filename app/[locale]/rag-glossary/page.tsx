import React from "react";
import { Metadata } from "next";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import { CtaSection } from "@/components/sections/cta-section";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "RAG Glossary | Comprehensive Retrieval Augmented Generation Terms | Inner State RAG",
  description:
    "Complete glossary of Retrieval Augmented Generation (RAG) terminology, concepts, and techniques. Learn the essential vocabulary for implementing and optimizing RAG systems.",
  keywords: [
    "RAG glossary",
    "Retrieval Augmented Generation terms",
    "RAG dictionary",
    "RAG concepts",
    "AI retrieval terms",
    "knowledge base terms",
    "embedding definitions",
    "vector search glossary",
  ],
  alternates: {
    canonical: "https://innerstaterag.com/rag-glossary",
  },
  openGraph: {
    title: "RAG Glossary | Comprehensive Retrieval Augmented Generation Terms",
    description:
      "Complete glossary of Retrieval Augmented Generation (RAG) terminology, concepts, and techniques.",
    url: "https://innerstaterag.com/rag-glossary",
    type: "article",
  },
};

// Define glossary terms with structured markup
const glossaryTerms = [
  {
    term: "Retrieval Augmented Generation (RAG)",
    definition:
      "A hybrid AI architecture that combines information retrieval systems with generative AI models. RAG enhances LLMs by retrieving relevant information from external knowledge sources to provide as context for generating responses.",
    relatedTerms: ["Information Retrieval", "LLM", "Vector Database"],
  },
  {
    term: "Knowledge Base",
    definition:
      "A structured or unstructured collection of information (documents, data, etc.) that serves as the source of information for the retrieval component in a RAG system.",
    relatedTerms: ["Document Store", "Corpus", "Knowledge Graph"],
  },
  {
    term: "Embeddings",
    definition:
      "Numerical vector representations of text that capture semantic meaning. In RAG systems, embeddings are used to represent both queries and documents in a shared vector space to facilitate similarity matching.",
    relatedTerms: [
      "Vector Representation",
      "Semantic Search",
      "Embedding Model",
    ],
  },
  {
    term: "Vector Database",
    definition:
      "A specialized database optimized for storing and querying vector embeddings. These databases enable efficient similarity search, which is essential for the retrieval component of RAG systems.",
    relatedTerms: ["Vector Store", "Vector Search", "ANN Search"],
  },
  {
    term: "Chunking",
    definition:
      "The process of breaking down long documents into smaller, more manageable pieces (chunks) for embedding and retrieval in a RAG system. Effective chunking strategies balance context preservation with retrieval precision.",
    relatedTerms: ["Document Segmentation", "Text Splitting", "Context Window"],
  },
  {
    term: "Hallucination",
    definition:
      "When an AI model generates information that is factually incorrect or not supported by reliable sources. RAG systems aim to reduce hallucinations by grounding generated responses in retrieved factual information.",
    relatedTerms: ["Confabulation", "Factual Accuracy", "Truthfulness"],
  },
  {
    term: "Semantic Search",
    definition:
      "A search methodology that focuses on understanding the intent and contextual meaning of a query rather than just matching keywords. RAG systems typically use semantic search for the retrieval component.",
    relatedTerms: [
      "Neural Search",
      "Meaning-based Search",
      "Contextual Retrieval",
    ],
  },
  {
    term: "Context Window",
    definition:
      "The maximum amount of text that an LLM can process at once. In RAG systems, retrieved information must fit within the context window along with the query and any instructions.",
    relatedTerms: ["Token Limit", "Input Context", "Prompt Size"],
  },
  {
    term: "Embedding Model",
    definition:
      "A neural network model trained to convert text into vector embeddings that capture semantic relationships. Common embedding models used in RAG systems include models from OpenAI, Cohere, and open-source alternatives.",
    relatedTerms: ["Encoder Model", "Text Embedding", "Neural Embeddings"],
  },
  {
    term: "Vector Similarity",
    definition:
      "A measure of how close two vectors are in embedding space, typically calculated using metrics like cosine similarity, Euclidean distance, or dot product. Used to identify relevant documents during retrieval.",
    relatedTerms: [
      "Cosine Similarity",
      "Euclidean Distance",
      "Similarity Metric",
    ],
  },
  {
    term: "Inner State",
    definition:
      "Our proprietary methodology that enhances traditional RAG systems by maintaining a rich internal representation of conversational context and semantic relationships for more coherent and contextually aware AI responses.",
    relatedTerms: ["Context Tracking", "Semantic Memory", "Conversation State"],
  },
  {
    term: "Multi-stage Retrieval",
    definition:
      "A RAG approach that employs multiple sequential retrieval steps, often using different techniques or granularities, to progressively refine the information provided to the LLM.",
    relatedTerms: [
      "Retrieval Pipeline",
      "Query Refinement",
      "Hierarchical Retrieval",
    ],
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  name: "RAG Glossary",
  description:
    "Comprehensive glossary of Retrieval Augmented Generation (RAG) terminology and concepts",
  definedTerm: glossaryTerms.map((term) => ({
    "@type": "DefinedTerm",
    name: term.term,
    description: term.definition,
  })),
};

export default function RAGGlossaryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex min-h-screen flex-col">
        <Navbar />

        <section className="container mx-auto px-4 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            RAG Glossary: Essential Retrieval Augmented Generation Terms
          </h1>

          <div className="max-w-4xl mx-auto prose prose-lg mb-12">
            <p className="lead">
              This comprehensive glossary defines key terms related to{" "}
              <abbr title="Retrieval Augmented Generation">RAG</abbr>{" "}
              technology. Understanding these concepts is essential for
              effectively implementing and optimizing Retrieval Augmented
              Generation systems.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 gap-8">
              {glossaryTerms.map((item, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-6 shadow-sm bg-white"
                >
                  <h2
                    className="text-2xl font-bold text-gray-900 mb-3"
                    id={item.term.toLowerCase().replace(/\s+/g, "-")}
                  >
                    {item.term}
                  </h2>
                  <p className="text-lg text-gray-700 mb-4">
                    {item.definition}
                  </p>
                  {item.relatedTerms && item.relatedTerms.length > 0 && (
                    <div className="mt-4">
                      <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2">
                        Related Terms:
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {item.relatedTerms.map((relatedTerm, rtIndex) => (
                          <span
                            key={rtIndex}
                            className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                          >
                            {relatedTerm}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-16 text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Need Help With RAG Implementation?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Our experts can help you leverage RAG technology to enhance your
              AI systems and unlock the full potential of your organization's
              knowledge.
            </p>
            <Link
              href="#contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Schedule a Consultation
            </Link>
          </div>
        </section>

        <CtaSection />
        <Footer />
      </main>
    </>
  );
}

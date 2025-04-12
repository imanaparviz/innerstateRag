import "../../shared-styles.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Retrieval Augmented Generation (RAG) | AI Knowledge Integration",
  description:
    "Enhance your AI capabilities with Retrieval Augmented Generation (RAG). Combine the power of large language models with your proprietary knowledge bases for accurate, context-aware AI responses.",
  keywords: [
    "RAG",
    "Retrieval Augmented Generation",
    "knowledge retrieval",
    "AI context",
    "enterprise AI",
    "document retrieval",
    "vector search",
    "AI consulting",
    "LLM enhancement",
  ],
  alternates: {
    canonical: "https://innerstaterag.com/rag",
  },
  openGraph: {
    title: "Retrieval Augmented Generation (RAG) | AI Knowledge Integration",
    description:
      "Enhance your AI capabilities with Retrieval Augmented Generation. Connect your proprietary knowledge with large language models for better outcomes.",
    url: "https://innerstaterag.com/rag",
    siteName: "Inner State RAG Consulting",
    images: [
      {
        url: "/og-image-rag.png",
        width: 1200,
        height: 630,
        alt: "Retrieval Augmented Generation",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Retrieval Augmented Generation (RAG) | AI Knowledge Integration",
    description:
      "Enhance your AI with Retrieval Augmented Generation - connect your knowledge bases with LLMs for better outcomes.",
    images: ["/og-image-rag.png"],
  },
};

export default function RAGLayout({ children }: { children: React.ReactNode }) {
  return children;
}

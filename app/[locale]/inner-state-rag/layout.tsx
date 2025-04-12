import "../../shared-styles.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Inner State RAG | Advanced Retrieval Augmented Generation | AI Consulting",
  description:
    "Inner State RAG combines our proprietary Inner State methodology with Retrieval Augmented Generation to create unparalleled AI systems with enhanced context understanding and reduced hallucinations.",
  keywords: [
    "inner state RAG",
    "advanced RAG",
    "RAG consulting",
    "context-aware RAG",
    "proprietary RAG methodology",
    "AI hallucination reduction",
    "enterprise knowledge systems",
    "contextual understanding AI",
  ],
  alternates: {
    canonical: "https://innerstaterag.com/inner-state-rag",
  },
  openGraph: {
    title: "Inner State RAG | Advanced Retrieval Augmented Generation",
    description:
      "Our proprietary Inner State RAG methodology enhances standard RAG implementations with deeper contextual understanding for superior AI performance.",
    url: "https://innerstaterag.com/inner-state-rag",
    siteName: "Inner State RAG Consulting",
    images: [
      {
        url: "/og-image-inner-state-rag.png",
        width: 1200,
        height: 630,
        alt: "Inner State RAG Technology",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inner State RAG | Advanced Retrieval Augmented Generation",
    description:
      "Our proprietary Inner State RAG methodology enhances standard RAG implementations with deeper contextual understanding.",
    images: ["/og-image-inner-state-rag.png"],
  },
};

export default function InnerStateRAGLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

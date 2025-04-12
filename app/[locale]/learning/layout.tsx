import "../../shared-styles.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learning Hub | RAG & Inner State Technology Resources",
  description:
    "Comprehensive educational resources on Retrieval Augmented Generation (RAG) and Inner State methodologies. Tutorials, guides, and best practices for AI implementations.",
  keywords: [
    "RAG learning",
    "Inner State tutorials",
    "RAG implementation guide",
    "AI learning resources",
    "RAG best practices",
    "knowledge retrieval tutorials",
    "AI education",
    "generative AI learning",
    "enterprise AI implementation",
  ],
  alternates: {
    canonical: "https://innerstaterag.com/learning",
  },
  openGraph: {
    title: "Learning Hub | RAG & Inner State Technology Resources",
    description:
      "Comprehensive educational resources on Retrieval Augmented Generation (RAG) and Inner State methodologies.",
    url: "https://innerstaterag.com/learning",
    siteName: "Inner State RAG Consulting",
    images: [
      {
        url: "/og-image-learning.png",
        width: 1200,
        height: 630,
        alt: "RAG Learning Hub",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Learning Hub | RAG & Inner State Technology Resources",
    description:
      "Comprehensive educational resources on Retrieval Augmented Generation (RAG) and Inner State methodologies.",
    images: ["/og-image-learning.png"],
  },
};

export default function LearningHubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

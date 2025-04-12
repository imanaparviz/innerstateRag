import "../../shared-styles.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | RAG Consulting Insights & Best Practices",
  description:
    "Expert insights, tutorials, and best practices on Retrieval Augmented Generation (RAG), Inner State methodology, and AI knowledge integration strategies.",
  keywords: [
    "RAG blog",
    "Inner State RAG",
    "RAG tutorials",
    "AI knowledge integration",
    "LLM best practices",
    "retrieval augmented generation blog",
    "AI consulting insights",
    "semantic search strategies",
  ],
  alternates: {
    canonical: "https://innerstaterag.com/blog",
  },
  openGraph: {
    title: "Blog | RAG Consulting Insights & Best Practices",
    description:
      "Expert insights, tutorials, and best practices on Retrieval Augmented Generation (RAG) and AI knowledge integration strategies.",
    url: "https://innerstaterag.com/blog",
    siteName: "Inner State RAG Consulting",
    images: [
      {
        url: "/og-image-blog.png",
        width: 1200,
        height: 630,
        alt: "Inner State RAG Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | RAG Consulting Insights & Best Practices",
    description:
      "Expert insights, tutorials, and best practices on Retrieval Augmented Generation (RAG) and AI knowledge integration strategies.",
    images: ["/og-image-blog.png"],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

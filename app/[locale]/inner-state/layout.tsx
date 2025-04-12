import "../../shared-styles.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inner State | Advanced AI Context Understanding | RAG Consulting",
  description:
    "Our Inner State methodology provides AI systems with deeper contextual understanding and improved reasoning capabilities, leading to more accurate and relevant responses.",
  keywords: [
    "inner state",
    "AI context",
    "contextual understanding",
    "AI reasoning",
    "knowledge graph",
    "semantic understanding",
    "AI reliability",
    "conversation state",
  ],
  alternates: {
    canonical: "https://innerstaterag.com/inner-state",
  },
  openGraph: {
    title: "Inner State | Advanced AI Context Understanding",
    description:
      "Our Inner State methodology provides AI systems with deeper contextual understanding and reasoning for better outcomes.",
    url: "https://innerstaterag.com/inner-state",
    siteName: "Inner State RAG Consulting",
    images: [
      {
        url: "/og-image-inner-state.png",
        width: 1200,
        height: 630,
        alt: "Inner State AI Technology",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inner State | Advanced AI Context Understanding",
    description:
      "Our Inner State methodology provides AI systems with deeper contextual understanding and reasoning for better outcomes.",
    images: ["/og-image-inner-state.png"],
  },
};

export default function InnerStateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

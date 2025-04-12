import "../../shared-styles.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Inner State RAG Consulting",
  description: "Get in touch with our team of RAG and Inner State AI experts. We're here to help with your enterprise AI knowledge integration needs.",
  keywords: [
    "contact RAG consulting",
    "RAG implementation help",
    "AI consultation",
    "inner state experts",
    "enterprise AI support",
    "knowledge integration solutions",
    "RAG consulting services",
  ],
  alternates: {
    canonical: "https://innerstaterag.com/contact",
  },
  openGraph: {
    title: "Contact Inner State RAG Consulting",
    description: "Get in touch with our team of experts for all your RAG and Inner State AI needs.",
    url: "https://innerstaterag.com/contact",
    siteName: "Inner State RAG Consulting",
    images: [
      {
        url: "/og-image-contact.png",
        width: 1200,
        height: 630,
        alt: "Contact Inner State RAG Consulting",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Inner State RAG Consulting",
    description: "Get in touch with our team of experts for all your RAG and Inner State AI needs.",
    images: ["/og-image-contact.png"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 
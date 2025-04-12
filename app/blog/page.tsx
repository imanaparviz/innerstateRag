import { redirect } from "next/navigation";
import { defaultLocale } from "@/i18n";
import React from "react";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { getBlogPosts } from "@/lib/blog"; // We'll create this lib function soon
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RAG Consulting Blog | Insights on RAG & Enterprise AI",
  description:
    "Explore articles, insights, and best practices on Retrieval Augmented Generation (RAG), reducing AI hallucinations, and leveraging enterprise knowledge from RAG Consulting Services.",
  keywords:
    "RAG blog, AI blog, RAG insights, Retrieval Augmented Generation articles, enterprise AI trends, LLM optimization tips, AI data security blog, RAG consulting blog",
  openGraph: {
    title: "RAG Consulting Blog | Insights on RAG & Enterprise AI",
    description:
      "Stay updated with the latest on RAG and enterprise AI from RAG Consulting Services.",
    url: "https://innerstaterag.com/blog",
    siteName: "RAG Consulting Services",
    images: [
      {
        url: "/og-image.png", // Use your main OG image
        width: 1200,
        height: 630,
        alt: "RAG Consulting Services Blog",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RAG Consulting Blog | Insights on RAG & Enterprise AI",
    description:
      "Insights and articles on RAG, AI hallucinations, and enterprise AI from RAG Consulting Services.",
    images: ["/twitter-image.png"], // Use your main Twitter image
  },
};

// Redirect to the localized blog page
export default function BlogIndexPage() {
  redirect(`/${defaultLocale}/blog`);
}

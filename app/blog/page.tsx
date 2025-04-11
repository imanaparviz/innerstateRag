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

export default function BlogIndexPage() {
  const posts = getBlogPosts(); // Fetch all posts

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-grow py-12 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10 text-center">
            RAG Consulting Blog
          </h1>
          <div className="space-y-8">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
              >
                <h2 className="text-2xl font-semibold mb-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-700 hover:text-blue-900 hover:underline"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-sm text-gray-500 mb-3">
                  Published on {post.date}
                </p>
                <p className="text-gray-700 mb-4">{post.description}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-blue-600 hover:underline font-medium"
                >
                  Read More &rarr;
                </Link>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

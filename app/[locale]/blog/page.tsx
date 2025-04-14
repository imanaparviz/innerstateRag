import React from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/footer";
import { Metadata } from "next";
import { getBlogPosts } from "@/lib/blog";
import { Navbar, NavbarSpacer } from "@/components/navbar";
import { format, parseISO } from "date-fns";
import ReactMarkdown from "react-markdown";

// Add Metadata Export
export const metadata: Metadata = {
  title: "Inner State RAG Consulting Blog | RAG & AI Insights",
  description:
    "Latest insights, tutorials, and case studies on Retrieval Augmented Generation (RAG), Inner State methodology, and enterprise AI knowledge management.",
  keywords: [
    "RAG blog",
    "AI consulting blog",
    "inner state methodology",
    "retrieval augmented generation",
    "AI knowledge management",
    "LLM optimization",
  ],
  alternates: {
    canonical: "https://innerstaterag.com/blog",
  },
  openGraph: {
    title: "Inner State RAG Consulting Blog",
    description:
      "Insights and best practices on RAG, Inner State methodology, and enterprise AI.",
    url: "https://innerstaterag.com/blog",
    type: "website", // Or 'blog'
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  headline:
    "RAG Consulting Blog - Expert Insights on Retrieval Augmented Generation",
  description:
    "Expert insights, tutorials, and best practices on Retrieval Augmented Generation (RAG), Inner State methodology, and AI knowledge integration strategies.",
  author: {
    "@type": "Organization",
    name: "Inner State RAG Consulting",
    url: "https://innerstaterag.com",
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
    "@id": "https://innerstaterag.com/blog",
  },
};

export default async function BlogPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { locale } = await params;
  const searchParamsData = searchParams ? await searchParams : {};
  const blogPosts = getBlogPosts();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="flex min-h-screen flex-col dark:bg-gray-900">
        <Navbar />
        <NavbarSpacer />

        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
              RAG Consulting Blog
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Expert insights, tutorials, and best practices on Retrieval
              Augmented Generation and Inner State methodology.
            </p>
          </div>

          {/* Category filter */}
          {/* <div ... > ... </div> */}

          {/* Blog posts grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-shadow hover:shadow-xl border border-gray-200 dark:border-gray-700"
              >
                <Link href={`/${locale}/blog/${post.slug}`}>
                  <div className="relative h-48 w-full bg-gray-200 dark:bg-gray-700">
                    <Image
                      src={post.ogImage || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                </Link>
                <div className="p-6 flex flex-col justify-between flex-grow bg-white dark:bg-gray-800">
                  <div>
                    {post.tags && post.tags.length > 0 && (
                      <p className="text-sm font-medium text-cyan-600 dark:text-cyan-400 mb-1">
                        {post.tags[0].toUpperCase()}
                      </p>
                    )}
                    <Link href={`/${locale}/blog/${post.slug}`}>
                      <h2 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white hover:text-cyan-700 dark:hover:text-cyan-400 line-clamp-2">
                        {post.title}
                      </h2>
                    </Link>
                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 line-clamp-3">
                      {post.description}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center">
                    <div>
                      {post.author && (
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {post.author}
                        </p>
                      )}
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {format(parseISO(post.date), "MMM d, yyyy")}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

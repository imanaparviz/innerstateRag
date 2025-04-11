import React from "react";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/blog"; // We'll create this lib function soon
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// Function to generate metadata dynamically based on the post
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return {}; // Or return default metadata if preferred
  }

  return {
    title: `${post.title} | RAG Consulting Blog`,
    description: post.description,
    keywords:
      post.keywords ||
      "RAG, Retrieval Augmented Generation, AI, LLM, consulting", // Add keywords to frontmatter
    openGraph: {
      title: `${post.title} | RAG Consulting Blog`,
      description: post.description,
      url: `https://innerstaterag.com/blog/${params.slug}`, // Updated domain
      siteName: "RAG Consulting Services",
      images: [
        {
          url: post.ogImage || "/og-image.png", // Add ogImage to frontmatter
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      locale: "en_US",
      type: "article", // Set type to article for blog posts
      publishedTime: new Date(post.date).toISOString(),
      // Add author, tags etc. if available in frontmatter
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} | RAG Consulting Blog`,
      description: post.description,
      images: [post.twitterImage || post.ogImage || "/twitter-image.png"], // Add twitterImage to frontmatter
    },
  };
}

// Function to generate static paths for all blog posts
export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound(); // Show 404 if post not found
  }

  // Generate JSON-LD schema for the article
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    image: [
      post.ogImage
        ? `https://innerstaterag.com${post.ogImage}`
        : `https://innerstaterag.com/og-image.png`, // Updated domain
    ],
    datePublished: new Date(post.date).toISOString(),
    // Assuming you might add dateModified later to frontmatter
    // dateModified: post.dateModified ? new Date(post.dateModified).toISOString() : new Date(post.date).toISOString(),
    author: {
      "@type": "Organization", // Or 'Person' if you add author field
      name: "RAG Consulting Services",
      url: "https://innerstaterag.com", // Updated domain
    },
    publisher: {
      "@type": "Organization",
      name: "RAG Consulting Services",
      logo: {
        "@type": "ImageObject",
        url: "https://innerstaterag.com/logo.png", // Updated domain and path
      },
    },
    // Add mainEntityOfPage if needed
    // mainEntityOfPage: {
    //   '@type': 'WebPage',
    //   '@id': `https://your-rag-consulting-domain.com/blog/${post.slug}`
    // }
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Add JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="flex-grow py-12 md:py-20">
        <div className="container mx-auto max-w-3xl px-4">
          <article className="bg-white rounded-lg shadow-md p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {post.title}
            </h1>
            <p className="text-sm text-gray-500 mb-8">
              Published on {post.date}
            </p>
            {/* Render the markdown content */}
            <div
              className="prose prose-lg max-w-none prose-blue prose-img:rounded-lg prose-img:shadow-md prose-headings:text-gray-800 prose-a:text-blue-600 hover:prose-a:text-blue-800"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}

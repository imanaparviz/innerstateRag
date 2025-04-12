import { redirect } from "next/navigation";
import { defaultLocale } from "@/i18n";
import { Navbar } from "@/components/navbar";
import Footer from "@/components/footer";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/blog"; // We'll create this lib function soon
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// Function to generate metadata dynamically based on the post
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

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
      url: `https://innerstaterag.com/blog/${slug}`, // Updated domain
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

// Redirect to the localized blog post page
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  redirect(`/${defaultLocale}/blog/${slug}`);
}

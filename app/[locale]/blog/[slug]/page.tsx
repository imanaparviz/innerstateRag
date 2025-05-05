import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getBlogPosts, BlogPost } from "@/lib/blog";
import { Navbar, NavbarSpacer } from "@/components/navbar";
import Footer from "@/components/footer";
import { locales } from "@/i18n"; // Assuming i18n.ts exports locales
import { format, parseISO } from "date-fns";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ErrorBoundary } from "react-error-boundary";

// Error fallback component to display when the blog content fails to render
function ErrorFallback({
  error,
  resetErrorBoundary,
}: {
  error: Error;
  resetErrorBoundary: () => void;
}) {
  return (
    <div className="my-8 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg text-center">
      <h2 className="text-xl font-bold mb-2">Error loading blog content</h2>
      <p className="mb-4">
        There was an error displaying this blog post content.
      </p>
      <button
        onClick={resetErrorBoundary}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Try again
      </button>
    </div>
  );
}

type PageParams = {
  params: Promise<{ slug: string; locale: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
};

// Generate static paths for all blog posts in all locales
export async function generateStaticParams() {
  const posts = getBlogPosts(); // Fetches metadata for all posts
  const params: { locale: string; slug: string }[] = [];

  locales.forEach((locale) => {
    posts.forEach((post) => {
      params.push({ locale, slug: post.slug });
    });
  });

  return params;
}

// Generate metadata for a specific blog post
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "This blog post could not be found.",
    };
  }

  // Process keywords - handle both string and array formats
  let keywordsArray: string[] = [];
  if (post.keywords) {
    if (Array.isArray(post.keywords)) {
      keywordsArray = post.keywords;
    } else if (typeof post.keywords === "string") {
      keywordsArray = post.keywords.split(",").map((k) => k.trim());
    }
  } else {
    keywordsArray = ["RAG", "Inner State", "AI", "Blog"];
  }

  // Use post frontmatter for metadata
  const metadata: Metadata = {
    title: `${post.title} | Inner State RAG Blog`,
    description: post.description,
    keywords: keywordsArray,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://innerstaterag.com/${locale}/blog/${post.slug}`,
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
      authors: post.author ? [post.author] : ["Inner State RAG Team"],
      tags: post.tags,
      images: post.ogImage
        ? [{ url: post.ogImage }]
        : [{ url: "/og-image.png" }], // Default OG image
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.twitterImage ? [post.twitterImage] : ["/og-image.png"], // Default Twitter image
    },
    alternates: {
      canonical: `https://innerstaterag.com/${locale}/blog/${post.slug}`,
    },
  };

  // Add lastModified if available
  if (post.lastModified && metadata.openGraph) {
    // @ts-ignore - Next.js types may be incomplete
    metadata.openGraph.modified_time = new Date(
      post.lastModified
    ).toISOString();
  }

  return metadata;
}

// Helper to generate BlogPosting JSON-LD
const generateBlogPostingJsonLd = (post: BlogPost, locale: string) => {
  // Process keywords for JSON-LD
  let keywordsString = "";
  if (post.keywords) {
    if (Array.isArray(post.keywords)) {
      keywordsString = post.keywords.join(", ");
    } else if (typeof post.keywords === "string") {
      keywordsString = post.keywords;
    }
  } else if (post.tags && post.tags.length > 0) {
    keywordsString = post.tags.join(", ");
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.ogImage || `https://innerstaterag.com/og-image.png`, // Use specific or default
    author: {
      "@type": "Organization", // Or "Person" if author is individual
      name: post.author || "Inner State RAG Consulting",
      url: post.author ? undefined : "https://innerstaterag.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Inner State RAG Consulting",
      url: "https://innerstaterag.com",
      logo: {
        "@type": "ImageObject",
        url: "https://innerstaterag.com/logo.png",
      },
    },
    datePublished: new Date(post.date).toISOString(),
    dateModified: post.lastModified
      ? new Date(post.lastModified).toISOString()
      : new Date(post.date).toISOString(),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://innerstaterag.com/${locale}/blog/${post.slug}`,
    },
    keywords: keywordsString,
  };
  return JSON.stringify(schema);
};

// Blog Post Page Component
export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string; locale: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { slug, locale } = await params;
  const searchParamsData = searchParams ? await searchParams : {};
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound(); // Trigger 404 if post doesn't exist
  }

  // Format dates for display
  const publishedDate = format(parseISO(post.date), "MMMM d, yyyy");
  const modifiedDate = post.lastModified
    ? format(parseISO(post.lastModified), "MMMM d, yyyy")
    : null;

  const jsonLdString = generateBlogPostingJsonLd(post, locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString }}
      />
      <main className="flex min-h-screen flex-col dark:bg-gray-900">
        <Navbar />
        <NavbarSpacer />

        <article className="container mx-auto px-4 py-8 md:py-12 max-w-3xl">
          {/* Post Header */}
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-gray-900 dark:text-white">
              {post.title}
            </h1>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              <span>Published on {publishedDate}</span>
              {post.author && <span> by {post.author}</span>}
              {modifiedDate && publishedDate !== modifiedDate && (
                <span className="ml-4 italic">
                  (Last updated: {modifiedDate})
                </span>
              )}
            </div>
            {post.tags && post.tags.length > 0 && (
              <div className="mt-4">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 dark:text-gray-200 mr-2 mb-2"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Post Content */}
          <div className="blog-content">
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              onReset={() => {
                // Reset the error state when user clicks the "Try again" button
                window.location.reload();
              }}
            >
              <div
                className="prose prose-lg max-w-none dark:prose-invert \
                prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white
                prose-h1:text-3xl prose-h1:mt-8 prose-h1:mb-4
                prose-h2:text-2xl prose-h2:mt-6 prose-h2:mb-3
                prose-h3:text-xl prose-h3:mt-4 prose-h3:mb-2
                prose-p:my-4 prose-p:text-gray-700 dark:prose-p:text-gray-300
                prose-ul:my-4 prose-ul:list-disc prose-ul:pl-6
                prose-ol:my-4 prose-ol:list-decimal prose-ol:pl-6
                prose-li:my-2
                prose-img:rounded-lg \
                prose-a:text-blue-600 dark:prose-a:text-blue-400 hover:prose-a:text-blue-800 dark:hover:prose-a:text-blue-300"
                dangerouslySetInnerHTML={{ __html: post.contentHtml }}
              />
            </ErrorBoundary>

            {/* Fallback to ReactMarkdown if HTML rendering doesn't work properly */}
            {false && post && (
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ node, ...props }) => (
                    <h1 className="text-3xl font-bold mt-8 mb-4" {...props} />
                  ),
                  h2: ({ node, ...props }) => (
                    <h2 className="text-2xl font-bold mt-6 mb-3" {...props} />
                  ),
                  h3: ({ node, ...props }) => (
                    <h3 className="text-xl font-bold mt-4 mb-2" {...props} />
                  ),
                  p: ({ node, ...props }) => (
                    <p
                      className="my-4 text-gray-700 dark:text-gray-300"
                      {...props}
                    />
                  ),
                  ul: ({ node, ...props }) => (
                    <ul className="my-4 list-disc pl-6" {...props} />
                  ),
                  ol: ({ node, ...props }) => (
                    <ol className="my-4 list-decimal pl-6" {...props} />
                  ),
                  li: ({ node, ...props }) => (
                    <li className="my-2" {...props} />
                  ),
                  img: ({ node, ...props }) => (
                    <img className="rounded-lg" {...props} />
                  ),
                  a: ({ node, ...props }) => (
                    <a
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                      {...props}
                    />
                  ),
                }}
              >
                {post?.content}
              </ReactMarkdown>
            )}
          </div>
        </article>

        <Footer />
      </main>
    </>
  );
}

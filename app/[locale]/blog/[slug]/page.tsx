import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getBlogPosts, BlogPost } from "@/lib/blog";
import { Navbar, NavbarSpacer } from "@/components/navbar";
import Footer from "@/components/footer";
import { locales } from "@/i18n"; // Assuming i18n.ts exports locales
import { format, parseISO } from "date-fns";

type PageParams = {
  params: {
    slug: string;
    locale: string;
  };
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
}: PageParams): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "This blog post could not be found.",
    };
  }

  // Use post frontmatter for metadata
  const metadata: Metadata = {
    title: `${post.title} | Inner State RAG Blog`,
    description: post.description,
    keywords: post.keywords?.split(",").map((k) => k.trim()) || [
      "RAG",
      "Inner State",
      "AI",
      "Blog",
    ],
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://innerstaterag.com/${params.locale}/blog/${post.slug}`,
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
      canonical: `https://innerstaterag.com/${params.locale}/blog/${post.slug}`,
    },
  };

  // Add lastModified if available
  if (post.lastModified) {
    metadata.openGraph.modifiedTime = new Date(post.lastModified).toISOString();
  }

  return metadata;
}

// Helper to generate BlogPosting JSON-LD
const generateBlogPostingJsonLd = (post: BlogPost, locale: string) => {
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
    keywords: post.keywords || post.tags?.join(", ") || "",
  };
  return JSON.stringify(schema);
};

// Blog Post Page Component
export default function Page({ params }: PageParams) {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound(); // Trigger 404 if post doesn't exist
  }

  // Format dates for display
  const publishedDate = format(parseISO(post.date), "MMMM d, yyyy");
  const modifiedDate = post.lastModified
    ? format(parseISO(post.lastModified), "MMMM d, yyyy")
    : null;

  const jsonLdString = generateBlogPostingJsonLd(post, params.locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdString }}
      />
      <main className="flex min-h-screen flex-col">
        <Navbar />
        <NavbarSpacer />

        <article className="container mx-auto px-4 py-8 md:py-12 max-w-3xl">
          {/* Post Header */}
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-gray-900">
              {post.title}
            </h1>
            <div className="text-sm text-gray-500">
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
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </header>

          {/* Post Content */}
          <div
            className="prose prose-lg max-w-none prose-img:rounded-lg prose-a:text-blue-600 hover:prose-a:text-blue-800"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </article>

        <Footer />
      </main>
    </>
  );
}

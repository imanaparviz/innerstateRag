import { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/blog"; // Import the function to get blog posts

const BASE_URL = "https://innerstaterag.com"; // Replaced placeholder with actual domain

export default function sitemap(): MetadataRoute.Sitemap {
  // Get all blog posts
  const posts = getBlogPosts();

  // Create sitemap entries for blog posts
  const blogPostEntries: MetadataRoute.Sitemap = posts.map(
    ({ slug, date }) => ({
      url: `${BASE_URL}/blog/${slug}`,
      lastModified: new Date(date).toISOString(),
      changeFrequency: "monthly", // Or 'weekly'/'yearly' depending on update frequency
      priority: 0.8, // Give blog posts a high priority
    })
  );

  // Define static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date().toISOString(), // Use current date or a specific last modified date
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/rag`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/inner-state`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/inner-state-rag`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/rag-glossary`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/api`,
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly", // Since it's a placeholder
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/learning`,
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly", // Since it's a placeholder
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/teams`,
      lastModified: new Date().toISOString(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: new Date().toISOString(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    // Add other static pages here if any
  ];

  // Combine static pages and blog posts
  return [...staticPages, ...blogPostEntries];
}

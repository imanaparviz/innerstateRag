import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";

const postsDirectory = path.join(process.cwd(), "content/blog");

/**
 * Represents the structure of a blog post, including metadata and HTML content.
 * Fields marked as optional should be added to the Markdown frontmatter if needed.
 */
export interface BlogPost {
  slug: string; // URL slug derived from filename
  title: string; // Post title (H1)
  date: string; // Publication date (YYYY-MM-DD)
  lastModified?: string; // Optional: Last modified date (YYYY-MM-DD) - Important for SEO!
  description: string; // Meta description & post summary
  keywords?: string; // Meta keywords (comma-separated string)
  author?: string; // Optional: Author name (useful for E-E-A-T)
  tags?: string[]; // Optional: Array of tags/categories
  ogImage?: string; // Optional: Path for OpenGraph image
  twitterImage?: string; // Optional: Path for Twitter card image
  contentHtml: string; // Processed HTML content of the post
  content: string; // Raw markdown content
}

/**
 * Reads all blog post metadata (excluding content) from the filesystem.
 * Returns an array of post metadata objects, sorted by date descending.
 */
export function getBlogPosts(): Omit<BlogPost, "contentHtml" | "content">[] {
  let filenames: string[] = [];
  try {
    filenames = fs.readdirSync(postsDirectory);
  } catch (err) {
    console.warn(
      "Blog directory not found at:",
      postsDirectory,
      "Returning empty blog post list."
    );
    return [];
  }

  const allPostsData = filenames
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, filename);
      try {
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const matterResult = matter(fileContents);

        // Provide default values and extract metadata safely
        const postData = {
          slug,
          title: matterResult.data.title || "Untitled Post",
          date:
            matterResult.data.date || new Date().toISOString().split("T")[0],
          lastModified: matterResult.data.lastModified, // Optional
          description:
            matterResult.data.description || "No description provided.",
          keywords: matterResult.data.keywords, // Optional
          author: matterResult.data.author, // Optional
          tags: matterResult.data.tags, // Optional
          ogImage: matterResult.data.ogImage, // Optional
          twitterImage: matterResult.data.twitterImage, // Optional
        };

        // Basic validation
        if (postData.tags && !Array.isArray(postData.tags)) {
          console.warn(
            `Tags field in ${filename} is not an array. Converting to array.`
          );
          // Attempt to convert if it's a string, otherwise ignore
          postData.tags =
            typeof postData.tags === "string"
              ? postData.tags.split(",").map((t) => t.trim())
              : undefined;
        }
        // Ensure date is valid before returning
        if (isNaN(new Date(postData.date).getTime())) {
          console.warn(`Invalid date format in ${filename}. Skipping post.`);
          return null;
        }

        return postData;
      } catch (err) {
        console.error(`Error processing blog post ${filename}:`, err);
        return null; // Return null on error during processing
      }
    })
    .filter((post): post is Exclude<typeof post, null> => post !== null); // Filter out nulls from errors

  // Sort posts by valid date in descending order
  return allPostsData.sort((a, b) => {
    // Explicitly handle potential date parsing issues just in case, though filtered above
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return (isNaN(dateB) ? 0 : dateB) - (isNaN(dateA) ? 0 : dateA);
  });
}

/**
 * Reads a single blog post by slug, including its processed HTML content.
 * Returns the full BlogPost object or undefined if not found or error occurs.
 */
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  let fileContents;
  try {
    fileContents = fs.readFileSync(fullPath, "utf8");
  } catch (err) {
    console.error(`Blog post not found or error reading: ${fullPath}`, err);
    return undefined;
  }

  let matterResult;
  try {
    matterResult = matter(fileContents);
  } catch (err) {
    console.error(`Error reading or parsing frontmatter for ${slug}.md:`, err);
    return undefined;
  }

  let processedContent;
  try {
    processedContent = remark()
      .use(remarkGfm) // GitHub Flavored Markdown for tables, task lists, etc.
      .use(html, { sanitize: false })
      .processSync(matterResult.content);

    // Post-process the HTML to ensure proper styling
    let formattedHtml = processedContent.toString();

    // Improve headings and list rendering
    formattedHtml = formattedHtml
      // Make sure headings have proper margins and styling
      .replace(/<h1/g, '<h1 class="text-3xl font-bold my-6"')
      .replace(/<h2/g, '<h2 class="text-2xl font-bold mt-8 mb-4"')
      .replace(/<h3/g, '<h3 class="text-xl font-bold mt-6 mb-3"')
      // Style lists properly
      .replace(/<ul>/g, '<ul class="my-4 list-disc pl-8">')
      .replace(/<ol>/g, '<ol class="my-4 list-decimal pl-8">')
      .replace(/<li>/g, '<li class="my-2">');

    // Replace the processed content
    processedContent = { toString: () => formattedHtml };

    const content = matterResult.content;

    const postData: Omit<BlogPost, "tags"> & { tags?: string[] | string } = {
      slug,
      contentHtml: processedContent.toString(),
      content,
      title: matterResult.data.title || "Untitled Post",
      date: matterResult.data.date || new Date().toISOString().split("T")[0],
      lastModified: matterResult.data.lastModified,
      description: matterResult.data.description || "No description provided.",
      keywords: matterResult.data.keywords,
      author: matterResult.data.author,
      tags: matterResult.data.tags, // Keep original type here for validation
      ogImage: matterResult.data.ogImage,
      twitterImage: matterResult.data.twitterImage,
    };

    // Validate and potentially convert tags
    let validatedTags: string[] | undefined = undefined;
    if (postData.tags) {
      if (Array.isArray(postData.tags)) {
        validatedTags = postData.tags;
      } else if (typeof postData.tags === "string") {
        console.warn(
          `Tags field in ${slug}.md is a string. Converting to array.`
        );
        validatedTags = postData.tags.split(",").map((t) => t.trim());
      } else {
        console.warn(
          `Tags field in ${slug}.md has invalid type. Ignoring tags.`
        );
      }
    }

    // Validate date
    if (isNaN(new Date(postData.date).getTime())) {
      console.error(`Invalid date format in ${slug}.md. Cannot process post.`);
      return undefined;
    }

    // Return the final BlogPost object with validated tags
    return { ...postData, tags: validatedTags };
  } catch (remarkErr) {
    console.error(`Error processing markdown for ${slug}.md:`, remarkErr);
    return undefined;
  }
}

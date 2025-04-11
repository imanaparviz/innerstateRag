import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  twitterImage?: string;
  contentHtml: string;
  // Add other frontmatter fields as needed (e.g., author, tags)
}

export function getBlogPosts(): Omit<BlogPost, "contentHtml">[] {
  // Get file names under /content/blog
  let filenames: string[] = [];
  try {
    filenames = fs.readdirSync(postsDirectory);
  } catch (err) {
    // If directory doesn't exist, return empty array
    console.warn("Blog directory not found at", postsDirectory);
    return [];
  }

  const allPostsData = filenames
    .filter((filename) => filename.endsWith(".md")) // Only include markdown files
    .map((filename) => {
      // Remove ".md" from file name to get slug
      const slug = filename.replace(/\.md$/, "");

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the slug
      return {
        slug,
        title: matterResult.data.title || "Untitled Post",
        date: matterResult.data.date || new Date().toISOString().split("T")[0],
        description:
          matterResult.data.description || "No description provided.",
        keywords: matterResult.data.keywords,
        ogImage: matterResult.data.ogImage,
        twitterImage: matterResult.data.twitterImage,
        // ... add other frontmatter data here
      };
    });

  // Sort posts by date in descending order
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  try {
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    // We use await here because remark processing is async
    const processedContent = remark()
      .use(html)
      .processSync(matterResult.content); // Use processSync for simplicity here
    const contentHtml = processedContent.toString();

    // Combine the data with the slug and contentHtml
    return {
      slug,
      contentHtml,
      title: matterResult.data.title || "Untitled Post",
      date: matterResult.data.date || new Date().toISOString().split("T")[0],
      description: matterResult.data.description || "No description provided.",
      keywords: matterResult.data.keywords,
      ogImage: matterResult.data.ogImage,
      twitterImage: matterResult.data.twitterImage,
      // ... add other frontmatter data here
    };
  } catch (err) {
    // If file doesn't exist or other error, return undefined
    console.error(`Error reading blog post ${slug}:`, err);
    return undefined;
  }
}

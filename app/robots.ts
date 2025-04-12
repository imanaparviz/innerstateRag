import { MetadataRoute } from "next";

/**
 * Generates robots.txt content
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 */
export default function robots(): MetadataRoute.Robots {
  // Return a robots.txt object
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/private/"],
      },
    ],
    sitemap: "https://innerstaterag.com/sitemap.xml",
  };
}

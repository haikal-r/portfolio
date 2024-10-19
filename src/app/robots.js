import { siteConfig } from "@/constants";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: [
      `${siteConfig.url}/sitemap.xml`,
      `${siteConfig.url}/about/sitemap.xml`,
      `${siteConfig.url}/activity/sitemap.xml`,
    ],
  };
}

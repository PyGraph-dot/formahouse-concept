import type { MetadataRoute } from "next";
import { properties } from "@/lib/properties";
import { articles } from "@/lib/journal";
import { getSiteUrl } from "@/lib/site";

const siteUrl = getSiteUrl();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/homes", "/approach", "/journal", "/visit", "/contact"];

  return [
    ...staticRoutes.map((route) => ({ url: `${siteUrl}${route}`, changeFrequency: "monthly" as const, priority: route === "" ? 1 : 0.7 })),
    ...properties.map((property) => ({ url: `${siteUrl}/homes/${property.slug}`, changeFrequency: "monthly" as const, priority: 0.8 })),
    ...articles.map((article) => ({ url: `${siteUrl}/journal/${article.slug}`, changeFrequency: "yearly" as const, priority: 0.5 })),
  ];
}

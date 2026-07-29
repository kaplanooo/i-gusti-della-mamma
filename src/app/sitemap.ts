import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/restaurant";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/menu", "/cave-a-vins", "/a-propos", "/contact"];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}

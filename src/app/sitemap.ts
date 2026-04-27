import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const LAST_MODIFIED = new Date("2026-04-25");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.homeUrl,
      lastModified: LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}

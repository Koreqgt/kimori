import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";
import { isPublicSite } from "@/lib/site-access";

export default function robots(): MetadataRoute.Robots {
  if (!isPublicSite()) {
    return {
      rules: [
        {
          userAgent: "*",
          disallow: "/",
        },
      ],
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: new URL(siteConfig.url).host,
  };
}

// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: "https://www.cartravelsongole.in/",
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: "https://www.cartravelsongole.in/services",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://www.cartravelsongole.in/routes",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://www.cartravelsongole.in/fleet",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://www.cartravelsongole.in/contact",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://www.cartravelsongole.in/why-us",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    // Optional but helpful
    {
      url: "https://www.cartravelsongole.in/fleet/sedan",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://www.cartravelsongole.in/fleet/suv",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}

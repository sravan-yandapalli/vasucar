// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: "https://cartravelsongole.in/",
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: "https://cartravelsongole.in/services",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://cartravelsongole.in/routes",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: "https://cartravelsongole.in/booking",
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: "https://cartravelsongole.in/fleet",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://cartravelsongole.in/contact",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://cartravelsongole.in/why-us",
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.65,
    },
  ];
}

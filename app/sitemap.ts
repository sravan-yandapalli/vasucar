// app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://cartravelsongole.in/",
      lastModified: new Date(),
    },
    {
      url: "https://cartravelsongole.in/services",
      lastModified: new Date(),
    },
    {
      url: "https://cartravelsongole.in/routes",
      lastModified: new Date(),
    },
    {
      url: "https://cartravelsongole.in/fleet",
      lastModified: new Date(),
    },
    {
      url: "https://cartravelsongole.in/contact",
      lastModified: new Date(),
    },
    {
      url: "https://cartravelsongole.in/why-us",
      lastModified: new Date(),
    },
  ];
}

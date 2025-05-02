import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://geo-generator.vercel.app"

  // Define your routes
  const routes = ["", "/about", "/help", "/privacy", "/terms"]

  // Map routes to sitemap entries
  const routeEntries = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }))

  return routeEntries
}

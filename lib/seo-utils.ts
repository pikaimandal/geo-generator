export function formatKeywords(keywords: string[]): string {
  return keywords.join(", ")
}

export function generateCanonicalUrl(path: string): string {
  const baseUrl = "https://geo-generator.vercel.app"
  return `${baseUrl}${path}`
}

export function generateStructuredData(data: Record<string, any>): string {
  return JSON.stringify({
    "@context": "https://schema.org",
    ...data,
  })
}

export function generateSocialTags(title: string, description: string, imageUrl: string): Record<string, string> {
  return {
    "og:title": title,
    "og:description": description,
    "og:image": imageUrl,
    "twitter:title": title,
    "twitter:description": description,
    "twitter:image": imageUrl,
    "twitter:card": "summary_large_image",
  }
}

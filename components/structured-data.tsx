"use client"

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "GEO Generator",
    description:
      "Generate llms.txt files from websites for Large Language Models. Improve your website's visibility to AI with Generative Engine Optimization.",
    url: "https://geo-generator.vercel.app",
    applicationCategory: "WebApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: "Generate llms.txt files, Website analysis, AI optimization",
    author: {
      "@type": "Organization",
      name: "GEO Generator Team",
      url: "https://geo-generator.vercel.app",
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}

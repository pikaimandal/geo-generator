import type React from "react"
import "./globals.css"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@/components/analytics"
import { PageTracker } from "@/components/page-tracker"
import { StructuredData } from "@/components/structured-data"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  title: {
    default: "GEO Generator - Generate LLM-friendly content for websites",
    template: "%s | GEO Generator",
  },
  description:
    "Generate llms.txt files from websites for Large Language Models. Improve your website's visibility to AI with Generative Engine Optimization.",
  keywords: [
    "GEO Generator",
    "llms.txt generator",
    "website analysis",
    "AI optimization",
    "Generative Engine Optimization",
    "LLM content",
    "AI-friendly websites",
    "website visibility",
    "SEO for AI",
    "AI content optimization",
  ],
  authors: [{ name: "GEO Generator Team" }],
  creator: "GEO Generator",
  publisher: "GEO Generator",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://geo-generator.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "GEO Generator - Generate LLM-friendly content for websites",
    description:
      "Generate llms.txt files from websites for Large Language Models. Improve your website's visibility to AI with Generative Engine Optimization.",
    url: "https://geo-generator.vercel.app",
    siteName: "GEO Generator",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GEO Generator - Generate LLM-friendly content",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GEO Generator - Generate LLM-friendly content for websites",
    description:
      "Generate llms.txt files from websites for Large Language Models. Improve your website's visibility to AI with Generative Engine Optimization.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
          {children}
          <StructuredData />
        </ThemeProvider>
        <Analytics />
        <Suspense fallback={null}>
          <PageTracker />
        </Suspense>
      </body>
    </html>
  )
}

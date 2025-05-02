import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About GEO Generator - Generative Engine Optimization",
  description:
    "Learn about GEO Generator, the tool that helps optimize your website content for Large Language Models (LLMs) through Generative Engine Optimization.",
}

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <div className="w-full max-w-4xl mx-auto px-4 py-12">
        <Link href="/" className="text-gray-400 hover:text-white mb-8 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-8">About GEO Generator</h1>

        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-6">
            GEO Generator is a tool designed to help website owners optimize their content for Large Language Models
            (LLMs) through Generative Engine Optimization.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">Our Mission</h2>
          <p className="text-gray-300 mb-6">
            As AI systems become increasingly important in how information is discovered and processed online, we
            believe website owners need tools to ensure their content is properly understood by these systems. GEO
            Generator bridges the gap between traditional websites and AI understanding.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">What is Generative Engine Optimization?</h2>
          <p className="text-gray-300 mb-6">
            Generative Engine Optimization (GEO) is the practice of optimizing web content specifically for AI systems
            and Large Language Models. Similar to how SEO helps websites rank better in search engines, GEO helps
            websites be better understood by AI systems.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">The llms.txt Standard</h2>
          <p className="text-gray-300 mb-6">
            The llms.txt file format is a standardized way to provide content to Large Language Models. By creating an
            llms.txt file for your website, you can ensure that AI systems have access to a clean, structured version of
            your content that's optimized for their understanding.
          </p>
          <p className="text-gray-300 mb-6">
            Learn more about the llms.txt standard at{" "}
            <a
              href="https://llmstxt.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300"
            >
              llmstxt.org
            </a>
            .
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">Contact Us</h2>
          <p className="text-gray-300 mb-6">
            Have questions or feedback about GEO Generator? We'd love to hear from you. Contact us at{" "}
            <a href="mailto:contact@geo-generator.com" className="text-blue-400 hover:text-blue-300">
              contact@geo-generator.com
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  )
}

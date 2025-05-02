import { GeoGeneratorForm } from "@/components/geo-generator-form"
import Link from "next/link"
import Image from "next/image"

function FeaturesSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "AI-Optimized Content",
          description: "Generate content specifically formatted for Large Language Models.",
        },
        {
          title: "Improved AI Visibility",
          description: "Enhance your website's visibility in AI-powered search systems.",
        },
        {
          title: "llmstxt.org Compliant",
          description: "All generated files follow the official llmstxt.org specifications.",
        },
        {
          title: "Fast & Efficient",
          description: "Analyze any website and generate optimized content in seconds.",
        },
        {
          title: "Content Extraction",
          description: "Automatically extracts the most important content from your website.",
        },
        {
          title: "Easy Implementation",
          description: "Simply download the generated file and add it to your website.",
        },
      ].map((feature, index) => (
        <div key={index} className="bg-gray-800 p-6 rounded-lg">
          <div>
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function HowItWorksSection() {
  return (
    <div className="space-y-12">
      {[
        {
          number: "01",
          title: "Enter Website URL",
          description: "Input the URL of the website you want to analyze.",
        },
        {
          number: "02",
          title: "Generate llms.txt",
          description: "Our system analyzes the website content and extracts the most important information.",
        },
        {
          number: "03",
          title: "Download File",
          description: "Download the generated llms.txt file, formatted according to llmstxt.org specifications.",
        },
        {
          number: "04",
          title: "Add to Your Website",
          description: "Upload the llms.txt file to your website's root directory.",
        },
      ].map((step, index) => (
        <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
          <div className="bg-gray-800 text-2xl font-bold p-4 rounded-lg w-16 h-16 flex items-center justify-center">
            {step.number}
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
            <p className="text-gray-400 max-w-2xl">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function FAQSection() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      {[
        {
          question: "What is an llms.txt file?",
          answer: "An llms.txt file is a standardized format for providing content to Large Language Models (LLMs).",
        },
        {
          question: "Why do I need to optimize my website for LLMs?",
          answer:
            "As AI systems become more prevalent in content discovery, optimizing your website for these systems is becoming as important as traditional SEO.",
        },
        {
          question: "How do I implement the llms.txt file on my website?",
          answer:
            "Simply upload the generated llms.txt file to your website's root directory, making it accessible at yourdomain.com/llms.txt.",
        },
      ].map((faq, index) => (
        <div key={index} className="mb-4 border-b border-gray-800 pb-4">
          <h3 className="text-xl font-medium mb-2">{faq.question}</h3>
          <p className="text-gray-400">{faq.answer}</p>
        </div>
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-black text-white">
      <header className="w-full max-w-6xl mx-auto px-4 py-8">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center gap-2">
            <Image src="/GeoGenerator.png" alt="GEO Generator Logo" width={40} height={40} priority />
            <span className="text-xl font-bold">GEO Generator</span>
          </div>
          <div className="flex gap-6">
            <Link href="/about" className="hover:text-gray-300 transition-colors">
              About
            </Link>
            <Link href="/help" className="hover:text-gray-300 transition-colors">
              Help
            </Link>
            <Link
              href="https://llmstxt.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
            >
              llmstxt.org
            </Link>
          </div>
        </nav>

        <div className="w-full max-w-3xl mx-auto flex flex-col items-center justify-center py-12">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400">
              GEO Generator
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 text-center mb-8 max-w-2xl">
            Generate LLM-friendly content from any website with Generative Engine Optimization
          </p>

          <GeoGeneratorForm />
        </div>
      </header>

      <section className="w-full bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Use GEO Generator?</h2>
          <FeaturesSection />
        </div>
      </section>

      <section className="w-full py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
          <HowItWorksSection />
        </div>
      </section>

      <section className="w-full bg-gray-900 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <FAQSection />
        </div>
      </section>

      <footer className="w-full py-12 bg-black border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">GEO Generator</h3>
              <p className="text-gray-400">
                Optimize your website content for Large Language Models with our llms.txt generator.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/help" className="text-gray-400 hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://llmstxt.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    llmstxt.org
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} GEO Generator. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  )
}

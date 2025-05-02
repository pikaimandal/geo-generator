import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Help Center - GEO Generator",
  description:
    "Get help with using GEO Generator to create llms.txt files and optimize your website for Large Language Models.",
}

export default function HelpPage() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white">
      <div className="w-full max-w-4xl mx-auto px-4 py-12">
        <Link href="/" className="text-gray-400 hover:text-white mb-8 inline-block">
          ← Back to Home
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold mb-8">Help Center</h1>

        <p className="text-xl text-gray-300 mb-12">
          Find answers to common questions about using GEO Generator and implementing llms.txt files on your website.
        </p>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-6">Getting Started</h2>
            <div className="space-y-6">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-3">How do I generate an llms.txt file?</h3>
                <ol className="list-decimal pl-5 space-y-2 text-gray-300">
                  <li>Enter your website URL in the input field on the homepage</li>
                  <li>Optionally specify a path if you want to focus on a specific page</li>
                  <li>Click the "Generate llms.txt" button</li>
                  <li>Wait for the analysis to complete</li>
                  <li>Download the generated file using the "Download llms.txt" button</li>
                </ol>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-3">What is an llms.txt file?</h3>
                <p className="text-gray-300">
                  An llms.txt file is a standardized format for providing content to Large Language Models (LLMs). It
                  helps AI systems better understand and process your website content, similar to how robots.txt helps
                  search engines. The file contains a clean, structured version of your website content that's optimized
                  for AI understanding.
                </p>
              </div>

              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-3">How do I implement the llms.txt file on my website?</h3>
                <p className="text-gray-300">
                  After downloading the llms.txt file, you need to upload it to your website's root directory. This
                  makes it accessible at yourdomain.com/llms.txt. The exact process depends on your hosting provider:
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-300">
                  <li>For most hosting providers, you can use FTP or the file manager in your hosting control panel</li>
                  <li>For WordPress sites, you can use a plugin like "File Manager" to upload the file</li>
                  <li>For GitHub Pages, add the file to your repository</li>
                  <li>For Vercel, add the file to your public directory</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-16 p-6 bg-gray-900 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-gray-300 mb-4">
            If you couldn't find the answer to your question, feel free to contact our support team.
          </p>
          <Link
            href="#"
            className="inline-block bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-md"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </main>
  )
}

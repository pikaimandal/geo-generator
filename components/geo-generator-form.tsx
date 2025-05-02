"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Loader2, Download, AlertCircle, CheckCircle2, Globe, FileText } from "lucide-react"
import { generateLlmsText } from "@/actions/generate-llms-text"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Card, CardContent } from "@/components/ui/card"

export function GeoGeneratorForm() {
  const [url, setUrl] = useState("")
  const [path, setPath] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [generatedText, setGeneratedText] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!url) {
      setError("Please enter a valid URL")
      return
    }

    try {
      setIsLoading(true)
      setError(null)
      setSuccess(false)

      const fullUrl = path ? `${url}${path.startsWith("/") ? path : `/${path}`}` : url
      const result = await generateLlmsText(fullUrl)

      if (result.error) {
        setError(result.error)
      } else if (result.text) {
        setGeneratedText(result.text)
        setSuccess(true)
      }
    } catch (err) {
      setError("An unexpected error occurred. Please try again.")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleDownload = () => {
    if (!generatedText) return

    const blob = new Blob([generatedText], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "llms.txt"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <Card className="w-full bg-gray-900 border-gray-800">
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="url" className="text-lg">
              Website URL
            </Label>
            <div className="flex items-center relative">
              <Globe className="w-5 h-5 absolute left-3 text-gray-500" />
              <Input
                id="url"
                placeholder="https://example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="bg-gray-800 border-gray-700 text-white pl-10"
                aria-label="Website URL"
              />
            </div>
            <p className="text-sm text-gray-400">Enter the full URL including http:// or https://</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="path" className="text-lg">
              Path (optional)
            </Label>
            <div className="flex items-center relative">
              <FileText className="w-5 h-5 absolute left-3 text-gray-500" />
              <Input
                id="path"
                placeholder="/blog/article-1"
                value={path}
                onChange={(e) => setPath(e.target.value)}
                className="bg-gray-800 border-gray-700 text-white pl-10"
                aria-label="Path (optional)"
              />
            </div>
            <p className="text-sm text-gray-400">Specify a particular page or section of the website</p>
          </div>

          <Button
            type="submit"
            className="w-full bg-gray-700 hover:bg-gray-600 text-white text-lg py-6"
            disabled={isLoading}
            aria-label="Generate llms.txt file"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Analyzing Website...
              </>
            ) : (
              "Generate llms.txt"
            )}
          </Button>
        </form>

        {error && (
          <Alert variant="destructive" className="mt-6 bg-red-900/20 border-red-800">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {success && generatedText && (
          <div className="mt-6 space-y-4">
            <Alert className="bg-green-900/20 border-green-800">
              <CheckCircle2 className="h-4 w-4" />
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>
                Your llms.txt file has been generated successfully. You should now create a root file in your website
                like https://example.com/llms.txt
              </AlertDescription>
            </Alert>

            <div className="p-4 bg-gray-800 rounded-md border border-gray-700 max-h-60 overflow-y-auto">
              <pre className="text-sm text-gray-300 whitespace-pre-wrap">
                {generatedText.slice(0, 500)}
                {generatedText.length > 500 ? "..." : ""}
              </pre>
            </div>

            <Button onClick={handleDownload} className="w-full bg-gray-700 hover:bg-gray-600 text-white">
              <Download className="mr-2 h-5 w-5" />
              Download llms.txt
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

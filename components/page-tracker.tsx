"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { useEffect } from "react"

export function PageTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window !== "undefined") {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : "")
      // Push to dataLayer only if gtag is defined
      if (window.gtag) {
        window.gtag("config", "G-MEASUREMENT_ID", {
          page_path: url,
        })
      }
    }
  }, [pathname, searchParams])

  return null
}

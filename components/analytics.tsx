"use client"

import Script from "next/script"

export function Analytics() {
  return (
    <>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=G-Q064VG22RY`} />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-Q064VG22RY', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}

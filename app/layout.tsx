import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { ErrorBoundary } from "@/components/error-boundary"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Unimax-SL | Premier Logistics Solutions in Sierra Leone",
  description:
    "Sierra Leone's leading logistics company since 2012. Offering custom clearance, package delivery, freight services, and corporate solutions across all cities in Sierra Leone. 120+ monthly deliveries, 24/7 support.",
  keywords:
    "logistics Sierra Leone, package delivery Freetown, freight services, custom clearance, corporate logistics, Unimax-SL, shipping Sierra Leone",
  authors: [{ name: "Unimax-SL" }],
  creator: "Unimax-SL",
  publisher: "Unimax-SL",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://unimax-sl.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Unimax-SL | Premier Logistics Solutions in Sierra Leone",
    description:
      "Sierra Leone's leading logistics company since 2012. Professional delivery services across all cities with 24/7 support.",
    url: "https://unimax-sl.com",
    siteName: "Unimax-SL",
    images: [
      {
        url: "/images/team-group-photo.jpg",
        width: 1200,
        height: 630,
        alt: "Unimax-SL Professional Logistics Team",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Unimax-SL | Premier Logistics Solutions in Sierra Leone",
    description:
      "Sierra Leone's leading logistics company since 2012. Professional delivery services across all cities.",
    images: ["/images/team-group-photo.jpg"],
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
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/images/logo.png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <meta name="theme-color" content="#3D3540" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Unimax-SL",
              description:
                "Sierra Leone's premier logistics company, delivering excellence across the nation since 2012.",
              url: "https://unimax-sl.com",
              logo: "https://unimax-sl.com/images/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+232-78-616420",
                contactType: "customer service",
                availableLanguage: ["English", "Krio", "Temne", "Mende"],
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "48 Wellington Street",
                addressLocality: "Freetown",
                addressCountry: "Sierra Leone",
              },
              sameAs: [
                "https://www.facebook.com/UnimaxSLLTD/",
                "https://www.instagram.com/unimaxslofficial/",
                "https://www.linkedin.com/in/fatima-sesay-416b262b?originalSubdomain=sl",
              ],
              areaServed: {
                "@type": "Country",
                name: "Sierra Leone",
              },
              serviceType: [
                "Package Delivery",
                "Corporate Solutions",
                "Transport Services",
                "Freight Services",
                "Custom Clearance",
                "Express Delivery",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ErrorBoundary>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            {children}
            <Toaster />
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}

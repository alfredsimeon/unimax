import Head from "next/head"

interface SEOHeadProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
}

export function SEOHead({
  title = "Unimax-SL | Premier Logistics Solutions in Sierra Leone",
  description = "Sierra Leone's leading logistics company since 2012. Professional delivery services across all cities with 24/7 support.",
  keywords = "logistics Sierra Leone, package delivery Freetown, freight services, custom clearance, corporate logistics",
  image = "/images/team-group-photo.jpg",
  url = "https://unimax-sl.com",
}: SEOHeadProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical */}
      <link rel="canonical" href={url} />
    </Head>
  )
}

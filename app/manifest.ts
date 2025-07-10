import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Unimax-SL - Premier Logistics Solutions",
    short_name: "Unimax-SL",
    description:
      "Sierra Leone's leading logistics company since 2012. Professional delivery services across all cities with 24/7 support and GPS tracking.",
    start_url: "/",
    display: "standalone",
    background_color: "#3D3540",
    theme_color: "#3D3540",
    icons: [
      {
        src: "/images/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    categories: ["logistics", "delivery", "transport", "business"],
    lang: "en",
    orientation: "portrait-primary",
  }
}

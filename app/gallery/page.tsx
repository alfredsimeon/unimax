"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X, ZoomIn } from "lucide-react"

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [images, setImages] = useState<string[]>([])

  // All images from the public/images folder
  const allImages = [
    "/images/team-safety-gear.jpg",
    "/images/motorcycle-fleet-1.jpg",
    "/images/motorcycle-fleet-2.jpg",
    "/images/motorcycle-fleet-3.jpg",
    "/images/motorcycle-fleet-4.jpg",
    "/images/delivery-van-rider.jpg",
    "/images/coastal-delivery.jpg",
    "/images/team-group-photo.jpg",
    "/images/delivery-staff-package.jpg",
    "/images/delivery-van-staff.jpg",
  ]

  useEffect(() => {
    // In a real implementation, this would dynamically load all images from the public/images folder
    setImages(allImages)
  }, [])

  const categories = [
    {
      name: "All Images",
      filter: "all",
    },
    {
      name: "Team & Staff",
      filter: "team",
    },
    {
      name: "Fleet & Vehicles",
      filter: "fleet",
    },
    {
      name: "Operations",
      filter: "operations",
    },
  ]

  const getImageCategory = (imagePath: string) => {
    if (imagePath.includes("team") || imagePath.includes("staff")) return "team"
    if (imagePath.includes("motorcycle") || imagePath.includes("van") || imagePath.includes("fleet")) return "fleet"
    return "operations"
  }

  const [activeFilter, setActiveFilter] = useState("all")

  const filteredImages = images.filter((image) => {
    if (activeFilter === "all") return true
    return getImageCategory(image) === activeFilter
  })

  const getImageTitle = (imagePath: string) => {
    const filename = imagePath.split("/").pop()?.replace(".jpg", "").replace(".jpeg", "").replace(".png", "")
    return (
      filename
        ?.split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ") || "Unimax-SL Image"
    )
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              Explore our operations, team, and fleet through our comprehensive image gallery
            </p>
          </div>
        </section>

        {/* Filter Buttons */}
        <section className="py-8 bg-muted/30">
          <div className="container">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category.filter}
                  variant={activeFilter === category.filter ? "default" : "outline"}
                  onClick={() => setActiveFilter(category.filter)}
                  className="min-w-[120px]"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredImages.map((image, index) => (
                <Card
                  key={index}
                  className="group overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative aspect-square">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={getImageTitle(image)}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      onClick={() => setSelectedImage(image)}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-primary text-sm">{getImageTitle(image)}</h3>
                  </div>
                </Card>
              ))}
            </div>

            {filteredImages.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">No images found for the selected category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Image Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-[90vh] w-full">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 text-white"
                onClick={() => setSelectedImage(null)}
              >
                <X className="h-6 w-6" />
              </Button>
              <div className="relative w-full h-[80vh]">
                <Image
                  src={selectedImage || "/placeholder.svg"}
                  alt={getImageTitle(selectedImage)}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 text-white p-4 rounded">
                <h3 className="text-lg font-semibold">{getImageTitle(selectedImage)}</h3>
                <p className="text-sm text-white/80">Unimax-SL Professional Logistics Services</p>
              </div>
            </div>
          </div>
        )}

        {/* Gallery Info */}
        <section className="py-16 bg-muted/30">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Visual Story</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              These images showcase our professional team, modern fleet, and comprehensive operations across Sierra
              Leone. From our dedicated staff to our state-of-the-art vehicles, every image tells the story of our
              commitment to excellence in logistics services.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">{images.length}+</div>
                <p className="text-muted-foreground">Images Available</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">50+</div>
                <p className="text-muted-foreground">Team Members Featured</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <p className="text-muted-foreground">Authentic Operations</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Private...",
      role: "Operations Manager",
      rating: 5,
      text: "Unimax-SL has been our trusted logistics partner for over 3 years. Their reliability and professional service have helped us expand our business across Sierra Leone. The GPS tracking and 24/7 support are game-changers!",
      image: "/images/team-group-photo.jpg",
    },
    {
      name: "Mohamed Kamara",
      company: "Freetown Electronics",
      role: "CEO",
      rating: 5,
      text: "Outstanding service! They handle our daily deliveries with such care and precision. Our customers always receive their orders on time and in perfect condition. Highly recommend Unimax-SL for any business.",
      image: "/images/delivery-staff-package.jpg",
    },
    {
      name: "Fatima Sesay",
      company: "Sierra Medical Supplies",
      role: "Logistics Coordinator",
      rating: 5,
      text: "When it comes to medical supplies, timing is everything. Unimax-SL understands this and consistently delivers our critical shipments on schedule. Their team is professional and trustworthy.",
      image: "/images/coastal-delivery.jpg",
    },
    {
      name: "James Williams",
      company: "Construction Plus",
      role: "Project Manager",
      rating: 5,
      text: "From small packages to heavy equipment transport, Unimax-SL handles everything with expertise. Their custom clearance service saved us weeks of delays. Exceptional service across all cities!",
      image: "/images/delivery-van-staff.jpg",
    },
    {
      name: "Aminata Bangura",
      company: "Fashion Forward",
      role: "Store Owner",
      rating: 5,
      text: "As a small business owner, I need reliable delivery partners. Unimax-SL treats my business like their top priority. Their rates are fair and the service is always excellent. Thank you for helping my business grow!",
      image: "/images/motorcycle-fleet-1.jpg",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
    ))
  }

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about our services.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-white shadow-lg">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center justify-center mb-6">
                <Quote className="h-12 w-12 text-accent/20" />
              </div>

              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">{renderStars(testimonials[currentTestimonial].rating)}</div>
                <blockquote className="text-lg md:text-xl text-muted-foreground italic leading-relaxed mb-6">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
              </div>

              <div className="flex items-center justify-center space-x-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                    alt={testimonials[currentTestimonial].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-primary">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonials[currentTestimonial].role}</p>
                  <p className="text-sm font-medium text-accent">{testimonials[currentTestimonial].company}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? "bg-accent" : "bg-muted-foreground/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-accent mb-1">500+</div>
            <p className="text-sm text-muted-foreground">Happy Customers</p>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-accent mb-1">4.9/5</div>
            <p className="text-sm text-muted-foreground">Average Rating</p>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-accent mb-1">98%</div>
            <p className="text-sm text-muted-foreground">Customer Retention</p>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-accent mb-1">24/7</div>
            <p className="text-sm text-muted-foreground">Support Available</p>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Eye, Users, Shield } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function AboutPage() {
  const [currentAchievement, setCurrentAchievement] = useState(0)

  const achievements = [
    {
      title: "ISO 9001 Certification",
      year: "2018",
      description: "Quality management system certification",
      image: "/images/team-safety-gear.jpg",
    },
    {
      title: "Best Logistics Company Award",
      year: "2020",
      description: "Sierra Leone Business Excellence Awards",
      image: "/images/team-group-photo.jpg",
    },
    {
      title: "Customer Service Excellence",
      year: "2021",
      description: "Outstanding customer satisfaction rating",
      image: "/images/delivery-staff-package.jpg",
    },
    {
      title: "Safety Excellence Award",
      year: "2021",
      description: "Zero accidents record for 2 consecutive years",
      image: "/images/delivery-van-staff.jpg",
    },
    {
      title: "Innovation in Logistics",
      year: "2022",
      description: "GPS tracking system implementation",
      image: "/images/coastal-delivery.jpg",
    },
    {
      title: "Environmental Responsibility",
      year: "2022",
      description: "Green logistics initiative certification",
      image: "/images/motorcycle-fleet-1.jpg",
    },
    {
      title: "Community Impact Award",
      year: "2023",
      description: "Supporting local communities and businesses",
      image: "/images/motorcycle-fleet-2.jpg",
    },
    {
      title: "Technology Excellence",
      year: "2023",
      description: "Digital transformation in logistics",
      image: "/images/motorcycle-fleet-3.jpg",
    },
    {
      title: "Employee Excellence Award",
      year: "2024",
      description: "Best workplace practices recognition",
      image: "/images/motorcycle-fleet-4.jpg",
    },
    {
      title: "Regional Expansion Recognition",
      year: "2024",
      description: "Successful coverage of all Sierra Leone cities",
      image: "/images/delivery-van-rider.jpg",
    },
  ]

  const values = [
    {
      icon: Target,
      title: "Excellence in Every Delivery",
      description:
        "We strive for perfection in every aspect of our service, ensuring each delivery meets the highest standards of quality and reliability.",
    },
    {
      icon: Users,
      title: "Building Lasting Partnerships",
      description:
        "We believe in creating long-term relationships with our clients, built on trust, transparency, and mutual success.",
    },
    {
      icon: Shield,
      title: "Supporting Local Communities",
      description:
        "We are committed to contributing to the economic growth and development of Sierra Leone and its communities.",
    },
  ]

  const carouselStyle = `
  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  .animate-scroll {
    animation: scroll 30s linear infinite;
  }
  .animate-scroll:hover {
    animation-play-state: paused;
  }
`

  return (
    <div className="min-h-screen">
      <style jsx>{carouselStyle}</style>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Unimax-SL</h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              Sierra Leone's premier logistics company, delivering excellence across the nation since 2012
            </p>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg">
                    Founded in 2012, Unimax-SL began with a simple yet ambitious vision: to provide reliable, efficient,
                    and professional logistics services that would connect people and businesses across Sierra Leone.
                  </p>
                  <p>
                    Over the years, we have grown from a small startup to Sierra Leone's leading logistics company,
                    serving hundreds of satisfied customers with our comprehensive range of services. Our commitment to
                    excellence, innovation, and customer satisfaction has made us the trusted choice for businesses and
                    individuals alike.
                  </p>
                  <p>
                    Today, with over 50 dedicated team members, a modern fleet of vehicles, and coverage across all
                    cities in Sierra Leone, we continue to set new standards in the logistics industry while fostering
                    economic growth and community development.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-6">
                  <Badge variant="secondary">ISO 9001 Certified</Badge>
                  <Badge variant="secondary">Fully Licensed & Insured</Badge>
                  <Badge variant="secondary">Award-Winning Service</Badge>
                </div>
              </div>
              <div className="relative h-96">
                <Image
                  src="/images/logitics.jpg"
                  alt="Unimax-SL Team"
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover', borderRadius: '0.5rem' }}
                  fill
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission */}
              <Card className="p-8">
                <CardContent className="pt-0">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                      <Target className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
                  </div>
                  <p className="text-muted-foreground mb-6 text-lg">
                    To provide reliable, efficient, and professional logistics services that connect people and
                    businesses across Sierra Leone, fostering economic growth and community development.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      <span className="text-sm">Excellence in every delivery</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      <span className="text-sm">Building lasting partnerships</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      <span className="text-sm">Supporting local communities</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Vision */}
              <Card className="p-8">
                <CardContent className="pt-0">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                      <Eye className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
                  </div>
                  <p className="text-muted-foreground mb-6 text-lg">
                    To be the leading logistics company in West Africa, known for innovation, sustainability, and
                    exceptional customer service while setting industry standards for reliability and efficiency.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      <span className="text-sm">Regional expansion by 2026</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      <span className="text-sm">Sustainable logistics solutions</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      <span className="text-sm">Technology-driven innovation</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Core Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do at Unimax-SL
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                      <value.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Carousel */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Awards & Achievements</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Recognition for our commitment to excellence and innovation
              </p>
            </div>

            <div className="relative overflow-hidden">
              <div className="flex animate-scroll">
                {[...achievements, ...achievements].map((achievement, index) => (
                  <div key={index} className="flex-shrink-0 w-80 mx-4">
                    <Card className="h-full p-6 hover:shadow-lg transition-shadow">
                      <CardContent className="pt-6 text-center">
                        <div className="relative w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                          <Image
                            src={achievement.image || "/placeholder.svg"}
                            alt={achievement.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="text-lg font-bold text-accent mb-1">{achievement.year}</div>
                        <h3 className="text-lg font-semibold text-primary mb-2">{achievement.title}</h3>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

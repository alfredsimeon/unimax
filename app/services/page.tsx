import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Truck, Package, Plane, Ship, Building, MapPin, Clock, Shield, Headphones, CheckCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export const metadata = {
  title: "Our Services | Unimax-SL Logistics Solutions",
  description:
    "Comprehensive logistics services including package delivery, freight services, custom clearance, corporate solutions, and transport services across Sierra Leone.",
}

export default function ServicesPage() {
  const services = [
    // 1. Freight Services (top)
    {
      icon: Ship,
      title: "Freight Services",
      description: "Comprehensive freight solutions for air, sea, and land transportation needs.",
      features: [
        "Air freight services",
        "Sea freight solutions",
        "Land freight transport",
        "International shipping",
        "Cargo consolidation",
      ],
      image: "/images/shipfrieght.jpg",
    },
    // 2. Transport Services
    {
      icon: Truck,
      title: "Transport Services",
      description: "Professional ground transportation with our modern fleet and experienced drivers.",
      features: [
        "Modern vehicle fleet",
        "Experienced professional drivers",
        "Flexible scheduling options",
        "Load securing and protection",
        "Route optimization",
      ],
      image: "/images/motorcycle-fleet-1.jpg",
    },
    // 3. Express Package Delivery (combining Package Delivery + Express Delivery)
    {
      icon: Package,
      title: "Express Package Delivery",
      description: "Fast, secure, and urgent delivery services for packages and documents across all cities in Sierra Leone. Includes same-day, next-day, and priority options.",
      features: [
        "Same-day delivery available",
        "Next-day delivery",
        "Priority handling and expedited processing",
        "Secure handling and packaging",
        "Proof of delivery confirmation",
        "Insurance coverage available",
        "Emergency delivery options",
      ],
      image: "/images/coastal-delivery.jpg",
    },
    // 4. Moving and Packing Service (formerly Custom Clearance)
    {
      icon: MapPin,
      title: "Moving and Packing Service",
      description: "Professional moving and packing solutions for homes and businesses, ensuring safe and efficient relocation.",
      features: [
        "Expert packing and unpacking",
        "Safe handling of fragile items",
        "Residential and commercial moves",
        "Furniture disassembly and assembly",
        "On-time and efficient service",
      ],
      image: "/images/team-safety-gear.jpg",
    },
    // 5. Corporate Solution (now last)
    {
      icon: Building,
      title: "Corporate Solutions",
      description: "Tailored logistics solutions designed specifically for businesses of all sizes.",
      features: [
        "Dedicated account management",
        "Bulk delivery discounts",
        "Scheduled pickup services",
        "Custom reporting and analytics",
        "Priority customer support",
      ],
      image: "/images/coperatesolutions.jpg",
    },
  ]

  const whyChooseUs = [
    {
      icon: Clock,
      title: "80% On-Time Rate",
      description: "Reliable and punctual deliveries you can count on",
    },
    {
      icon: Shield,
      title: "Security",
      description: "Safe and secure delivery of your packages",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock customer assistance",
    },
    {
      icon: MapPin,
      title: "Full Coverage",
      description: "All cities and regions in Sierra Leone",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              Comprehensive logistics solutions designed to meet every delivery need across Sierra Leone
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container">
            <div className="grid gap-12">
              {services.map((service, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className={`grid md:grid-cols-2 gap-8 ${index % 2 === 1 ? "md:grid-flow-col-dense" : ""}`}>
                    <div className={`relative h-64 md:h-auto ${index % 2 === 1 ? "md:order-2" : ""}`}>
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6 md:p-8 flex flex-col justify-center">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                          <service.icon className="h-6 w-6 text-accent" />
                        </div>
                        <CardTitle className="text-2xl text-primary">{service.title}</CardTitle>
                      </div>
                      <p className="text-muted-foreground mb-6 text-lg">{service.description}</p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <CheckCircle className="h-4 w-4 text-success mr-2 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button asChild className="w-fit">
                        <Link href="/contact">Get Quote for {service.title}</Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Why Choose Unimax-SL</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience the difference with Sierra Leone's most trusted logistics partner
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUs.map((item, index) => (
                <Card key={index} className="text-center p-6">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                      <item.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-accent text-accent-foreground">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-accent-foreground/80 mb-8 max-w-2xl mx-auto">
              Contact us today for a personalized quote and discover how Unimax-SL can streamline your logistics needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Get Free Quote</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent"
              >
                <Link href="tel:+23278616420">Call +232 78 616420</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

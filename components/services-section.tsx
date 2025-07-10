import { Card, CardContent } from "@/components/ui/card"
import { Truck, Package, Plane, Ship, Building } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Package,
      title: "Package Delivery",
      description:
        "Fast and secure package delivery across all cities in Sierra Leone with real-time GPS tracking and professional handling.",
    },
    {
      icon: Building,
      title: "Corporate Solutions",
      description:
        "Tailored logistics solutions for businesses, including bulk deliveries, scheduled pickups, and dedicated account management.",
    },
    {
      icon: Truck,
      title: "Transport Services",
      description:
        "Reliable ground transportation services with our modern fleet of vehicles and experienced professional drivers.",
    },
    {
      icon: Ship,
      title: "Freight Services",
      description:
        "Comprehensive freight solutions including air, sea, and land freight services for domestic and international shipments.",
    },
    {
      icon: Plane,
      title: "Express Delivery",
      description:
        "Same-day and next-day delivery options for urgent shipments with priority handling and expedited processing.",
    },
  ]

  return (
    <section className="py-16 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive logistics solutions designed to meet every delivery need across Sierra Leone
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <service.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

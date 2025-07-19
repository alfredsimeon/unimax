import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, MapPin, Clock, Headphones, Truck } from "lucide-react"

export function StatsSection() {
  const stats = [
    {
      icon: TrendingUp,
      number: "200+",
      label: "Monthly Deliveries",
      description: "Successful deliveries every month",
    },
    {
      icon: Users,
      number: "50+",
      label: "Team Members",
      description: "Professional and trained personnel",
    },
    {
      icon: MapPin,
      number: "100%",
      label: "Sierra Leone Coverage",
      description: "All cities and regions covered",
    },
    {
      icon: Clock,
      number: "80%",
      label: "On-Time Rate",
      description: "Reliable and punctual deliveries",
    },
    {
      icon: Headphones,
      number: "24/7",
      label: "Customer Support",
      description: "Round-the-clock assistance",
    },
    // New: Owned Fleets
    {
      icon: Truck,
      number: "Our Own Fleet",
      label: "Owned Vehicles",
      description: "We operate our own modern fleet, not external vehicles.",
    },
  ]

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Unimax-SL</h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Trusted by businesses and individuals across Sierra Leone for reliable, professional logistics services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/20 transition-colors"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-accent/20 rounded-full flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-accent" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.number}</div>
                <h3 className="text-lg font-semibold mb-2">{stat.label}</h3>
                <p className="text-sm text-primary-foreground/70">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

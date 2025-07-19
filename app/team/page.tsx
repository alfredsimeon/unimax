import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Heart, TrendingUp, Shield, Target } from "lucide-react"
import Image from "next/image"

export const metadata = {
  title: "Our Team | Unimax-SL Professional Logistics Team",
  description:
    "Meet the dedicated professionals behind Unimax-SL. Our experienced team of 50+ members delivers excellence in logistics services across Sierra Leone.",
}

export default function TeamPage() {
  const leadership = [
    {
      name: "FATIMA SESAY",
      position: "Managing Director & CEO",
      bio: "Leading Unimax-SL with over 13 years of experience in logistics and business management.",
      image: "/images/ceo.jpg",
    },
    {
      name: "Betty Tucker",
      position: "Operations Manager",
      bio: "Overseeing daily operations and ensuring efficient service delivery across all departments.",
      image: "/images/operation.jpg",
    },
    {
      name: "Ibrahim Jalloh",
      position: "Fleet Manager",
      bio: "Dedicated to maintaining our high standards of fleet and support.",
      image: "/images/fleet.jpg",
    },
    {
      name: "Elias Mohamed Koroma",
      position: "Account Officer",
      bio: "Managing our modern fleet and ensuring optimal performance and safety standards.",
      image: "/images/account.jpg",
    },
    {
      name: "Jewel Tanya N. jah Tucker",
      position: "Customer Care & Admin Officer",
      bio: "Coordinating complex logistics operations and optimizing delivery routes and schedules.",
      image: "/images/jewel.jpg",
    },
    {
      name: "Sheku Kaibeneh",
      position: "Clearing & Forwarding Officer",
      bio: "Ensuring all services meet our ISO 9001 standards and continuous improvement initiatives.",
      image: "/images/clearing.jpg",
    },
  ]

  const cultureValues = [
    {
      icon: Target,
      title: "Excellence-Driven",
      description:
        "We strive for perfection in every delivery, maintaining the highest standards of service quality and reliability.",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Our success is built on teamwork, mutual respect, and open communication across all departments.",
    },
    {
      icon: Heart,
      title: "Customer-Centric",
      description:
        "Every decision we make is guided by our commitment to exceeding customer expectations and building lasting relationships.",
    },
    {
      icon: TrendingUp,
      title: "Continuous Learning",
      description:
        "We invest in our team's professional development and embrace innovation to stay ahead in the logistics industry.",
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "The safety of our team members and customers is our top priority in all operations and procedures.",
    },
    {
      icon: Award,
      title: "Integrity & Trust",
      description:
        "We conduct business with honesty, transparency, and ethical practices that build trust with all stakeholders.",
    },
  ]

  const teamStats = [
    {
      number: "50+",
      label: "Team Members",
      description: "Professional and dedicated staff",
    },
    {
      number: "12+",
      label: "Years Experience",
      description: "Average team experience",
    },
    {
      number: "100%",
      label: "Trained Personnel",
      description: "Certified and qualified professionals",
    },
    {
      number: "24/7",
      label: "Support Team",
      description: "Round-the-clock customer service",
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              Meet the dedicated professionals who make Unimax-SL Sierra Leone's leading logistics company
            </p>
          </div>
        </section>

        {/* Team Overview */}
        <section className="py-16">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Our Professional Team</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p className="text-lg">
                    At Unimax-SL, our success is driven by our exceptional team of over 50 dedicated professionals who
                    bring years of experience, expertise, and passion to every aspect of our logistics operations.
                  </p>
                  <p>
                    Our team members are carefully selected for their skills, commitment to excellence, and alignment
                    with our core values. From our experienced drivers and logistics coordinators to our customer
                    service representatives and management team, every individual plays a crucial role in delivering the
                    exceptional service our customers expect.
                  </p>
                  <p>
                    We invest heavily in continuous training and professional development, ensuring our team stays
                    current with industry best practices, safety protocols, and emerging technologies in the logistics
                    sector.
                  </p>
                </div>
              </div>
              <div className="relative h-96">
                <Image
                  src="/images/logistics2.jpg"
                  alt="Unimax-SL Professional Team"
                  fill
                  className="object-cover rounded-lg"
                  quality={100}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Team Stats */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {teamStats.map((stat, index) => (
                <Card key={index} className="text-center p-6">
                  <CardContent className="pt-6">
                    <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.number}</div>
                    <h3 className="text-lg font-semibold text-primary mb-2">{stat.label}</h3>
                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Leadership Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Meet the experienced leaders guiding Unimax-SL towards continued growth and excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {leadership.map((leader, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-24 h-24 mx-auto mb-4 relative rounded-full overflow-hidden">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-1">{leader.name}</h3>
                    <Badge variant="secondary" className="mb-3">
                      {leader.position}
                    </Badge>
                    <p className="text-sm text-muted-foreground">{leader.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Company Culture */}
        <section className="py-16 bg-secondary text-secondary-foreground">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Company Culture</h2>
              <p className="text-lg text-secondary-foreground/80 max-w-2xl mx-auto">
                The values and principles that define our workplace and guide our daily operations
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cultureValues.map((value, index) => (
                <Card key={index} className="p-6 bg-white">
                  <CardContent className="pt-6">
                    <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                      <value.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-3 text-center">{value.title}</h3>
                    <p className="text-muted-foreground text-center">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team in Action */}
        <section className="py-16">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Our Team in Action</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See our professional team delivering excellence across Sierra Leone
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image src="/images/team-safety-gear.jpg" alt="Team in Safety Gear" fill className="object-cover" />
                <div className="absolute inset-0 bg-primary/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Safety First</h3>
                  <p className="text-sm">Professional safety protocols</p>
                </div>
              </div>

              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/delivery-staff-package.jpg"
                  alt="Delivery Staff with Package"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Customer Service</h3>
                  <p className="text-sm">Dedicated to excellence</p>
                </div>
              </div>

              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/coastal-delivery.jpg"
                  alt="Coastal Delivery Service"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/20"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Nationwide Coverage</h3>
                  <p className="text-sm">Serving all of Sierra Leone</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

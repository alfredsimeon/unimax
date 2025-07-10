"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Search, HelpCircle, Package, Truck, CreditCard, MapPin, Shield, Phone, MessageCircle } from "lucide-react"
import { useState } from "react"

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Questions", icon: HelpCircle },
    { id: "services", name: "Services", icon: Package },
    { id: "delivery", name: "Delivery", icon: Truck },
    { id: "pricing", name: "Pricing", icon: CreditCard },
    { id: "tracking", name: "Tracking", icon: MapPin },
    { id: "support", name: "Support", icon: Shield },
  ]

  const faqs = [
    {
      category: "services",
      question: "What services does Unimax-SL offer?",
      answer:
        "We offer comprehensive logistics solutions including package delivery, corporate solutions, transport services, freight services (air, sea, and land), custom clearance, and express delivery. We serve all cities across Sierra Leone with 24/7 customer support and GPS tracking.",
    },
    {
      category: "delivery",
      question: "How long does delivery take?",
      answer:
        "Delivery times vary by location and service type. Within Freetown, same-day delivery is available. For other cities in Sierra Leone, standard delivery takes 1-3 business days. Express delivery options are available for urgent shipments with next-day delivery to most locations.",
    },
    {
      category: "pricing",
      question: "How are your delivery rates calculated?",
      answer:
        "Our rates are based on package size, weight, destination, and service type. We offer competitive pricing with bulk discounts for corporate clients. Contact us for a personalized quote or use our online calculator for instant estimates.",
    },
    {
      category: "tracking",
      question: "Can I track my package in real-time?",
      answer:
        "Yes! All our deliveries include GPS tracking. You can track your package in real-time using your tracking number on our website. You'll also receive SMS and email updates on your package status and estimated delivery time.",
    },
    {
      category: "services",
      question: "Do you handle international shipments?",
      answer:
        "Yes, we provide international freight services including air and sea freight. We also handle custom clearance for import/export shipments, ensuring compliance with all regulatory requirements and smooth processing.",
    },
    {
      category: "delivery",
      question: "What areas do you cover?",
      answer:
        "We provide full coverage across Sierra Leone, serving all cities and regions. Our extensive network ensures reliable delivery to even remote locations. We have local knowledge and partnerships that enable us to reach every corner of the country.",
    },
    {
      category: "pricing",
      question: "Do you offer corporate discounts?",
      answer:
        "Yes, we offer special rates and dedicated account management for corporate clients. Benefits include bulk delivery discounts, scheduled pickup services, custom reporting, and priority customer support. Contact us to discuss your business needs.",
    },
    {
      category: "support",
      question: "What are your business hours?",
      answer:
        "Our office hours are Monday-Friday: 8:00 AM - 6:00 PM, Saturday: 9:00 AM - 4:00 PM, and closed on Sundays. However, our customer support is available 24/7 for urgent inquiries and tracking assistance.",
    },
    {
      category: "delivery",
      question: "What if my package is damaged or lost?",
      answer:
        "We take full responsibility for packages in our care. All shipments are insured, and we have a comprehensive claims process. If your package is damaged or lost, contact us immediately and we'll investigate and resolve the issue promptly with full compensation if applicable.",
    },
    {
      category: "services",
      question: "Can you handle large or heavy items?",
      answer:
        "We have specialized equipment and vehicles for handling large, heavy, or oversized items. Our transport services include everything from documents to industrial equipment. Contact us to discuss your specific requirements.",
    },
    {
      category: "tracking",
      question: "How do I get a tracking number?",
      answer:
        "You'll receive your tracking number immediately after booking our services via SMS and email. The tracking number allows you to monitor your package's journey in real-time on our website or by contacting our customer support team.",
    },
    {
      category: "support",
      question: "How can I contact customer support?",
      answer:
        "You can reach us via phone (+232 78 616420, +232 79 608444, +232 79 206154), email (info@unimax-sl.com), WhatsApp, or visit our office at 48 Wellington Street, Freetown. Our support team is available 24/7 for urgent matters.",
    },
    {
      category: "services",
      question: "Do you provide packaging services?",
      answer:
        "Yes, we offer professional packaging services to ensure your items are properly protected during transit. We use high-quality materials and follow best practices for different types of goods, from fragile items to electronics.",
    },
    {
      category: "pricing",
      question: "What payment methods do you accept?",
      answer:
        "We accept various payment methods including cash, bank transfers, mobile money, and corporate accounts. For regular customers, we offer flexible payment terms and monthly billing options.",
    },
    {
      category: "delivery",
      question: "Can I schedule a specific delivery time?",
      answer:
        "Yes, we offer scheduled delivery options. You can specify preferred delivery times, and we'll coordinate with the recipient to ensure someone is available. This service is particularly popular with our corporate clients.",
    },
  ]

  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              Find answers to common questions about our logistics services, delivery options, and more.
            </p>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 bg-muted/30">
          <div className="container">
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Search frequently asked questions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mb-8">
              {categories.map((category) => (
                <Badge
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  className="cursor-pointer px-4 py-2 text-sm"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <category.icon className="h-3 w-3 mr-1" />
                  {category.name}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16">
          <div className="container">
            <div className="max-w-4xl mx-auto">
              {filteredFAQs.length > 0 ? (
                <Accordion type="single" collapsible className="space-y-4">
                  {filteredFAQs.map((faq, index) => (
                    <Card key={index}>
                      <AccordionItem value={`item-${index}`} className="border-none">
                        <AccordionTrigger className="px-6 py-4 text-left hover:no-underline">
                          <div className="flex items-start space-x-3">
                            <div className="w-6 h-6 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <HelpCircle className="h-3 w-3 text-accent" />
                            </div>
                            <span className="font-semibold text-primary">{faq.question}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                          <div className="ml-9 text-muted-foreground leading-relaxed">{faq.answer}</div>
                        </AccordionContent>
                      </AccordionItem>
                    </Card>
                  ))}
                </Accordion>
              ) : (
                <Card className="p-8 text-center">
                  <CardContent>
                    <HelpCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-primary mb-2">No questions found</h3>
                    <p className="text-muted-foreground">
                      Try adjusting your search terms or selecting a different category.
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-16 bg-accent text-accent-foreground">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-lg text-accent-foreground/80 mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our customer support team is here to help you 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Card className="flex-1 p-4 bg-accent-foreground/10 border-accent-foreground/20">
                <CardContent className="p-0 text-center">
                  <Phone className="h-6 w-6 mx-auto mb-2" />
                  <p className="text-sm font-medium">Call Us</p>
                  <p className="text-xs text-accent-foreground/80">+232 78 616420</p>
                </CardContent>
              </Card>
              <Card className="flex-1 p-4 bg-accent-foreground/10 border-accent-foreground/20">
                <CardContent className="p-0 text-center">
                  <MessageCircle className="h-6 w-6 mx-auto mb-2" />
                  <p className="text-sm font-medium">WhatsApp</p>
                  <p className="text-xs text-accent-foreground/80">Instant Support</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

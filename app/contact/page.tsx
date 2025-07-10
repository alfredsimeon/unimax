"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, CheckCircle, AlertCircle } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export default function ContactPage() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Using our Nodemailer API to send emails to info@unimax-sl.com and unimaxsl@gmail.com
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          subject: formData.subject,
          message: formData.message,
          form_type: "contact_form",
          website: "unimax-sl.com",
          timestamp: new Date().toISOString(),
        }),
      })

      if (response.ok) {
        setSubmitStatus("success")
        toast({
          title: "Message Sent Successfully!",
          description: "We've received your inquiry and will respond within 24 hours.",
        })

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          subject: "",
          message: "",
        })
      } else {
        setSubmitStatus("error")
        toast({
          title: "Error Sending Message",
          description: "Please try again or contact us directly.",
          variant: "destructive",
        })
      }
    } catch (error) {
      setSubmitStatus("error")
      toast({
        title: "Network Error",
        description: "Please check your connection and try again, or contact us directly.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+232 78 616420", "+232 79 608444", "+232 79 206154"],
      action: "tel:+23278616420",
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: ["info@unimax-sl.com", "unimaxsl@gmail.com"],
      action: "mailto:info@unimax-sl.com",
    },
    {
      icon: MapPin,
      title: "Office Address",
      details: ["48 Wellington Street", "Freetown, Sierra Leone"],
      action: "https://maps.google.com/?q=48+Wellington+Street+Freetown+Sierra+Leone",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM", "Sun: Closed"],
      action: null,
    },
  ]

  const services = [
    "Package Delivery",
    "Corporate Solutions",
    "Transport Services",
    "Freight Services",
    "Custom Clearance",
    "Express Delivery",
    "Other",
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
              Get in touch with Sierra Leone's leading logistics company. We're here to help with all your delivery
              needs.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-16">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-primary">
                    <MessageSquare className="h-6 w-6 mr-2" />
                    Get a Quote
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours with a personalized quote.
                  </p>
                </CardHeader>
                <CardContent>
                  {submitStatus === "success" && (
                    <div className="mb-6 p-4 bg-success/10 border border-success/20 rounded-lg flex items-center">
                      <CheckCircle className="h-5 w-5 text-success mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-success">Message Sent Successfully!</p>
                        <p className="text-sm text-success/80">We'll respond to your inquiry within 24 hours.</p>
                      </div>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="mb-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg flex items-center">
                      <AlertCircle className="h-5 w-5 text-destructive mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-destructive">Failed to Send Message</p>
                        <p className="text-sm text-destructive/80">Please try again or contact us directly.</p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Enter your phone number"
                          disabled={isSubmitting}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Interest</Label>
                        <Select onValueChange={handleSelectChange} disabled={isSubmitting}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Brief description of your inquiry"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please provide details about your logistics needs, pickup/delivery locations, timeline, and any special requirements..."
                        rows={6}
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you agree to our privacy policy and terms of service. We'll respond
                      within 24 hours during business days.
                    </p>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-4">Get in Touch</h2>
                  <p className="text-muted-foreground text-lg mb-8">
                    We're here to help with all your logistics needs. Contact us through any of the following methods:
                  </p>
                </div>

                <div className="grid gap-6">
                  {contactInfo.map((info, index) => (
                    <Card key={index} className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-6 w-6 text-accent" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-primary mb-2">{info.title}</h3>
                          <div className="space-y-1">
                            {info.details.map((detail, detailIndex) => (
                              <p key={detailIndex} className="text-muted-foreground">
                                {info.action && detailIndex === 0 ? (
                                  <a
                                    href={info.action}
                                    className="hover:text-accent transition-colors"
                                    target={info.action.startsWith("http") ? "_blank" : undefined}
                                    rel={info.action.startsWith("http") ? "noopener noreferrer" : undefined}
                                  >
                                    {detail}
                                  </a>
                                ) : (
                                  detail
                                )}
                              </p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Quick Actions */}
                <Card className="p-6 bg-accent text-accent-foreground">
                  <h3 className="font-semibold mb-4">Need Immediate Assistance?</h3>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild variant="secondary" className="flex-1">
                      <a href="tel:+23278616420">
                        <Phone className="h-4 w-4 mr-2" />
                        Call Now
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      className="flex-1 border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent"
                    >
                      <a href="https://wa.me/23278616420" target="_blank" rel="noopener noreferrer">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Visit Our Office</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Located in the heart of Freetown, our office is easily accessible for consultations and pickups.
              </p>
            </div>

            <Card className="overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.4234567890123!2d-13.2317!3d8.4657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMjcnNTYuNSJOIDEzwrAxMycxOC4xIlc!5e0!3m2!1sen!2ssl!4v1234567890123!5m2!1sen!2ssl&q=48+Wellington+Street,+Freetown,+Sierra+Leone"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Unimax-SL Office Location - 48 Wellington Street, Freetown, Sierra Leone"
                />
              </div>
              <div className="p-6 bg-white">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">48 Wellington Street</h3>
                    <p className="text-muted-foreground">Freetown, Sierra Leone</p>
                  </div>
                  <div className="flex gap-3">
                    <Button asChild variant="outline">
                      <a
                        href="https://maps.google.com/?q=48+Wellington+Street+Freetown+Sierra+Leone"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MapPin className="h-4 w-4 mr-2" />
                        View on Google Maps
                      </a>
                    </Button>
                    <Button asChild>
                      <a
                        href="https://www.google.com/maps/dir/?api=1&destination=48+Wellington+Street,+Freetown,+Sierra+Leone"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Get Directions
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

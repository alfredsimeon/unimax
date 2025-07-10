"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Send, CheckCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

interface NewsletterSignupProps {
  variant?: "default" | "footer" | "inline"
  className?: string
}

export function NewsletterSignup({ variant = "default", className = "" }: NewsletterSignupProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Using Formspree for newsletter signup - sends to info@unimax-sl.com and unimaxsl@gmail.com
      const response = await fetch("https://formspree.io/f/mvgrbblb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          _subject: "Newsletter Subscription - Unimax-SL",
          _cc: "info@unimax-sl.com,unimaxsl@gmail.com",
          form_type: "newsletter_signup",
          message: `New newsletter subscription from: ${email}`,
          website: "unimax-sl.com",
          timestamp: new Date().toISOString(),
        }),
      })

      if (response.ok) {
        setIsSubscribed(true)
        setEmail("")
        toast({
          title: "Successfully Subscribed!",
          description: "You'll receive our latest updates and logistics insights.",
        })
      } else {
        toast({
          title: "Subscription Failed",
          description: "Please try again or contact us directly.",
          variant: "destructive",
        })
      }
    } catch (error) {
      toast({
        title: "Network Error",
        description: "Please check your connection and try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (variant === "footer") {
    return (
      <div className={`space-y-4 ${className}`}>
        <h3 className="text-lg font-semibold">Stay Updated</h3>
        <p className="text-sm text-primary-foreground/80">Get the latest logistics insights and company updates.</p>
        {isSubscribed ? (
          <div className="flex items-center space-x-2 text-success">
            <CheckCircle className="h-4 w-4" />
            <span className="text-sm">Successfully subscribed!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex space-x-2">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSubmitting}
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
            />
            <Button type="submit" disabled={isSubmitting} variant="secondary" size="icon" className="flex-shrink-0">
              <Send className="h-4 w-4" />
            </Button>
          </form>
        )}
      </div>
    )
  }

  if (variant === "inline") {
    return (
      <div className={`bg-accent/10 p-6 rounded-lg ${className}`}>
        <div className="flex items-center mb-4">
          <Mail className="h-5 w-5 text-accent mr-2" />
          <h3 className="font-semibold text-primary">Stay Informed</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          Subscribe to receive logistics tips, industry updates, and special offers.
        </p>
        {isSubscribed ? (
          <div className="flex items-center space-x-2 text-success">
            <CheckCircle className="h-4 w-4" />
            <span className="text-sm">Thank you for subscribing!</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex space-x-2">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSubmitting}
              className="flex-1"
            />
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "..." : "Subscribe"}
            </Button>
          </form>
        )}
      </div>
    )
  }

  return (
    <Card className={`bg-accent text-accent-foreground ${className}`}>
      <CardContent className="p-8 text-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-accent-foreground/10 rounded-full flex items-center justify-center">
          <Mail className="h-8 w-8" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Stay Connected</h3>
        <p className="text-accent-foreground/80 mb-6">
          Subscribe to our newsletter for logistics insights, company updates, and exclusive offers.
        </p>
        {isSubscribed ? (
          <div className="flex items-center justify-center space-x-2 text-accent-foreground">
            <CheckCircle className="h-5 w-5" />
            <span>Successfully subscribed! Thank you.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSubmitting}
              className="flex-1 bg-accent-foreground/10 border-accent-foreground/20 text-accent-foreground placeholder:text-accent-foreground/60"
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              variant="secondary"
              className="bg-accent-foreground text-accent hover:bg-accent-foreground/90"
            >
              {isSubmitting ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
        )}
      </CardContent>
    </Card>
  )
}

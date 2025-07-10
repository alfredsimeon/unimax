"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, X, Phone, Clock } from "lucide-react"

export function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000) // Show after 3 seconds

    return () => clearTimeout(timer)
  }, [])

  const whatsappNumber = "+23278616420"
  const defaultMessage = "Hello! I'm interested in your logistics services. Can you help me?"

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(defaultMessage)}`
    window.open(url, "_blank")
    setIsOpen(false)
  }

  const quickMessages = [
    "I need a quote for package delivery",
    "What are your delivery rates?",
    "How can I track my package?",
    "Do you offer corporate solutions?",
    "What areas do you cover?",
  ]

  if (!isVisible) return null

  return (
    <>
      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {isOpen && (
          <Card className="mb-4 w-80 shadow-2xl animate-in slide-in-from-bottom-2">
            <CardHeader className="bg-[#25D366] text-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-sm font-semibold">Unimax-SL Support</CardTitle>
                    <p className="text-xs opacity-90">Typically replies instantly</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-3">
                <div className="bg-muted p-3 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">👋 Hi there! How can we help you today?</p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    <span>Mon-Fri: 8AM-6PM, Sat: 9AM-4PM</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-medium text-muted-foreground">Quick questions:</p>
                  {quickMessages.map((message, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        const url = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(
                          message,
                        )}`
                        window.open(url, "_blank")
                        setIsOpen(false)
                      }}
                      className="w-full text-left p-2 text-xs bg-muted hover:bg-muted/80 rounded transition-colors"
                    >
                      {message}
                    </button>
                  ))}
                </div>

                <div className="flex space-x-2 pt-2">
                  <Button onClick={handleWhatsAppClick} className="flex-1 bg-[#25D366] hover:bg-[#25D366]/90">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Chat on WhatsApp
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href={`tel:${whatsappNumber}`}>
                      <Phone className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Chat Button */}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#25D366]/90 shadow-lg animate-pulse"
          size="icon"
        >
          {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        </Button>
      </div>
    </>
  )
}

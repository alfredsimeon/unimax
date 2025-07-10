import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { StatsSection } from "@/components/stats-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { CTASection } from "@/components/cta-section"
import { WhatsAppChat } from "@/components/whatsapp-chat"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <StatsSection />
        <TestimonialsSection />
        <div className="py-16">
          <div className="container">
            <NewsletterSignup />
          </div>
        </div>
        <CTASection />
      </main>
      <Footer />
      <WhatsAppChat />
    </div>
  )
}

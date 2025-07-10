import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-16 bg-accent text-accent-foreground">
      <div className="container text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Experience Professional Logistics?</h2>
          <p className="text-lg text-accent-foreground/80">
            Join hundreds of satisfied customers who trust Unimax-SL for their logistics needs. Get a personalized quote
            today and discover why we're Sierra Leone's leading logistics company.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                Get Free Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent"
            >
              <Link href="tel:+23278616420">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/team-group-photo.jpg"
          alt="Unimax-SL Professional Team"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container text-center text-white">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">UNIMAX-SL</h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary-foreground/90">
            LOGISTICS SOLUTIONS
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80 leading-relaxed">
            We provide flexible, reliable, and professional 24/7 logistics services across Sierra Leone. Feel free to
            explore our comprehensive range of services, and if there's something we haven't mentioned, just ask - we're
            confident we can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact">
                Get Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

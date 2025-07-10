import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { Phone, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Image
              src="/images/logo.png"
              alt="Unimax-SL Logo"
              width={120}
              height={40}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="text-sm text-primary-foreground/80">
              Sierra Leone's premier logistics company, delivering excellence across the nation since 2012.
            </p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:text-primary hover:bg-primary-foreground"
              >
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:text-primary hover:bg-primary-foreground"
              >
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-primary-foreground hover:text-primary hover:bg-primary-foreground"
              >
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Services", "About", "Team", "Gallery", "FAQ", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              {[
                "Custom Clearance",
                "Package Delivery",
                "Corporate Solutions",
                "Transport Services",
                "Freight Services",
              ].map((service) => (
                <li key={service}>
                  <span className="text-sm text-primary-foreground/80">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <NewsletterSignup variant="footer" />
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="flex items-start space-x-2">
              <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <span className="text-sm text-primary-foreground/80">48 Wellington Street, Freetown, Sierra Leone</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 flex-shrink-0" />
              <div className="text-sm text-primary-foreground/80">
                <div>+232 78 616420</div>
                <div>+232 79 608444</div>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
              <div className="text-sm text-primary-foreground/80">
                <div>Mon-Fri: 8:00 AM - 6:00 PM</div>
                <div>Sat: 9:00 AM - 4:00 PM</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Unimax-SL. All rights reserved. | ISO 9001 Certified | Fully Licensed & Insured
          </p>
        </div>
      </div>
    </footer>
  )
}

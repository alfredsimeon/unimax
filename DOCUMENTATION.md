# Unimax-SL Website Documentation
## Complete Modification Reference Guide

This document provides detailed instructions for modifying every aspect of the Unimax-SL website. Each section includes file paths, specific code locations, and examples for easy future modifications.

---

## Table of Contents

1. [Brand Colors & Styling](#brand-colors--styling)
2. [Company Information](#company-information)
3. [Images & Media](#images--media)
4. [Navigation & Menu](#navigation--menu)
5. [Page Content](#page-content)
6. [Contact Information](#contact-information)
7. [Services](#services)
8. [Team Information](#team-information)
9. [Social Media Links](#social-media-links)
10. [SEO & Meta Data](#seo--meta-data)
11. [Forms & Integrations](#forms--integrations)
12. [Language Settings](#language-settings)
13. [Footer Content](#footer-content)
14. [Testimonials](#testimonials)
15. [FAQ Section](#faq-section)
16. [Gallery](#gallery)
17. [Statistics & Numbers](#statistics--numbers)
18. [Business Hours](#business-hours)
19. [Animations & Effects](#animations--effects)
20. [Error Pages](#error-pages)

---

## 1. Brand Colors & Styling

### Primary Brand Colors
**File:** `tailwind.config.ts`
**Lines:** 20-45

\`\`\`typescript
colors: {
  primary: {
    DEFAULT: "#3D3540", // INK - Main brand color
    foreground: "#FFFFFF",
  },
  secondary: {
    DEFAULT: "#416284", // AVOCADO - Secondary brand color
    foreground: "#FFFFFF",
  },
  accent: {
    DEFAULT: "#7DAEB3", // OAK - Accent color
    foreground: "#3D3540",
  },
  muted: {
    DEFAULT: "#D4D4D4", // BONE - Muted color
    foreground: "#3D3540",
  },
  success: {
    DEFAULT: "#95B169", // FOG - Success color
    foreground: "#3D3540",
  },
}
\`\`\`

**How to modify:**
- Change hex color codes to your desired colors
- Keep the structure intact
- Test color contrast for accessibility

### Theme Color (Browser)
**File:** `app/layout.tsx`
**Line:** 85
\`\`\`typescript
<meta name="theme-color" content="#3D3540" />
\`\`\`

### PWA Manifest Colors
**File:** `app/manifest.ts`
**Lines:** 9-10
\`\`\`typescript
background_color: "#3D3540",
theme_color: "#3D3540",
\`\`\`

---

## 2. Company Information

### Company Name & Branding
**File:** `app/layout.tsx`
**Lines:** 10-15
\`\`\`typescript
title: "Unimax-SL | Premier Logistics Solutions in Sierra Leone",
description: "Sierra Leone's leading logistics company since 2012...",
\`\`\`

### Hero Section Company Name
**File:** `components/hero-section.tsx`
**Lines:** 15-16
\`\`\`typescript
<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">UNIMAX-SL</h1>
<h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary-foreground/90">
  LOGISTICS SOLUTIONS
</h2>
\`\`\`

### Company Description
**File:** `components/hero-section.tsx`
**Lines:** 17-21
\`\`\`typescript
<p className="text-lg md:text-xl max-w-3xl mx-auto text-primary-foreground/80 leading-relaxed">
  We provide flexible, reliable, and professional 24/7 logistics services across Sierra Leone. 
  Feel free to explore our comprehensive range of services, and if there's something we haven't 
  mentioned, just ask - we're confident we can help.
</p>
\`\`\`

### About Page Company Story
**File:** `app/about/page.tsx`
**Lines:** 85-95
\`\`\`typescript
<p className="text-lg">
  Founded in 2012, Unimax-SL began with a simple yet ambitious vision: to provide reliable, 
  efficient, and professional logistics services that would connect people and businesses 
  across Sierra Leone.
</p>
\`\`\`

### Mission Statement
**File:** `app/about/page.tsx`
**Lines:** 125-130
\`\`\`typescript
<p className="text-muted-foreground mb-6 text-lg">
  To provide reliable, efficient, and professional logistics services that connect people 
  and businesses across Sierra Leone, fostering economic growth and community development.
</p>
\`\`\`

### Vision Statement
**File:** `app/about/page.tsx`
**Lines:** 155-160
\`\`\`typescript
<p className="text-muted-foreground mb-6 text-lg">
  To be the leading logistics company in West Africa, known for innovation, sustainability, 
  and exceptional customer service while setting industry standards for reliability and efficiency.
</p>
\`\`\`

---

## 3. Images & Media

### Logo
**Files:** Multiple locations
- `components/header.tsx` - Line 25
- `components/footer.tsx` - Line 15
- `app/layout.tsx` - Line 84

\`\`\`typescript
<Image src="/images/logo.png" alt="Unimax-SL Logo" width={120} height={40} />
\`\`\`

**To replace logo:**
1. Add new logo file to `public/images/` folder
2. Update file path in all locations above
3. Adjust width/height dimensions as needed

### Hero Background Image
**File:** `components/hero-section.tsx`
**Lines:** 8-12
\`\`\`typescript
<Image
  src="/images/team-group-photo.jpg"
  alt="Unimax-SL Professional Team"
  fill
  className="object-cover"
  priority
/>
\`\`\`

### Service Images
**File:** `app/services/page.tsx`
**Lines:** 35-85 (within services array)
\`\`\`typescript
{
  icon: Package,
  title: "Package Delivery",
  image: "/images/delivery-staff-package.jpg",
}
\`\`\`

### Gallery Images
**File:** `app/gallery/page.tsx`
**Lines:** 15-25
\`\`\`typescript
const allImages = [
  "/images/team-safety-gear.jpg",
  "/images/motorcycle-fleet-1.jpg",
  "/images/motorcycle-fleet-2.jpg",
  // Add or remove image paths here
]
\`\`\`

### Team Images
**File:** `app/team/page.tsx`
**Lines:** 180-200
\`\`\`typescript
<div className="relative h-64 rounded-lg overflow-hidden">
  <Image src="/images/team-safety-gear.jpg" alt="Team in Safety Gear" fill className="object-cover" />
</div>
\`\`\`

---

## 4. Navigation & Menu

### Main Navigation Menu
**File:** `components/header.tsx`
**Lines:** 10-18
\`\`\`typescript
const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Gallery", href: "/gallery" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
]
\`\`\`

**To modify navigation:**
- Add new items: `{ name: "New Page", href: "/new-page" }`
- Remove items: Delete the corresponding line
- Rename items: Change the "name" property
- Change URLs: Update the "href" property

### Footer Navigation
**File:** `components/footer.tsx`
**Lines:** 45-50
\`\`\`typescript
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
\`\`\`

---

## 5. Page Content

### Homepage Sections Order
**File:** `app/page.tsx`
**Lines:** 10-20
\`\`\`typescript
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
\`\`\`

### Services Page Content
**File:** `app/services/page.tsx`
**Lines:** 15-20
\`\`\`typescript
export const metadata = {
  title: "Our Services | Unimax-SL Logistics Solutions",
  description: "Comprehensive logistics services including package delivery...",
}
\`\`\`

### About Page Sections
**File:** `app/about/page.tsx`
**Lines:** 50-60
\`\`\`typescript
{/* Company Story */}
{/* Mission & Vision */}
{/* Values */}
{/* Achievements Carousel */}
\`\`\`

---

## 6. Contact Information

### Phone Numbers
**Multiple Files:**

**Header:** `components/header.tsx` - Line 35
\`\`\`typescript
<span>+232 78 616420</span>
\`\`\`

**Footer:** `components/footer.tsx` - Lines 85-90
\`\`\`typescript
<div className="text-sm text-primary-foreground/80">
  <div>+232 78 616420</div>
  <div>+232 79 608444</div>
</div>
\`\`\`

**Contact Page:** `app/contact/page.tsx` - Lines 45-50
\`\`\`typescript
details: ["+232 78 616420", "+232 79 608444", "+232 79 206154"],
\`\`\`

**WhatsApp Integration:** `components/whatsapp-chat.tsx` - Line 10
\`\`\`typescript
const whatsappNumber = "+23278616420"
\`\`\`

### Email Addresses
**Footer:** `components/footer.tsx` - Lines 95-100
**Contact Page:** `app/contact/page.tsx` - Lines 55-60
\`\`\`typescript
details: ["info@unimax-sl.com", "unimaxsl@gmail.com"],
\`\`\`

### Physical Address
**Footer:** `components/footer.tsx` - Lines 80-85
**Contact Page:** `app/contact/page.tsx` - Lines 65-70
\`\`\`typescript
details: ["48 Wellington Street", "Freetown, Sierra Leone"],
\`\`\`

### Google Maps Integration
**File:** `app/contact/page.tsx`
**Lines:** 280-290
\`\`\`typescript
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3969.4234567890123!2d-13.2317!3d8.4657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMjcnNTYuNSJOIDEzwrAxMycxOC4xIlc!5e0!3m2!1sen!2ssl!4v1234567890123!5m2!1sen!2ssl&q=48+Wellington+Street,+Freetown,+Sierra+Leone"
  // Update the coordinates and address in the URL above
/>
\`\`\`

---

## 7. Services

### Services List
**File:** `components/services-section.tsx`
**Lines:** 5-45
\`\`\`typescript
const services = [
  {
    icon: Package,
    title: "Package Delivery",
    description: "Fast and secure package delivery across all cities in Sierra Leone...",
  },
  {
    icon: Building,
    title: "Corporate Solutions",
    description: "Tailored logistics solutions for businesses...",
  },
  // Add more services here
]
\`\`\`

### Service Features
**File:** `app/services/page.tsx`
**Lines:** 25-35 (within each service object)
\`\`\`typescript
features: [
  "Same-day delivery available",
  "Secure handling and packaging",
  "Proof of delivery confirmation",
  "Insurance coverage available",
],
\`\`\`

### Footer Services List
**File:** `components/footer.tsx`
**Lines:** 60-70
\`\`\`typescript
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
\`\`\`

---

## 8. Team Information

### Leadership Team
**File:** `app/team/page.tsx`
**Lines:** 15-50
\`\`\`typescript
const leadership = [
  {
    name: "Managing Director",
    position: "Chief Executive Officer",
    bio: "Leading Unimax-SL with over 15 years of experience...",
    image: "/images/logo.png",
  },
  // Add more team members here
]
\`\`\`

### Team Statistics
**File:** `app/team/page.tsx`
**Lines:** 85-110
\`\`\`typescript
const teamStats = [
  {
    number: "50+",
    label: "Team Members",
    description: "Professional and dedicated staff",
  },
  // Modify numbers and descriptions here
]
\`\`\`

### Company Culture Values
**File:** `app/team/page.tsx`
**Lines:** 115-150
\`\`\`typescript
const cultureValues = [
  {
    icon: Target,
    title: "Excellence-Driven",
    description: "We strive for perfection in every delivery...",
  },
  // Add or modify values here
]
\`\`\`

---

## 9. Social Media Links

### Footer Social Links
**File:** `components/footer.tsx`
**Lines:** 25-45
\`\`\`typescript
<div className="flex space-x-4">
  <Button
    variant="ghost"
    size="icon"
    className="text-primary-foreground hover:text-primary hover:bg-primary-foreground"
    asChild
  >
    <a href="https://facebook.com/unimax-sl" target="_blank" rel="noopener noreferrer">
      <Facebook className="h-4 w-4" />
      <span className="sr-only">Facebook</span>
    </a>
  </Button>
  // Update URLs above
</div>
\`\`\`

### Structured Data Social Links
**File:** `app/layout.tsx`
**Lines:** 110-115
\`\`\`typescript
sameAs: [
  "https://facebook.com/unimax-sl",
  "https://instagram.com/unimax-sl",
  "https://linkedin.com/company/unimax-sl",
],
\`\`\`

---

## 10. SEO & Meta Data

### Main SEO Settings
**File:** `app/layout.tsx`
**Lines:** 10-25
\`\`\`typescript
export const metadata: Metadata = {
  title: "Unimax-SL | Premier Logistics Solutions in Sierra Leone",
  description: "Sierra Leone's leading logistics company since 2012...",
  keywords: "logistics Sierra Leone, package delivery Freetown...",
  // Update title, description, and keywords
}
\`\`\`

### Page-Specific SEO
**Services Page:** `app/services/page.tsx` - Lines 10-15
**About Page:** `app/about/page.tsx` - Lines 10-15
**Team Page:** `app/team/page.tsx` - Lines 10-15

\`\`\`typescript
export const metadata = {
  title: "Page Title | Unimax-SL",
  description: "Page description...",
}
\`\`\`

### Structured Data (Schema.org)
**File:** `app/layout.tsx`
**Lines:** 90-120
\`\`\`typescript
"@context": "https://schema.org",
"@type": "Organization",
name: "Unimax-SL",
description: "Sierra Leone's premier logistics company...",
// Update organization details
\`\`\`

### Sitemap Configuration
**File:** `app/sitemap.ts`
**Lines:** 5-40
\`\`\`typescript
return [
  {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  },
  // Add new pages here
]
\`\`\`

---

## 11. Forms & Integrations

### Contact Form
**File:** `app/contact/page.tsx`
**Lines:** 35-40
\`\`\`typescript
const response = await fetch("https://formspree.io/f/mvgrbblb", {
  // Replace 'mvgrbblb' with your actual Formspree form ID
\`\`\`

### Newsletter Signup
**File:** `components/newsletter-signup.tsx`
**Lines:** 25-30
\`\`\`typescript
const response = await fetch("https://formspree.io/f/mvgrbblb", {
  // Replace 'mvgrbblb' with your actual Formspree form ID
\`\`\`

### Email Configuration
**File:** `app/api/contact/route.ts`
**Lines:** 5-15
\`\`\`typescript
const SMTP_CONFIG = {
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER || "your-smtp-user@gmail.com",
    pass: process.env.SMTP_PASS || "your-app-password",
  },
}

const COMPANY_EMAILS = ["info@unimax-sl.com", "unimaxsl@gmail.com"]
\`\`\`

### Environment Variables
**File:** `.env.local`
\`\`\`env
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
\`\`\`

---

## 12. Language Settings

### Language Options
**File:** `components/language-switcher.tsx`
**Lines:** 10-15
\`\`\`typescript
const languages: Language[] = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "kr", name: "Krio", flag: "🇸🇱" },
  { code: "tm", name: "Temne", flag: "🇸🇱" },
  { code: "mn", name: "Mende", flag: "🇸🇱" },
]
\`\`\`

### Default Language
**File:** `app/layout.tsx`
**Line:** 75
\`\`\`typescript
<html lang="en" suppressHydrationWarning>
\`\`\`

---

## 13. Footer Content

### Company Description
**File:** `components/footer.tsx`
**Lines:** 20-25
\`\`\`typescript
<p className="text-sm text-primary-foreground/80">
  Sierra Leone's premier logistics company, delivering excellence across the nation since 2012.
</p>
\`\`\`

### Copyright Information
**File:** `components/footer.tsx`
**Lines:** 110-115
\`\`\`typescript
<p className="text-sm text-primary-foreground/60">
  © {new Date().getFullYear()} Unimax-SL. All rights reserved. | ISO 9001 Certified | Fully Licensed & Insured
</p>
\`\`\`

---

## 14. Testimonials

### Customer Testimonials
**File:** `components/testimonials-section.tsx`
**Lines:** 10-50
\`\`\`typescript
const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Atlantic Trading Ltd",
    role: "Operations Manager",
    rating: 5,
    text: "Unimax-SL has been our trusted logistics partner...",
    image: "/images/team-group-photo.jpg",
  },
  // Add more testimonials here
]
\`\`\`

### Testimonial Statistics
**File:** `components/testimonials-section.tsx`
**Lines:** 85-105
\`\`\`typescript
<div className="text-2xl md:text-3xl font-bold text-accent mb-1">500+</div>
<p className="text-sm text-muted-foreground">Happy Customers</p>
// Update numbers and labels
\`\`\`

---

## 15. FAQ Section

### FAQ Questions and Answers
**File:** `app/faq/page.tsx`
**Lines:** 25-150
\`\`\`typescript
const faqs = [
  {
    category: "services",
    question: "What services does Unimax-SL offer?",
    answer: "We offer comprehensive logistics solutions including...",
  },
  // Add more FAQ items here
]
\`\`\`

### FAQ Categories
**File:** `app/faq/page.tsx`
**Lines:** 15-25
\`\`\`typescript
const categories = [
  { id: "all", name: "All Questions", icon: HelpCircle },
  { id: "services", name: "Services", icon: Package },
  { id: "delivery", name: "Delivery", icon: Truck },
  // Add more categories here
]
\`\`\`

---

## 16. Gallery

### Gallery Images
**File:** `app/gallery/page.tsx`
**Lines:** 15-25
\`\`\`typescript
const allImages = [
  "/images/team-safety-gear.jpg",
  "/images/motorcycle-fleet-1.jpg",
  "/images/motorcycle-fleet-2.jpg",
  // Add or remove image paths
]
\`\`\`

### Gallery Categories
**File:** `app/gallery/page.tsx`
**Lines:** 30-45
\`\`\`typescript
const categories = [
  { name: "All Images", filter: "all" },
  { name: "Team & Staff", filter: "team" },
  { name: "Fleet & Vehicles", filter: "fleet" },
  { name: "Operations", filter: "operations" },
]
\`\`\`

---

## 17. Statistics & Numbers

### Homepage Statistics
**File:** `components/stats-section.tsx`
**Lines:** 5-35
\`\`\`typescript
const stats = [
  {
    icon: TrendingUp,
    number: "120+",
    label: "Monthly Deliveries",
    description: "Successful deliveries every month",
  },
  // Update numbers and descriptions
]
\`\`\`

### About Page Achievements
**File:** `app/about/page.tsx`
**Lines:** 15-50
\`\`\`typescript
const achievements = [
  {
    title: "ISO 9001 Certification",
    year: "2018",
    description: "Quality management system certification",
    image: "/images/team-safety-gear.jpg",
  },
  // Add more achievements
]
\`\`\`

---

## 18. Business Hours

### Contact Page Hours
**File:** `app/contact/page.tsx`
**Lines:** 75-80
\`\`\`typescript
details: ["Mon-Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM", "Sun: Closed"],
\`\`\`

### Footer Hours
**File:** `components/footer.tsx`
**Lines:** 100-105
\`\`\`typescript
<div className="text-sm text-primary-foreground/80">
  <div>Mon-Fri: 8:00 AM - 6:00 PM</div>
  <div>Sat: 9:00 AM - 4:00 PM</div>
</div>
\`\`\`

### WhatsApp Chat Hours
**File:** `components/whatsapp-chat.tsx`
**Lines:** 55-60
\`\`\`typescript
<div className="flex items-center text-xs text-muted-foreground">
  <Clock className="h-3 w-3 mr-1" />
  <span>Mon-Fri: 8AM-6PM, Sat: 9AM-4PM</span>
</div>
\`\`\`

---

## 19. Animations & Effects

### Animation Components
**File:** `components/animations.tsx`
**Lines:** 10-25
\`\`\`typescript
interface AnimatedElementProps {
  children: React.ReactNode
  animation?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scaleIn" | "slideInUp"
  delay?: number
  className?: string
}
\`\`\`

### Carousel Speed
**File:** `components/testimonials-section.tsx`
**Lines:** 35-40
\`\`\`typescript
useEffect(() => {
  const timer = setInterval(() => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }, 5000) // Change 5000 to adjust speed (milliseconds)
  return () => clearInterval(timer)
}, [testimonials.length])
\`\`\`

### WhatsApp Chat Delay
**File:** `components/whatsapp-chat.tsx`
**Lines:** 15-20
\`\`\`typescript
useEffect(() => {
  const timer = setTimeout(() => {
    setIsVisible(true)
  }, 3000) // Change 3000 to adjust delay (milliseconds)
  return () => clearTimeout(timer)
}, [])
\`\`\`

---

## 20. Error Pages

### 404 Page Content
**File:** `app/not-found.tsx`
**Lines:** 10-20
\`\`\`typescript
<div className="text-6xl font-bold text-primary mb-4">404</div>
<CardTitle>Page Not Found</CardTitle>
<p className="text-muted-foreground">
  Sorry, we couldn't find the page you're looking for...
</p>
\`\`\`

### Error Boundary Messages
**File:** `components/error-boundary.tsx`
**Lines:** 25-35
\`\`\`typescript
<CardTitle>Something went wrong</CardTitle>
<p className="text-muted-foreground">
  We're sorry, but something unexpected happened. Please try refreshing the page.
</p>
\`\`\`

---

## Quick Reference Commands

### Adding New Pages
1. Create new file: `app/new-page/page.tsx`
2. Add to navigation: `components/header.tsx`
3. Add to sitemap: `app/sitemap.ts`
4. Add to footer if needed: `components/footer.tsx`

### Changing Colors
1. Update: `tailwind.config.ts`
2. Update theme color: `app/layout.tsx`
3. Update PWA colors: `app/manifest.ts`

### Adding New Services
1. Update: `components/services-section.tsx`
2. Update: `app/services/page.tsx`
3. Update footer list: `components/footer.tsx`

### Updating Contact Info
1. Phone: Search for "+232" across all files
2. Email: Search for "@unimax-sl.com" across all files
3. Address: Search for "Wellington Street" across all files

---

## File Structure Overview

\`\`\`
app/
├── layout.tsx              # Main layout, SEO, metadata
├── page.tsx               # Homepage
├── manifest.ts            # PWA configuration
├── sitemap.ts            # SEO sitemap
├── robots.ts             # SEO robots.txt
├── not-found.tsx         # 404 error page
├── error.tsx             # Error boundary page
├── loading.tsx           # Loading component
├── about/page.tsx        # About page
├── contact/page.tsx      # Contact page
├── faq/page.tsx          # FAQ page
├── gallery/page.tsx      # Gallery page
├── services/page.tsx     # Services page
├── team/page.tsx         # Team page
└── api/contact/route.ts  # Contact form API

components/
├── header.tsx            # Main navigation
├── footer.tsx            # Footer content
├── hero-section.tsx      # Homepage hero
├── services-section.tsx  # Services overview
├── stats-section.tsx     # Statistics section
├── testimonials-section.tsx # Customer testimonials
├── newsletter-signup.tsx # Newsletter component
├── whatsapp-chat.tsx     # WhatsApp integration
├── language-switcher.tsx # Multi-language support
├── animations.tsx        # Animation components
├── error-boundary.tsx    # Error handling
└── ui/                   # UI components (shadcn/ui)

public/images/
├── logo.png              # Company logo
├── team-*.jpg            # Team photos
├── motorcycle-*.jpg      # Fleet images
├── delivery-*.jpg        # Service images
└── coastal-delivery.jpg  # Location images

tailwind.config.ts        # Styling and colors
.env.local               # Environment variables
\`\`\`

---

## Support & Maintenance

For technical support or questions about modifications:
1. Refer to this documentation first
2. Check the specific file and line numbers provided
3. Test changes in a development environment before deploying
4. Keep backups of original files before making modifications

**Last Updated:** December 2024
**Version:** 1.0
**Website:** Unimax-SL Logistics Solutions

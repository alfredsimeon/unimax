"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface AnimatedElementProps {
  children: React.ReactNode
  animation?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scaleIn" | "slideInUp"
  delay?: number
  className?: string
}

export function AnimatedElement({ children, animation = "fadeInUp", delay = 0, className = "" }: AnimatedElementProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-in")
            }, delay)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const animationClasses = {
    fadeInUp: "opacity-0 translate-y-8 transition-all duration-700 ease-out",
    fadeInLeft: "opacity-0 -translate-x-8 transition-all duration-700 ease-out",
    fadeInRight: "opacity-0 translate-x-8 transition-all duration-700 ease-out",
    scaleIn: "opacity-0 scale-95 transition-all duration-700 ease-out",
    slideInUp: "opacity-0 translate-y-12 transition-all duration-1000 ease-out",
  }

  return (
    <div ref={elementRef} className={`${animationClasses[animation]} ${className}`}>
      {children}
      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translate(0, 0) scale(1) !important;
        }
      `}</style>
    </div>
  )
}

export function FloatingElement({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`animate-float ${className}`}>
      {children}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export function PulseElement({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`animate-pulse-custom ${className}`}>
      {children}
      <style jsx>{`
        @keyframes pulse-custom {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
        .animate-pulse-custom {
          animation: pulse-custom 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

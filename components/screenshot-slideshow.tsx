"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const screenshots = [
  {
    src: "/screenshots/dashboard.png",
    alt: "Multi-Platform Incident Dashboard",
    title: "Comprehensive Analytics Dashboard",
    description: "Monitor cross-platform incidents with real-time metrics, compliance tracking, and trend analysis",
  },
  {
    src: "/screenshots/reports.png",
    alt: "My Reports Management",
    title: "Incident Report Management",
    description: "Track, triage, and manage all your submitted incident reports from a centralized interface",
  },
  {
    src: "/screenshots/incident-form.png",
    alt: "Incident Submission Form",
    title: "Streamlined Incident Reporting",
    description: "Submit detailed incident reports with support for multiple harm types and affected platforms",
  },
  {
    src: "/screenshots/verification-start.png",
    alt: "Identity Verification Process",
    title: "Secure Identity Verification",
    description: "Enterprise-grade identity verification powered by SumSub for authenticated reporting",
  },
  {
    src: "/screenshots/verification-success.png",
    alt: "Verification Complete",
    title: "Verified Reporter Status",
    description: "Confirmed identity verification ensures trusted and authenticated incident submissions",
  },
]

export function ScreenshotSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + screenshots.length) % screenshots.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.length)
  }

  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl border border-blue-100">
        <div className="relative aspect-video">
          <Image
            src={screenshots[currentIndex].src || "/placeholder.svg"}
            alt={screenshots[currentIndex].alt}
            fill
            className="object-cover"
            priority
          />

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-blue-200 shadow-lg"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-blue-200 shadow-lg"
            onClick={goToNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
          <h3 className="text-2xl font-bold text-white mb-2">{screenshots[currentIndex].title}</h3>
          <p className="text-blue-100 text-lg">{screenshots[currentIndex].description}</p>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {screenshots.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-primary" : "bg-blue-200"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

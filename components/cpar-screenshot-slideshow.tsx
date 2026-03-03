"use client"

import { useState, useEffect, useRef } from "react"
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
  // {
  //   src: "/screenshots/verification-success.png",
  //   alt: "Verification Complete",
  //   title: "Verified Reporter Status",
  //   description: "Confirmed identity verification ensures trusted and authenticated incident submissions",
  // },
]

export function CPARScreenshotSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [autoPlay])

  const stopAutoPlay = () => setAutoPlay(false)

  const goToPrevious = () => {
    stopAutoPlay()
    setCurrentIndex((prevIndex) => (prevIndex - 1 + screenshots.length) % screenshots.length)
  }

  const goToNext = () => {
    stopAutoPlay()
    setCurrentIndex((prevIndex) => (prevIndex + 1) % screenshots.length)
  }

  const goToIndex = (index: number) => {
    stopAutoPlay()
    setCurrentIndex(index)
  }

  
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  const SWIPE_THRESHOLD = 50 // px

  const onTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null
    touchStartX.current = e.targetTouches[0].clientX
  }

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return

    const distance = touchStartX.current - touchEndX.current

    if (Math.abs(distance) < SWIPE_THRESHOLD) return

    stopAutoPlay()

    if (distance > 0) {
      // swipe left → next
      goToNext()
    } else {
      // swipe right → previous
      goToPrevious()
    }
  }


  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl border border-blue-100">
        <div className="relative aspect-video" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
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
        <div className="hidden md:block absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
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
            onClick={() => goToIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}

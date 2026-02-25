import { Card, CardContent } from "@/components/ui/card"
import {
  Shield,
  Zap,
  Globe,
  Users,
  TrendingUp,
  Lock,
  BarChart3,
  FileText,
  CheckCircle,
  AlertTriangle,
} from "lucide-react"
import Image from "next/image"
import { ScreenshotSlideshow } from "@/components/screenshot-slideshow"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      {/* <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Image src="/logo.png" alt="Astan Logo" width={120} height={40} className="h-10 w-auto" />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Features
            </a>
            <a href="#platform" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Platform
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              About
            </a>
          </nav>
        </div>
      </header> */}

      {/* Hero Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-white"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>

        <div className="container mx-auto text-center max-w-5xl relative">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center p-6 bg-white rounded-2xl mb-8 shadow-lg shadow-blue-500/25 border border-blue-100">
              <Image src="/logo.png" alt="Astan Logo" width={200} height={60} className="h-16 w-auto" />
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                Updated Website <span className="whitespace-nowrap">Coming Soon</span>
              </span>
              {" "}
            </h1>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="border-t border-border bg-gradient-to-b from-blue-50/30 to-white py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <Image src="/logo.png" alt="Astan Logo" width={120} height={40} className="h-8 w-auto" />
            </div>
            <div className="flex space-x-8 text-muted-foreground">
              <a href="/privacy-policy" className="hover:text-primary transition-colors font-medium">
                Privacy Policy
              </a>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; { new Date().getFullYear(); } ASTAN INC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

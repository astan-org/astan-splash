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
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
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
      </header>

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
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">Cross platform</span>{" "}
              Protocol for Trust
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              The first cross-platform reporting system that enables organizations to report social media harms—hacking,
              impersonation, fraud, and NCII—to multiple platforms simultaneously from one secure portal.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <div className="text-center">
              <p className="text-lg text-muted-foreground">
                Enterprise solutions for influencers, businesses, banks, and organizations
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white/50 backdrop-blur border border-blue-100">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <span className="font-semibold text-foreground">Enterprise Security</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white/50 backdrop-blur border border-blue-100">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <span className="font-semibold text-foreground">Cross-Platform</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white/50 backdrop-blur border border-blue-100">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <span className="font-semibold text-foreground">Instant Reporting</span>
            </div>
          </div>
        </div>
      </section>

      <section id="platform" className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">See the Platform in Action</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Experience our comprehensive incident management system designed for enterprise-grade social media safety
              operations.
            </p>
          </div>

          <ScreenshotSlideshow />
        </div>
      </section>

      <section id="features" className="py-24 px-4 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Complete Cross-Platform Safety Solution
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              From incident submission to resolution tracking, our platform provides end-to-end management of social
              media safety threats across all major platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="border-2 border-blue-100 bg-white/80 backdrop-blur hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-primary to-blue-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-4">Unified Reporting</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Submit incidents once to multiple platforms including Facebook, Instagram, TikTok, Twitter, and more.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100 bg-white/80 backdrop-blur hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-primary to-blue-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-4">Identity Verification</h3>
                <p className="text-muted-foreground leading-relaxed">
                  SumSub-powered identity verification ensures authenticated reporting chains and non-repudiation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100 bg-white/80 backdrop-blur hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-primary to-blue-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-4">Analytics Dashboard</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Track resolution times, compliance metrics, and cross-platform threat intelligence in real-time.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100 bg-white/80 backdrop-blur hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 group">
              <CardContent className="p-8 text-center">
                <div className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-primary to-blue-600 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <AlertTriangle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-4">Threat Detection</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Automatically detect cross-platform attacks and coordinate response across multiple social networks.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <Card className="border-2 border-blue-100 bg-white/80 backdrop-blur hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
              <CardContent className="p-10">
                <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-primary to-blue-600 rounded-2xl mb-8">
                  <Zap className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-6">Incident Management System</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Multi-platform incident submission with evidence upload</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Automated validation and cross-platform dissemination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Real-time status tracking and resolution monitoring</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Comprehensive audit trails for compliance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100 bg-white/80 backdrop-blur hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
              <CardContent className="p-10">
                <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-primary to-blue-600 rounded-2xl mb-8">
                  <Globe className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-6">Platform Integrations</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Direct API connections to major social platforms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Secure data export and sharing capabilities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Cross-platform threat intelligence sharing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Automated incident correlation and detection</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100 bg-white/80 backdrop-blur hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
              <CardContent className="p-10">
                <div className="inline-flex items-center justify-center p-4 bg-gradient-to-br from-primary to-blue-600 rounded-2xl mb-8">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-card-foreground mb-6">Enterprise Security</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Bank-grade encryption and data protection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Multi-factor authentication and access controls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>GDPR and DSA compliance built-in</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Comprehensive user consent management</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center p-3 bg-white/20 rounded-xl">
                <TrendingUp className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold">$25M+</div>
              <div className="text-blue-100">Expected Y1 Revenue</div>
            </div>
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center p-3 bg-white/20 rounded-xl">
                <Users className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold">5B+</div>
              <div className="text-blue-100">Social Media Users Protected</div>
            </div>
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center p-3 bg-white/20 rounded-xl">
                <Globe className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold">10+</div>
              <div className="text-blue-100">Platform Integrations</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Ready to Protect Your Digital Presence?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Join leading organizations who trust ASTAN INC. for comprehensive social media safety management. Our
            platform serves influencers, businesses, banks, and government organizations with enterprise-grade security
            and cross-platform protection.
          </p>
          <div className="text-center">
            <p className="text-lg text-muted-foreground">
              Enterprise solutions available - reach out for more information
            </p>
          </div>
        </div>
      </section>

      {/* Legal Information Section */}
      <section className="py-16 px-4 bg-white border-t border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-2xl font-bold text-foreground mb-6">Legal Entity Information</h3>
          <div className="bg-blue-50/50 rounded-lg p-8 border border-blue-100">
            <p className="text-lg text-muted-foreground mb-4">
              <strong className="text-foreground">Legal Name:</strong> ASTAN INC.
            </p>
            <p className="text-lg text-muted-foreground">
              <strong className="text-foreground">Registration Address:</strong>
              <br />
              131 Continental Dr, Suite 305
              <br />
              Newark, 19713
            </p>
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
              <a href="#" className="hover:text-primary transition-colors font-medium">
                Terms of Service
              </a>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-muted-foreground">
            <p>&copy; 2024 ASTAN INC. All rights reserved. Cross Platform Protocol for Trust.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

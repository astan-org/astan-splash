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
import { CPARScreenshotSlideshow } from "@/components/cpar-screenshot-slideshow"
import { CyberPalsScreenshotSlideshow } from "@/components/cyberpals-screenshot-slideshow"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Image src="/logo.png" alt="Astan Logo" width={120} height={40} />
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#mission" className="text-muted-foreground hover:text-primary font-medium">Mission</a>
            <a href="#cyberpals" className="text-muted-foreground hover:text-primary font-medium">CyberPals</a>
            <a href="#cpar" className="text-muted-foreground hover:text-primary font-medium">CPAR</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-white" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.12),transparent_50%)]" />

        <div className="container mx-auto text-center max-w-5xl relative">
          <div className="inline-flex items-center justify-center p-6 bg-white rounded-2xl mb-10 shadow-lg shadow-blue-500/25 border border-blue-100">
            <Image src="/logo.png" alt="Astan Logo" width={200} height={60} />
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              The AI Standard
            </span>{" "}
            for Online Safety & Compliance
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Astan is the single AI safety layer for social media and gaming platforms —
            proactively authenticating users, detecting harm in real time, and
            responding across platforms with audit-ready compliance.
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section id="mission" className="py-24 px-4 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(59,130,246,0.08),transparent_55%)]" />

        <div className="container mx-auto max-w-4xl text-center relative">
          <h2 className="text-4xl md:text-5xl font-bold mb-10">
            Our Mission
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            The New Standard for AI Safety Compliance. We're building the entire lifecycle:
            from age authentication, proactive tutoring to cross-platform response.
            <br /><br />
            We set the new standard for AI safety compliance by building an end-to-end
            lifecycle of protection and responsibility, from robust age authentication
            and proactive tutoring to seamless cross-platform response.
            <br /><br />
            Our mission is to define the new benchmark for AI safety compliance by delivering
            a complete, integrated lifecycle of protection — from secure age authentication
            and intelligent, proactive guidance to unified cross-platform response.
            We help organizations create AI experiences that are responsible, resilient,
            and built to protect users at every stage.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Cost of Fragmented Safety
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Platforms spend billions reacting to harm — without reducing risk,
              liability, or enforcement cost.
              <br /><br /> 
              User authentication and safety across gaming 
              and social platforms remain reactive and fragmented. Security education 
              relies on offline guides and parental controls adolescents rarely use. 
              Abuse detection is siloed, forcing victims of cross-platform harms, 
              such as deepfake scams, to report incidents repeatedly. 
              As risks escalate, regulators are responding with growing 
              scrutiny and multi-million-dollar fines.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <h3 className="text-3xl font-bold">$10B+</h3>
              <p className="text-muted-foreground mt-2">
                Spent yearly on low-ROI safety initiatives disconnected from user behavior
              </p>
            </Card>

            <Card className="p-8 text-center">
              <h3 className="text-3xl font-bold">$545M</h3>
              <p className="text-muted-foreground mt-2">
                Lost to redundant investigations chasing the same actor across platforms
              </p>
            </Card>

            <Card className="p-8 text-center">
              <h3 className="text-3xl font-bold">6%</h3>
              <p className="text-muted-foreground mt-2">
                Of global revenue at risk under EU DSA penalties
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CyberPals */}
      <section id="cyberpals" className="py-24 px-4 bg-gradient-to-b from-blue-50/30 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_55%)]" />

        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">CyberPals</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Agentic AI companions delivering proactive education, real-time risk detection,
              and age-appropriate guidance.
            </p>
          </div>

          <div className="mb-24">
            <CyberPalsScreenshotSlideshow />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Proactive Detection",
                text: "Detects impersonation, scams, and abuse in real time without disrupting UX.",
              },
              {
                icon: Users,
                title: "Age-Aware Tutoring",
                text: "Contextual, age-appropriate education embedded directly in the experience.",
              },
              {
                icon: Lock,
                title: "Privacy-First",
                text: "Neutral, end-to-end encrypted, and compliant by default.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <Card key={title} className="border-2 border-blue-100 bg-white/80 backdrop-blur hover:shadow-xl transition-all">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex p-3 bg-primary/10 rounded-xl mb-6">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{title}</h3>
                  <p className="text-muted-foreground">{text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CPAR */}
      <section id="cpar" className="py-24 px-4 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-white" />

        <div className="container mx-auto max-w-7xl relative">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              CPAR — Cross-Platform Abuse Response
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A single “911” for online harm — one audit-ready system for detection,
              response, and regulatory compliance.
            </p>
          </div>

          <div className="mb-24">
            <CPARScreenshotSlideshow />
          </div>


          <div className="py-24 px-4">
            <div className="container mx-auto max-w-7xl">
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
          </div>

        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-blue-600 text-white">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-3 gap-12 text-center">
          <div>
            <TrendingUp className="h-8 w-8 mx-auto mb-4" />
            <div className="text-4xl font-bold">$25M+</div>
            <div className="text-blue-100">Expected Y1 Revenue</div>
          </div>
          <div>
            <Users className="h-8 w-8 mx-auto mb-4" />
            <div className="text-4xl font-bold">5B+</div>
            <div className="text-blue-100">Users Protected</div>
          </div>
          <div>
            <Globe className="h-8 w-8 mx-auto mb-4" />
            <div className="text-4xl font-bold">10+</div>
            <div className="text-blue-100">Platform Integrations</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-white to-blue-50/30">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Ready to Become the Safety Standard?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            Astan helps platforms reduce safety OPEX by 30%+, comply with DSA mandates, 
            and turn trust into a scalable revenue stream.
          </p>
          <div className="text-center">
            <p className="text-lg text-muted-foreground">
              Enterprise solutions available - reach out for more information.
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
              Newark, DE 19713
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-gradient-to-b from-blue-50/30 to-white py-16 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <Image src="/logo.png" alt="Astan Logo" width={120} height={40} className="mx-auto mb-6" />
          <div className="mb-[20px]">
            <a href="/privacy-policy" className="hover:text-primary transition-colors font-medium">
              Privacy Policy
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()} ASTAN INC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

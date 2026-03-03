import { Card, CardContent } from "@/components/ui/card"
import {
  BookOpen,
  Puzzle,
  Gavel,
  Shield,
  Users,
  Lock,
  PhoneCall,
  Layers,
  TrendingUp,
  BarChart3,
  Zap
} from "lucide-react"
import Image from "next/image"
import { CPARScreenshotSlideshow } from "@/components/cpar-screenshot-slideshow"
import { CyberPalsScreenshotSlideshow } from "@/components/cyberpals-screenshot-slideshow"
import ContactForm from "@/components/contact-form"

const renderItalics = (text: string) =>
  text.split(/(\*.*?\*)/g).map((part, i) =>
    part.startsWith("*") && part.endsWith("*") ? (
      <em key={i}>{part.slice(1, -1)}</em>
    ) : (
      part
    )
  )

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/">
            <Image src="/logo.png" alt="Astan Logo" width={120} height={40} />
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#vision" className="text-muted-foreground hover:text-primary font-medium">Our Vision</a>
            <a href="#features" className="text-muted-foreground hover:text-primary font-medium">Features</a>
            <a href="#contact" className="text-muted-foreground hover:text-primary font-medium">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-white" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.12),transparent_55%)]" />

        <div className="relative container mx-auto max-w-5xl text-center">
          <div className="inline-flex p-6 bg-white rounded-2xl shadow-lg border border-blue-100 mb-10">
            <Image src="/logo.png" alt="Astan Logo" width={200} height={60} />
          </div>

          <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              The New Standard
            </span>{" "}
            for AI Security Compliance
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            We are building the entire safety lifecycle, from proactive authentication
            and agentic tutoring to cross-platform incident response.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="px-8 py-4 rounded-xl bg-primary text-white font-semibold shadow-lg hover:opacity-90 transition">
              Request Pilot Access
            </a>
            <a download className="px-8 py-4 rounded-xl cursor-pointer border border-border font-semibold hover:bg-muted transition">
              Download Whitepaper
            </a>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section id="vision" className="py-24 px-4 bg-white">
        <div className="container mx-auto max-w-6xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">
            Fragmented Systems. Growing Risk.
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: BookOpen, title: "The Education Gap", text: "Current security tutoring is stuck on offline guides and non-interactive sessions that adolescents never see and parents don't use." },
              { icon: Puzzle, title: "The Silo Failure", text: "Authentication and abuse detection are isolated; platforms don’t communicate, leaving victims to report the same deepfake scam to a dozen different \"voids\"." },
              { icon: Gavel, title: "The Compliance Hammer", text: "Regulators are issuing massive, multi-million dollar fines as the US *Take It Down Act*, EU *DSA*, and UK *Online Safety Act* enter into effect." },
            ].map(({ icon: Icon, title, text }) => (
              <Card key={title} className="border-2 border-blue-100 bg-white/80 backdrop-blur">
                <CardContent className="p-8 text-center">
                  <div className="inline-flex p-3 bg-primary/10 rounded-xl mb-6">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{title}</h3>
                  <p className="text-muted-foreground">{renderItalics(text)}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* CyberPals */}
      <section id="features" className="py-24 px-4 bg-gradient-to-b from-blue-50/30 to-white relative">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The CyberPals Suite
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-16 leading-relaxed">
              Agentic AI companions delivering proactive education,
              real-time risk detection, and age-aware guidance.
            </p>
          </div>

          <CyberPalsScreenshotSlideshow />

          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {[
              { icon: Shield, title: "Agentic AI Defenders", text: "We embed AI tutors directly into social media, gaming, LLMs, and classroom environments to meet users where they already are." },
              { icon: Users, title: "Real-Time Detection", text: "Safety-focused AI agents provide immediate guidance when harm is detected, such as \"Red Ring Alerts\" for possible scams or impersonation." },
              { icon: Lock, title: "Privacy-First Auth", text: "Neutral, privacy-focused authentication that satisfies strict new age-limit regulations." },
            ].map(({ icon: Icon, title, text }) => (
              <Card key={title} className="border-2 border-blue-100 bg-white/80 backdrop-blur">
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
      <section className="py-24 px-4 bg-gradient-to-b from-blue-50/30 to-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.1),transparent_55%)]" />

        <div className="container mx-auto max-w-6xl relative">
          {/* Headline + Description */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Cross-Platform Abuse Response Platform
            </h2>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Protected by U.S. Patent, CPAR is the audit-ready response layer that activates once harm is detected,
              unifying reporting, identity verification, and cross-platform coordination
              into a single system regulators and platforms can trust.
            </p>
          </div>

          {/* Slideshow */}
          <div className="mb-24">
            <CPARScreenshotSlideshow />
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: PhoneCall,
                title: "The Stripe for AI Safety Compliance",
                text: "A single, audit-ready system that gives platforms a unified way to handle abuse reporting and regulatory compliance.",
              },
              {
                icon: Layers,
                title: "Cross-Platform Interoperability",
                text: "A neutral SDK that connects safety silos, enabling visibility into harm lateral movement across multiple apps.",
              },
              {
                icon: TrendingUp,
                title: "Efficiency Gains",
                text: "Reduce safety OPEX by up to 30% through preventative education, unified reporting, and automated coordination.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <Card
                key={title}
                className="border-2 border-blue-100 bg-white/80 backdrop-blur"
              >
                <CardContent className="p-8 text-center">
                  <div className="inline-flex p-3 bg-primary/10 rounded-xl mb-6">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{title}</h3>
                  <p className="text-muted-foreground">
                    {text}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Powerhouse Team */}
      <section className="py-24 px-4 bg-gradient-to-b from-blue-50/30 to-white">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Built by Leaders from Big Tech & Global Finance
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-16 leading-relaxed">
            Our multidisciplinary team unites experts who formerly led:
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Trust & Safety and Cyber Security",
                text: "At Meta and Google.",
              },
              {
                icon: BarChart3,
                title: "Global Infrastructure and Cyber Engineering",
                text: "At Goldman Sachs.",
              },
              {
                icon: Zap,
                title: "AI Engineering and Immersive Media",
                text: "At major news and tech organizations.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <Card
                key={title}
                className="border-2 border-blue-100 bg-white/80 backdrop-blur"
              >
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


      {/* CTA */}
      <section id="contact" className="py-24 px-4 bg-gradient-to-r from-primary to-blue-600 text-white text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Securing Trust. Unlocking Growth.
        </h2>
        <p className="text-xl mb-10">
          Ready to work together?
        </p>
        <ContactForm />
      </section>


      {/* Footer */}
      <footer className="border-t border-border bg-gradient-to-b from-blue-50/30 to-white py-16 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <Image src="/logo.png" alt="Astan Logo" width={120} height={40} className="mx-auto mb-6" />
          {/* <div className="mb-[20px]">
            <a href="/privacy-policy" className="hover:text-primary transition-colors font-medium">
              Privacy Policy
            </a>
          </div> */}
          <p>&copy; {new Date().getFullYear()} ASTAN INC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

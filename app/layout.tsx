import type React from "react"
import type { Metadata } from "next"
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google"
import "./globals.css"

// AST-05 Typography. Inter Tight for display, Inter for text,
// JetBrains Mono restricted to identifiers.
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const interTight = Inter_Tight({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter-tight",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

const SITE = "https://astan.ai"

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Astan — The response layer for AI-generated harm",
  description:
    "One confirmed detection becomes coordinated, privacy-preserving, audit-ready action across platforms and organizations — in seconds.",
  alternates: {
    canonical: SITE,
  },
  openGraph: {
    title: "Astan — The response layer for AI-generated harm",
    description:
      "One confirmed detection becomes coordinated, privacy-preserving, audit-ready action across platforms and organizations — in seconds.",
    url: SITE,
    siteName: "Astan",
    images: [
      {
        url: "/logo.png",
        width: 1400,
        height: 410,
      },
    ],
    locale: "en_US",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${interTight.variable} ${jetbrainsMono.variable} antialiased scroll-smooth`}
    >
      <body className="font-sans bg-paper text-ink">{children}</body>
    </html>
  )
}

import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Astan.io: The AI Standard for Online Safety Compliance",
  description: "We are building the entire safety lifecycle — from proactive authentication and agentic tutoring to cross-platform incident response.",
  alternates: {
    canonical: "https://astan.io",
  },
  openGraph: {
    title: "Astan",
    description: "The AI Standard for Online Safety Compliance. We are building the entire safety lifecycle — from proactive authentication and agentic tutoring to cross-platform incident response.",
    url: "https://astan.io",
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
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased scroll-smooth`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}

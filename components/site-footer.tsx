import Image from "next/image"
import Link from "next/link"
import { Eyebrow } from "@/components/brand"

const columns = [
  {
    heading: "Platforms",
    links: [
      { href: "/platforms", label: "Harm dispatch" },
      { href: "/use-cases", label: "Use cases" },
    ],
  },
  {
    heading: "Enterprises",
    links: [{ href: "/enterprises", label: "Agent governance" }],
  },
  {
    heading: "Engage",
    links: [
      { href: "/contact#pilot", label: "Pilot with us" },
      { href: "/contact#govern", label: "Govern your agents" },
      { href: "/contact#partner", label: "Partner with us" },
      { href: "/contact#join", label: "Join us" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-ink px-6 py-18 md:px-10">
      <div className="mx-auto max-w-[1140px]">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Image
              src="/logo-light.png"
              alt="Astan"
              width={1400}
              height={410}
              className="mb-6 h-8 w-auto"
            />
            <p className="prose-measure text-[13px] leading-relaxed text-on-ink">
              The response layer for AI-generated harm. One protocol, two doors:
              cross-platform harm dispatch, and runtime governance for AI agents.
            </p>
            <p className="eyebrow mt-8 text-on-ink-muted">Paris and New York</p>
          </div>

          {columns.map((column) => (
            <div key={column.heading}>
              <Eyebrow className="text-on-ink-muted">{column.heading}</Eyebrow>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[13.5px] text-on-ink transition-colors hover:text-bone"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap items-baseline justify-between gap-6 border-t border-[rgba(237,230,214,0.16)] pt-8">
          <p className="identifier text-on-ink-muted">
            Patent-pending · astan.ai
          </p>
          <div className="flex flex-wrap items-baseline gap-8">
            <Link
              href="/privacy-policy"
              className="text-[13px] text-on-ink-muted transition-colors hover:text-bone"
            >
              Privacy policy
            </Link>
            <p className="text-[13px] text-on-ink-muted">
              © {new Date().getFullYear()} Astan Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

/* How it works and Why now are intentionally not in the top nav — they stay
   reachable from the footer and from in-page links. */
const nav = [
  { href: "/platforms", label: "For platforms" },
  { href: "/enterprises", label: "For enterprises" },
  { href: "/use-cases", label: "Use cases" },
]

/* AST-03: two lockups only. White wordmark on Ink and Teal, black wordmark on
   Bone, Paper and Card. Nothing else is an approved variant. */
export function SiteHeader({
  tone = "light",
  overlay = false,
  revealOver,
}: {
  tone?: "light" | "dark"
  /* Lifts the header out of flow so the section beneath it can own the full
     viewport height, and drops its ground and border so that section reads
     full-bleed. */
  overlay?: boolean
  /* id of the element the header rides on. While that element holds a third of
     the viewport the header is shown; past it the header retracts. */
  revealOver?: string
}) {
  const dark = tone === "dark"
  const [shown, setShown] = useState(true)

  useEffect(() => {
    if (!revealOver) return
    const target = document.getElementById(revealOver)
    if (!target) return

    /* Compare the ratio, not entry.isIntersecting — that flag is true whenever
       the target overlaps the viewport at all, regardless of threshold, so the
       header would never retract. Several thresholds keep the callback firing
       often enough for the state to track the scroll. */
    const io = new IntersectionObserver(
      ([entry]) => setShown(entry.intersectionRatio >= 0.3),
      { threshold: [0, 0.15, 0.3, 0.45, 0.6, 0.8, 1] },
    )
    io.observe(target)
    return () => io.disconnect()
  }, [revealOver])

  return (
    <header
      className={cn(
        "top-0 z-50",
        overlay
          ? "fixed inset-x-0 transition-transform duration-300 ease-out"
          : "sticky border-b",
        !overlay &&
          (dark
            ? "border-[rgba(237,230,214,0.16)] bg-ink"
            : "border-hairline bg-paper"),
      )}
      /* Inline rather than -translate-y-full: under Tailwind v4 that utility
         resolves to `translate: 0px 0%` here, so the header never moved. */
      style={
        overlay
          ? { transform: shown ? "translateY(0)" : "translateY(-100%)" }
          : undefined
      }
      /* A retracted header is still in the tab order, so reveal it when focus
         lands inside rather than sending keyboard users to an offscreen link. */
      onFocusCapture={overlay ? () => setShown(true) : undefined}
    >
      {/* Wider than the 1140px content grid: the header is chrome, not content,
         so it sits closer to the edges. Capped so it does not sprawl on
         ultra-wide displays. */}
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10">
        <Link href="/" aria-label="Astan home">
          <Image
            src={dark ? "/logo-light.png" : "/logo.png"}
            alt="Astan"
            width={1400}
            height={410}
            priority
            className="h-7 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-[13.5px] transition-colors",
                dark
                  ? "text-on-ink hover:text-bone"
                  : "text-slate hover:text-teal-deep",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={cn(
              "inline-flex h-9 items-center border px-4 text-[13.5px] font-medium transition-colors",
              dark
                ? "border-[rgba(237,230,214,0.32)] text-bone hover:border-bone"
                : "border-ink text-ink hover:bg-ink hover:text-bone",
            )}
          >
            Contact
          </Link>
        </nav>

        <Link
          href="/contact"
          className={cn(
            "inline-flex h-9 items-center border px-4 text-[13.5px] font-medium lg:hidden",
            dark
              ? "border-[rgba(237,230,214,0.32)] text-bone"
              : "border-ink text-ink",
          )}
        >
          Contact
        </Link>
      </div>
    </header>
  )
}

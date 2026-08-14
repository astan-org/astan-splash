import type React from "react"
import { cn } from "@/lib/utils"

/* AST-05: wide-tracked uppercase label. Only below 12px, only at 0.2em+. */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <p className={cn("eyebrow text-muted", className)}>{children}</p>
}

/* AST-05: mono is for identifiers only — control IDs, frameworks, timestamps. */
export function Identifier({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <span className={cn("identifier text-muted", className)}>{children}</span>
}

/* AST-06: 1px hairline. Never 2. */
export function Rule({ className }: { className?: string }) {
  return <div className={cn("h-px w-full bg-hairline", className)} />
}

/* AST-08 Buttons. Square, 44px, 24px horizontal padding, verb-phrase labels.
   One primary per view. Teal is never a button fill on a dark ground — it
   fails at 2.84:1 against Ink. */
type ButtonVariant = "solid" | "line" | "quiet" | "on-ink" | "on-ink-line"

const buttonStyles: Record<ButtonVariant, string> = {
  solid: "bg-ink text-bone border-ink hover:bg-ink-raised hover:border-ink-raised",
  line: "bg-transparent text-ink border-ink hover:bg-ink hover:text-bone",
  quiet:
    "bg-transparent text-teal border-transparent px-0 hover:text-teal-deep h-auto py-1",
  "on-ink": "bg-bone text-ink border-bone hover:bg-white hover:border-white",
  "on-ink-line":
    "bg-transparent text-bone border-[rgba(237,230,214,0.32)] hover:border-bone",
}

export function ButtonLink({
  href,
  variant = "solid",
  className,
  children,
}: {
  href: string
  variant?: ButtonVariant
  className?: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex h-11 items-center gap-2 border px-6 text-[13.5px] font-medium tracking-[0.01em] transition-colors",
        buttonStyles[variant],
        className,
      )}
    >
      {children}
    </a>
  )
}

/* AST-08 Status. Outlined, never filled — filled chips are the fastest way to
   make a compliance surface look like a consumer app. */
export function StatusBadge({
  tone,
  children,
}: {
  tone: "pass" | "advisory" | "high" | "critical" | "neutral"
  children: React.ReactNode
}) {
  const tones = {
    pass: "border-pass text-pass",
    advisory: "border-advisory text-advisory",
    high: "border-high text-high",
    critical: "border-critical text-critical",
    neutral: "border-hairline text-muted",
  }
  const dots = {
    pass: "bg-pass",
    advisory: "bg-advisory",
    high: "bg-high",
    critical: "bg-critical",
    neutral: "bg-muted",
  }
  return (
    <span
      className={cn(
        "inline-flex items-center gap-[7px] border px-3 py-1.5 identifier text-[10px] font-medium uppercase tracking-[0.12em]",
        tones[tone],
      )}
    >
      <span className={cn("inline-block h-[5px] w-[5px]", dots[tone])} />
      {children}
    </span>
  )
}

/* Section heading block: display title over an optional lede. */
export function SectionHead({
  title,
  lede,
  tone = "light",
}: {
  title: string
  lede?: string
  tone?: "light" | "dark"
}) {
  return (
    <div className="mb-13">
      <h2 className={cn("display-md", tone === "dark" ? "text-bone" : "text-ink")}>
        {title}
      </h2>
      {lede ? (
        <p
          className={cn(
            "lede mt-4",
            tone === "dark" ? "text-on-ink" : "text-slate",
          )}
        >
          {lede}
        </p>
      ) : null}
    </div>
  )
}

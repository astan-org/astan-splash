import Image from "next/image"
import type { CSSProperties } from "react"
import { cn } from "@/lib/utils"

/* The platforms hero scene. A still, colour-graded base image with reactions
   and comment cards animating over it — no video, so nothing is re-encoded,
   nothing buffers and nothing renders soft.

   Only generic reaction art is used here. public/emojis also contains the
   Facebook, Instagram, TikTok and Discord brand logos; those are deliberately
   left out, because the brief forbids naming or implying any platform on the
   public site and TikTok is called out by name.

   Everything is CSS keyframes on a shared 14s cycle, so this stays a server
   component with no JavaScript and no animation library. */

type Reaction = {
  src: string
  alt: string
  /* Percentages of the frame, so the composition scales with the column. */
  top: string
  left: string
  size: string
  delay: string
  className?: string
}

/* Positions keep clear of the face (roughly 35–60% across, 15–50% down). */
const reactions: Reaction[] = [
  {
    src: "/emojis/emoji.png",
    alt: "",
    top: "8%",
    left: "4%",
    size: "clamp(38px,4.6vw,62px)",
    delay: "-13.4s",
  },
  {
    src: "/emojis/angry.png",
    alt: "",
    top: "11%",
    left: "76%",
    size: "clamp(30px,3.6vw,48px)",
    delay: "-11.6s",
  },
  {
    src: "/emojis/like.png",
    alt: "",
    top: "27%",
    left: "70%",
    size: "clamp(30px,3.6vw,48px)",
    delay: "-9.8s",
  },
  {
    src: "/emojis/smile.png",
    alt: "",
    top: "58%",
    left: "46%",
    size: "clamp(34px,4vw,54px)",
    delay: "-7.2s",
    className: "hidden sm:block",
  },
  {
    src: "/emojis/facebook-reactions.png",
    alt: "",
    top: "83%",
    left: "5%",
    size: "clamp(28px,3.4vw,44px)",
    delay: "-4.4s",
    className: "hidden sm:block",
  },
]

type Comment = {
  name: string
  time: string
  body: string
  /* Only set when the message is the kind of thing the product exists to catch. */
  severity?: "high" | "critical"
  top: string
  left: string
  delay: string
  className?: string
}

const comments: Comment[] = [
  {
    name: "Jane",
    time: "2 minutes ago",
    body: "Love this one",
    top: "23%",
    left: "9%",
    delay: "-12.6s",
    /* Two cards at 160px in a 375px frame bury the subject. On phones only the
       flagged one survives — it is the one carrying the argument. */
    className: "hidden sm:block",
  },
  {
    name: "Smith",
    time: "8 minutes ago",
    body: "What school do you go to?",
    severity: "high",
    top: "45%",
    left: "3%",
    delay: "-8.4s",
  },
  {
    name: "Unknown",
    time: "just now",
    body: "Don't tell your parents we talked",
    severity: "critical",
    top: "67%",
    left: "24%",
    delay: "-3.2s",
    className: "hidden sm:block",
  },
]

const severityRing = {
  high: "border-high",
  critical: "border-critical",
} as const

const severityText = {
  high: "text-high",
  critical: "text-critical",
} as const

const severityLabel = {
  high: "Flagged",
  critical: "Dispatched",
} as const

export function PlatformScene({ className }: { className?: string }) {
  return (
    <div className={cn("relative overflow-hidden bg-bone", className)}>
      <Image
        src="/empty-platform-poster.png"
        alt="Someone using a social platform on their phone"
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover object-[62%_center]"
      />

      {/* Reactions */}
      {reactions.map((r) => (
        <span
          key={r.src + r.top}
          aria-hidden="true"
          className={cn("react-pop absolute", r.className)}
          style={
            {
              top: r.top,
              left: r.left,
              width: r.size,
              height: r.size,
              "--delay": r.delay,
            } as CSSProperties
          }
        >
          <Image
            src={r.src}
            alt=""
            width={128}
            height={128}
            className="h-full w-full object-contain"
          />
        </span>
      ))}

      {/* Comment cards. Square, hairline, no shadow — the surrounding brand,
         not a generic chat bubble. */}
      {comments.map((c) => (
        <div
          key={c.name + c.top}
          aria-hidden="true"
          className={cn(
            "card-pop absolute w-[clamp(148px,20vw,222px)] border bg-card px-4 py-3",
            c.severity ? severityRing[c.severity] : "border-hairline",
            c.className,
          )}
          style={{ top: c.top, left: c.left, "--delay": c.delay } as CSSProperties}
        >
          <div className="flex items-baseline justify-between gap-2">
            <span className="text-[12.5px] font-medium text-ink">{c.name}</span>
            <span className="identifier text-[9.5px] text-muted">{c.time}</span>
          </div>
          <p className="mt-1.5 text-[12.5px] leading-snug text-slate">{c.body}</p>

          {c.severity && (
            <div
              className={cn(
                "mt-2.5 flex items-center gap-[6px] border-t pt-2",
                c.severity === "critical" ? "border-critical/40" : "border-high/40",
              )}
            >
              <span
                className={cn(
                  "inline-block h-[5px] w-[5px]",
                  c.severity === "critical" ? "bg-critical" : "bg-high",
                )}
              />
              <span
                className={cn(
                  "identifier text-[9.5px] font-medium uppercase tracking-[0.12em]",
                  severityText[c.severity],
                )}
              >
                {severityLabel[c.severity]}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

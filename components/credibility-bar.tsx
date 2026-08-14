import { MapPin } from "lucide-react"
import { cn } from "@/lib/utils"
import { Eyebrow } from "@/components/brand"

/* Brief §6 (P1). Answers the "is this startup real?" question every enterprise
   buyer asks. Capabilities and affiliations only — no figures, no roadmap.

   Marks are rendered as CSS masks filled with currentColor, not as <img>. The
   supplied source files are off-palette (NVIDIA green, a Meta blue gradient,
   Mandiant red) and three of them are opaque white plates that would show as
   white boxes on Ink. Masking flattens every mark to a single brand tone and
   lets one asset serve both the Ink and Bone grounds. Generated silhouettes
   live in /public/logos; the originals are untouched in /public. */

type Mark = { src: string; ratio: number; h: number }

const MARKS = {
  /* Heights are tuned per mark so the marks balance optically rather than
     mathematically: wordmarks sit shorter than square marks at equal presence. */
  patent: { src: "/logos/patent.png", ratio: 1.0, h: 25 },
  nvidia: { src: "/logos/nvidia.png", ratio: 1.33, h: 20 },
  meta: { src: "/logos/meta.png", ratio: 1.5, h: 19 },
  google: { src: "/logos/google.png", ratio: 3.06, h: 22 },
  microsoft: { src: "/logos/microsoft.png", ratio: 4.5, h: 18 },
  capitalOne: { src: "/logos/capital-one.png", ratio: 2.79, h: 22 },
  // The block-letter mark alone — the full lockup's three lines of wordmark
  // are unreadable at pedigree size.
  mit: { src: "/logos/mit.png", ratio: 1.89, h: 20 },
  mandiant: { src: "/logos/mandiant.png", ratio: 8.92, h: 12 },
  goldman: { src: "/logos/goldman-sachs.png", ratio: 2.31, h: 24 },
} satisfies Record<string, Mark>

function LogoMask({
  mark,
  label,
  className,
}: {
  mark: Mark
  label: string
  className?: string
}) {
  return (
    <span
      role="img"
      aria-label={label}
      className={cn("inline-block shrink-0 bg-current", className)}
      style={{
        /* Sized in em against a 16px baseline, so the tuned heights hold as
           px wherever the font-size is 16 — and the whole pedigree row can be
           scaled as one unit by setting a font-size on its container. */
        height: `${mark.h / 16}em`,
        width: `${Math.round(mark.h * mark.ratio) / 16}em`,
        WebkitMaskImage: `url("${mark.src}")`,
        maskImage: `url("${mark.src}")`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "left center",
        maskPosition: "left center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  )
}

const facts = [
  {
    label: "Intellectual property",
    value: "Two U.S. patents filed — patent-pending",
    mark: MARKS.patent,
    markLabel: "Patent",
  },
  {
    label: "Programs",
    value: "NVIDIA Inception member",
    mark: MARKS.nvidia,
    markLabel: "NVIDIA",
  },
  {
    // No usable Station F asset — the supplied file is an opaque gradient JPEG.
    label: "Presence",
    value: "Station F (Paris) and New York",
    icon: MapPin,
  },
]

/* Alphabetical — no ranking implied. */
const pedigree = [
  { mark: MARKS.capitalOne, name: "Capital One" },
  { mark: MARKS.goldman, name: "Goldman Sachs" },
  { mark: MARKS.google, name: "Google" },
  { mark: MARKS.mandiant, name: "Mandiant" },
  { mark: MARKS.meta, name: "Meta" },
  { mark: MARKS.microsoft, name: "Microsoft" },
  { mark: MARKS.mit, name: "MIT" },
]

export function CredibilityBar({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark"
  const hairline = dark ? "border-[rgba(237,230,214,0.16)]" : "border-hairline"

  return (
    <section
      className={cn(
        "border-t px-6 py-18 md:px-10",
        hairline,
        dark ? "bg-ink" : "bg-bone",
      )}
    >
      <div className="mx-auto max-w-[1140px]">
        <Eyebrow className={dark ? "text-on-ink-muted" : "text-muted"}>
          Credibility
        </Eyebrow>

        <dl
          className={cn(
            "mt-8 grid gap-px border-t sm:grid-cols-2 lg:grid-cols-3",
            hairline,
          )}
        >
          {facts.map((fact) => {
            const Icon = fact.icon
            return (
              <div
                key={fact.label}
                className={cn("border-b pt-6 pb-6 pr-6", hairline)}
              >
                <div
                  className={cn(
                    "mb-5 flex h-[25px] items-center text-[16px]",
                    dark ? "text-bone" : "text-ink",
                  )}
                >
                  {fact.mark ? (
                    <LogoMask mark={fact.mark} label={fact.markLabel ?? ""} />
                  ) : Icon ? (
                    <Icon className="h-[23px] w-[23px]" strokeWidth={1.25} aria-hidden="true" />
                  ) : null}
                </div>

                <dt
                  className={cn(
                    "eyebrow mb-3",
                    dark ? "text-on-ink-muted" : "text-muted",
                  )}
                >
                  {fact.label}
                </dt>
                <dd
                  className={cn(
                    "text-[14px] leading-relaxed",
                    dark ? "text-bone" : "text-ink",
                  )}
                >
                  {fact.value}
                </dd>
              </div>
            )
          })}
        </dl>

        <div className="mt-10">
          <Eyebrow className={dark ? "text-on-ink-muted" : "text-muted"}>
            The team
          </Eyebrow>

          {/* One line at every width, spread edge to edge. The viewport-scaled
             font-size shrinks the marks in step below ~1140px so the row never
             wraps; justify-between spends the slack as even gaps above it. */}
          <ul className="mt-6 flex items-center justify-between gap-x-1 text-[clamp(8px,2.8vw,20px)]">
            {pedigree.map((item) => (
              <li
                key={item.name}
                className={cn(
                  "flex items-center gap-3",
                  dark ? "text-bone" : "text-ink",
                )}
              >
                <LogoMask mark={item.mark} label={item.name} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

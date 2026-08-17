import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ButtonLink, Eyebrow } from "@/components/brand";
import {
  AnimatedWords,
  BackgroundPaths,
} from "@/components/ui/background-paths";

/* Brief §1 + §2 (P1). The homepage is the hero and the two doors. Nothing else.
   A visitor picks their path within five seconds of landing. */

const doors = [
  {
    href: "/platforms",
    eyebrow: "Door one · social media platforms",
    title: "Cross-platform harm dispatch",
    lede: "The 911 dispatcher for the internet. A bad actor caught on one platform is a bad actor everywhere. Report once, protected everywhere.",
    points: [
      // "Coordinated response across connected platforms",
      // "Child safety as the beachhead",
      // "Mandated reporting filed automatically",
    ],
    cta: "For platforms",
    tone: "dark" as const,
    /* Narrowed so this title wraps to two lines and fills the shared title
       row, instead of leaving a gap under a single line. Door two is left at
       full width — narrowing it would push it to three. */
    titleWidth: "lg:max-w-[70%]",
  },
  {
    href: "/enterprises",
    eyebrow: "Door two · enterprises",
    title: "Governance for frontier AI agents",
    lede: "Your council approved the agent. It shipped. Now no one can say who is watching it. Astan watches, judges, and can stop agents in real time.",
    points: [
      // "Sits above any existing agent gateway",
      // "Millisecond allow, block or hold verdicts",
      // "Operator kill switch and tamper-proof audit trail",
    ],
    cta: "For enterprises",
    tone: "light" as const,
    titleWidth: "",
  },
];

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Overlaid so the hero owns the full viewport, and retracted once the
         doors take over the screen. */}
      <SiteHeader tone="dark" overlay revealOver="hero" />

      <main className="flex flex-1 flex-col">
        {/* Hero — Ink ground, centred, one full viewport tall. */}
        <BackgroundPaths id="hero" className="flex min-h-screen items-center">
          <section className="w-full px-6 py-24 md:px-10">
            <div className="mx-auto max-w-[1140px] text-center">
              <Eyebrow className="text-teal-soft">
                One protocol · two doors
              </Eyebrow>
              {/* display-xl sets 0.98, which is too tight once the heading
                 wraps to four or five lines on a phone. */}
              <h1 className="display-xl mx-auto mt-5 max-w-[28ch] leading-[1.12] text-bone md:leading-[0.98]">
                <AnimatedWords text="The decision and response layer for AI-generated harm" />
              </h1>
              <p className="lede mx-auto mt-7 max-w-[62ch] text-on-ink">
                One confirmed detection becomes coordinated, privacy-preserving,
                audit-ready action across platforms and organizations, in
                seconds.
              </p>

              {/* Plain hash link — scroll-smooth on <html> handles the easing,
                 so this still works with JavaScript unavailable. */}
              <div className="mt-11 flex justify-center">
                <ButtonLink href="#doors" variant="on-ink-line">
                  Choose a door
                  <span aria-hidden="true">↓</span>
                </ButtonLink>
              </div>
            </div>
          </section>
        </BackgroundPaths>

        {/* The two doors. Equal weight, opposite grounds — AST-11.
           Hairlines carry every tone boundary: hero to doors, and door to door. */}
        {/* Five shared rows — eyebrow, title, description, points, CTA — so both
           doors align band for band however the copy wraps. The points row takes
           the free space, which keeps both CTAs on the bottom edge. */}
        {/* Two columns at every width. On phones the doors stay side by side at
           50% each and drop to eyebrow, title and CTA — enough to choose a
           path, not enough to read. The full copy lives behind each door. */}
        {/* The doors are the point of the page, so on phones they hold a
           deliberate share of the viewport rather than collapsing to the
           height of three lines of copy between a tall hero and a tall
           footer. Released at md, where the copy alone carries the block. */}
        <section
          id="doors"
          className="grid min-h-[70svh] flex-1 grid-cols-2 md:min-h-0 lg:grid-rows-[auto_auto_auto_1fr_auto]"
        >
          {doors.map((door) => {
            const dark = door.tone === "dark";
            return (
              <Link
                key={door.href}
                href={door.href}
                className={[
                  "group relative flex flex-col border-t px-3 py-16 transition-colors",
                  "min-[360px]:px-4 sm:px-6 md:px-10 md:py-20",
                  "lg:row-span-5 lg:grid lg:grid-rows-subgrid",
                  dark
                    ? "border-[rgba(237,230,214,0.16)] bg-ink-raised hover:bg-[#2a3766]"
                    : // border-l at every width now: the doors sit side by side on phones too.
                      "border-hairline bg-bone hover:bg-[#e5dcc8] border-l",
                ].join(" ")}
              >
                {/* Reserves three lines on phones so both titles start on the
                   same baseline even though the eyebrows wrap differently.
                   Dropped a size and de-tracked there too: at 10.5px/0.26em it
                   wrapped to three dense lines and read as loud as the title. */}
                <Eyebrow
                  className={[
                    "min-h-[38px] text-[9px] tracking-[0.15em]",
                    "md:min-h-[44px] md:text-[10.5px] md:tracking-[0.26em] lg:min-h-0",
                    dark ? "text-teal-soft" : "text-teal",
                  ].join(" ")}
                >
                  {door.eyebrow}
                </Eyebrow>

                {/* Utilities win over the display-lg component class, so the
                   phone size is set here and the clamp restored at lg.
                   min-h reserves three lines (3.9em at this leading) on phones:
                   door one wraps to two and door two to three, so without the
                   reservation the two ledes would start on different lines.
                   Below 360px the step down to 20px keeps "Cross-platform"
                   inside the half-width column: at 22px it overflows and the
                   browser breaks it at its own hyphen, stranding "Cross-" on a
                   line of its own. */}
                <h2
                  className={[
                    "display-lg trm mt-6 min-h-[3.9em] w-full text-[20px] leading-[1.3]",
                    "min-[360px]:text-[22px] md:mt-3 md:min-h-0",
                    "lg:mt-5 lg:w-[90%] lg:text-[clamp(32px,4.8vw,48px)] lg:leading-[1.04]",
                    door.titleWidth,
                    dark ? "text-bone" : "text-ink",
                  ].join(" ")}
                >
                  {door.title}
                </h2>

                {/* flex-1 lets the lede absorb the door's spare height on
                   phones, so the rule and the arrow below it land on the same
                   line in both doors even when the two ledes wrap to a
                   different number of lines. Inert at lg, where the door is a
                   grid and the subgrid rows do the aligning. */}
                <p
                  className={[
                    "mt-5 flex-1 max-w-[46ch] text-[13px] leading-relaxed",
                    "md:mt-6 md:text-[15px]",
                    dark ? "text-on-ink" : "text-slate",
                  ].join(" ")}
                >
                  {door.lede}
                </p>

                <ul
                  className={[
                    "mt-8 border-t md:mt-10",
                    dark
                      ? "border-[rgba(237,230,214,0.16)]"
                      : "border-hairline",
                  ].join(" ")}
                >
                  {door.points.map((point) => (
                    <li
                      key={point}
                      className={[
                        "border-b py-4 text-[13.5px]",
                        dark
                          ? "border-[rgba(237,230,214,0.16)] text-on-ink"
                          : "border-hairline text-slate",
                      ].join(" ")}
                    >
                      {point}
                    </li>
                  ))}
                </ul>

                <span
                  className={[
                    // mt-auto pins the arrow to the bottom edge of the door.
                    "mt-auto pt-8 inline-flex items-center gap-2 self-start text-[12px] font-medium",
                    "lg:mt-12 lg:gap-3 lg:pt-0 lg:text-[13.5px]",
                    dark ? "text-bone" : "text-ink",
                  ].join(" ")}
                >
                  {door.cta}
                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            );
          })}
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

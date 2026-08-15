import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CredibilityBar } from "@/components/credibility-bar";
import {
  ButtonLink,
  Eyebrow,
  Identifier,
  SectionHead,
  StatusBadge,
} from "@/components/brand";

export const metadata: Metadata = {
  title: "For enterprises: Runtime governance for AI agents | Astan",
  description:
    "Your council approved the agent. It shipped. Now no one can say who is watching it. Astan is the control layer that watches, judges, and can stop agents in real time.",
  alternates: { canonical: "https://astan.ai/enterprises" },
};

const capabilities = [
  {
    id: "01",
    title: "Sits above your agent gateway",
    text: "Astan is a control layer, not a replacement. It works above any existing agent gateway, so there is nothing to rip out and nothing to re-platform.",
  },
  {
    id: "02",
    title: "Millisecond verdicts",
    text: "Every agent action is evaluated against the policy your council actually approved, and returned as allow, block or hold at machine speed.",
  },
  {
    id: "03",
    title: "Operator kill switch",
    text: "A human can stop an agent, or a class of agents, without waiting for a deploy, a ticket or a vendor.",
  },
  {
    id: "04",
    title: "Tamper-proof audit trail",
    text: "Every action is recorded against the control it touches, in a form an auditor or regulator can read without your help.",
  },
  {
    id: "05",
    title: "The vendor loop no one else closes",
    text: "When a purchased agent misbehaves, Astan notifies the vendor who sold it, who would otherwise never know their agent went out of scope in your environment.",
    unique: true,
  },
];

const verdicts = [
  {
    tone: "pass" as const,
    label: "Allow",
    text: "Action is inside approved scope.",
  },
  {
    tone: "advisory" as const,
    label: "Hold",
    text: "Action needs an operator decision.",
  },
  {
    tone: "critical" as const,
    label: "Block",
    text: "Action is out of scope. Agent quarantined.",
  },
];

export default function EnterprisesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader tone="light" />

      <main className="flex-1">
        {/* Hero — Bone-dominant. Door two reads procurement-ready.
           Copy left, tower right: the mirror of door one, so the two doors
           read as a pair. The image's own ground is #ECE6D5 against Bone's
           #EDE6D6, so it is set to contain rather than cover — the frame
           dissolves into the panel and the vertical subject is never cropped. */}
        {/* Fills the viewport left under the sticky header, so the hero is a
           full screen rather than a full screen plus a header. */}
        <section className="grid border-b border-hairline bg-bone lg:min-h-[calc(100vh-var(--header-h))] lg:grid-cols-2">
          <div className="flex items-center px-6 pt-24 pb-16 md:px-10 md:pt-28 lg:py-24 lg:pl-[max(2.5rem,calc((100vw-1140px)/2))] lg:pr-14">
            <div className="w-full">
              <Eyebrow className="text-teal">Door two · enterprises</Eyebrow>
              <h1 className="display-xl mt-5 max-w-[17ch] text-ink">
                Frontier governance for AI agents
              </h1>
              <p className="lede mt-7 max-w-[52ch] text-slate">
                Your governance council approved the agent. It shipped to
                production. Now no one in the building can say who is watching
                it. Astan is the control layer that watches, judges, and can
                stop agents in real time.
              </p>
              <div className="mt-11 flex flex-wrap gap-4">
                <ButtonLink href="/contact#govern" variant="solid">
                  Govern your agents
                </ButtonLink>
                <ButtonLink href="/use-cases" variant="line">
                  Read the scenarios
                </ButtonLink>
              </div>
            </div>
          </div>

          {/* No bottom padding and bottom-aligned: the tower stands on the
             hero's base edge rather than floating above it. */}
          <div className="flex items-end justify-center px-6 md:px-10 lg:pr-[max(2.5rem,calc((100vw-1140px)/2))]">
            <Image
              src="/watch-tower.jpg"
              alt="A lighthouse, lit, standing watch"
              width={932}
              height={1365}
              priority
              sizes="(max-width: 1024px) 60vw, 34vw"
              className="h-auto w-full max-w-[300px] lg:max-w-[420px]"
            />
          </div>
        </section>

        {/* Pull quote — the CSO line. Ink ground, one idea only.
           The portrait is illustrative stock, not the person quoted; see the
           caption, which says so plainly rather than letting the juxtaposition
           imply an attribution the quote deliberately withholds. */}
        <section className="grid bg-ink lg:grid-cols-2">
          <div className="flex items-center px-6 py-24 md:px-10 lg:pl-[max(2.5rem,calc((100vw-1140px)/2))] lg:pr-14">
            <div className="w-full">
              <Eyebrow className="text-on-ink-muted">
                The industry position
              </Eyebrow>
              <blockquote className="display-md mt-6 max-w-[24ch] text-bone">
                Astan is the &ldquo;human in the loop&rdquo; governance theater
                at machine speed.
              </blockquote>
              <p className="mt-7 max-w-[52ch] text-[15px] leading-relaxed text-on-ink">
                Controls have to live outside the agent. An agent cannot be the
                arbiter of its own scope, and a human cannot review a decision
                that already executed. That is exactly what we built.
              </p>
            </div>
          </div>

          <div className="relative aspect-[4/3] border-t border-[rgba(237,230,214,0.16)] sm:aspect-video lg:aspect-auto lg:border-t-0 lg:border-l">
            <Image
              src="/elder.jpg"
              alt="Studio portrait of an older man in a suit"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-[60%_13%]"
            />
            <span className="identifier absolute bottom-4 left-5 text-[9.5px] tracking-[0.08em] text-[rgba(255,255,255,0.92)]">
              {/* Illustrative. Not the executive quoted. */}
            </span>
          </div>
        </section>

        {/* Capabilities */}
        <section className="border-t border-hairline bg-paper px-6 py-24 md:px-10">
          <div className="mx-auto max-w-[1140px]">
            <SectionHead
              title="We prove, we record and we enforce"
              lede="The three things a security leader deploying agents is usually missing, delivered as one control plane."
            />

            <div className="grid gap-6 md:grid-cols-2">
              {capabilities.map((item) => (
                <div
                  key={item.id}
                  className={[
                    "border bg-card p-7",
                    item.unique
                      ? "border-teal md:col-span-2"
                      : "border-hairline",
                  ].join(" ")}
                >
                  <div className="mb-5 flex items-baseline gap-4">
                    <Identifier
                      className={item.unique ? "text-teal" : undefined}
                    >
                      {item.id}
                    </Identifier>
                    {item.unique ? (
                      <span className="eyebrow text-teal">Unique to Astan</span>
                    ) : null}
                  </div>
                  <h3 className="display-sm mb-3">{item.title}</h3>
                  <p className="prose-measure text-[14px] leading-relaxed text-slate">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CredibilityBar tone="dark" />

        {/* CTA */}
        <section className="border-t border-hairline bg-paper px-6 py-24 md:px-10">
          <div className="mx-auto max-w-[1140px]">
            <h2 className="display-lg max-w-[20ch] text-ink">
              Put a control layer around the agents you already have
            </h2>
            <p className="lede mt-6 text-slate">
              No rip-and-replace. We start above the gateway you already run.
            </p>
            <div className="mt-11">
              <ButtonLink href="/contact#govern" variant="solid">
                Govern your agents
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

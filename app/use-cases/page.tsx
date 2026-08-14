import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CredibilityBar } from "@/components/credibility-bar";
import { ButtonLink, Eyebrow } from "@/components/brand";

export const metadata: Metadata = {
  title: "Use cases — What the response layer changes | Astan",
  description:
    "Five scenarios where a fragmented response fails today, and what a coordinated, audit-ready one does instead: child safety, AI-generated CSAM, agent misbehavior, cross-organization agent containment, and financial-sector agent governance.",
  alternates: { canonical: "https://astan.ai/use-cases" },
};

/* Brief §4 (P1). Written as archetypes. No platform or partner is named. */
const scenarios = [
  {
    door: "Platforms",
    title: "Child safety across platforms",
    today:
      "A predator causes an harm in one platform. He reappears on the next one within minutes, repeating the pattern.",
    withAstan:
      "The confirmed detection is dispatched to every connected platform in seconds, and the mandated report is filed automatically — without the raw evidence ever leaving the originating platform.",
  },
  {
    door: "Platforms",
    title: "AI-generated CSAM",
    today:
      "Hash-matching catches known material. Novel AI-generated abuse material defeats it by definition, because every image is new and no hash exists yet.",
    withAstan:
      "Astan classifies the conduct, not just the known signature, so material that has never been seen before is still caught and still dispatched.",
  },
  {
    door: "Enterprises",
    title: "Enterprise AI agent misbehavior",
    today:
      "A purchased agent starts doing things outside its approved scope and reaches for sensitive data. It is discovered later, in a log review, if at all.",
    withAstan:
      "Astan quarantines the agent at the moment it steps out of scope, and notifies the vendor who sold it — who would otherwise never know.",
  },
  {
    door: "Enterprises",
    title: "Cross-organization agent containment",
    today:
      "An agent from one company reaches another company's production systems. Neither side holds a record of whose agent it was or under whose policy it acted, and neither can switch it off.",
    withAstan:
      "Both sides hold the same accountable record — who ran the agent, under whose policy, against whose systems — and the same ability to cut it off at the boundary.",
  },
  {
    door: "Enterprises",
    title: "Financial-sector agent governance",
    today:
      "A security leader is asked how many AI agents are in production, what policy governs them, and how to switch one off. There is no answer to any of the three.",
    withAstan:
      "Astan is the control plane that integrates with your existing controls to provide all three: an inventory, an enforced policy, and an off switch that does not require a deploy.",
  },
];

export default function UseCasesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader tone="dark" />

      <main className="flex-1">
        {/* Hero — plain Ink, centred, filling the viewport left under the
           sticky header. No pattern: the type carries it alone. */}
        <section className="flex min-h-[calc(100vh-var(--header-h))] items-center bg-ink px-6 py-24 md:px-10">
          <div className="mx-auto w-full max-w-[1140px] text-center">
            <Eyebrow className="text-teal-soft">Use cases</Eyebrow>
            <h1 className="display-xl mx-auto mt-5 max-w-[16ch] text-bone">
              What changes when the response is coordinated
            </h1>
            <p className="lede mx-auto mt-7 max-w-[62ch] text-on-ink">
              Five scenarios, written as archetypes. Each one is a case where
              the detection already happened and the response is what failed.
            </p>
          </div>
        </section>

        {scenarios.map((scenario, index) => {
          const onBone = index % 2 === 1;
          return (
            <section
              key={scenario.title}
              className={[
                "border-t border-hairline px-6 py-20 md:px-10",
                onBone ? "bg-bone" : "bg-paper",
              ].join(" ")}
            >
              <div className="mx-auto max-w-[1140px]">
                <div className="mb-10">
                  <Eyebrow className="mb-3">{scenario.door}</Eyebrow>
                  <h2 className="display-md text-ink">{scenario.title}</h2>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="border border-hairline bg-card p-7">
                    <Eyebrow className="mb-4 text-high">Today</Eyebrow>
                    <p className="text-[14.5px] leading-relaxed text-slate">
                      {scenario.today}
                    </p>
                  </div>
                  <div className="border border-hairline bg-card p-7">
                    <Eyebrow className="mb-4 text-pass">With Astan</Eyebrow>
                    <p className="text-[14.5px] leading-relaxed text-ink">
                      {scenario.withAstan}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        <CredibilityBar tone="dark" />

        <section className="border-t border-hairline bg-paper px-6 py-24 md:px-10">
          <div className="mx-auto max-w-[1140px]">
            <h2 className="display-lg max-w-[20ch] text-ink">
              Recognize one of these?
            </h2>
            <p className="lede mt-6 text-slate">
              Pick the door that matches your side of the problem.
            </p>
            <div className="mt-11 flex flex-wrap gap-4">
              <ButtonLink href="/contact#pilot" variant="solid">
                Pilot with us
              </ButtonLink>
              <ButtonLink href="/contact#govern" variant="line">
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

import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ButtonLink, Eyebrow, Identifier, SectionHead } from "@/components/brand"

export const metadata: Metadata = {
  title: "Why now — Convergence, regulation, and the agent moment | Astan",
  description:
    "Security, fraud and trust & safety are becoming one discipline. Regulation is turning coordination into a legal duty. And the industry is realizing that agent oversight has to live outside the agent.",
  alternates: { canonical: "https://astan.ai/why-now" },
}

const regulations = [
  {
    id: "EU",
    name: "Digital Services Act",
    text: "Systemic risk obligations and mandated reporting turn what used to be a policy choice into a duty with a deadline.",
  },
  {
    id: "UK",
    name: "Online Safety Act",
    text: "Duties of care that a single platform acting alone cannot discharge, because the harm does not stay on a single platform.",
  },
  {
    id: "US",
    name: "Take It Down Act",
    text: "Removal obligations on a clock, across services that have never had a way to talk to each other.",
  },
]

export default function WhyNowPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader tone="dark" />

      <main className="flex-1">
        <section className="bg-ink px-6 py-24 md:px-10 md:py-28">
          <div className="mx-auto max-w-[1140px]">
            <Eyebrow className="text-teal-soft">Why now</Eyebrow>
            <h1 className="display-xl mt-5 max-w-[16ch] text-bone">
              Three lines that are converging on one layer
            </h1>
            <p className="lede mt-7 max-w-[62ch] text-on-ink">
              A discipline is merging, a duty is arriving, and a control gap has
              opened up underneath production AI agents — at the same time.
            </p>
          </div>
        </section>

        {/* Convergence */}
        <section className="border-t border-hairline bg-paper px-6 py-24 md:px-10">
          <div className="mx-auto max-w-[1140px]">
            <SectionHead
              id="AST-W01"
              title="Security, fraud and trust & safety are becoming one discipline"
              lede="They were separated by an org chart. Attackers never respected it, and the same actor now shows up as a security incident, a fraud loss and a safety report in three different systems."
            />
            <p className="prose-measure text-[15px] leading-relaxed text-slate">
              Three teams open three tickets about one person, and none of the three
              can see the other two. The convergence is not a prediction; it is
              already happening inside the organizations that are paying attention.
              What is missing is a layer that lets those teams act as one.
            </p>
          </div>
        </section>

        {/* Regulation */}
        <section className="border-t border-hairline bg-bone px-6 py-24 md:px-10">
          <div className="mx-auto max-w-[1140px]">
            <SectionHead
              id="AST-W02"
              title="Coordination is becoming a legal duty"
              lede="Three regimes now expect a response that crosses organizational boundaries, on a timeline that manual escalation cannot meet."
            />

            <div className="grid gap-6 md:grid-cols-3">
              {regulations.map((item) => (
                <div key={item.name} className="border border-hairline bg-card p-7">
                  <Identifier className="text-teal">{item.id}</Identifier>
                  <h3 className="display-sm mt-4 mb-3">{item.name}</h3>
                  <p className="text-[14px] leading-relaxed text-slate">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Agent governance moment — Teal ground. */}
        <section className="bg-teal px-6 py-24 md:px-10">
          <div className="mx-auto max-w-[1140px]">
            <Eyebrow className="text-[#cfdde1]">The agent moment</Eyebrow>
            <h2 className="display-md mt-5 max-w-[24ch] text-bone">
              Oversight has to live outside the agent
            </h2>
            <p className="mt-6 max-w-[62ch] text-[15px] leading-relaxed text-[#cfdde1]">
              The industry is arriving at this conclusion now, having discovered
              that an agent cannot be the arbiter of its own scope and that a human
              cannot review a decision that already executed. We are that layer.
            </p>
          </div>
        </section>

        <section className="border-t border-hairline bg-paper px-6 py-24 md:px-10">
          <div className="mx-auto max-w-[1140px]">
            <h2 className="display-lg max-w-[20ch] text-ink">
              One system, two doors
            </h2>
            <p className="lede mt-6 text-slate">
              Whichever line brought you here, the layer underneath is the same.
            </p>
            <div className="mt-11 flex flex-wrap gap-4">
              <ButtonLink href="/platforms" variant="solid">
                For platforms
              </ButtonLink>
              <ButtonLink href="/enterprises" variant="line">
                For enterprises
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

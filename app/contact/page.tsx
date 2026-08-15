import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Eyebrow, Rule } from "@/components/brand"
import ContactForm from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Ways to engage | Astan",
  description:
    "Pilot with us, govern your agents, partner with us, or join us. Paris and New York.",
  alternates: { canonical: "https://astan.ai/contact" },
}

/* Brief §8 (P2). Separate calls to action rather than one generic "contact us". */
type Path = {
  anchor: string
  label: string
  audience: string
  text: string
  /* Only Careers carries these, so the list is optional rather than empty
     everywhere else. */
  roles?: { title: string; meta: string }[]
}

const paths: Path[] = [
  {
    anchor: "pilot",
    label: "Pilot with us",
    audience: "Platforms",
    text: "You run an interaction-based platform and you already detect harm you cannot act on beyond your own walls.",
  },
  {
    anchor: "govern",
    label: "Govern your agents",
    audience: "Enterprise",
    text: "You have AI agents in production and you need policy, inventory and an off switch that works at machine speed.",
  },
  {
    anchor: "partner",
    label: "Partner with us",
    audience: "Channel and reseller",
    text: "You take security and governance capability to market and you want the response layer in your portfolio.",
  },
  {
    anchor: "join",
    label: "Join us",
    audience: "Careers",
    text: "You have worked on trust and safety, detection, or security infrastructure, and you want to build the layer underneath it.",
    roles: [
      {
        title: "Security Engineer, Agent Governance",
        meta: "New York · Full-time",
      },
      {
        title: "Trust & Safety Engineer, Harm Dispatch",
        meta: "Paris · Full-time",
      },
      { title: "Infrastructure Engineer", meta: "Paris · Full-time" },
    ],
  },
]

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader tone="dark" />

      <main className="flex-1">
        <section className="relative overflow-hidden bg-ink px-6 py-24 md:px-10 md:py-28">
          <div
            className="pattern-bone pointer-events-none absolute inset-0 opacity-[0.08]"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-[1140px]">
            <Eyebrow className="text-teal-soft">Ways to engage</Eyebrow>
            <h1 className="display-xl mt-5 max-w-[14ch] text-bone">
              Pick the door that matches your problem
            </h1>
            <p className="lede mt-7 max-w-[62ch] text-on-ink">
              Four ways in, one team behind them. Paris and New York.
            </p>
          </div>
        </section>

        <section className="border-t border-hairline bg-paper px-6 py-24 md:px-10">
          <div className="mx-auto grid max-w-[1140px] gap-16 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <Eyebrow>Choose a path</Eyebrow>
              <div className="mt-8 border-t border-hairline">
                {paths.map((path) => (
                  <div
                    key={path.anchor}
                    id={path.anchor}
                    className="scroll-mt-24 border-b border-hairline py-7"
                  >
                    <div className="mb-2 flex flex-wrap items-baseline justify-between gap-3">
                      <h2 className="display-sm text-ink">{path.label}</h2>
                      <Eyebrow>{path.audience}</Eyebrow>
                    </div>
                    <p className="prose-measure text-[14px] leading-relaxed text-slate">
                      {path.text}
                    </p>

                    {/* Hairline rows rather than cards: this list sits inside a
                       path row that is already ruled top and bottom, and a
                       second border treatment would compete with it. The last
                       row drops its rule for the same reason — the path row's
                       own border-b closes the list a padding-step below. */}
                    {path.roles ? (
                      <ul className="mt-5 border-t border-hairline">
                        {path.roles.map((role) => (
                          <li
                            key={role.title}
                            className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-hairline py-3 last:border-b-0 last:pb-0"
                          >
                            <span className="text-[14px] text-ink">
                              {role.title}
                            </span>
                            <Eyebrow>{role.meta}</Eyebrow>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Eyebrow>Where we are</Eyebrow>
                <p className="mt-3 text-[14px] text-slate">Paris and New York</p>
              </div>
            </div>

            <div>
              <Eyebrow>Send a message</Eyebrow>
              <Rule className="mt-8 mb-9" />
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

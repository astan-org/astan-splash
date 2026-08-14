import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ButtonLink, Eyebrow, Identifier, SectionHead } from "@/components/brand"

export const metadata: Metadata = {
  title: "How it works — Detect, dispatch, audit | Astan",
  description:
    "Raw user data never leaves an organization's boundary. Only a privacy-protected behavioral signal travels between organizations.",
  alternates: { canonical: "https://astan.ai/how-it-works" },
}

const steps = [
  {
    step: "01",
    title: "Detect",
    text: "An organization confirms harm inside its own boundary, on its own systems, against its own thresholds. Astan does not do the detecting for you and does not need your raw data to do its job.",
  },
  {
    step: "02",
    title: "Dispatch",
    text: "The confirmed signal becomes a coordinated action at every connected organization. The response travels in seconds; the evidence stays home.",
  },
  {
    step: "03",
    title: "Audit",
    text: "Every dispatch, verdict and action is recorded against the control it touches, in a tamper-proof record that a regulator or an auditor can read without your help.",
  },
]

const techniques = [
  {
    name: "Tokenization",
    text: "Identifiers are replaced with tokens before anything leaves your boundary, so a receiving organization can match on an actor without ever learning who that actor is to you.",
  },
  {
    name: "Private set intersection",
    text: "Two organizations can discover that they are seeing the same actor without either one disclosing its list to the other, or to us.",
  },
]

export default function HowItWorksPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader tone="dark" />

      <main className="flex-1">
        <section className="bg-ink px-6 py-24 md:px-10 md:py-28">
          <div className="mx-auto max-w-[1140px]">
            <Eyebrow className="text-teal-soft">How it works</Eyebrow>
            <h1 className="display-xl mt-5 max-w-[14ch] text-bone">
              Detect. Dispatch. Audit.
            </h1>
            <p className="lede mt-7 max-w-[62ch] text-on-ink">
              One protocol, three moves. The hard part was never noticing the harm.
              It was doing something about it everywhere at once, without moving the
              evidence.
            </p>
          </div>
        </section>

        <section className="border-t border-hairline bg-paper px-6 py-24 md:px-10">
          <div className="mx-auto max-w-[1140px]">
            <div className="border-t border-hairline">
              {steps.map((item) => (
                <div
                  key={item.step}
                  className="flex flex-wrap gap-x-10 gap-y-4 border-b border-hairline py-10"
                >
                  <Identifier className="w-16 flex-none pt-2 text-teal">
                    {item.step}
                  </Identifier>
                  <div className="min-w-0 flex-1 basis-[280px]">
                    <h2 className="display-md mb-4 text-ink">{item.title}</h2>
                    <p className="prose-measure text-[15px] leading-relaxed text-slate">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Privacy principle — Teal ground, one idea per panel. */}
        <section className="bg-teal px-6 py-24 md:px-10">
          <div className="mx-auto max-w-[1140px]">
            <Eyebrow className="text-[#cfdde1]">The privacy principle</Eyebrow>
            <h2 className="display-md mt-5 max-w-[22ch] text-bone">
              Raw user data never leaves your boundary
            </h2>
            <p className="mt-6 max-w-[62ch] text-[15px] leading-relaxed text-[#cfdde1]">
              Only a privacy-protected behavioral signal travels between
              organizations. Astan is a neutral layer: we are not a place your user
              data goes to live, and coordination does not require you to hand your
              records to a competitor.
            </p>
          </div>
        </section>

        <section className="border-t border-hairline bg-paper px-6 py-24 md:px-10">
          <div className="mx-auto max-w-[1140px]">
            <SectionHead
              id="AST-H01"
              title="For the technical reader"
              lede="Two techniques do most of the work. Neither requires you to trust us with anything you would not put in a court filing."
            />

            <div className="grid gap-6 md:grid-cols-2">
              {techniques.map((item) => (
                <div key={item.name} className="border border-hairline bg-card p-7">
                  <h3 className="display-sm mb-3">{item.name}</h3>
                  <p className="text-[14px] leading-relaxed text-slate">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-hairline bg-bone px-6 py-24 md:px-10">
          <div className="mx-auto max-w-[1140px]">
            <h2 className="display-lg max-w-[20ch] text-ink">
              See it against your own scenario
            </h2>
            <div className="mt-11 flex flex-wrap gap-4">
              <ButtonLink href="/use-cases" variant="solid">
                Read the scenarios
              </ButtonLink>
              <ButtonLink href="/contact" variant="line">
                Talk to us
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}

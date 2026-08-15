import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CredibilityBar } from "@/components/credibility-bar";
import { PlatformScene } from "@/components/platform-scene";
import { ButtonLink, Eyebrow, SectionHead } from "@/components/brand";

export const metadata: Metadata = {
  title: "For platforms: Cross-platform harm dispatch | Astan",
  description:
    "The 911 dispatcher for the internet. When a bad actor is caught on one platform, Astan dispatches a coordinated, privacy-preserving response to every connected platform in seconds.",
  alternates: { canonical: "https://astan.ai/platforms" },
};

const contrast = [
  {
    today:
      "A predator is banned on one platform. Nothing happens anywhere else. He opens a new account on the next app within minutes.",
    withAstan:
      "One confirmed detection is dispatched to every connected platform in seconds, and the mandated report is filed automatically.",
  },
  {
    today:
      "A victim reports the same abuse to a dozen different platforms and repeats the worst day of their life a dozen times.",
    withAstan:
      "Report once, protected everywhere. The response travels; the raw evidence does not.",
  },
];

const flow = [
  {
    step: "01",
    title: "Detect",
    text: "A platform confirms harm inside its own boundary, using its own systems and its own thresholds.",
  },
  {
    step: "02",
    title: "Dispatch",
    text: "A privacy-protected behavioral signal travels to connected platforms. Raw user data never leaves the originating organization.",
  },
  {
    step: "03",
    title: "Audit",
    text: "Every dispatch, verdict and action lands in a tamper-proof record a regulator can read.",
  },
];

export default function PlatformsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader tone="light" />

      <main className="flex-1">
        {/* Hero — light ground so the footage sits in its own tone rather than
           against Ink. The video fills its half completely: its edges land on
           the hero's own edges and the centre hairline, so there is no floating
           rectangle and no letterboxing. */}
        {/* No border-b here: the next section carries border-t, and two
           adjacent 1px rules would render as a 2px line. */}
        <section className="grid bg-bone lg:grid-cols-2">
          {/* Scene is first in the DOM so it sits left on wide screens. Below
             lg the order flips so the copy leads and the scene follows it —
             hence border-t when stacked, border-r when side by side. */}
          <PlatformScene className="order-2 aspect-[4/3] border-t border-hairline sm:aspect-video lg:order-1 lg:aspect-auto lg:border-t-0 lg:border-r" />

          <div className="order-1 flex items-center px-6 py-20 md:px-10 md:py-28 lg:order-2 lg:pl-14 lg:pr-[max(2.5rem,calc((100vw-1140px)/2))]">
            <div className="w-full">
              <Eyebrow className="text-teal">Door one · platforms</Eyebrow>
              <h1 className="display-xl mt-5 max-w-[28ch] text-ink">
                Report once, solve everywhere
              </h1>
              <p className="lede mt-7 max-w-[52ch] text-slate">
                When a bad actor is caught on one platform, nothing happens
                anywhere else. Astan changes that. Report once, protected
                everywhere.
              </p>
              <div className="mt-11 flex flex-wrap gap-4">
                <ButtonLink href="/contact#pilot" variant="solid">
                  Pilot with us
                </ButtonLink>
                <ButtonLink href="/use-cases" variant="line">
                  Read the scenarios
                </ButtonLink>
              </div>
            </div>
          </div>
        </section>

        {/* Today / With Astan */}
        <section className="border-t border-hairline bg-paper px-6 py-24 md:px-10">
          <div className="mx-auto max-w-[1140px]">
            <SectionHead
              title="Harm moves laterally. The response never did."
              lede="Attackers never respected the org chart, and they never respected the platform boundary either. Every party sees one fragment of the same actor."
            />

            <div className="grid gap-6 md:grid-cols-2">
              {contrast.map((row, i) => (
                <div
                  key={i}
                  className="grid grid-rows-[auto_auto] border border-hairline bg-card"
                >
                  <div className="border-b border-hairline p-7">
                    <Eyebrow className="mb-4 text-high">Today</Eyebrow>
                    <p className="text-[14px] leading-relaxed text-slate">
                      {row.today}
                    </p>
                  </div>
                  <div className="p-7">
                    <Eyebrow className="mb-4 text-pass">With Astan</Eyebrow>
                    <p className="text-[14px] leading-relaxed text-ink">
                      {row.withAstan}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Beachhead — Teal ground. Teal earns roughly one panel in five.
           Copy left, image right: the reverse of the hero, so the page
           alternates rather than repeating the same split twice. The image
           fills its half, so its only edges are the panel's own. */}
        <section className="grid border-t border-hairline bg-teal lg:grid-cols-2">
          <div className="flex items-center px-6 py-24 md:px-10 lg:pl-[max(2.5rem,calc((100vw-1140px)/2))] lg:pr-16">
            <div className="w-full">
              <h2 className="display-md mt-5 max-w-[20ch] text-bone">
                Child safety: the one harm no platform can walk away from
              </h2>
              <p className="mt-6 max-w-[52ch] text-[15px] leading-relaxed text-[#cfdde1]">
                It is the harm where coordination is least optional, the
                reporting duty is clearest, and the cost of a fragmented
                response is measured in children. We start there because it is
                the case that proves the protocol.
              </p>
            </div>
          </div>

          <div className="relative aspect-[4/3] border-t border-[rgba(237,230,214,0.22)] sm:aspect-video lg:aspect-auto lg:border-t-0 lg:border-l">
            <Image
              src="/child-safety.jpg"
              alt="A child using a tablet at home"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-[58%_center]"
            />
          </div>
        </section>

        {/* Flow */}
        <section className="border-t border-hairline bg-paper px-6 py-24 md:px-10">
          <div className="mx-auto max-w-[1140px]">
            <SectionHead
              title="Detect, dispatch, audit"
              lede="Raw user data never leaves an organization's boundary. Only a privacy-protected behavioral signal travels."
            />

            <div className="grid gap-6 md:grid-cols-3">
              {flow.map((item) => (
                <div
                  key={item.step}
                  className="border border-hairline bg-card p-7"
                >
                  <p className="identifier mb-5 text-teal">{item.step}</p>
                  <h3 className="display-sm mb-3">{item.title}</h3>
                  <p className="text-[14px] leading-relaxed text-slate">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CredibilityBar tone="light" />

        {/* CTA */}
        <section className="bg-ink px-6 py-24 md:px-10">
          <div className="mx-auto max-w-[1140px]">
            <h2 className="display-lg max-w-[18ch] text-bone">
              Bring your platform into the response layer
            </h2>
            <p className="lede mt-6 text-on-ink">
              We are running pilots with interaction-based platforms. Tell us
              what you are seeing and we will show you what a dispatched
              response looks like.
            </p>
            <div className="mt-11">
              <ButtonLink href="/contact#pilot" variant="on-ink">
                Pilot with us
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

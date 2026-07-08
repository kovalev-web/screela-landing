import { Camera, MonitorSmartphone, Link, LayoutGrid, Copy, Share2 } from "lucide-react"
import { Reveal } from "@/components/reveal"

const features = [
  {
    title: "Full-page capture, done right",
    text: "Sticky headers, modals, lazy-loaded content: exactly where most other tools break.",
    icon: Camera,
    cell: "lg:col-start-1 lg:col-span-2 lg:row-start-1 lg:row-span-2",
    accent: true,
  },
  {
    title: "Desktop + mobile in one flow",
    text: "Two tracks, same steps, one board. See how they adapt the pattern.",
    icon: MonitorSmartphone,
    cell: "lg:col-start-3 lg:row-start-1",
  },
  {
    title: "Context on every screenshot",
    text: "Source URL, page title, capture time. Cite your findings, don't just show them.",
    icon: Link,
    cell: "lg:col-start-3 lg:row-start-2",
  },
  {
    title: "One board per audit",
    text: "Infinite canvas with zones per competitor. Compare patterns side by side.",
    icon: LayoutGrid,
    cell: "lg:col-start-1 lg:row-start-3",
  },
  {
    title: "Copy to Figma",
    text: "Take any flow straight into your workspace.",
    icon: Copy,
    cell: "lg:col-start-2 lg:row-start-3",
  },
  {
    title: "Share a read-only link",
    text: "Send a flow or the whole board to your team or client. No login needed.",
    icon: Share2,
    cell: "lg:col-start-3 lg:row-start-3",
  },
]

export function Features() {
  return (
    <section id="features" className="section-y relative overflow-x-hidden scroll-mt-10">
      <div className="mx-auto max-w-6xl relative">
        <Reveal>
          <h2 className="text-left sm:text-center text-3xl font-semibold tracking-tight sm:text-4xl">
            Built for competitive UX audits, not screenshot hoarding
          </h2>
        </Reveal>

        <div className="mt-8 sm:mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3">
          {features.map((feature, i) => {
            const Icon = feature.icon
            const isFlagship = feature.accent
            return (
              <Reveal key={feature.title} delay={i * 80} className={feature.cell}>
                <div
                  className={`glow-card group relative flex h-full flex-col rounded-2xl bg-zinc-900/60 p-6 sm:p-8 border border-white/5 overflow-hidden ${
                    isFlagship ? "accent-card" : ""
                  }`}
                >
                  <Icon
                    className={`${isFlagship ? "size-10 mb-5" : "size-8 mb-4"} text-zinc-500 transition-colors duration-300 group-hover:text-zinc-300`}
                    strokeWidth={1.2}
                  />
                  <h3 className={isFlagship ? "text-xl font-semibold tracking-tight" : "text-lg font-semibold tracking-tight"}>
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{feature.text}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

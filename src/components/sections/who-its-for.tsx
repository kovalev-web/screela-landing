import { PenTool, Users, Compass } from "lucide-react"
import { Reveal } from "@/components/reveal"

const personas = [
  {
    title: "Product designers",
    desc: "Doing pre-task research before touching Figma",
    icon: PenTool,
  },
  {
    title: "UX agencies",
    desc: "Delivering competitive audits on deadline",
    icon: Users,
  },
  {
    title: "PMs & founders",
    desc: "Mapping the competitive landscape",
    icon: Compass,
  },
]

export function WhoItsFor() {
  return (
    <section className="section-y relative">
      <div className="mx-auto max-w-6xl text-left sm:text-center">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Made for people who study products for a living
          </h2>
        </Reveal>

        <div className="mt-8 sm:mt-14 grid gap-4 sm:grid-cols-3 sm:gap-6">
          {personas.map((persona, i) => {
            const Icon = persona.icon
            return (
              <Reveal key={persona.title} delay={i * 80}>
                <div className="glow-card group relative rounded-2xl bg-zinc-900/60 p-6 sm:p-8 text-left border border-white/5 transition-all duration-300 hover:-translate-y-1">
                  <Icon className="size-8 text-zinc-500 mb-4 transition-colors duration-300 group-hover:text-zinc-300" strokeWidth={1.2} />
                  <h3 className="text-base font-semibold tracking-tight text-zinc-200">{persona.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">{persona.desc}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

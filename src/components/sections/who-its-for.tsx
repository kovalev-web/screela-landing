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
      <div className="mx-auto max-w-[1000px] text-left">
        <Reveal>
          <span className="text-eyebrow text-left">Who it&rsquo;s for</span>
          <h2 className="text-h2 text-left">
            Made for people who study products for a living
          </h2>
        </Reveal>

        <div className="mt-8 sm:mt-14 grid gap-3 sm:grid-cols-3">
          {personas.map((persona, i) => {
            const Icon = persona.icon
            return (
              <Reveal key={persona.title} delay={i * 80}>
                <div className="glow-card group relative rounded-2xl p-6 sm:p-8 text-left">
                  <Icon className="size-8 text-muted-foreground mb-4 transition-colors duration-300 group-hover:text-foreground" strokeWidth={1.2} aria-hidden="true" />
                  <h3 className="text-h3">{persona.title}</h3>
                  <p className="text-body mt-3 text-muted-foreground">{persona.desc}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

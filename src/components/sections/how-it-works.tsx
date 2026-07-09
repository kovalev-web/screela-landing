import { Reveal } from "@/components/reveal"

const steps = [
  {
    number: "1",
    title: "Start a flow",
    text: 'Name it ("Stripe onboarding"), hit record. Optionally add a mobile track.',
  },
  {
    number: "2",
    title: "Walk the product",
    text: "Press Cmd+Shift+S on each step. Screela captures the full page, handling sticky headers and waiting out animations on its own.",
  },
  {
    number: "3",
    title: "Get a finished flow",
    text: "Steps land on your board already in order and numbered, with the URL and time stamped on each card, so there's nothing left to sort or rename.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-y relative scroll-mt-10">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="text-eyebrow text-left sm:text-center">Workflow</span>
          <h2 className="text-h2 text-left sm:text-center">
            Three steps, one shortcut
          </h2>
        </Reveal>

        <div className="mt-8 sm:mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 100}>
              <div className="glow-card group relative flex flex-col items-center text-center rounded-2xl bg-zinc-900/60 p-6 sm:p-8 border border-white/5 h-full">
                <span className="accent-badge flex size-10 items-center justify-center rounded-full text-sm font-semibold transition-transform duration-300 group-hover:scale-110">
                  {step.number}
                </span>
                <h3 className="text-h3-lg mt-5">{step.title}</h3>
                <div className="flex-1">
                  <p className="text-body mt-3 text-zinc-400">{step.text}</p>
                </div>
                <div className="mt-8 aspect-video w-full rounded-xl bg-zinc-800/80 border border-white/5 flex items-center justify-center text-sm text-zinc-400">
                  Screenshot placeholder
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

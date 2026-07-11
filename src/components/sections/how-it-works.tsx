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
      <div className="mx-auto max-w-[1000px]">
        <Reveal>
          <span className="text-eyebrow text-left">Workflow</span>
          <h2 className="text-h2 text-left">
            Three steps, one shortcut
          </h2>
        </Reveal>

        <div className="mt-8 sm:mt-14 grid gap-3 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 100}>
              <div className="glow-card group relative flex flex-col items-start text-left rounded-2xl p-6 sm:p-8 h-full">
                <span className="accent-badge flex size-10 items-center justify-center rounded-full text-sm font-semibold transition-transform duration-300 group-hover:scale-110">
                  {step.number}
                </span>
                <h3 className="text-h3-lg mt-5">{step.title}</h3>
                <div className="flex-1">
                  <p className="text-body mt-3 text-muted-foreground">{step.text}</p>
                </div>
                <div className="mt-8 aspect-video w-full rounded-xl bg-black/40" />
                <span className="mt-3 text-xs text-muted-foreground">Step {step.number} capture</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

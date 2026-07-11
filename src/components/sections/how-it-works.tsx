import { Reveal } from "@/components/reveal"

const steps = [
  {
    number: "1",
    title: "Start a flow",
    text: "Pick a board and hit Start Flow. Screela names the run after the domain automatically, no typing required. Optionally add a mobile track.",
    image: "/images/how-it-works/extention1.png",
  },
  {
    number: "2",
    title: "Walk the product",
    text: "Press Alt+S on each step. Screela captures the full page, handling sticky headers and waiting out animations on its own.",
    image: "/images/how-it-works/extention2.png",
  },
  {
    number: "3",
    title: "Get a finished flow",
    text: "Finished flows land back in the list already named, timed, and tagged with step count and device, desktop, mobile, or both, so there's nothing left to sort or rename.",
    image: "/images/how-it-works/extention3.png",
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

        <div className="mt-8 sm:mt-14 flex flex-col gap-3">
          {steps.map((step, i) => (
            <Reveal key={step.number} delay={i * 100}>
              <div
                className={`glow-card group flex flex-col overflow-hidden rounded-2xl md:flex-row ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex flex-col justify-between p-6 sm:p-10 md:w-1/2">
                  <div>
                    <h3 className="text-h3-lg">{step.title}</h3>
                    <p className="text-body mt-3 text-muted-foreground">{step.text}</p>
                  </div>
                  <span className="mt-8 text-sm text-muted-foreground">Step {step.number}</span>
                </div>
                <div className="flex w-full items-center justify-center bg-black/20 py-10 sm:py-14 md:w-1/2">
                  <img
                    src={step.image}
                    alt={`${step.title} in the Screela extension`}
                    width={362}
                    height={390}
                    className="h-auto w-[280px] sm:w-[362px]"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

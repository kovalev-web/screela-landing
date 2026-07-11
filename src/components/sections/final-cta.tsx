import { WaitlistForm } from "@/components/waitlist-form"
import { Reveal } from "@/components/reveal"

export function FinalCTA() {
  return (
    <section className="section-y relative overflow-hidden">
      <div className="mx-auto max-w-2xl relative">
        <Reveal>
          <span className="text-eyebrow text-left">Get started</span>
          <h2 className="text-h2 text-left">
            Your next audit could take an hour, not&nbsp;a&nbsp;day
          </h2>

          <WaitlistForm id="final-cta" justifyClassName="justify-start" />
        </Reveal>
      </div>
    </section>
  )
}

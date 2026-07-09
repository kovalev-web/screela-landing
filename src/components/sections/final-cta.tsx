import { WaitlistForm } from "@/components/waitlist-form"
import { Reveal } from "@/components/reveal"

export function FinalCTA() {
  return (
    <section className="section-y relative overflow-hidden border-t border-white/5">
      <div className="absolute top-[-30%] left-0 right-0 flex justify-center">
        <div
          className="size-[700px] rounded-full blur-[80px] animate-float-slow"
          style={{ background: 'radial-gradient(circle, rgba(148,163,184,0.25) 0%, var(--color-background) 70%)' }}
        />
      </div>

      <div className="mx-auto max-w-2xl relative">
        <Reveal>
          <span className="text-eyebrow text-left sm:text-center">Get started</span>
          <h2 className="text-h2 text-left sm:text-center">
            Your next audit could take an hour, not&nbsp;a&nbsp;day
          </h2>

          <WaitlistForm id="final-cta" />
        </Reveal>
      </div>
    </section>
  )
}

import { WaitlistForm } from "@/components/waitlist-form"

export function FinalCTA() {
  return (
    <section className="section-band bg-background lg:py-[80px]">
      <div className="mx-auto w-full max-w-[820px] text-center">
        <span className="text-eyebrow">Get started</span>
        <h2 className="text-h2">Your next audit could take an hour, not&nbsp;a&nbsp;day</h2>

        <div className="mt-8 lg:mt-[60px]">
          <WaitlistForm id="final-cta" />
          <p className="mt-4 text-lg font-light text-text-dim">
            Free while in beta. Chrome extension + web board
          </p>
        </div>
      </div>
    </section>
  )
}

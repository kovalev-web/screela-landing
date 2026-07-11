"use client"

import { WaitlistForm } from "@/components/waitlist-form"

export function Hero() {
  return (
    <section className="relative overflow-x-hidden px-4 pb-6 pt-20 sm:px-6 sm:pb-12 sm:pt-24 lg:pt-28">
      <div className="mx-auto max-w-[1000px] relative">
        <div className="max-w-4xl text-left">
          <div className="flex justify-start mb-6">
            <span className="glow-card inline-flex h-10 items-center gap-1.5 rounded-full px-5 text-base text-muted-foreground">
              <span className="size-1.5 rounded-full bg-success" />
              Almost beta
            </span>
          </div>

          <h1 className="text-display">
            Competitor UX research without the screenshot chaos
          </h1>
          <p className="text-body-lede mt-4 text-muted-foreground sm:mt-6 max-w-xl sm:max-w-2xl">
            Screela records entire user flows, like a competitor's onboarding or checkout, as full-page screenshots with one shortcut. Steps land on an infinite board in order, desktop and mobile side by side.
          </p>

          <WaitlistForm id="hero" justifyClassName="justify-start" />

          <p className="mt-3 text-sm text-muted-foreground">
            Free while in beta. Chrome extension + web board.
          </p>
        </div>
      </div>
    </section>
  )
}

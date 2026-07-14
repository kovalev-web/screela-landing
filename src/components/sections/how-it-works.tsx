"use client"

import * as React from "react"
import {
  ExtensionStep1,
  ExtensionStep2,
  ExtensionStep3,
  StepStatusIcon,
} from "@/components/extension-panels"

const steps = [
  {
    title: "Start a flow",
    text: "Pick a board and hit Start Flow. Screela names the run after the domain automatically, no typing required. Optionally add a mobile track.",
    render: (on: boolean) => <ExtensionStep1 active={on} />,
  },
  {
    title: "Walk the product",
    text: "Press Alt+S on each step. Screela captures the full page, handling sticky headers and waiting out animations on its own.",
    render: (on: boolean) => <ExtensionStep2 filled={on} />,
  },
  {
    title: "Get a finished flow",
    text: "Finished flows land back in the list already named, timed, and tagged with step count and device, desktop, mobile, or both, so there's nothing left to sort or rename.",
    render: (on: boolean) => <ExtensionStep3 dimmed={on} />,
  },
]

/* Desktop: the section pins while scrolling and the extension popup runs
   through six phases — two per step: the step itself, then an "idle" scroll
   that plays the in-panel animation (toggle flips on, slots fill with
   screenshots, finished slots dim) before the next step. Mobile: plain
   stacked steps frozen in their showcase state. */
const PHASES = steps.length * 2

export function HowItWorks() {
  const outerRef = React.useRef<HTMLDivElement>(null)
  const [phase, setPhase] = React.useState(0)
  const step = Math.floor(phase / 2)

  // mobile carousel: track which slide is snapped so the peeking ones dim
  const trackRef = React.useRef<HTMLDivElement>(null)
  const [activeSlide, setActiveSlide] = React.useState(0)

  function onTrackScroll() {
    const el = trackRef.current
    if (!el) return
    const center = el.scrollLeft + el.clientWidth / 2
    let best = 0
    let bestDist = Infinity
    Array.from(el.children).forEach((child, i) => {
      const c = child as HTMLElement
      const dist = Math.abs(c.offsetLeft + c.offsetWidth / 2 - center)
      if (dist < bestDist) {
        bestDist = dist
        best = i
      }
    })
    setActiveSlide(best)
  }

  React.useEffect(() => {
    function onScroll() {
      const el = outerRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const total = rect.height - window.innerHeight
      if (total <= 0) return
      const progress = Math.min(0.999, Math.max(0, -rect.top / total))
      setPhase(Math.floor(progress * PHASES))
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <section id="how-it-works" className="scroll-mt-10 bg-surface-2">
      {/* mobile fallback: horizontal snap carousel — one panel of height instead of three */}
      <div className="py-10 lg:hidden">
        <div className="section-container px-5 sm:px-8">
          <span className="text-eyebrow">Workflow</span>
          <h2 className="text-h2">Three steps, one shortcut</h2>
        </div>
        <div
          ref={trackRef}
          onScroll={onTrackScroll}
          className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:px-8 [&::-webkit-scrollbar]:hidden"
        >
          {steps.map((s, i) => (
            <div
              key={s.title}
              className={`w-[82vw] max-w-[340px] shrink-0 snap-center transition-opacity duration-300 ${
                i === activeSlide ? "opacity-100" : "opacity-30"
              }`}
            >
              {/* fixed-height text block so the panels below line up across slides */}
              <div className="min-h-[180px] max-[359px]:min-h-[200px]">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-step-title">{s.title}</h3>
                  <span className="shrink-0 rounded-[10px] bg-[#191919] px-2.5 py-1 text-sm font-light text-foreground">
                    Step {i + 1}
                  </span>
                </div>
                <p className="text-body mt-4 text-text-dim">{s.text}</p>
              </div>
              {/* showcase state: toggle on / slots filled; no dimming on the last step */}
              <div className="pt-6">{s.render(i < 2)}</div>
            </div>
          ))}
        </div>
      </div>

      {/* desktop scroll-driven carousel — 50vh of scroll per phase + the pinned screen */}
      <div ref={outerRef} className="hidden lg:block" style={{ height: `${PHASES * 50 + 100}vh` }}>
        <div className="sticky top-0 flex h-screen flex-col justify-center px-8">
          <div className="section-container">
            <span className="text-eyebrow">Workflow</span>
            <h2 className="text-h2">Three steps, one shortcut</h2>

            <div className="mt-16 flex items-stretch gap-[60px]">
              {/* panel states, crossfading in one grid cell. The panel is
                  vector (DOM), so on tall viewports it alone scales up —
                  typography stays put; margins reserve the scaled footprint */}
              <div className="grid w-[329px] shrink-0 origin-top-left [@media(min-height:950px)_and_(max-height:1149px)]:scale-[1.12] [@media(min-height:950px)_and_(max-height:1149px)]:mr-[39px] [@media(min-height:950px)_and_(max-height:1149px)]:mb-[60px] [@media(min-height:1150px)]:scale-[1.3] [@media(min-height:1150px)]:mr-[99px] [@media(min-height:1150px)]:mb-[151px]">
                {steps.map((s, i) => (
                  <div
                    key={s.title}
                    className={`col-start-1 row-start-1 transition-all duration-500 ${
                      step === i ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-4"
                    }`}
                  >
                    {s.render(phase >= i * 2 + 1)}
                  </div>
                ))}
              </div>

              {/* text column: title + step chip on top, status card pinned to the bottom */}
              <div className="flex max-w-[770px] flex-1 flex-col justify-between pt-1">
                <div className="grid">
                  {steps.map((s, i) => (
                    <div
                      key={s.title}
                      className={`col-start-1 row-start-1 transition-all duration-500 ${
                        step === i ? "opacity-100 translate-y-0" : "pointer-events-none opacity-0 translate-y-4"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-5">
                        <h3 className="text-step-title">{s.title}</h3>
                        <span className="shrink-0 rounded-[10px] bg-[#191919] px-2.5 py-1 text-base font-light text-foreground">
                          Step {i + 1}
                        </span>
                      </div>
                      <p className="text-quote mt-5 max-w-[536px] text-foreground">{s.text}</p>
                    </div>
                  ))}
                </div>
                <StepStatusIcon step={step} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import * as React from "react"
import { Pause, Play } from "lucide-react"
import { WaitlistForm } from "@/components/waitlist-form"

export function Hero() {
  const videoRef = React.useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = React.useState(true)

  React.useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reducedMotion && videoRef.current) {
      videoRef.current.pause()
      setPlaying(false)
    }
  }, [])

  function togglePlay() {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      video.play()
      setPlaying(true)
    } else {
      video.pause()
      setPlaying(false)
    }
  }

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

        <div className="group relative mt-16 mx-auto max-w-[1000px]">
          <a href="#demo" className="glow-card relative block aspect-video overflow-hidden rounded-2xl">
            <video
              ref={videoRef}
              className="size-full object-cover"
              src="/videos/demo-mid.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </a>
          <button
            type="button"
            onClick={togglePlay}
            aria-label={playing ? "Pause background video" : "Play background video"}
            className="link-focus absolute top-3 right-3 z-10 flex size-8 items-center justify-center rounded-full bg-black/60 text-foreground backdrop-blur-sm"
          >
            {playing ? <Pause className="size-4" aria-hidden="true" /> : <Play className="size-4" aria-hidden="true" />}
          </button>
          <div className="canvas-caption">
            <span>Screela — live board</span>
            <a href="#demo" className="link-focus transition-colors group-hover:text-foreground">
              See it in action &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useRef, useState } from "react"
import { Pause, Play } from "lucide-react"
import { WaitlistForm } from "@/components/waitlist-form"
import { Button } from "@/components/ui/button"

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)

  function toggleVideo() {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      video.play()
      setIsPlaying(true)
    } else {
      video.pause()
      setIsPlaying(false)
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
          <div className="glow-card relative aspect-video w-full overflow-hidden rounded-2xl bg-black/40">
            <video
              ref={videoRef}
              className="size-full object-cover object-top"
              poster="/hero-board.png"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src="/hero-demo.webm" type="video/webm" />
              <source src="/hero-demo.mp4" type="video/mp4" />
            </video>
          </div>
          <button
            type="button"
            onClick={toggleVideo}
            aria-label={isPlaying ? "Pause background video" : "Play background video"}
            className="link-focus absolute top-3 right-3 z-10 flex size-8 items-center justify-center rounded-full bg-black/60 text-foreground backdrop-blur-sm"
          >
            {isPlaying ? (
              <Pause className="size-4" aria-hidden="true" />
            ) : (
              <Play className="size-4" aria-hidden="true" />
            )}
          </button>
          <div className="mt-4 flex items-center justify-between rounded-2xl bg-accent-2 px-5 py-3">
            <span className="text-sm font-medium text-white">Screela — live board</span>
            <Button asChild size="lg" className="h-10 shrink-0 animate-cta-pulse">
              <a href="https://app.screela.com/s/board/a40fd611-61dc-4861-b307-ac8ff9f1b373" target="_blank" rel="noopener noreferrer">See it in action &rarr;</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

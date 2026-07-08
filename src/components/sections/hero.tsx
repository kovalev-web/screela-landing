"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check, Loader2 } from "lucide-react"

export function Hero() {
  const [email, setEmail] = React.useState("")
  const [status, setStatus] = React.useState<"idle" | "loading" | "success">("idle")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus("loading")
    // TODO: connect to waitlist API
    await new Promise((r) => setTimeout(r, 1000))
    setStatus("success")
  }

  return (
    <section className="relative overflow-x-hidden px-4 pb-16 pt-20 sm:px-6 sm:pb-16 sm:pt-24 lg:pt-28">
      <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '28px 28px', maskImage: 'linear-gradient(to bottom, black 0%, black 50%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 50%, transparent 100%)' }} />
      <div className="absolute top-[-15%] left-0 right-0 flex justify-center">
        <div className="size-[700px] rounded-full bg-slate-400/20 blur-[100px] animate-float-slow" />
      </div>
      <div className="absolute top-[-5%] right-0">
        <div className="size-[400px] rounded-full bg-slate-400/15 blur-[80px] animate-float-slower" />
      </div>

      <div className="mx-auto max-w-6xl relative">
        <div className="mx-auto max-w-5xl text-center">
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-4 py-1.5 text-xs text-zinc-400 ring-1 ring-white/10">
              <span className="size-1.5 rounded-full bg-emerald-400" />
              Almost beta
            </span>
          </div>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl leading-[1.1]">
            Competitor UX research without the screenshot{" "}
            {"chaos".split("").map((letter, i) => (
              <span
                key={i}
                className={letter === "o" ? "inline-block" : "animate-mirror inline-block"}
                style={{ animationDelay: letter === "o" ? undefined : `${[0, 0.8, 0.3, 0, 0.5][i]}s` }}
              >
                {letter}
              </span>
            ))}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:mt-6 sm:text-lg lg:text-xl max-w-xl sm:max-w-2xl mx-auto">
            Screela records entire user flows — onboarding, checkout, pricing — as full-page screenshots with one keyboard shortcut. Every step lands on an infinite board, in order, with the source URL and timestamp attached. Desktop and mobile, side by side.
          </p>

          {status === "success" ? (
            <div className="mt-8 flex items-center justify-center gap-2 text-emerald-400">
              <Check className="size-5" />
              <span className="text-sm font-medium">You&rsquo;re on the list. We&rsquo;ll be in touch.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex justify-center">
              <div className="flex w-full max-w-md flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={status === "loading"}
                  className="h-10 min-w-0 flex-1 bg-white/5 border-white/10 focus:border-slate-400/40 focus:ring-slate-400/20 disabled:opacity-50"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="h-10 shrink-0"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <Loader2 className="size-4 animate-spin" />
                  ) : (
                    "Get early access"
                  )}
                </Button>
              </div>
            </form>
          )}

          <p className="mt-3 text-sm text-zinc-500">
            Free while in beta. Chrome extension + web board.
          </p>
        </div>

        <div className="relative mt-16 mx-auto max-w-6xl rounded-2xl overflow-hidden glow-card border border-white/5">
          <video
            className="size-full object-cover"
            src="/videos/demo.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        <div className="mt-8 flex justify-center">
          <Button variant="outline" size="lg" asChild>
            <a href="#demo">See a live board &rarr;</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

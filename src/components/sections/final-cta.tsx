"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check, Loader2 } from "lucide-react"

export function FinalCTA() {
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
    <section className="relative overflow-hidden border-t border-white/5 px-4 py-10 text-center sm:px-6 sm:py-16">
      <div className="absolute top-[-30%] left-0 right-0 flex justify-center">
        <div className="size-[700px] rounded-full bg-slate-400/20 blur-[80px] animate-float-slow" />
      </div>

      <div className="mx-auto max-w-2xl relative">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Your next audit could take an hour, not&nbsp;a&nbsp;day
        </h2>

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
      </div>
    </section>
  )
}

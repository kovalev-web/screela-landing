"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check, Loader2 } from "lucide-react"

export function WaitlistForm({
  id,
  justifyClassName = "justify-center",
}: {
  id: string
  justifyClassName?: string
}) {
  const [email, setEmail] = React.useState("")
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle")
  const inputId = `${id}-email`

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus("loading")
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error("Request failed")
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  return (
    <div role="status" aria-live="polite">
      {status === "success" ? (
        <div className={`mt-8 flex items-center ${justifyClassName} gap-2 text-success`}>
          <Check className="size-5" aria-hidden="true" />
          <span className="text-sm font-medium">You&rsquo;re on the list. We&rsquo;ll be in touch.</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={`mt-8 flex ${justifyClassName}`}>
          <div className="flex w-full max-w-md flex-col gap-2">
            <div className="flex flex-row gap-3">
              <label htmlFor={inputId} className="sr-only">
                Email address
              </label>
              <Input
                id={inputId}
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={status === "loading"}
                className="h-10 min-w-0 flex-1 border-transparent bg-white/5 text-base placeholder:text-muted-foreground disabled:opacity-50 md:text-base"
              />
              <Button
                type="submit"
                size="lg"
                className="h-10 shrink-0"
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                    <span className="sr-only">Submitting&hellip;</span>
                  </>
                ) : (
                  "Get early access"
                )}
              </Button>
            </div>
            {status === "error" && (
              <p className="text-sm text-destructive">Something went wrong. Please try again.</p>
            )}
          </div>
        </form>
      )}
    </div>
  )
}

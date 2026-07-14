"use client"

import * as React from "react"
import { useWaitlistSubmit } from "@/hooks/use-waitlist-submit"
import { Check, ChevronRight, Loader2 } from "lucide-react"

export function WaitlistForm({
  id,
  justifyClassName = "justify-center",
}: {
  id: string
  justifyClassName?: string
}) {
  const [email, setEmail] = React.useState("")
  const { status, submit } = useWaitlistSubmit()
  const inputId = `${id}-email`

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    submit(email)
  }

  return (
    <div role="status" aria-live="polite">
      {status === "success" ? (
        <div className={`flex h-[58px] items-center ${justifyClassName} gap-2 text-success`}>
          <Check className="size-5" aria-hidden="true" />
          <span className="text-base font-medium">You&rsquo;re on the list. We&rsquo;ll be in touch.</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className={`flex ${justifyClassName}`}>
          <div className="flex w-full max-w-[472px] flex-col gap-2">
            {/* stacks below 514px instead of the default sm breakpoint */}
            <div className="flex flex-col gap-3 min-[514px]:flex-row min-[514px]:items-center min-[514px]:gap-5">
              <label htmlFor={inputId} className="sr-only">
                Email address
              </label>
              <input
                id={inputId}
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={status === "loading"}
                className="h-[58px] w-full min-w-0 shrink-0 rounded-[16px] border border-black bg-card px-5 text-base text-white placeholder:text-text-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 disabled:opacity-50 min-[514px]:w-auto min-[514px]:flex-1"
              />
              <button
                type="submit"
                className="btn-accent h-[54px] shrink-0 self-start max-[513px]:w-full min-[514px]:self-auto"
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                    <span className="sr-only">Submitting&hellip;</span>
                  </>
                ) : (
                  <>
                    Get early access
                    <ChevronRight className="size-4" strokeWidth={2.5} aria-hidden="true" />
                  </>
                )}
              </button>
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

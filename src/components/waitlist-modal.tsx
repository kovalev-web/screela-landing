"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"
import { useWaitlistSubmit } from "@/hooks/use-waitlist-submit"
import { Check, Loader2 } from "lucide-react"

export function WaitlistModal({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const [email, setEmail] = React.useState("")
  const { status, submit } = useWaitlistSubmit()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    submit(email)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="rounded-2xl p-6 sm:max-w-sm sm:p-8">
        {status === "success" ? (
          <div className="flex flex-col items-center gap-2 py-4 text-center">
            <Check className="size-6 text-success" aria-hidden="true" />
            <p className="text-sm font-medium text-foreground">You&rsquo;re on the list.</p>
            <p className="text-sm text-muted-foreground">We&rsquo;ll email you the moment the beta opens.</p>
          </div>
        ) : (
          <>
            <DialogTitle className="text-h3-lg">Get early access</DialogTitle>
            <DialogDescription className="text-body mt-2 text-muted-foreground">
              Leave your email and we&rsquo;ll let you know the moment the beta opens.
            </DialogDescription>

            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-2">
              <label htmlFor="modal-email" className="sr-only">
                Email address
              </label>
              <Input
                id="modal-email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoFocus
                disabled={status === "loading"}
                className="h-10 border-transparent bg-white/5 text-base placeholder:text-muted-foreground disabled:opacity-50 md:text-base"
              />
              <Button type="submit" size="lg" className="h-10 w-full" disabled={status === "loading"}>
                {status === "loading" ? (
                  <>
                    <Loader2 className="size-4 animate-spin" aria-hidden="true" />
                    <span className="sr-only">Submitting&hellip;</span>
                  </>
                ) : (
                  "Notify me"
                )}
              </Button>
              {status === "error" && (
                <p className="text-sm text-destructive">Something went wrong. Please try again.</p>
              )}
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}

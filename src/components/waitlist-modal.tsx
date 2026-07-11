"use client"

import * as React from "react"
import { Dialog } from "radix-ui"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useWaitlistSubmit } from "@/hooks/use-waitlist-submit"
import { Check, Loader2, X } from "lucide-react"

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
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <Dialog.Content className="glow-card fixed top-1/2 left-1/2 z-50 w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-background p-6 sm:p-8 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95">
          <Dialog.Close className="link-focus absolute top-4 right-4 flex size-7 items-center justify-center rounded-full text-muted-foreground hover:text-foreground">
            <X className="size-4" aria-hidden="true" />
            <span className="sr-only">Close</span>
          </Dialog.Close>

          {status === "success" ? (
            <div className="flex flex-col items-center gap-2 py-4 text-center">
              <Check className="size-6 text-success" aria-hidden="true" />
              <p className="text-sm font-medium text-foreground">You&rsquo;re on the list.</p>
              <p className="text-sm text-muted-foreground">We&rsquo;ll email you the moment the beta opens.</p>
            </div>
          ) : (
            <>
              <Dialog.Title className="text-h3-lg">Get early access</Dialog.Title>
              <Dialog.Description className="text-body mt-2 text-muted-foreground">
                Leave your email and we&rsquo;ll let you know the moment the beta opens.
              </Dialog.Description>

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
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

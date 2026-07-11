"use client"

import * as React from "react"

export function useWaitlistSubmit() {
  const [status, setStatus] = React.useState<"idle" | "loading" | "success" | "error">("idle")

  async function submit(email: string) {
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

  return { status, submit }
}

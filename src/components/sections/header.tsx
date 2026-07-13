"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { WaitlistModal } from "@/components/waitlist-modal"

export function Header() {
  const [scrolled, setScrolled] = React.useState(false)
  const [modalOpen, setModalOpen] = React.useState(false)

  React.useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 p-4">
      <div
        className={`mx-auto flex h-10 sm:h-12 max-w-[1000px] items-center justify-between rounded-full px-4 sm:px-5 backdrop-blur-lg transition-colors duration-300 ${
          scrolled ? "bg-black/30" : "bg-black/90"
        }`}
      >
        <Link href="/" className="link-focus flex items-center text-sm font-semibold tracking-tight text-foreground">
          <img src="/logo.svg" alt="" width={20} height={20} className="mr-[6px]" />
          Screela
        </Link>
        <div className="flex items-center gap-3 sm:gap-5">
          <nav className="hidden sm:flex items-center gap-3 sm:gap-5 text-xs sm:text-sm text-muted-foreground">
            <Link href="#how-it-works" className="link-focus hover:text-foreground transition-colors whitespace-nowrap">
              How it works
            </Link>
            <Link href="#features" className="link-focus hover:text-foreground transition-colors whitespace-nowrap">
              Features
            </Link>
            <Link href="#faq" className="link-focus hover:text-foreground transition-colors whitespace-nowrap">
              FAQ
            </Link>
          </nav>
          <div
            className={`overflow-hidden transition-[max-width,opacity] duration-300 ${
              scrolled ? "max-w-[160px] opacity-100" : "pointer-events-none max-w-0 opacity-0"
            }`}
          >
            <Button size="sm" onClick={() => setModalOpen(true)}>
              Get access
            </Button>
          </div>
        </div>
      </div>
      <WaitlistModal open={modalOpen} onOpenChange={setModalOpen} />
    </header>
  )
}

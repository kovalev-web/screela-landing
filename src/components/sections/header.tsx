"use client"

import * as React from "react"
import Link from "next/link"
import { Logo } from "@/components/logo"
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
    <header className="fixed inset-x-0 top-0 z-50 px-5 pt-4 sm:px-8">
      <div
        className={`section-container flex h-12 items-center justify-between rounded-2xl px-4 backdrop-blur-lg transition-colors duration-300 sm:h-[57px] sm:px-[30px] ${
          scrolled ? "bg-surface-2/80" : "bg-surface-2"
        }`}
      >
        <Link
          href="/"
          className="link-focus flex items-center gap-1.5 text-base font-semibold tracking-[-0.02em] text-text-soft transition-colors hover:text-white"
        >
          <Logo className="size-5 shrink-0" />
          <span className="max-[430px]:hidden">Screela</span>
        </Link>
        <div className="flex items-center gap-3 sm:gap-6">
          <nav className="flex items-center gap-3 text-xs font-semibold tracking-[-0.02em] text-text-soft sm:gap-[26px] sm:text-base">
            <Link href="#how-it-works" className="link-focus whitespace-nowrap transition-colors hover:text-white">
              How it works
            </Link>
            <Link href="#features" className="link-focus whitespace-nowrap transition-colors hover:text-white">
              Features
            </Link>
            <Link href="#faq" className="link-focus whitespace-nowrap transition-colors hover:text-white">
              FAQ
            </Link>
          </nav>
          <div
            className={`overflow-hidden transition-[max-width,opacity] duration-300 ${
              scrolled ? "max-w-[100px] opacity-100" : "pointer-events-none max-w-0 opacity-0"
            }`}
          >
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="btn-accent h-9 rounded-[12px] px-4 text-sm"
              style={{ boxShadow: "none" }}
            >
              Join
            </button>
          </div>
        </div>
      </div>
      <WaitlistModal open={modalOpen} onOpenChange={setModalOpen} />
    </header>
  )
}

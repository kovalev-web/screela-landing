"use client"

import * as React from "react"
import Link from "next/link"

export function Header() {
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[padding] duration-300 ${
        scrolled ? "p-0" : "p-4"
      }`}
    >
      <div
        className={`mx-auto flex h-10 sm:h-12 items-center justify-between bg-black/90 px-4 sm:px-5 backdrop-blur-md transition-[max-width,border-radius] duration-300 ${
          scrolled ? "max-w-full rounded-none" : "max-w-[1000px] rounded-full"
        }`}
      >
        <Link href="/" className="link-focus text-sm font-semibold tracking-tight text-foreground">
          Screela
        </Link>
        <nav className="flex items-center gap-3 sm:gap-5 text-xs sm:text-sm text-muted-foreground">
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
      </div>
    </header>
  )
}

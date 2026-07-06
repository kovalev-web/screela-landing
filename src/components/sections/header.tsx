import Link from "next/link"

export function Header() {
  return (
    <header className="fixed left-1/2 top-4 z-50 w-full max-w-6xl -translate-x-1/2">
      <div className="flex h-10 sm:h-12 items-center justify-between rounded-full bg-zinc-950/90 px-4 sm:px-5 backdrop-blur-xl">
        <Link href="/" className="text-sm font-semibold tracking-tight text-zinc-100">
          Screela
        </Link>
        <nav className="flex items-center gap-3 sm:gap-5 text-xs sm:text-sm text-zinc-400">
          <Link href="#how-it-works" className="hover:text-zinc-100 transition-colors whitespace-nowrap">
            How it works
          </Link>
          <Link href="#features" className="hover:text-zinc-100 transition-colors whitespace-nowrap">
            Features
          </Link>
          <Link href="#faq" className="hover:text-zinc-100 transition-colors whitespace-nowrap">
            FAQ
          </Link>
        </nav>
      </div>
    </header>
  )
}

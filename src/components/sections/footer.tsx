import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-white/5 px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-zinc-500 sm:flex-row">
        <span>&copy; {new Date().getFullYear()} Screela</span>
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <Link href="#" className="hover:text-zinc-300 transition-colors">
            Privacy
          </Link>
          <Link href="#" className="hover:text-zinc-300 transition-colors">
            Terms
          </Link>
          <a href="mailto:hello@screela.com" className="hover:text-zinc-300 transition-colors">
            hello@screela.com
          </a>
        </nav>
      </div>
    </footer>
  )
}

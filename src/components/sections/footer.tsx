import Link from "next/link"

export function Footer() {
  return (
    <footer className="px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto flex max-w-[1000px] flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <span>&copy; {new Date().getFullYear()} Screela</span>
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <a href="#demo" className="link-focus hover:text-foreground transition-colors">
            Live board
          </a>
          <Link href="/privacy" className="link-focus hover:text-foreground transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="link-focus hover:text-foreground transition-colors">
            Terms
          </Link>
          <a href="mailto:support@screela.com" className="link-focus hover:text-foreground transition-colors">
            support@screela.com
          </a>
        </nav>
      </div>
    </footer>
  )
}

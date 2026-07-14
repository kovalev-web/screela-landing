import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-surface-2 px-5 py-8 sm:px-8 lg:py-10">
      <div className="section-container flex flex-col items-center justify-between gap-4 text-lg font-light text-text-dim sm:flex-row">
        <span>&copy; {new Date().getFullYear()} Screela</span>
        <nav className="flex flex-wrap justify-center gap-4 sm:gap-[30px]">
          <a
            href="https://app.screela.com/s/board/a40fd611-61dc-4861-b307-ac8ff9f1b373"
            target="_blank"
            rel="noopener noreferrer"
            className="link-focus transition-colors hover:text-foreground"
          >
            Live board
          </a>
          <Link href="/privacy" className="link-focus transition-colors hover:text-foreground">
            Privacy
          </Link>
          <Link href="/terms" className="link-focus transition-colors hover:text-foreground">
            Terms
          </Link>
          <a href="mailto:support@screela.com" className="link-focus transition-colors hover:text-foreground">
            support@screela.com
          </a>
        </nav>
      </div>
    </footer>
  )
}

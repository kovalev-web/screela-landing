const LIVE_BOARD_URL = "https://app.screela.com/s/board/a40fd611-61dc-4861-b307-ac8ff9f1b373"

/* The payoff shot right after the workflow — the actual live board embedded
   as a non-interactive preview. The app's own header is cropped off by
   shifting the iframe up; our own "Demo board" label sits on top. The CTA
   opens the real board in a new tab. */
// app header is 60px + 1px border; extra margin so fractional-DPR rounding
// (Windows 125/150% scaling) can't leak a subpixel sliver of the border
const APP_HEADER_HEIGHT = 68

export function Result() {
  return (
    <section className="bg-[#1a1a1a]">
      {/* full-bleed board preview, edge to edge */}
      <div
        className="relative aspect-[1159/718] w-full overflow-hidden bg-black bg-cover bg-center [@media(min-width:1024px)_and_(max-width:1899px)]:aspect-[1159/539] min-[1900px]:aspect-[1159/359]"
        style={{ backgroundImage: "url(/images/redesign/result-board.png)" }}
      >
        <iframe
          src={LIVE_BOARD_URL}
          title="Screela live board preview: several captured user flows laid out side by side, desktop and mobile"
          loading="lazy"
          tabIndex={-1}
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 w-full border-0"
          style={{ top: -APP_HEADER_HEIGHT, height: `calc(100% + ${APP_HEADER_HEIGHT}px)` }}
        />

        <span className="pointer-events-none absolute inset-x-0 top-4 flex justify-center">
          <span className="rounded-lg bg-black/60 px-3 py-1 text-sm font-semibold text-white backdrop-blur-sm">
            Demo board
          </span>
        </span>

        <a
          href={LIVE_BOARD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-accent absolute bottom-4 left-1/2 h-9 -translate-x-1/2 whitespace-nowrap px-4 text-xs lg:bottom-8 lg:h-[46px] lg:px-6 lg:text-sm"
        >
          Explore the live board
        </a>
      </div>
    </section>
  )
}

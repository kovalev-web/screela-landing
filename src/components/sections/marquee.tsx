import { ArrowUpRight } from "lucide-react"

const LIVE_BOARD_URL = "https://app.screela.com/s/board/a40fd611-61dc-4861-b307-ac8ff9f1b373"

function MarqueeItem() {
  return (
    <span className="flex shrink-0 items-center gap-[30px] pr-[78px] text-lg font-light text-foreground">
      <span className="whitespace-nowrap">Screela — live board</span>
      <span className="flex items-center gap-2">
        <span className="flex items-center gap-3 whitespace-nowrap">
          <span className="size-3.5 animate-pulse rounded-full bg-live-red" aria-hidden="true" />
          See it in action
        </span>
        <ArrowUpRight className="size-5" strokeWidth={1.33} aria-hidden="true" />
      </span>
    </span>
  )
}

export function Marquee() {
  const items = Array.from({ length: 6 })
  return (
    <a
      href={LIVE_BOARD_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Screela live board — see it in action"
      className="group relative block overflow-hidden bg-card py-4 hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-inset"
    >
      {/* edge fades so items dissolve instead of hard-clipping */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[200px] max-w-[30vw] bg-gradient-to-r from-card to-transparent group-hover:from-black"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[200px] max-w-[30vw] bg-gradient-to-l from-card to-transparent group-hover:from-black"
      />
      <div className="animate-marquee flex w-max group-hover:[animation-play-state:paused]">
        {/* content twice so the -50% translate loops seamlessly */}
        <div className="flex" aria-hidden="true">
          {items.map((_, i) => (
            <MarqueeItem key={i} />
          ))}
        </div>
        <div className="flex" aria-hidden="true">
          {items.map((_, i) => (
            <MarqueeItem key={i} />
          ))}
        </div>
      </div>
    </a>
  )
}

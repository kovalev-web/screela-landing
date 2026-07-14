import { Search, Plus, EllipsisVertical } from "lucide-react"

/* Building blocks for the in-code app mockups (hero + Who it's for).
   Built as DOM layers on purpose — they'll get micro-animations later.
   Raster thumbnails live in /images/redesign/; until the files are
   dropped in, the dark placeholder background shows through. */

export function BoardThumb({
  n,
  className = "",
  style,
}: {
  n: number | null
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <div
      className={`rounded-[12px] border border-line bg-[#0d0d0d] bg-cover bg-top shadow-[0_4px_12px_rgba(0,0,0,0.4)] ${className}`}
      style={{
        ...(n !== null
          ? { backgroundImage: `url(/images/redesign/board-thumb-${n}.png)` }
          : undefined),
        ...style,
      }}
    />
  )
}

export function BoardCard({
  title,
  meta,
  thumbs,
  bright = false,
  compact = false,
  className = "",
}: {
  title: string
  meta: string
  /** thumbnail numbers, left to right; null = empty dark slot */
  thumbs: (number | null)[]
  /** Who it's for uses white titles, the hero mockup dimmed gray */
  bright?: boolean
  /** compact = narrow app-grid card: thumbs shrink and overlap tighter */
  compact?: boolean
  className?: string
}) {
  return (
    // position class comes from the caller (hero pins cards absolutely), so
    // the root carries no `relative` of its own — the inner wrapper does
    <div className={`rounded-2xl border border-line bg-panel ${className}`}>
      <div className="relative p-4 pb-3">
        <div className="relative h-[94px]">
          {/* stacked so they overlap, first on top */}
          {thumbs.map((n, i) => (
            <BoardThumb
              key={i}
              n={n}
              className="absolute"
              style={{
                left: i * (compact ? 42 : 80),
                width: compact ? 94 - i * 6 : 94,
                height: compact ? 94 - i * 6 : 94,
                top: compact ? i * 3 : 0,
                zIndex: thumbs.length - i,
              }}
            />
          ))}
        </div>
        <div className="mt-3.5">
          <div className={`truncate text-base font-medium leading-[21px] ${bright ? "text-white" : "text-text-soft"}`}>{title}</div>
          <div className="text-sm font-normal leading-[18px] text-text-faint">{meta}</div>
        </div>
        <button
          type="button"
          tabIndex={-1}
          aria-hidden="true"
          className="absolute right-2.5 top-2.5 flex size-6 items-center justify-center rounded-[6px] bg-line"
        >
          <EllipsisVertical className={`size-3 ${bright ? "text-white" : "text-text-soft"}`} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  )
}

export function SearchField({ className = "" }: { className?: string }) {
  return (
    <div className={`flex h-[38px] items-center gap-2 rounded-[12px] bg-panel px-3 ${className}`}>
      <Search className="size-4 text-[#999999]" strokeWidth={1.5} aria-hidden="true" />
      <span className="text-sm text-text-soft">Search boards...</span>
    </div>
  )
}

export function CreateBoardButton({
  bright = false,
  className = "",
}: {
  bright?: boolean
  className?: string
}) {
  return (
    <div
      className={`flex h-[38px] items-center gap-1.5 rounded-[10px] px-3.5 text-sm font-medium ${
        bright
          ? "bg-[#fafafa] text-[#18181b]"
          : "border border-text-soft/10 text-text-soft"
      } ${className}`}
    >
      <Plus className="size-4" strokeWidth={2} aria-hidden="true" />
      <span className="whitespace-nowrap">Create Board</span>
    </div>
  )
}

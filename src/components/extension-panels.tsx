import {
  ChevronDown,
  EllipsisVertical,
  ArrowRight,
  Check,
} from "lucide-react"
import { Logo } from "@/components/logo"

/* The Chrome-extension popup rebuilt in DOM for the workflow carousel —
   three states (idle, recording, finished) that swap while scrolling. */

function PanelHeader() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-9 flex-1 items-center justify-between rounded-[12px] border border-line-soft px-3">
        <span className="text-sm font-medium text-white">
          Save to: <span className="text-text-soft">SaaS Pricing Page</span>
        </span>
        <ChevronDown className="size-4 text-[#999999]" strokeWidth={1.5} aria-hidden="true" />
      </div>
      <div className="flex size-9 items-center justify-center rounded-[12px]">
        <EllipsisVertical className="size-4 text-text-soft" strokeWidth={1.5} aria-hidden="true" />
      </div>
    </div>
  )
}

function PrimaryButton({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <div
      className={`flex h-[38px] items-center justify-center gap-2 rounded-[10px] border text-sm font-medium transition-colors duration-500 ${
        active ? "border-transparent bg-[#fafafa] text-[#0a0a0a]" : "border-text-soft/10 text-text-soft"
      }`}
    >
      {label}
    </div>
  )
}

function ToggleRow({ on = true }: { on?: boolean }) {
  return (
    <div className="flex items-center justify-between text-xs text-text-soft">
      <span className="flex items-center gap-2">
        {/* off: outlined pill, gray knob left; on: light pill, dark knob right */}
        <span
          className={`flex h-[18px] w-8 items-center rounded-full border p-px transition-colors duration-500 ${
            on ? "border-transparent bg-[#e5e5e5]" : "border-text-soft/10 bg-transparent"
          }`}
        >
          <span
            className={`rounded-full transition-all duration-500 ${
              on ? "size-4 translate-x-[14px] bg-panel" : "size-3.5 translate-x-px bg-text-soft"
            }`}
          />
        </span>
        mobile
      </span>
      <span>Alt+S captures into the active flow</span>
    </div>
  )
}

function SkeletonRow({ className = "" }: { className?: string }) {
  return <div className={`h-[60px] rounded-[12px] border border-line-soft/60 bg-panel ${className}`} />
}

function FlowRow({
  name,
  sub,
  time,
  frontClass = "bg-[#383838]",
  thumb,
}: {
  name: string
  sub: string
  time: string
  frontClass?: string
  /** board-thumb number shown as the screenshot preview */
  thumb?: number
}) {
  return (
    <div className="flex h-[60px] items-center justify-between rounded-[12px] border border-line-soft bg-panel px-3">
      <div className="flex items-center gap-3">
        <div className="relative h-9 w-11 shrink-0">
          <div className="absolute left-1 top-1 h-9 w-10 rounded-[6px] bg-[#1f1f1f]" />
          <div
            className={`absolute left-0 top-0 h-9 w-10 rounded-[6px] ${frontClass} ${thumb ? "bg-cover bg-top" : ""}`}
            style={thumb ? { backgroundImage: `url(/images/redesign/board-thumb-${thumb}.png)` } : undefined}
          />
        </div>
        <div>
          <div className="text-xs font-medium leading-4 text-[#e5e5e5]">{name}</div>
          <div className="text-[10px] leading-[13px] text-text-soft">{sub}</div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-xs font-medium text-text-soft">{time}</span>
        <ArrowRight className="size-4 text-text-soft" strokeWidth={1.5} aria-hidden="true" />
      </div>
    </div>
  )
}

function PanelShell({ children }: { children: React.ReactNode }) {
  return (
    <div aria-hidden="true" className="flex w-full max-w-[329px] flex-col gap-4 rounded-2xl bg-card p-4">
      {children}
    </div>
  )
}

/* idle-scroll state: `active` switches the mobile toggle on and lights the button */
export function ExtensionStep1({ active = false }: { active?: boolean }) {
  return (
    <PanelShell>
      <PanelHeader />
      <PrimaryButton label="Start Flow" active={active} />
      <ToggleRow on={active} />
      {/* only 2 slots on mobile to keep the carousel short */}
      <div className="flex flex-col gap-2">
        <SkeletonRow />
        <SkeletonRow className="opacity-70" />
        <SkeletonRow className="opacity-40 max-lg:hidden" />
        <SkeletonRow className="opacity-40 max-lg:hidden" />
        <SkeletonRow className="opacity-40 max-lg:hidden" />
      </div>
    </PanelShell>
  )
}

/* idle-scroll state: `filled` swaps the empty slots for captured screenshots,
   staggered so they appear one after another */
export function ExtensionStep2({ filled = false }: { filled?: boolean }) {
  const captures = [
    { name: "slack.com", sub: "4 steps · desktop + mobile", time: "04:58", thumb: 1 },
    { name: "app.screela.com", sub: "1 steps · desktop + mobile", time: "03:34", thumb: 2 },
    { name: "claude.com", sub: "2 steps · desktop", time: "02:14", thumb: 5 },
    { name: "openai.com", sub: "4 steps · desktop + mobile", time: "02:05", thumb: 6 },
  ]
  return (
    <PanelShell>
      <PanelHeader />
      <div className="flex h-12 items-center justify-between rounded-[12px] bg-panel px-3">
        <span className="text-xs font-bold text-[#e5e5e5]">app.screela.com + mobile</span>
        <span className="flex h-6 items-center gap-1.5 rounded-[6px] bg-[#242424] px-3 text-xs font-medium text-[#ff6467]">
          <span className="size-2.5 rounded-[3px] bg-[#ff6467]" />
          Stop
        </span>
      </div>
      <PrimaryButton label="Save Screenshot" active />
      <div className="text-center text-xs text-text-soft">or press Alt+S</div>
      <div className="flex flex-col gap-2">
        {captures.map((c, i) => (
          // only the first slot stays on mobile
          <div key={i} className={`grid ${i > 0 ? "max-lg:hidden" : ""}`}>
            <div
              className={`col-start-1 row-start-1 transition-opacity duration-500 ${filled ? "opacity-0" : ""}`}
              style={{
                transitionDelay: `${i * 200}ms`,
                ...(filled ? {} : { opacity: [1, 0.7, 0.4, 0.3][i] }),
              }}
            >
              <SkeletonRow />
            </div>
            <div
              className={`col-start-1 row-start-1 transition-opacity duration-500 ${filled ? "opacity-100" : "opacity-0"}`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <FlowRow name={c.name} sub={c.sub} time={c.time} thumb={c.thumb} />
            </div>
          </div>
        ))}
      </div>
    </PanelShell>
  )
}

/* idle-scroll state: `dimmed` fades every captured slot except the first */
export function ExtensionStep3({ dimmed = false }: { dimmed?: boolean }) {
  return (
    <PanelShell>
      <PanelHeader />
      <PrimaryButton label="Start Flow" active />
      <ToggleRow />
      <div className="flex flex-col gap-2">
        <FlowRow name="slack.com" sub="4 steps · desktop + mobile" time="04:58" thumb={1} />
        {[
          { name: "app.screela.com", sub: "1 steps · desktop + mobile", time: "03:34", thumb: 2 },
          { name: "claude.com", sub: "2 steps · desktop", time: "02:14", thumb: 5 },
          { name: "openai.com", sub: "4 steps · desktop + mobile", time: "02:05", thumb: 6 },
          { name: "v0.app", sub: "2 steps · desktop", time: "01:27", thumb: 7 },
        ].map((f, i) => (
          // only 2 slots on mobile to keep the carousel short
          <div
            key={i}
            className={`transition-opacity duration-500 ${dimmed ? "opacity-25" : "opacity-100"} ${
              i > 0 ? "max-lg:hidden" : ""
            }`}
          >
            <FlowRow name={f.name} sub={f.sub} time={f.time} thumb={f.thumb} />
          </div>
        ))}
      </div>
    </PanelShell>
  )
}

/* Logo card + status badge (bottom-left of the workflow text column):
   red = armed, blue with a dot = recording, green check = finished flow */
export function StepStatusIcon({ step }: { step: number }) {
  return (
    <div aria-hidden="true" className="relative size-[70px] rounded-2xl bg-card">
      <Logo className="absolute left-[13px] top-[13px] size-[45px] text-text-soft" />
      {/* 25x25 badge, r10, 3px outside stroke in the card color, flush to the corner */}
      <span
        className={`absolute bottom-0 right-0 box-content flex size-[25px] items-center justify-center rounded-[13px] border-[3px] border-card transition-colors duration-300 ${
          step === 0 ? "bg-[#ff6467]" : step === 1 ? "bg-[#2f58ff]" : "bg-[#2aa232]"
        }`}
      >
        {step === 1 && <span className="size-[13px] rounded-full bg-[#d9d9d9]" />}
        {step === 2 && <Check className="size-3 text-white" strokeWidth={2.5} />}
      </span>
    </div>
  )
}

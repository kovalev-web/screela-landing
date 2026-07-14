import { WaitlistForm } from "@/components/waitlist-form"
import { BoardCard, SearchField, CreateBoardButton } from "@/components/mockup"

/* Layered board-app mockup (left side of the hero). Positions mirror the
   Figma frame "main picture for animation" — kept as separate DOM layers
   so the cards/skeletons can be animated individually later. */
function HeroBoardMockup() {
  return (
    <div
      aria-hidden="true"
      className="relative h-[838px] w-[351px] rounded-[20px] border border-[#2a2a2a] bg-card"
    >
      {/* toolbar */}
      <div className="absolute left-3.5 top-3.5 flex w-[323px] items-center gap-3">
        <SearchField className="w-[170px]" />
        <CreateBoardButton className="flex-1" />
      </div>

      {/* skeleton slots */}
      <div className="absolute left-3.5 top-[259px] h-[179px] w-[323px] rounded-2xl bg-panel/40" />
      <div className="absolute left-3.5 top-[452px] h-[179px] w-[323px] rounded-2xl bg-panel/40" />
      <div className="absolute left-3.5 top-[645px] h-[179px] w-[323px] rounded-2xl bg-panel/40" />

      {/* board cards — offset over the slots, mid-animation look */}
      <BoardCard
        title="Components part"
        meta="19 shots, 9 flows"
        thumbs={[1, 2, 3]}
        className="absolute left-3.5 top-[66px] w-[323px]"
      />
      <BoardCard
        title="Inspiration part"
        meta="2 shots, 1 flow"
        thumbs={[4, 5, 6]}
        className="absolute left-[54px] top-[259px] w-[323px] shadow-[0_16px_64px_rgba(0,0,0,0.55)]"
      />
      <BoardCard
        title="Landing refs"
        meta="2 shots, 1 flow"
        thumbs={[7, 8, 9]}
        className="absolute -left-[25px] top-[452px] w-[323px] shadow-[0_16px_64px_rgba(0,0,0,0.55)]"
      />
      <BoardCard
        title="Inspiration part"
        meta="2 shots, 1 flow"
        thumbs={[10, 11, 12]}
        className="absolute left-[54px] top-[645px] w-[323px] shadow-[0_16px_64px_rgba(0,0,0,0.55)]"
      />
    </div>
  )
}

export function Hero() {
  return (
    <section className="bg-dots relative overflow-hidden bg-background px-5 pt-24 sm:px-8 lg:h-[878px] lg:pt-[117px]">
      <div className="section-container grid gap-10 lg:grid-cols-[351px_1fr] lg:gap-[110px]">
        <div className="order-2 justify-self-center max-lg:h-[480px] max-lg:overflow-hidden max-lg:[mask-image:linear-gradient(to_bottom,black_65%,transparent)] lg:order-1">
          <HeroBoardMockup />
        </div>

        <div className="order-1 lg:order-2 lg:max-w-[698px]">
          <h1 className="text-display">
            Competitor <span className="text-[#6a6a6a]">UX research</span> without the screenshot chaos
          </h1>
          <p className="text-body-lede mt-6 text-foreground lg:mt-10">
            Screela records entire user flows, like a competitor&apos;s onboarding or checkout, as
            full-page screenshots with one shortcut. Steps land on an infinite board in order,
            desktop and mobile side by side.
          </p>

          <div className="mt-8 lg:mt-[79px]">
            <WaitlistForm id="hero" justifyClassName="justify-start" />
            <p className="mt-4 text-lg font-light text-text-dim">
              Free while in beta. Chrome extension + web board
            </p>
          </div>
        </div>
      </div>

      {/* bottom fade over the cut-off mockup */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[82px] bg-gradient-to-b from-transparent to-background"
      />
    </section>
  )
}

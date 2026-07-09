import { WaitlistForm } from "@/components/waitlist-form"

export function Hero() {
  return (
    <section className="relative overflow-x-hidden px-4 pb-6 pt-20 sm:px-6 sm:pb-12 sm:pt-24 lg:pt-28">
      <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '28px 28px', maskImage: 'linear-gradient(to bottom, black 0%, black 50%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 50%, transparent 100%)' }} />
      <div className="absolute top-[-15%] left-0 right-0 flex justify-center">
        <div
          className="size-[700px] rounded-full blur-[100px] animate-float-slow"
          style={{ background: 'radial-gradient(circle, rgba(148,163,184,0.25) 0%, var(--color-background) 70%)' }}
        />
      </div>
      <div className="absolute top-[-5%] right-0">
        <div
          className="size-[400px] rounded-full blur-[80px] animate-float-slower"
          style={{ background: 'radial-gradient(circle, rgba(148,163,184,0.25) 0%, var(--color-background) 70%)' }}
        />
      </div>

      <div className="mx-auto max-w-6xl relative">
        <div className="mx-auto max-w-5xl text-left sm:text-center">
          <div className="flex justify-start sm:justify-center mb-6">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-4 py-1.5 text-xs text-zinc-400 ring-1 ring-white/10">
              <span className="size-1.5 rounded-full bg-emerald-400" />
              Almost beta
            </span>
          </div>

          <h1 className="text-display">
            Competitor UX research without the screenshot{" "}
            {"chaos".split("").map((letter, i) => (
              <span
                key={i}
                className={letter === "o" ? "inline-block" : "animate-mirror inline-block"}
                style={{ animationDelay: letter === "o" ? undefined : `${[0, 0.8, 0.3, 0, 0.5][i]}s` }}
              >
                {letter}
              </span>
            ))}
          </h1>
          <p className="text-body-lede mt-4 text-zinc-400 sm:mt-6 max-w-xl sm:max-w-2xl sm:mx-auto">
            Screela records entire user flows, like a competitor's onboarding or checkout, as full-page screenshots with one shortcut. Steps land on an infinite board in order, desktop and mobile side by side.
          </p>

          <WaitlistForm id="hero" justifyClassName="justify-start sm:justify-center" />

          <p className="mt-3 text-sm text-zinc-400">
            Free while in beta. Chrome extension + web board.
          </p>
        </div>

        <a
          href="#demo"
          className="group relative mt-16 mx-auto flex aspect-video max-w-6xl items-center justify-center overflow-hidden rounded-2xl border border-white/5 glow-card transition-colors hover:border-white/15"
          style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)', backgroundSize: '28px 28px', backgroundColor: '#1a1a1a' }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="size-[500px] rounded-full blur-[80px] animate-float-slow"
              style={{ background: 'radial-gradient(circle, rgba(148,163,184,0.25) 0%, var(--color-background) 70%)' }}
            />
          </div>
          <div className="relative text-center">
            <svg className="mx-auto size-14 mb-3 text-zinc-600 transition-colors group-hover:text-zinc-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
            <span className="text-sm text-zinc-400">Video placeholder: Screela in action</span>
            <span className="mt-2 block text-sm font-medium text-zinc-300 transition-colors group-hover:text-white">
              See a live board &rarr;
            </span>
          </div>
        </a>
      </div>
    </section>
  )
}

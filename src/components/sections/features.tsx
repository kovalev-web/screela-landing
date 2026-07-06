const features = [
  {
    title: "Full-page capture that actually works",
    text: "Sticky elements, modals, lazy-loaded content: the edge cases other tools get wrong.",
  },
  {
    title: "Desktop + mobile in one flow",
    text: "Two tracks, same steps, one board. See how they adapt the pattern.",
  },
  {
    title: "Context on every screenshot",
    text: "Source URL, page title, capture time. Cite your findings, don't just show them.",
  },
  {
    title: "One board per audit",
    text: "Infinite canvas with zones per competitor. Compare patterns side by side.",
  },
  {
    title: "Copy to Figma",
    text: "Take any flow straight into your workspace.",
  },
  {
    title: "Share a read-only link",
    text: "Send a flow or the whole board to your team or client. No login needed.",
  },
]

export function Features() {
  return (
    <section id="features" className="relative overflow-x-hidden px-4 py-10 sm:px-6 sm:py-16 scroll-mt-10">
      <div className="mx-auto max-w-6xl relative">
        <h2 className="text-center text-3xl font-semibold tracking-tight sm:text-4xl">
          Built for competitive UX audits, not screenshot hoarding
        </h2>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="glow-card relative rounded-2xl bg-zinc-900/60 p-6 sm:p-8 border border-white/5 overflow-hidden">
              <h3 className="text-lg font-semibold tracking-tight">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  title,
  text,
  className = "",
  children,
}: {
  title: string
  text: string
  className?: string
  children?: React.ReactNode
}) {
  return (
    <div className={`flex flex-col rounded-2xl bg-card p-6 sm:p-[30px] ${className}`}>
      <h3 className="text-h3 max-w-[480px]">{title}</h3>
      <p className="text-body mt-3 max-w-[480px] text-text-dim lg:mt-4">{text}</p>
      {children}
    </div>
  )
}

export function Features() {
  return (
    <section id="features" className="section-band scroll-mt-10 bg-background">
      <div className="section-container">
        <span className="text-eyebrow">Features</span>
        <h2 className="text-h2 max-w-[900px]">
          Built for competitive UX audits, not screenshot hoarding
        </h2>

        <div className="mt-8 grid gap-3 lg:mt-[50px] lg:grid-cols-3 lg:gap-5">
          {/* flagship card with the lossless-copy illustration */}
          <FeatureCard
            title="Copy to Figma"
            text="Take any flow straight into your workspace. Long full-page screenshots arrive at full resolution — not the blurry mush you get pasting long captures by hand."
            className="overflow-hidden lg:col-span-2 lg:row-span-2"
          >
            {/* bleeds past the card bottom and gets cropped, as in the mockup */}
            <img
              src="/images/redesign/copy-figma-v2.png"
              alt="Two long screenshots side by side: blurry after a manual paste on the left, pixel-sharp after copying from Screela on the right"
              className="-mb-[80px] mt-6 w-full max-w-[520px] self-start lg:-mb-[120px] lg:mt-auto lg:pt-6"
            />
          </FeatureCard>

          <FeatureCard
            title="Desktop + mobile in one flow"
            text="Two tracks, same steps, one board. See how they adapt the pattern."
          />
          <FeatureCard
            title="Context on every screenshot"
            text="Source URL, page title, capture time. Cite your findings, don't just show them."
          />
          <FeatureCard
            title="Full-page capture, done right"
            text="Sticky headers, modals, lazy-loaded content: exactly where most other tools break."
          />
          <FeatureCard
            title="One board per audit"
            text="Infinite canvas with zones per competitor. Compare patterns side by side."
          />
          <FeatureCard
            title="Share a read-only link"
            text="Send a flow or the whole board to your team or client. No login needed."
          />
        </div>
      </div>
    </section>
  )
}

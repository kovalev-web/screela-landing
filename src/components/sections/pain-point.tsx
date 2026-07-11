import { Reveal } from "@/components/reveal"

export function PainPoint() {
  return (
    <section className="section-y relative">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <div className="glow-card accent-card group relative rounded-2xl p-6 sm:p-8 text-left">
            <p className="text-body text-muted-foreground">
              <span className="text-muted-foreground select-none">&ldquo;</span>
              You know the drill: GoFullPage, download, rename, drag into Figma, paste the URL somewhere you&apos;ll never find again. Repeat forty times. Half a day gone before the actual analysis even starts.
              <span className="text-muted-foreground select-none">&rdquo;</span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

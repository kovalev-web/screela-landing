import { Reveal } from "@/components/reveal"

export function Comparison() {
  return (
    <section className="section-y relative">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <span className="text-eyebrow text-center">Comparison</span>
          <h2 className="text-h2 text-center">
            Why not Mobbin, Miro, or GoFullPage?
          </h2>
          <p className="text-body-lede mt-4 text-muted-foreground sm:mt-6">
            Mobbin only covers famous apps, and your competitors probably aren&apos;t in it, so you&apos;d end up building the library yourself anyway. Miro works fine as a board, but you&apos;re still pasting screenshots in by hand and losing the context that made them useful in the first place. GoFullPage will grab a single page for you; it won&apos;t follow you through an entire flow.
          </p>
        </Reveal>
      </div>
    </section>
  )
}

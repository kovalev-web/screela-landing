/* "You know the drill:" — collage-style band. Absolute layout on lg mirrors
   the Figma frame; stacks vertically below that. The logo watermark is a
   container background so it never participates in layout. */
export function PainPoint() {
  return (
    <section className="overflow-x-clip bg-background px-5 py-16 sm:px-8 lg:py-20">
      <div className="section-container relative lg:h-[340px] lg:bg-[url(/images/redesign/logo-watermark.svg)] lg:bg-[length:136px_136px] lg:bg-[position:0px_203px] lg:bg-no-repeat">
        <h2 className="text-h2 lg:absolute lg:left-0 lg:top-0">You know the drill:</h2>

        <div
          aria-hidden="true"
          className="hidden lg:absolute lg:right-0 lg:top-[62px] lg:z-10 lg:block lg:size-[179px] lg:bg-contain lg:bg-center lg:bg-no-repeat"
          style={{ backgroundImage: "url(/images/redesign/drill-person.png)" }}
        />

        <p className="text-quote mt-8 max-w-[555px] lg:absolute lg:right-[283px] lg:top-[136px] lg:mt-0 lg:w-[555px]">
          GoFullPage, copy, drag into Figma, rename, paste the URL somewhere you&apos;ll never find
          again. Repeat forty times
        </p>

        <div
          aria-hidden="true"
          className="my-6 h-px w-full bg-foreground/30 lg:absolute lg:right-[14px] lg:top-[229px] lg:my-0 lg:h-0.5 lg:w-[605px]"
        />

        <p className="text-quote max-w-[417px] lg:absolute lg:right-0 lg:top-[268px] lg:text-right">
          Half a day gone before the actual analysis even starts
        </p>
      </div>
    </section>
  )
}

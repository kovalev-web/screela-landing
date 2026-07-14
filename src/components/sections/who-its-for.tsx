const personas = [
  {
    title: "Product designers",
    desc: "Doing pre-task research before touching Figma",
  },
  {
    title: "UX agencies",
    desc: "Delivering competitive audits on deadline",
  },
  {
    title: "PMs & founders",
    desc: "Mapping the competitive landscape",
  },
]

export function WhoItsFor() {
  return (
    <section className="section-band bg-surface-2">
      <div className="section-container">
        <span className="text-eyebrow">Who it&rsquo;s for</span>
        <h2 className="text-h2 max-w-[900px]">Made for people who study products for a living</h2>

        <div className="mt-10 flex flex-col gap-8 lg:mt-[60px] lg:flex-row lg:items-center lg:gap-10">
          <div className="flex shrink-0 flex-col gap-4 sm:max-lg:grid sm:max-lg:grid-cols-3 lg:w-[321px] lg:gap-5">
            {personas.map((p) => (
              <div key={p.title} className="rounded-2xl bg-card p-6 sm:p-[30px]">
                <h3 className="text-h3">{p.title}</h3>
                <p className="text-body mt-3 text-text-dim lg:mt-4">{p.desc}</p>
              </div>
            ))}
          </div>
          <img
            src="/images/redesign/who-its-for.png"
            alt="The Screela web app: a Boards screen with six audit boards, each with screenshot thumbnails, shot and flow counts"
            width={799}
            height={537}
            loading="lazy"
            decoding="async"
            className="w-full max-w-[799px] rounded-[20px]"
          />
        </div>
      </div>
    </section>
  )
}

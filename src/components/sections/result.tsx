/* Big board screenshot right after the workflow — the payoff shot.
   Placeholder until result-board.png lands in /images/redesign. */
export function Result() {
  return (
    <section className="section-band bg-[#1a1a1a]">
      <div className="section-container">
        <div
          className="aspect-[1159/718] w-full rounded-2xl bg-black bg-cover bg-center"
          style={{ backgroundImage: "url(/images/redesign/result-board.png)" }}
          role="img"
          aria-label="A finished Screela board: several captured user flows laid out side by side, desktop and mobile"
        />
      </div>
    </section>
  )
}

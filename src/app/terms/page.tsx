import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-24 sm:px-6 sm:py-28">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Terms of Service</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: July 5, 2026</p>

        <div className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground sm:text-base sm:leading-relaxed">
          <p>
            These terms cover using Screela — the web app and the &ldquo;Screela&rdquo; Chrome extension. By creating an account or installing the extension, you agree to them.
          </p>

          <h2 className="text-lg font-semibold text-foreground">The service</h2>
          <p>
            Screela lets you capture screenshots (via the extension or by uploading them yourself) and save them, with their source context, onto boards you control. It&rsquo;s provided as-is, and may change or be unavailable at times — it&rsquo;s an early-stage product, not a service with any uptime guarantee.
          </p>

          <h2 className="text-lg font-semibold text-foreground">Your account</h2>
          <p>
            You&rsquo;re responsible for keeping your password confidential and for anything that happens under your account. Tell us at the contact below if you suspect unauthorized access.
          </p>

          <h2 className="text-lg font-semibold text-foreground">Acceptable use</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Don&rsquo;t use Screela to capture, store, or share content you don&rsquo;t have the right to (e.g. content behind someone else&rsquo;s login that your access doesn&rsquo;t permit you to redistribute).</li>
            <li>Don&rsquo;t use the service to store illegal content or to abuse or harass others.</li>
            <li>Don&rsquo;t attempt to circumvent account limits, scrape the service, or interfere with its normal operation.</li>
          </ul>

          <h2 className="text-lg font-semibold text-foreground">Your content</h2>
          <p>
            You own the screenshots and notes you save. We only store and display them back to you (or to whoever you explicitly share a link with) — see the privacy policy for details. If you create a public share link for a board or flow, you&rsquo;re responsible for what that link exposes; disabling it stops new access immediately.
          </p>

          <h2 className="text-lg font-semibold text-foreground">Termination</h2>
          <p>
            You can stop using Screela and ask us to delete your account at any time. We may suspend or terminate accounts that violate the acceptable use terms above.
          </p>

          <h2 className="text-lg font-semibold text-foreground">No warranty, limitation of liability</h2>
          <p>
            Screela is provided &ldquo;as is,&rdquo; without warranties of any kind. To the extent permitted by law, we&rsquo;re not liable for indirect or consequential damages arising from your use of the service, including loss of data.
          </p>

          <h2 className="text-lg font-semibold text-foreground">Changes to these terms</h2>
          <p>
            We may update these terms as the product changes; the date above reflects the latest revision. Continuing to use Screela after a change means you accept the updated terms.
          </p>

          <h2 className="text-lg font-semibold text-foreground">Contact</h2>
          <p>
            Questions about these terms:{' '}
            <a href="mailto:support@screela.com" className="text-muted-foreground underline underline-offset-3 hover:text-foreground">support@screela.com</a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}

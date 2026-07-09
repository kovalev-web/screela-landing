import { Header } from "@/components/sections/header"
import { Footer } from "@/components/sections/footer"

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-3xl px-4 py-24 sm:px-6 sm:py-28">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Privacy Policy</h1>
        <p className="mt-2 text-sm text-zinc-400">Last updated: July 5, 2026</p>

        <div className="mt-10 space-y-6 text-sm leading-relaxed text-zinc-300 sm:text-base sm:leading-relaxed">
          <p>
            Screela (the web app and the &ldquo;Screela&rdquo; Chrome extension) saves screenshots you take, together with where they came from, onto a private board only you can see. This page explains what data that involves.
          </p>

          <h2 className="text-lg font-semibold text-zinc-100">What we collect</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Account email address and a hashed password (we never store your plain password).</li>
            <li>Screenshots you take with the extension or upload yourself, plus the page URL, page title, and time captured — the &ldquo;context&rdquo; a screenshot is saved with.</li>
            <li>Optional labels you add to a screenshot (e.g. company, pattern type) and names you give boards, zones, or flows.</li>
            <li>If you leave your email on the screela.com homepage waitlist, we store just that email and the date you submitted it.</li>
          </ul>

          <h2 className="text-lg font-semibold text-zinc-100">What the extension can access</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li><strong>Active tab:</strong> reads the current tab only when you press the capture button or its keyboard shortcut — it does not run in the background on pages you haven&rsquo;t asked it to capture.</li>
            <li><strong>Scripting:</strong> used only during a capture, to scroll a page for a full-page screenshot and to briefly hide fixed/sticky elements so they don&rsquo;t appear duplicated in the result.</li>
            <li><strong>Storage:</strong> keeps your login session and a couple of preferences (active board, active flow) on your own device.</li>
          </ul>

          <h2 className="text-lg font-semibold text-zinc-100">How we use it</h2>
          <p>
            Solely to show your screenshots back to you on your board, with their original context. We don&rsquo;t sell your data, run ads, or share it with third parties for marketing. We don&rsquo;t use analytics or tracking scripts on the app itself.
          </p>

          <h2 className="text-lg font-semibold text-zinc-100">Sharing a board or flow</h2>
          <p>
            If you explicitly create a share link for a board or flow, anyone with that link can view it without logging in, until you disable it. Nothing is shared unless you generate a link yourself.
          </p>

          <h2 className="text-lg font-semibold text-zinc-100">Storage and deletion</h2>
          <p>
            Data is stored on our own server, not a third-party data broker. You can delete individual screenshots or whole boards at any time from the app; deleting a board removes its screenshot files too. To delete your account entirely, contact us below.
          </p>

          <h2 className="text-lg font-semibold text-zinc-100">Contact</h2>
          <p>
            Questions about this policy or your data:{' '}
            <a href="mailto:support@screela.com" className="text-zinc-100 underline underline-offset-3 hover:text-zinc-300">support@screela.com</a>
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}

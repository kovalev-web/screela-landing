"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { Reveal } from "@/components/reveal"

const faqs = [
  {
    q: "Is the extension safe?",
    a: "Screela uses the minimal activeTab permission, so it can only see the tab you're on, and only when you press the shortcut. It never reads your browsing history. The extension code is open source.",
  },
  {
    q: "Do I need to install anything besides the extension?",
    a: "No. Screela is a Chrome extension plus a web board. Nothing on your desktop.",
  },
  {
    q: "Can I try it without installing?",
    a: 'Yes, explore a <a href="#demo" class="underline underline-offset-3 hover:text-foreground">live demo board</a>.',
  },
  {
    q: "What does it cost?",
    a: "Free during beta. Paid plans later; early users get a deal.",
  },
  {
    q: "Does it work behind logins?",
    a: "Yes. You browse, Screela captures. If you can see it, you can record it.",
  },
]

export function FAQ() {
  const [openItems, setOpenItems] = React.useState<string[]>([])

  function toggle(value: string) {
    setOpenItems((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    )
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a.replace(/<[^>]*>/g, ""),
      },
    })),
  }

  return (
    <section id="faq" className="section-y relative scroll-mt-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <span className="text-eyebrow text-left sm:text-center">Need to know</span>
          <h2 className="text-h2 text-left sm:text-center">
            Questions
          </h2>
        </Reveal>

        <div className="mx-auto max-w-2xl mt-8 sm:mt-14">
          {faqs.map((faq) => {
            const isOpen = openItems.includes(faq.q)
            return (
              <Collapsible
                key={faq.q}
                open={isOpen}
                onOpenChange={() => toggle(faq.q)}
                className="border-b border-white/5"
              >
                <CollapsibleTrigger asChild>
                  <button className="link-focus flex w-full items-center justify-between py-5 text-base font-medium text-left cursor-pointer group">
                    {faq.q}
                    <ChevronDown
                      aria-hidden="true"
                      className={`size-4 shrink-0 text-zinc-500 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </CollapsibleTrigger>
                <CollapsibleContent className="overflow-hidden text-sm data-open:animate-accordion-down data-closed:animate-accordion-up">
                  <div className="pb-5 text-zinc-400 leading-relaxed">
                    <p dangerouslySetInnerHTML={{ __html: faq.a }} />
                  </div>
                </CollapsibleContent>
              </Collapsible>
            )
          })}
        </div>
      </div>
    </section>
  )
}

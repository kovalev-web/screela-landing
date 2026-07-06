# Screela — лендинг: структура и копирайт

Копирайт на английском (продукт и каналы запуска англоязычные). Комментарии — курсивом по-русски.

---

## SEO-мета (`<head>`)

**Title:**

> Screela — Capture competitor user flows as full-page screenshots on one board

**Meta description:**

> Record any user flow step by step with one shortcut. Full-page screenshots, desktop + mobile, with source URL and time attached — organized on an infinite board. Built for competitive UX research.

*H1 на странице ровно один (в hero). Ключевые фразы «user flows» и «competitive UX research» — в H1 и в первом абзаце текста.*

**Open Graph / Twitter:**
> Совпадают с meta description. Type: website. Twitter card: summary_large_image.

**Favicon:**
> `src/app/favicon.svg` — буква S на тёмном фоне.

---

## 1. Hero

**H1:**

> Competitor UX research without the screenshot chaos

**Подзаголовок:**

> Screela records entire user flows — onboarding, checkout, pricing — as full-page screenshots with one keyboard shortcut. Every step lands on an infinite board, in order, with the source URL and timestamp attached. Desktop and mobile, side by side.

**CTA (пока waitlist):** кнопка `Get early access` + поле email.

**Микротекст под кнопкой:**

> Free while in beta. Chrome extension + web board.

**Вторичная CTA:** `See a live board →` — ссылка на публичную демо-доску.

**Визуал:** не статичная картинка, а видео/gif на 15–30 секунд: шорткат → шорткат → готовый флоу с коннекторами на доске.

---

## 2. Строка боли

*Сразу под hero, один абзац, без заголовка.*

> You know the drill: GoFullPage, download, rename, drag into Figma, paste the URL somewhere you'll never find again. Repeat forty times. Half a day gone before the actual analysis even starts.

---

## 3. How it works

**H2:**

> Three steps, one shortcut

*Три шага, каждый с мини-скрином:*

**Шаг 1 — Start a flow**

> Name it ("Stripe onboarding"), hit record. Optionally add a mobile track.

**Шаг 2 — Walk the product**

> Press Cmd+Shift+S on each step. Screela captures the full page — sticky headers deduplicated, modals handled, animations settled.

**Шаг 3 — Get a finished flow**

> Steps appear on your board in order, connected, numbered, with URL and time on every card. Nothing to sort, nothing to rename.

---

## 4. Features

**H2:**

> Built for competitive UX audits, not screenshot hoarding

*Шесть блоков. Каждый H3 — одновременно SEO-подзапрос.*

**H3: Full-page capture that actually works**

> Sticky elements, modals, lazy-loaded content: the edge cases other tools get wrong.

**H3: Desktop + mobile in one flow**

> Two tracks, same steps, one board. See how they adapt the pattern.

**H3: Context on every screenshot**

> Source URL, page title, capture time. Cite your findings, don't just show them.

**H3: One board per audit**

> Infinite canvas with zones per competitor. Compare patterns side by side.

**H3: Copy to Figma**

> Take any flow straight into your workspace.

**H3: Share a read-only link**

> Send a flow or the whole board to your team or client. No login needed.

---

## 5. Who it's for

**H2:**

> Made for people who study products for a living

*Три персоны одной строкой:*

> Product designers doing pre-task research · UX agencies delivering competitive audits · PMs and founders mapping the market

---

## 6. Сравнение с альтернативами

*SEO-магнит на запросы «Mobbin alternative», «Miro for UX audit» и т.п.*

**H2:**

> Why not Mobbin, Miro, or GoFullPage?

> Mobbin shows you famous apps. Your competitors aren't in any library — Screela builds yours. Miro is a great board, but you paste screenshots by hand and the context dies. GoFullPage captures one page — Screela captures the journey.

---

## 7. FAQ

**H2:**

> Questions

*Разметить schema.org FAQPage — даёт rich snippet в выдаче.*

**Is the extension safe?**

> Screela uses the minimal activeTab permission — it can only see the tab you're on, and only when you press the shortcut. It never reads your browsing history. The extension code is open source.

*Последнее предложение — только если реально откроешь код.*

**Do I need to install anything besides the extension?**

> No. Screela is a Chrome extension plus a web board. Nothing on your desktop.

**Can I try it without installing?**

> Yes — explore a live demo board. *(ссылка на демо)*

**What does it cost?**

> Free during beta. Paid plans later; early users get a deal.

**Does it work behind logins?**

> Yes — you browse, Screela captures. If you can see it, you can record it.

---

## 8. Final CTA

**H2:**

> Your next audit could take an hour, not a day

*Повтор email-формы.*

**Footer:** Privacy · Terms · contact email · ссылка на демо-доску.

---

## Два замечания

1. **Самая сильная секция — «See a live board».** Ставь ссылку на демо-доску в hero, в FAQ и в футер — это ответ на страх «не поставят расширение»: ценность видна до установки чего-либо.
2. **CTA как одна переменная в коде.** Когда откроешь регистрацию, все CTA меняются с email-формы на `Add to Chrome — free`. Структура не меняется — закладывай текст/ссылку кнопки одной константой.

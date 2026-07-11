import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://screela.com"),
  title: "Screela — Capture competitor user flows as full-page screenshots on one board",
  // When you register the site in Google Search Console via the HTML tag method,
  // paste the verification code here: verification: { google: "your-code-here" },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  description:
    "Record any user flow step by step with one shortcut. Full-page screenshots, desktop + mobile, with source URL and time attached — organized on an infinite board. Built for competitive UX research.",
  openGraph: {
    title: "Screela — Capture competitor user flows as full-page screenshots on one board",
    description:
      "Record any user flow step by step with one shortcut. Full-page screenshots, desktop + mobile, with source URL and time attached — organized on an infinite board. Built for competitive UX research.",
    type: "website",
    siteName: "Screela",
  },
  twitter: {
    card: "summary_large_image",
    title: "Screela — Capture competitor user flows as full-page screenshots on one board",
    description:
      "Record any user flow step by step with one shortcut. Full-page screenshots, desktop + mobile, with source URL and time attached — organized on an infinite board. Built for competitive UX research.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Script
          src="https://analytics.screela.com/script.js"
          data-website-id="a848bf87-2e18-44aa-a18f-7d64ccdd5d94"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
});

export const metadata: Metadata = {
  title: "Screela — Capture competitor user flows as full-page screenshots on one board",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

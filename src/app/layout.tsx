import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";

import "./globals.css";
import React from "react";

export const metadata: Metadata = {
  title: {
    default: "Abdul Rehman | Frontend Engineer",
    template: "%s | Abdul Rehman",
  },
  description:
    "Frontend Engineer building fast SaaS & AI-powered web apps. React, Next.js, Vue, dashboards, performance, and SEO-friendly UI.",
  keywords: [
    "Abdul Rehman",
    "Frontend Engineer",
    "Frontend Developer",
    "React",
    "Next.js",
    "Vue",
    "Tailwind CSS",
    "Dashboard",
    "SaaS",
    "AI web apps",
    "SEO",
    "Pakistan",
  ],
  authors: [{ name: "Abdul Rehman" }],
  openGraph: {
    title: "Abdul Rehman | Frontend Engineer",
    description:
      "Frontend Engineer building fast SaaS & AI-powered web apps. React, Next.js, Vue, dashboards, performance, and SEO-friendly UI.",
    type: "website",
  },
};

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
      <Analytics />
    </html>
  );
}

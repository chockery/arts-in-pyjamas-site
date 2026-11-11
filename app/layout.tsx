import './globals.css'
import type { Metadata } from "next";
import { Lobster, Sniglet } from "next/font/google";

const titlefont = Lobster({ subsets: ["latin"], weight: ["400"] });
const bodyfont = Sniglet({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "🌷 Bend, Twist & BLOOM - EnROOT Group 9",
  description: "See you 12 Nov, 7pm at SUTD Campus Centre!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${titlefont.className} ${bodyfont.className}`}>{children}</body>
    </html>
  );
}

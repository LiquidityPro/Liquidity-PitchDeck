import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Liquidity Pro | Pitch Deck (Seed Round)",
  description:
    "Invest, learn and connect on one platform built for Nigerian markets. Seed Round Investor Pitch Deck for Monekudiego Limited.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="h-full bg-black font-sans text-white overflow-hidden">
        {children}
      </body>
    </html>
  );
}

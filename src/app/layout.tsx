import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Liquidity | Pitch Deck (Seed Round)",
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
    <html lang="en" className={`${firaCode.variable} h-full antialiased`}>
      <body className="h-full bg-background font-sans text-foreground overflow-hidden">
        {children}
      </body>
    </html>
  );
}
